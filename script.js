let eventsData = [
    { id: 1, name: "Ждите загрузки...", platform: "Ивент-отдел UnionTeam", organizer: "-", date: "", status: "Проведен", rating: "", members: 0, callStatus: "🟡Скоро", fullDetails: { description: "под вами 4 пропа разных цветов и над вами 1 проп. вам нужно встать на цвета соответствующие пропу над вами.", tasks: "", feedback: "", rewards: "", extra: "" } },
];

let teamData = [
    { id: 1, name: "Ждите загрузки...", role: "Ивент-отдел UnionTeam", discord: "-", status: "Онлайн", eventsCount: "-", joinDate: "-", rating: "-", category: "Старший состав", fullDetails: { responsibilities: "Имеет полное владение над отделом Ивентологии, может самостоятельно изменять состав отдела Ивентологии и их норму/правила.", contacts: "https://admin.unionteams.ru/4/admin/76561198386405573", achievements: "0", notes: "" } },
];


loadTeamFromLocalStorage();
// ========== ПРОСТАЯ ЗАЩИТА (ТОЛЬКО ОЧИСТКА КОНСОЛИ) ==========
// Очищаем консоль каждые 5 секунд
setInterval(() => {
    console.clear();
}, 5000);

// ========== ОБЫЧНЫЕ ПЕРЕМЕННЫЕ (БЕЗ ЗАЩИТЫ) ==========
let currentUser = null;
let isEditor = false;

// ВСЁ! Никаких Object.defineProperty, никаких дополнительных блоков!

const CLOUDFLARE_API = 'https://event-bot-api.roman-gonchukov.workers.dev';
const COMMENTS_API_URL = 'https://script.google.com/macros/s/AKfycbxySZyEFoOV1_ftY6FLvcuUXce0H-hAqdbh_y4eT9Mr86PYz7zdajVJ4euznaZdy727/exec';

const avatarMap = {
    "Zoffi" : "https://avatars.akamai.steamstatic.com/b65685aae297d33e2263633211872decb95191b6_full.jpg",
    "Артур П" : "https://avatars.akamai.steamstatic.com/613bc9ebf037ac39219ed8f1240f6d2c8d85518b_full.jpg",
    "Тявкобай" : "https://avatars.akamai.steamstatic.com/61ab70962972708287fbe01bbf30a073e02557fb_full.jpg",
    "ki-p": "https://avatars.akamai.steamstatic.com/7c0568b92eabda5703516fa7e03ba4676d8b03e5_full.jpg",
    "T1Ran": "https://avatars.akamai.steamstatic.com/57dac1d4d44de03338708c08310198b23192ab51_full.jpg",
    "manisule": "https://avatars.akamai.steamstatic.com/3973c828510cfd75f32b6a4d09bffa642f6c975f_full.jpg",
    "Гербикс": "https://avatars.akamai.steamstatic.com/3acd2544afbc953feb4af6da64440fa4bf48618e_full.jpg",
    "Arbuz Madrazo": "https://avatars.akamai.steamstatic.com/60c2b352131f11a8bcbd08f452decd9dfea10a32_full.jpg",
    "somcop": "https://avatars.akamai.steamstatic.com/181420ae4a4f46eabd79c3b6b56e5e5e70aa4b91_full.jpg",
    "Foxy": "https://avatars.akamai.steamstatic.com/e2ae91fee516fc12a05fbfe995f52891db03c63f_full.jpg",
    "Дмитрий Морозов": "https://avatars.akamai.steamstatic.com/5a54395d65879aed3fc59787f1d9eaf21a839ff5_full.jpg",
    "Гофикал": "https://avatars.akamai.steamstatic.com/ed77d818ec20ca4aad3417f5033647f79229c92a_full.jpg",
    "Himas": "https://avatars.akamai.steamstatic.com/40ddf358c9028e084e617b8edecfdc620e5c12c9_full.jpg",
    "yaroslav1432": "https://shared.akamai.steamstatic.com/community_assets/images/items/1313140/4ae9f2b8739631ea806a9508785f0445557e9bff.gif",
    "кусочек шаурмы": "https://avatars.akamai.steamstatic.com/a350434d0216c11358393f13cf8a95bfcf1509db_full.jpg",
    "Гарик Харламовв" : "https://avatars.akamai.steamstatic.com/9dd518738e6c1db81cf5184e3ae43c2ac5150ada_full.jpg",
    "gans7824": "https://avatars.akamai.steamstatic.com/7ccb0ac2e182c765a7ddf35bb64dde75e26ddfc2_full.jpg"
};

function getAvatarUrl(username) {
    return avatarMap[username] || "https://i.imgur.com/IAIJe65.png";
}

// ========== ИМПОРТ ТИКЕТОВ ИЗ CSV ==========
async function importTicketsFromCSV(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = async function(e) {
            const content = e.target.result;
            const lines = content.split('\n');
            const headers = lines[0].split(',');
            
            // Находим индексы нужных колонок
            const steamIdIndex = headers.findIndex(h => h === 'SteamID');
            const weekAmountIndex = headers.findIndex(h => h === 'WeekAmount');
            const nameIndex = headers.findIndex(h => h === 'Name');
            
            if (steamIdIndex === -1) {
                reject(new Error('Не найдена колонка SteamID в файле'));
                return;
            }
            
            if (weekAmountIndex === -1) {
                reject(new Error('Не найдена колонка WeekAmount в файле'));
                return;
            }
            
            // Парсим данные
            const ticketsData = {};
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;
                
                const values = line.split(',');
                const steamId = values[steamIdIndex]?.trim();
                const weekAmount = parseInt(values[weekAmountIndex]) || 0;
                const name = values[nameIndex]?.trim();
                
                if (steamId && weekAmount > 0) {
                    ticketsData[steamId] = {
                        weekAmount: weekAmount,
                        name: name
                    };
                }
            }
            
            console.log('Найдено записей для обновления:', Object.keys(ticketsData).length);
            resolve(ticketsData);
        };
        
        reader.onerror = () => reject(new Error('Ошибка чтения файла'));
        reader.readAsText(file, 'UTF-8');
    });
}

// Обновление тикетов через Google Sheets API
async function updateTicketsFromImport(ticketsData) {
    showGlobalLoading();
    
    let successCount = 0;
    let failCount = 0;
    const errors = [];
    
    for (const [steamId, data] of Object.entries(ticketsData)) {
        try {
            // Сначала находим пользователя по Steam ID в команде
            const member = teamData.find(m => m.steamId === steamId);
            
            if (!member) {
                console.log(`Steam ID ${steamId} не найден в команде (${data.name})`);
                failCount++;
                errors.push(`${data.name || steamId}: не найден в команде`);
                continue;
            }
            
            // Обновляем тикеты через существующую функцию
            const result = await saveTicketsToSheet(member.name, data.weekAmount, 25, 1);
            
            if (result.success) {
                successCount++;
                showNotif(`✅ ${member.name}: ${data.weekAmount} тикетов`);
            } else {
                failCount++;
                errors.push(`${member.name}: ошибка сохранения`);
            }
            
            // Небольшая задержка между запросами
            await new Promise(r => setTimeout(r, 500));
            
        } catch (error) {
            console.error(`Ошибка обновления для ${steamId}:`, error);
            failCount++;
            errors.push(`${data.name || steamId}: ${error.message}`);
        }
    }
    
    hideGlobalLoading();
    
    // Показываем результат
    let message = `✅ Импорт завершён!\nУспешно: ${successCount}\nОшибок: ${failCount}`;
    if (errors.length > 0 && errors.length <= 5) {
        message += `\n\nОшибки:\n${errors.join('\n')}`;
    } else if (errors.length > 5) {
        message += `\n\nОшибки: ${errors.length} (первые 5):\n${errors.slice(0, 5).join('\n')}`;
    }
    
    alert(message);
    
    // Обновляем данные
    await refreshTeamData();
    await renderTicketsEditor();
}

// Создание модального окна для загрузки файла
function createImportModal() {
    const modal = document.createElement('div');
    modal.id = 'importTicketsModal';
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-card" style="max-width: 500px;">
            <div class="modal-header">
                <span>📁 Импорт тикетов из CSV</span>
                <button class="close-modal" id="closeImportModal">
                    <svg class="icon"><use href="#ic-close"/></svg>
                </button>
            </div>
            <div class="modal-body">
                <div style="text-align: center; margin-bottom: 20px;">
                    <svg class="icon" style="width: 48px; height: 48px; fill: #c9a0ff;">
                        <use href="#ic-chart"/>
                    </svg>
                </div>
                <p style="margin-bottom: 15px; text-align: center;">
                    Загрузите CSV файл с данными о тикетах.<br>
                    Файл должен содержать колонки: <strong>SteamID</strong> и <strong>WeekAmount</strong>
                </p>
                <div class="form-group">
                    <label>Выберите CSV файл</label>
                    <input type="file" id="ticketsFileInput" accept=".csv" style="padding: 10px;">
                </div>
                <button class="submit-btn" id="processImportBtn" style="margin-top: 10px;">
                    📤 Начать импорт
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие
    document.getElementById('closeImportModal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    
    // Обработка файла
    document.getElementById('processImportBtn').addEventListener('click', async () => {
        const fileInput = document.getElementById('ticketsFileInput');
        const file = fileInput.files[0];
        
        if (!file) {
            showNotif('❌ Выберите файл!', true);
            return;
        }
        
        const processBtn = document.getElementById('processImportBtn');
        processBtn.disabled = true;
        processBtn.textContent = '⏳ Обработка...';
        
        try {
            const ticketsData = await importTicketsFromCSV(file);
            await updateTicketsFromImport(ticketsData);
            modal.remove();
        } catch (error) {
            console.error('Ошибка импорта:', error);
            showNotif(`❌ Ошибка: ${error.message}`, true);
        } finally {
            processBtn.disabled = false;
            processBtn.textContent = '📤 Начать импорт';
        }
    });
}

// Показываем кнопку для креаторов
function showImportButton() {
    const importBtn = document.getElementById('importTicketsBtn');
    if (importBtn) {
        importBtn.style.display = isEditor ? 'flex' : 'none';
    }
}

// Добавляем обработчик для кнопки
function initImportButton() {
    const importBtn = document.getElementById('importTicketsBtn');
    if (importBtn) {
        importBtn.addEventListener('click', () => {
            if (!isEditor) {
                showNotif('❌ Нет доступа', true);
                return;
            }
            createImportModal();
        });
    }
}

// ========== ФУНКЦИЯ ФОРМАТИРОВАНИЯ ДАТЫ ==========
function formatDate(dateString) {
    if (!dateString) return 'Дата не указана';
    
    // Если дата уже в нормальном формате (ДД.ММ.ГГ)
    if (dateString.match(/^\d{2}\.\d{2}\.\d{2}/)) {
        return dateString;
    }
    
    // Пробуем распарсить ISO формат (2026-02-06T21:00:00.000Z)
    try {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = String(date.getFullYear()).slice(-2);
            return `${day}.${month}.${year}`;
        }
    } catch(e) {
        console.error('Ошибка парсинга даты:', e);
    }
    
    return dateString;
}

function loadComments(eventId) {
    if (commentsCache[eventId]) {
        console.log('Загружено из кеша:', eventId);
        return Promise.resolve(commentsCache[eventId]);
    }
    
    return new Promise((resolve) => {
        const callbackName = 'jsonp_callback_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            const comments = Array.isArray(data) ? data : [];
            commentsCache[eventId] = comments;
            resolve(comments);
        };
        
        script.src = `${COMMENTS_API_URL}?action=getComments&eventId=${eventId}&callback=${callbackName}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve([]);
        };
        document.body.appendChild(script);
    });
}


function addComment(eventId, userName, text) {
    return new Promise((resolve) => {
        const avatarUrl = getAvatarUrl(userName);
        const callbackName = 'jsonp_callback_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(data);
        };
        
        const params = new URLSearchParams({
            action: 'addComment',
            eventId: eventId,
            userName: userName,
            avatarUrl: avatarUrl,
            text: text,
            callback: callbackName
        });
        
        script.src = `${COMMENTS_API_URL}?${params.toString()}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve({ success: false, error: 'Network error' });
        };
        document.body.appendChild(script);
    });
}

function deleteComment(commentId, userName) {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_callback_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(data);
        };
        
        const params = new URLSearchParams({
            action: 'deleteComment',
            commentId: commentId,
            userName: userName,
            callback: callbackName
        });
        
        script.src = `${COMMENTS_API_URL}?${params.toString()}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve({ success: false, error: 'Network error' });
        };
        document.body.appendChild(script);
    });
}

async function renderCommentsSection(eventId, container) {
    
    const section = document.createElement('div');
    section.className = 'comments-section';
    section.innerHTML = `
        <div class="comments-title">
            <svg class="icon" style="fill:var(--icon-fill); width:20px; height:20px;"><use href="#ic-chat"/></svg>
            Комментарии (загрузка...)
        </div>
        <div class="comments-list" id="commentsList" style="opacity:0.6; text-align:center; padding:20px;">
            Загрузка комментариев...
        </div>
        ${currentUser ? `
        <div class="comment-form">
            <textarea class="comment-input" id="newCommentText" placeholder="Напишите комментарий..." rows="1"></textarea>
            <button class="comment-send-btn" id="sendCommentBtn">
                <svg class="icon" style="fill:#fff; width:16px; height:16px;"><use href="#ic-send"/></svg>
                Отправить
            </button>
        </div>
        ` : '<div style="color:var(--text-muted); text-align:center;">Войдите, чтобы оставить комментарий</div>'}
    `;
    
    container.appendChild(section);
    const listEl = section.querySelector('#commentsList');
    const template = document.getElementById('commentTemplate');
    
    
    const comments = await loadComments(eventId);
    
    listEl.style.opacity = '1';
    listEl.style.textAlign = 'left';
    listEl.style.padding = '0';
    listEl.innerHTML = '';
    
    if (comments.length === 0) {
        listEl.innerHTML = '<div style="color:var(--text-muted); text-align:center; padding:20px;">Пока нет комментариев</div>';
    } else {
        comments.forEach(c => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.comment-avatar').src = c.avatarUrl;
            clone.querySelector('.comment-author').textContent = c.userName;
            clone.querySelector('.comment-time').textContent = c.timestamp;
            clone.querySelector('.comment-text').textContent = c.text;
            
            const deleteBtn = clone.querySelector('.comment-delete-btn');
            
            if (currentUser && currentUser === c.userName && c.id) {
                deleteBtn.style.display = 'block';
                deleteBtn.dataset.commentId = c.id;
                deleteBtn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    if (!confirm('Удалить комментарий?')) return;
                    
                    deleteBtn.disabled = true;
                    const result = await deleteComment(c.id, currentUser);
                    
                    if (result.success) {
                        showNotif('✅ Комментарий удалён');
                        deleteBtn.closest('.comment-item').remove();
                        
                        const newCount = listEl.children.length;
                        section.querySelector('.comments-title').innerHTML = `
                            <svg class="icon" style="fill:var(--icon-fill); width:20px; height:20px;"><use href="#ic-chat"/></svg>
                            Комментарии (${newCount})
                        `;
                        
                        delete commentsCache[eventId];
                    } else {
                        showNotif('❌ ' + (result.error || 'Ошибка удаления'), true);
                    }
                    deleteBtn.disabled = false;
                });
            }
            
            listEl.appendChild(clone);
        });
    }
    
    section.querySelector('.comments-title').innerHTML = `
        <svg class="icon" style="fill:var(--icon-fill); width:20px; height:20px;"><use href="#ic-chat"/></svg>
        Комментарии (${comments.length})
    `;
    
    if (currentUser) {
        const sendBtn = section.querySelector('#sendCommentBtn');
        const textarea = section.querySelector('#newCommentText');
        
        const newSendBtn = sendBtn.cloneNode(true);
        sendBtn.parentNode.replaceChild(newSendBtn, sendBtn);
        const newTextarea = textarea.cloneNode(true);
        textarea.parentNode.replaceChild(newTextarea, textarea);
        
        newSendBtn.addEventListener('click', async () => {
            const text = newTextarea.value.trim();
            if (!text) {
                showNotif('Введите текст комментария', true);
                return;
            }
            
            newSendBtn.disabled = true;
            newSendBtn.textContent = 'Отправка...';
            
            const result = await addComment(eventId, currentUser, text);
            
            if (result.success) {
                showNotif('✅ Комментарий добавлен');
                
                const emptyMsg = listEl.querySelector('div[style*="Пока нет комментариев"]');
                if (emptyMsg) {
                    listEl.innerHTML = '';
                }
                
                const clone = template.content.cloneNode(true);
                clone.querySelector('.comment-avatar').src = getAvatarUrl(currentUser);
                clone.querySelector('.comment-author').textContent = currentUser;
                clone.querySelector('.comment-time').textContent = new Date().toLocaleString("ru-RU");
                clone.querySelector('.comment-text').textContent = text;
                
                const deleteBtn = clone.querySelector('.comment-delete-btn');
                deleteBtn.style.display = 'block';
                deleteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (!confirm('Удалить комментарий?')) return;
                    
                    deleteBtn.closest('.comment-item').remove();
                    
                    const newCount = listEl.children.length;
                    section.querySelector('.comments-title').innerHTML = `
                        <svg class="icon" style="fill:var(--icon-fill); width:20px; height:20px;"><use href="#ic-chat"/></svg>
                        Комментарии (${newCount})
                    `;
                    
                    showNotif('✅ Комментарий удалён');
                });
                
                listEl.appendChild(clone);
                
                const newCount = listEl.children.length;
                section.querySelector('.comments-title').innerHTML = `
                    <svg class="icon" style="fill:var(--icon-fill); width:20px; height:20px;"><use href="#ic-chat"/></svg>
                    Комментарии (${newCount})
                `;
                
                newTextarea.value = '';
                delete commentsCache[eventId];
                
                setTimeout(async () => {
                    const freshComments = await loadComments(eventId);
                    if (freshComments.length > 0) {
                        listEl.innerHTML = '';
                        freshComments.forEach(c => {
                            const freshClone = template.content.cloneNode(true);
                            freshClone.querySelector('.comment-avatar').src = c.avatarUrl;
                            freshClone.querySelector('.comment-author').textContent = c.userName;
                            freshClone.querySelector('.comment-time').textContent = c.timestamp;
                            freshClone.querySelector('.comment-text').textContent = c.text;
                            
                            const freshDeleteBtn = freshClone.querySelector('.comment-delete-btn');
                            if (currentUser && currentUser === c.userName && c.id) {
                                freshDeleteBtn.style.display = 'block';
                                freshDeleteBtn.addEventListener('click', async (e) => {
                                    e.stopPropagation();
                                    if (!confirm('Удалить комментарий?')) return;
                                    
                                    freshDeleteBtn.disabled = true;
                                    const delResult = await deleteComment(c.id, currentUser);
                                    
                                    if (delResult.success) {
                                        showNotif('✅ Комментарий удалён');
                                        freshDeleteBtn.closest('.comment-item').remove();
                                        
                                        const count = listEl.children.length;
                                        section.querySelector('.comments-title').innerHTML = `
                                            <svg class="icon" style="fill:var(--icon-fill); width:20px; height:20px;"><use href="#ic-chat"/></svg>
                                            Комментарии (${count})
                                        `;
                                        delete commentsCache[eventId];
                                    } else {
                                        showNotif('❌ Ошибка удаления', true);
                                    }
                                    freshDeleteBtn.disabled = false;
                                });
                            }
                            listEl.appendChild(freshClone);
                        });
                        section.querySelector('.comments-title').innerHTML = `
                            <svg class="icon" style="fill:var(--icon-fill); width:20px; height:20px;"><use href="#ic-chat"/></svg>
                            Комментарии (${freshComments.length})
                        `;
                    }
                }, 1000);
            } else {
                showNotif('❌ Ошибка отправки', true);
            }
            
            newSendBtn.disabled = false;
            newSendBtn.innerHTML = `
                <svg class="icon" style="fill:#fff; width:16px; height:16px;"><use href="#ic-send"/></svg>
                Отправить
            `;
        });
        
        newTextarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                newSendBtn.click();
            }
        });
    }
}

// ========== ЖУРНАЛ АУДИТА В DISCORD ==========


// ========== ЖУРНАЛ АУДИТА В DISCORD ==========
async function sendAuditLog(action, details, oldData = null, newData = null) {
    const username = currentUser || sessionStorage.getItem('user') || 'Неизвестный';
    const timestamp = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });
    
    let description = '';
    let color = 0x00ff00;
    
    switch(action) {
        case 'ADD_EVENT':
            description = `**➕ Добавлен новый ивент**\n\n`;
            description += `**Название:** ${details.name}\n`;
            description += `**Организатор:** ${details.organizer}\n`;
            description += `**Помощники:** ${details.helpers || 'Нет'}\n`;
            description += `**Дата:** ${details.date}\n`;
            description += `**Призовые:** ${details.rating}\n`;
            description += `**Участников:** ${details.members}\n`;
            description += `**Описание:** ${details.description?.substring(0, 200) || ''}${details.description?.length > 200 ? '...' : ''}`;
            color = 0x00ff00;
            break;
            
        case 'EDIT_EVENT':
            description = `**✏️ Изменён ивент**\n\n`;
            description += `**ID ивента:** ${details.eventId}\n`;
            description += `**Название:** ${details.name}\n\n`;
            description += `**Изменения:**\n`;
            if (oldData && newData) {
                if (oldData.name !== newData.name) description += `• Название: "${oldData.name}" → "${newData.name}"\n`;
                if (oldData.description !== newData.description) description += `• Описание: изменено\n`;
                if (oldData.date !== newData.date) description += `• Дата: "${oldData.date}" → "${newData.date}"\n`;
                if (oldData.rating !== newData.rating) description += `• Призовые: "${oldData.rating}" → "${newData.rating}"\n`;
                if (oldData.members !== newData.members) description += `• Участников: ${oldData.members} → ${newData.members}\n`;
                if (oldData.helpers !== newData.helpers) description += `• Помощники: "${oldData.helpers}" → "${newData.helpers}"\n`;
            }
            color = 0xffaa00;
            break;
            
        case 'DELETE_EVENT':
            description = `**🗑️ Удалён ивент**\n\n`;
            description += `**ID ивента:** ${details.eventId}\n`;
            description += `**Название:** ${details.name}\n`;
            description += `**Организатор:** ${details.organizer}\n`;
            description += `**Дата:** ${details.date}\n`;
            description += `**Призовые:** ${details.rating}`;
            color = 0xff4444;
            break;
            
        case 'CHANGE_STATUS':
            description = `**🔄 Изменён статус ивента**\n\n`;
            description += `**ID ивента:** ${details.eventId}\n`;
            description += `**Название:** ${details.eventName}\n`;
            description += `**Статус:** ${details.oldStatus} → ${details.newStatus}`;
            color = 0x44aaff;
            break;
            
        case 'ADD_MEMBER':
            description = `**👥 Добавлен новый участник команды**\n\n`;
            description += `**Никнейм:** ${details.name}\n`;
            description += `**Роль:** ${details.role}\n`;
            description += `**Ранг:** ${details.rating}\n`;
            description += `**Категория:** ${details.category}`;
            color = 0xaa44ff;
            break;
            
        case 'EDIT_MEMBER':
            description = `**✏️ Изменён участник команды**\n\n`;
            description += `**Никнейм:** ${details.name}\n`;
            description += `**Изменения:** ${details.changes}`;
            color = 0xffaa44;
            break;
            
        case 'DELETE_MEMBER':
            description = `**🗑️ Удалён участник команды**\n\n`;
            description += `**Никнейм:** ${details.name}\n`;
            description += `**Роль:** ${details.role}`;
            color = 0xff6666;
            break;
            
        case 'LOGIN':
            description = `**🔓 Вход в систему**\n\n`;
            description += `Пользователь **${username}** вошёл в панель управления`;
            color = 0x44ff44;
            break;
            
        case 'LOGOUT':
            description = `**🔒 Выход из системы**\n\n`;
            description += `Пользователь **${username}** вышел из панели управления`;
            color = 0xffaa44;
            break;
    }
    
    const embed = {
        title: `📋 Журнал аудита`,
        description: description,
        color: color,
        timestamp: new Date().toISOString(),
        footer: {
            text: `Действие: ${username} • ${timestamp}`
        },
        fields: [
            {
                name: "👤 Кто выполнил",
                value: username,
                inline: true
            },
            {
                name: "🕐 Время",
                value: timestamp,
                inline: true
            },
            {
                name: "📝 Тип действия",
                value: action.replace(/_/g, ' '),
                inline: true
            }
        ]
    };
    
    try {
        const response = await fetch(`${CLOUDFLARE_API}/api/audit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Key': 'unionteam_audit_secret_2025_7x9k2m4n' // Тот же ключ, что в Worker
            },
            body: JSON.stringify({
                username: 'Журнал аудита | Ивент-отдел',
                avatar_url: 'https://i.ibb.co/nNbX53Lx/i-7.webp',
                embeds: [embed]
            })
        });
        
        if (!response.ok) {
            console.error('Ошибка отправки аудит-лога:', response.status);
        }
    } catch (error) {
        console.error('Ошибка отправки в Discord Webhook:', error);
    }
}



const commentsCache = {};

const EVENTS_API_URL = COMMENTS_API_URL;

function addEventToSheet(eventData) {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_callback_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(data);
        };
        
        const params = new URLSearchParams({
            action: 'addEvent',
            name: eventData.name,
            platform: eventData.platform,
            organizer: eventData.organizer,
            helpers: eventData.helpers,
            date: eventData.date,
            status: eventData.status,
            rating: eventData.rating,
            members: eventData.members,
            description: eventData.description,
            callback: callbackName
        });
        
        script.src = `${EVENTS_API_URL}?${params.toString()}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve({ success: false, error: 'Network error' });
        };
        document.body.appendChild(script);
    });
}

function loadEventsFromSheet() {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_callback_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(Array.isArray(data) ? data : []);
        };
        
        // Используем правильный URL для ивентов
        script.src = `https://script.google.com/macros/s/AKfycbybx0X49OjyjPwT-RzuLVkPSdF2zI-33RkFj1qJW9XESJMBjCvm598GSai44oIVXWGB/exec?action=getEvents&callback=${callbackName}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve([]);
        };
        document.body.appendChild(script);
    });
}

async function refreshEventsData() {
    const events = await loadEventsFromSheet();
    console.log('Загружено ивентов из таблицы:', events);
    
    if (events.length > 0) {
        const newEventsData = events.map(e => ({
            id: e.id,
            name: e.name,
            platform: e.platform,
            organizer: e.platform,
            helpers: e.organizer || 'Нет',
            date: formatDate(e.date),  // 👈 ПРИМЕНИ ФУНКЦИЮ ЗДЕСЬ
            status: e.status || 'Проведен',
            rating: e.rating,
            members: parseInt(e.members) || 0,
            callStatus: '🟡Скоро',
            fullDetails: {
                description: e.description || '',
                tasks: '',
                feedback: '',
                rewards: '',
                extra: ''
            }
        }));
        
        newEventsData.sort((a, b) => a.id - b.id);
        eventsData = newEventsData;
        
        saveAllData();
        await loadAndApplyStatuses();
        renderEventsTable();
        showNotif('📊 Ивенты обновлены');
    }
}

// Удаление ивента
function deleteEventFromSheet(eventId) {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_delete_event_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(data);
        };
        
        const params = new URLSearchParams({
            action: 'deleteEvent',
            eventId: eventId,
            callback: callbackName
        });
        
        script.src = `${EVENTS_API_URL}?${params.toString()}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve({ success: false });
        };
        document.body.appendChild(script);
    });
}

// Обновление ивента
function updateEventInSheet(eventData) {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_update_event_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(data);
        };
        
        const params = new URLSearchParams({
            action: 'updateEvent',
            eventId: eventData.id,
            name: eventData.name,
            description: eventData.description,
            date: eventData.date,
            rating: eventData.rating,
            members: eventData.members,
            helpers: eventData.helpers,
            callback: callbackName
        });
        
        script.src = `${EVENTS_API_URL}?${params.toString()}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve({ success: false });
        };
        document.body.appendChild(script);
    });
}   

// ========== ФУНКЦИИ ДЛЯ РАБОТЫ С КОМАНДОЙ ==========

// Загрузка команды из Google Sheets
function loadTeamFromSheet() {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_team_load_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            console.log('Загруженные данные команды:', data);
            resolve(data || []);
        };
        
        script.src = `${COMMENTS_API_URL}?action=getTeam&callback=${callbackName}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve([]);
        };
        document.body.appendChild(script);
    });
}

// ВРЕМЕННО - сохранение в localStorage вместо Google Sheets
async function addMemberToSheet(memberData) {
    return new Promise((resolve) => {
        try {
            // Создаём нового участника
            const newId = teamData.length > 0 ? Math.max(...teamData.map(m => m.id)) + 1 : 1;
            
            const newMember = {
                id: newId,
                name: memberData.name,
                role: memberData.role,
                discord: memberData.discord,
                steamId: memberData.steamId || '',
                status: memberData.status || 'Онлайн',
                eventsCount: '-',
                joinDate: memberData.joinDate,
                rating: memberData.rating,
                category: memberData.category || 'Младший состав',
                fullDetails: {
                    responsibilities: "",
                    contacts: "",
                    achievements: "0",
                    notes: ""
                }
            };
            
            // Добавляем в массив
            teamData.push(newMember);
            
            // Сохраняем в localStorage
            localStorage.setItem('unionTeamData', JSON.stringify(teamData));
            
            // Добавляем аватарку
            if (memberData.avatar) {
                avatarMap[memberData.name] = memberData.avatar;
            }
            
            console.log('✅ Участник добавлен локально:', newMember);
            resolve({ success: true, id: newId });
            
        } catch (error) {
            console.error('❌ Ошибка при добавлении:', error);
            resolve({ success: false, error: error.message });
        }
    });
}

async function refreshTeamData() {
    const members = await loadTeamFromSheet();
    if (members && members.length > 0) {
        const newTeamData = members.map((m, index) => ({
            id: index + 1,
            name: m.name,
            role: m.role,
            discord: m.discord,
            steamId: m.steamId || '',  // 👈 ДОБАВЬ ЭТУ СТРОКУ
            status: m.status || 'Онлайн',
            eventsCount: m.eventsCount || '-',
            joinDate: m.joinDate,
            rating: m.rating,
            category: m.category,
            fullDetails: {
                responsibilities: "",
                contacts: "",
                achievements: "0",
                notes: ""
            }
        }));
        
        teamData = newTeamData;
        saveTeamToLocalStorage();
        
        const activeTab = document.querySelector('.nav-item.active');
        if (activeTab && activeTab.dataset.tab === 'team_table') {
            renderTeamTable();
        }
        
        showNotif('👥 Команда обновлена');
    }
}

// Сохранение команды в localStorage
function saveTeamToLocalStorage() {
    localStorage.setItem('unionTeamData', JSON.stringify(teamData));
}

function saveTeamToLocalStorage() {
    localStorage.setItem('unionTeamData', JSON.stringify(teamData));
}

// Загрузка команды из localStorage при старте
function loadTeamFromLocalStorage() {
    const saved = localStorage.getItem('unionTeamData');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.length > 0) {
                teamData = parsed;
                console.log('✅ Команда загружена из localStorage:', teamData.length, 'участников');
            }
        } catch(e) {
            console.error('Ошибка загрузки команды из localStorage:', e);
        }
    }
}

// Вызови эту функцию при загрузке страницы (добавь в конец checkAuth или onContinue)
loadTeamFromLocalStorage();

// ========== ФУНКЦИИ ДЛЯ РАБОТЫ С ТИКЕТАМИ ==========

const TICKETS_API_URL = 'https://script.google.com/macros/s/AKfycbwlueUcV6HahGGG4TTNyhXi4_Rx_ArsHiUth6YNIziQg-2PGRm3is8I4nfNU0v0OFBo/exec';

// Загрузка тикетов из Google Sheets
function loadTicketsFromSheet() {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_tickets_load_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            console.log('Загруженные тикеты:', data);
            // data приходит в формате { "имя": { done: X, goal: Y, eventsGoal: Z } }
            resolve(data || {});
        };
        
        script.src = `${COMMENTS_API_URL}?action=getTickets&callback=${callbackName}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve({});
        };
        document.body.appendChild(script);
    });
}

// Сохранение тикетов в Google Sheets
function saveTicketsToSheet(name, ticketsDone, ticketsGoal, eventsGoal) {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_tickets_save_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            console.log('Ответ сервера:', data);
            resolve(data || { success: true });
        };
        
        const params = new URLSearchParams({
            action: 'updateTickets',
            userName: name,
            ticketsDone: ticketsDone.toString(),
            ticketsGoal: ticketsGoal.toString(),
            eventsGoal: eventsGoal.toString(),
            updatedBy: currentUser || 'Система',
            callback: callbackName
        });
        
        script.src = `${COMMENTS_API_URL}?${params.toString()}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve({ success: false, error: 'Network error' });
        };
        document.body.appendChild(script);
    });
}

async function renderTicketsEditor() {
    console.log('renderTicketsEditor вызвана!');
    if (!isEditor) {
        showNotif('❌ Нет доступа', true);
        return;
    }
    
    const existingModal = document.getElementById('ticketsEditorModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.id = 'ticketsEditorModal';
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-card" style="max-width: 500px; width: 90%;">
            <div class="modal-header">
                <span>📊 Управление тикетами</span>
                <button class="close-modal" id="closeTicketsEditorBtn">
                    <svg class="icon"><use href="#ic-close"/></svg>
                </button>
            </div>
            <div class="modal-body" id="ticketsEditorBody">
                <div style="text-align: center; padding: 20px;">Загрузка...</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('closeTicketsEditorBtn').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    showGlobalLoading();
    
    let ticketsData;
    try {
        ticketsData = await loadTicketsFromSheet();
        console.log('Загружены тикеты:', ticketsData);
    } catch (error) {
        console.error('Ошибка загрузки тикетов:', error);
        ticketsData = {};
    }
    
    const members = [
        { name: "Zoffi", discordId: "1364620438600159262", defaultEventsGoal: 1 },   
        { name: "Артур П", discordId: "1207948847670890526", defaultEventsGoal: 1 },   
        { name: "Тявкобай", discordId: "859747626115006474", defaultEventsGoal: 1 },    
        { name: "кусочек шаурмы", discordId: "636585910552756284", defaultEventsGoal: 4 },
        { name: "Himas", discordId: "1467081827670954015", defaultEventsGoal: 1 },
        { name: "Гофикал", discordId: "1135087142385754123", defaultEventsGoal: 1 },
        { name: "Дмитрий Морозов", discordId: "859747626115006474", defaultEventsGoal: 1 },
        { name: "Foxy", discordId: "1344959502436532304", defaultEventsGoal: 7 }
    ];
    
    let html = '<div style="display: flex; flex-direction: column; gap: 15px;">';
    
    for (const member of members) {
        const current = ticketsData[member.name] || { done: 0, goal: 25, eventsGoal: member.defaultEventsGoal };
        html += `
            <div style="background: var(--badge-bg); border-radius: 20px; padding: 12px; border: 1px solid var(--card-border);">
                <div style="font-weight: 700; margin-bottom: 8px;">${member.name}</div>
                <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                    <div style="flex: 1;">
                        <label style="font-size: 0.7rem;">Выполнено тикетов</label>
                        <input type="number" id="tickets_done_${member.name.replace(/\s/g, '_')}" value="${current.done}" class="tickets-input" style="width: 100%; padding: 6px; border-radius: 12px; background: var(--input-bg); border: 1px solid var(--input-border); color: var(--text-primary);">
                    </div>
                    <div style="flex: 1;">
                        <label style="font-size: 0.7rem;">Нужно тикетов</label>
                        <input type="number" id="tickets_goal_${member.name.replace(/\s/g, '_')}" value="${current.goal}" class="tickets-input" style="width: 100%; padding: 6px; border-radius: 12px; background: var(--input-bg); border: 1px solid var(--input-border); color: var(--text-primary);">
                    </div>
                    <div style="flex: 1;">
                        <label style="font-size: 0.7rem;">Нужно ивентов</label>
                        <input type="number" id="events_goal_${member.name.replace(/\s/g, '_')}" value="${current.eventsGoal || member.defaultEventsGoal}" class="events-input" style="width: 100%; padding: 6px; border-radius: 12px; background: var(--input-bg); border: 1px solid var(--input-border); color: var(--text-primary);">
                    </div>
                    <button class="save-tickets-btn" data-name="${member.name}" style="background: linear-gradient(95deg, rgba(85,85,85,0.5), rgba(51,51,51,0.5)); border: none; border-radius: 40px; padding: 8px 16px; color: white; cursor: pointer;">💾 Сохранить</button>
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    document.getElementById('ticketsEditorBody').innerHTML = html;
    hideGlobalLoading();
    
    document.querySelectorAll('.save-tickets-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const name = btn.dataset.name;
            const nameId = name.replace(/\s/g, '_');
            const doneInput = document.getElementById(`tickets_done_${nameId}`);
            const goalInput = document.getElementById(`tickets_goal_${nameId}`);
            const eventsInput = document.getElementById(`events_goal_${nameId}`);
            
            const done = parseInt(doneInput.value);
            const goal = parseInt(goalInput.value);
            const eventsGoal = parseInt(eventsInput.value);
            
            if (isNaN(done) || isNaN(goal) || isNaN(eventsGoal)) {
                showNotif('❌ Введите корректные числа', true);
                return;
            }
            
            btn.disabled = true;
            btn.textContent = '⏳ Сохранение...';
            
            const result = await saveTicketsToSheet(name, done, goal, eventsGoal);
            
            if (result.success) {
                showNotif(`✅ Данные для ${name} сохранены!`);
            } else {
                showNotif(`❌ Ошибка сохранения: ${result.error || 'неизвестная ошибка'}`, true);
            }
            
            btn.disabled = false;
            btn.textContent = '💾 Сохранить';
        });
    });
}

function countEventsByPlatform() {
    const counts = {};
    for (let event of eventsData) {
        const platform = event.platform;
        if (platform && platform !== "Нет" && platform !== "") {
            counts[platform] = (counts[platform] || 0) + 1;
        }
    }
    return counts;
}

function calculateTotalPrizes() {
    let total = 0;
    for (let event of eventsData) {
        let ratingStr = String(event.rating);
        let cleanStr = ratingStr.replace('$', '').replace(/\./g, '');
        let match = cleanStr.match(/(\d+(?:[.,]\d+)?)/);
        if (match) {
            let num = parseFloat(match[1].replace(',', '.'));
            if (!isNaN(num)) total += num;
        }
    }
    return total;
}

function updateNormStats() {
    const totalPrizes = calculateTotalPrizes();
    const normContainer = document.getElementById('normStatsContainer');
    if (normContainer) {
        const prizeCard = normContainer.querySelector('.stat-card:last-child .stat-value');
        if (prizeCard) {
            prizeCard.innerHTML = totalPrizes.toLocaleString('ru-RU') + '$';
            prizeCard.style.color = '#5fe147';
        }
    }
}

function saveAllData() {
    const statusMap = {};
    for (let event of eventsData) {
        statusMap[event.id] = event.callStatus;
    }
    localStorage.setItem('unionEventsStatuses', JSON.stringify(statusMap));
    const prizesMap = {};
    for (let event of eventsData) {
        prizesMap[event.id] = event.rating;
    }
    localStorage.setItem('unionEventsPrizes', JSON.stringify(prizesMap));
}

function loadAllData() {
    const savedStatuses = localStorage.getItem('unionEventsStatuses');
    if (savedStatuses) {
        try {
            const statusMap = JSON.parse(savedStatuses);
            for (let event of eventsData) {
                if (statusMap[event.id]) event.callStatus = statusMap[event.id];
            }
        } catch(e) {}
    }
}

let cachedConfig = null;

const VALID_LOGINS = [
    "кусочек шаурмы", "Foxy", "somcop", "T1Ran", "manisule",
    "Гербикс", "Arbuz madrazo", "Дмитрий Морозов", "Гофикал", "Himas", "yaroslav1432", "gans7824"
];


function showNotif(msg, isErr = false) {
    const d = document.createElement('div');
    d.style.cssText = `position:fixed;bottom:20px;right:20px;background:${isErr ? '#c2410c' : '#2e7d32'};color:white;padding:12px 20px;border-radius:30px;z-index:9999;font-weight:bold;`;
    d.innerHTML = msg;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 3000);
}

(function() {
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');
    
    if (!cursor || !cursorDot) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
    
    const clickables = document.querySelectorAll('a, button, .clickable-row, .clickable-card, .nav-item, .status-change-btn, .comment-send-btn, .continue-btn, .login-btn, .submit-btn, .close-modal, .settings-save, .logout-btn');
    
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    document.body.style.cursor = 'none';
})();

function showGlobalLoading() {
    const overlay = document.getElementById('globalLoadingOverlay');
    if (overlay) overlay.style.display = 'flex';
}

function hideGlobalLoading() {
    const overlay = document.getElementById('globalLoadingOverlay');
    if (overlay) overlay.style.display = 'none';
}

function escapeHtml(s) { 
    if(!s) return ''; 
    return s.replace(/[&<>]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])); 
}



function changeEventStatus(eventId, newStatus) {
    if (!isEditor) {
        showNotif('❌ Нет прав для изменения статуса', true);
        return false;
    }
    
    const event = eventsData.find(e => e.id === eventId);
    if (!event) {
        showNotif('❌ Ивент не найден', true);
        return false;
    }
    
    // Сохраняем старый статус
    const oldStatus = event.callStatus;
    
    // Обновляем локально
    event.callStatus = newStatus;
    renderEventsTable();
    showNotif(`🔄 Статус изменён на "${newStatus}", синхронизация...`);
    
    // ========== ДОБАВЬ ЛОГИРОВАНИЕ СТАТУСА ==========
    sendAuditLog('CHANGE_STATUS', {
        eventId: eventId,
        eventName: event.name,
        oldStatus: oldStatus,
        newStatus: newStatus
    }).catch(err => console.error('Ошибка отправки лога статуса:', err));
    // =================================================
    
    // Отправляем в Google Sheets
    syncStatusToSheet(eventId, newStatus, currentUser).then(result => {
        if (result.success) {
            showNotif(`✅ Статус успешно изменён на "${newStatus}"`);
            refreshEventsData();
        } else {
            event.callStatus = oldStatus;
            renderEventsTable();
            showNotif(`❌ Ошибка синхронизации статуса`, true);
        }
    });
    
    return true;
}

function renderEventsTable() {
    const container = document.getElementById('eventDynamicContent');
    const showActions = currentUser !== null;
    
    container.innerHTML = `
        <div class="page-header"><h2>📅 Таблица мероприятий</h2></div>
        <div class="click-hint">🔽 ${showActions ? 'Вы можете редактировать и удалять СВОИ ивенты' : '🔽 Режим просмотра'}</div>
        <div class="table-wrapper">
            <table class="data-table">
                <thead><tr><th>ИВЕНТ</th><th>ОРГАНИЗАТОР</th><th>ПОМОЩНИКИ</th><th>ДАТА</th><th>СТАТУС</th><th>ПРИЗОВЫЕ</th><th>УЧАСТНИКИ</th><th>ОДОБРЕН</th>${showActions ? '<th>ДЕЙСТВИЯ</th>' : ''}</td></thead>
                <tbody id="eventsTableBody"></tbody>
            </table>
        </div>
    `;
    
    const tbody = document.getElementById('eventsTableBody');
    tbody.innerHTML = '';
    
    eventsData.forEach(event => {
        const row = tbody.insertRow();
        row.classList.add('clickable-row');
        row.setAttribute('data-type', 'event');
        row.setAttribute('data-id', event.id);
        row.insertCell(0).innerHTML = `<strong>${escapeHtml(event.name)}</strong>`;
        row.insertCell(1).textContent = event.organizer || event.platform;  // ОРГАНИЗАТОР (кто проводил)
        row.insertCell(2).textContent = event.helpers;
        row.insertCell(3).textContent = event.date;
        row.insertCell(4).innerHTML = `<span class="status-badge status-active">${event.status}</span>`;
        row.insertCell(5).innerHTML = `<span class="rating-star">${event.rating}</span>`;
        row.insertCell(6).innerHTML = `<span style="font-weight:600;">${event.members}</span>`;
        row.insertCell(7).innerHTML = `<span style="background:var(--badge-bg); padding:0.2rem 0.6rem; border-radius:20px;">${event.callStatus}</span>`;
        
        if (showActions) {
    const cell = row.insertCell(8);
    // Проверяем, может ли пользователь редактировать ЭТОТ ивент
    const canModify = isEditor || (currentUser && currentUser === event.platform);
    
    // Кнопки статусов - ТОЛЬКО для создателя (isEditor)
    const statusButtons = isEditor ? `
        <button class="status-change-btn btn-approved" data-id="${event.id}" data-status="✅Одобрен">✅ Одобрен</button>
        <button class="status-change-btn btn-soon" data-id="${event.id}" data-status="🟡Скоро">🟡 Скоро</button>
        <button class="status-change-btn btn-completed" data-id="${event.id}" data-status="🔴Отказано">🔴 Отказано</button>
    ` : '';
    
    // Кнопки редактирования/удаления - для создателя ИЛИ организатора ивента
    const editButtons = canModify ? `
    <button class="edit-event-btn" data-id="${event.id}" style="margin-top:5px;">Редактировать</button>
    <button class="delete-event-btn" data-id="${event.id}" style="margin-top:5px;">Удалить</button>                           
` : '';
    
    cell.innerHTML = statusButtons + editButtons;
    
    // ПРЯМЫЕ ОБРАБОТЧИКИ на кнопки (чтобы не было всплытия)
    if (canModify) {
        const editBtn = cell.querySelector('.edit-event-btn');
        const deleteBtn = cell.querySelector('.delete-event-btn');
        
        if (editBtn) {
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                console.log('Редактирование ивента:', event.id);
                openEditEventModal(event.id);
            });
        }
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                console.log('Удаление ивента:', event.id);
                if (confirm('🗑️ Удалить ивент навсегда? Это действие нельзя отменить!')) {
                    deleteEventHandler(event.id);
                }
            });
        }
    }
    
    if (isEditor) {
        const statusBtns = cell.querySelectorAll('.status-change-btn');
        statusBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                const eventId = parseInt(btn.dataset.id);
                const newStatus = btn.dataset.status;
                changeEventStatus(eventId, newStatus);
            });
        });
    }
}
    });
    
    attachRowClicks();
}



function renderTeamTable() {
    const container = document.getElementById('eventDynamicContent');
    const eventCounts = countEventsByPlatform();
    const seniorMembers = teamData.filter(m => m.category === "Старший состав");
    const juniorMembers = teamData.filter(m => m.category === "Младший состав");
    
    function renderMemberCard(m, type) {
        let eventsCount = eventCounts[m.name] || 0;
        if (m.eventsCount !== "-" && m.eventsCount !== "Нет нормы" && m.eventsCount !== "Отпуск" && !isNaN(parseInt(m.eventsCount))) {
            eventsCount = m.eventsCount;
        } else if (m.eventsCount === "Нет нормы" || m.eventsCount === "Отпуск") {
            eventsCount = m.eventsCount;
        }
        
        const cardClass = type === 'senior' ? 'senior' : 'junior';
        const ratingValue = parseFloat(m.rating);
        let starsHtml = '';

        if (!isNaN(ratingValue)) {
            const fullStars = Math.floor(ratingValue);
            const hasHalf = ratingValue % 1 >= 0.5;
            for(let i = 0; i < fullStars; i++) starsHtml += '<span class="rating-star">★</span>';
            if(hasHalf) starsHtml += '<span class="rating-star">½</span>';
            const empty = 5 - fullStars - (hasHalf ? 1 : 0);
            for(let i = 0; i < empty; i++) starsHtml += '<span class="rating-star empty">☆</span>';
        } else {
            starsHtml = `<span class="rating-star">${m.rating}</span>`;
        }
        
        const statusHtml = m.status === "Онлайн" ? '<span class="team-status online">🟢 Онлайн</span>' : '<span class="team-status offline">🔴 ' + m.status + '</span>';
        
        // Используем глобальный объект avatarMap
        const avatarUrl = avatarMap[m.name] || "https://i.imgur.com/IAIJe65.png";
        
        const formattedJoinDate = formatDate(m.joinDate);
        
        const editButton = isEditor ? `
            <button class="edit-member-btn" data-id="${m.id}" style="position: absolute; top: 10px; right: 10px; background: rgba(76, 175, 80, 0.3); border: none; border-radius: 20px; padding: 4px 8px; color: #4caf50; cursor: pointer; font-size: 11px; z-index: 10; transition: all 0.2s;">
                ✏️
            </button>
        ` : '';
        
        return `
            <div class="team-card ${cardClass} clickable-card" data-type="team" data-id="${m.id}" style="position: relative;">
                ${editButton}
                <div class="team-card-header">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="${avatarUrl}" class="team-avatar" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,215,0,0.5);">
                        <div>
                            <div class="team-name">${escapeHtml(m.name)}</div>
                            <div class="team-role">${escapeHtml(m.role)}</div>
                        </div>
                    </div>
                    ${statusHtml}
                </div>
                <div class="team-card-body">
                    <div class="team-info-item">
                        <div class="team-info-label">DISCORD</div>
                        <div class="team-info-value">${m.discord}</div>
                    </div>
                    <div class="team-info-item">
                        <div class="team-info-label">STEAM ID</div>
                        <div class="team-info-value">${m.steamId || 'Не указан'}</div>
                    </div>
                    <div class="team-info-item">
                        <div class="team-info-label">ИВЕНТОВ</div>
                        <div class="team-info-value">${eventsCount}</div>
                    </div>
                    <div class="team-info-item">
                        <div class="team-info-label">ВСТУПИЛ</div>
                        <div class="team-info-value">${formattedJoinDate}</div>
                    </div>
                </div>
                <div class="team-card-footer">
                    <span class="team-badge ${type === 'senior' ? 'senior-badge' : 'junior-badge'}">
                        ${type === 'senior' ? '👑' : '🌟'} ${type === 'senior' ? 'Старший' : 'Младший'} состав
                    </span>
                    <div class="team-rating">${starsHtml}</div>
                </div>
            </div>
        `;
    }
    
    let seniorHtml = '', juniorHtml = '';
    seniorMembers.forEach(m => { seniorHtml += renderMemberCard(m, 'senior'); });
    juniorMembers.forEach(m => { juniorHtml += renderMemberCard(m, 'junior'); });
    
    container.innerHTML = `
        <div class="page-header">
            <h2>👥 Команда ивент-отдела</h2>
            ${isEditor ? `
            <button id="manageTeamFromTableBtn" class="add-btn" style="background: linear-gradient(95deg, rgba(85,85,85,0.5), rgba(51,51,51,0.5));">
                <svg class="icon" style="fill:#fff; width:16px; height:16px;"><use href="#ic-plus"/></svg>
                Управление командой
            </button>
            ` : ''}
        </div>
        
        <div class="team-section">
            <div class="section-header senior">
                <span class="section-icon">👑</span>
                <span class="section-title senior">Старший состав</span>
                <span class="section-count">${seniorMembers.length} чел</span>
            </div>
            <div class="team-grid">
                ${seniorHtml || '<div style="text-align:center; padding:2rem;">Нет участников</div>'}
            </div>
        </div>
        
        <div class="team-section">
            <div class="section-header junior">
                <span class="section-icon">🌟</span>
                <span class="section-title junior">Младший состав</span>
                <span class="section-count">${juniorMembers.length} чел</span>
            </div>
            <div class="team-grid">
                ${juniorHtml || '<div style="text-align:center; padding:2rem;">Нет участников</div>'}
            </div>
        </div>
    `;

    // Добавляем обработчик для кнопки управления командой (добавление)
    const manageBtn = document.getElementById('manageTeamFromTableBtn');
    if (manageBtn) {
        manageBtn.addEventListener('click', () => {
            if (addTeamMemberModal) {
                document.getElementById('teamMemberName').value = '';
                document.getElementById('teamMemberRole').value = '';
                document.getElementById('teamMemberDiscord').value = '';
                document.getElementById('teamMemberAvatar').value = '';
                document.getElementById('teamMemberJoinDate').value = '';
                document.getElementById('teamMemberRating').value = '';
                document.getElementById('teamMemberCategory').value = 'Младший состав';
                document.getElementById('teamMemberStatus').value = 'Онлайн';
                addTeamMemberModal.style.display = 'flex';
            }
        });
    }
    
    // Добавляем обработчики для кнопок редактирования участников
    document.querySelectorAll('.edit-member-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const memberId = parseInt(btn.dataset.id);
            if (typeof openEditMemberModal === 'function') {
                openEditMemberModal(memberId);
            } else {
                console.error('openEditMemberModal не определена');
                showNotif('❌ Ошибка: функция редактирования не загружена', true);
            }
        });
    });
    
    // Добавляем обработчики кликов по карточкам (просмотр информации)
    document.querySelectorAll('.clickable-card').forEach(card => {
        // Удаляем старый обработчик, чтобы не было дублей
        const oldHandler = card._clickHandler;
        if (oldHandler) {
            card.removeEventListener('click', oldHandler);
        }
        
        const handler = () => {
            const id = parseInt(card.dataset.id);
            const member = teamData.find(m => m.id === id);
            if (member) openTeamModal(member);
        };
        card._clickHandler = handler;
        card.addEventListener('click', handler);
    });
}

function showNotif(msg, isErr = false) {
    const d = document.createElement('div');
    d.style.cssText = `position:fixed;bottom:20px;right:20px;background:${isErr ? '#c2410c' : '#2e7d32'};color:white;padding:12px 20px;border-radius:30px;z-index:9999;font-weight:bold;`;
    d.innerHTML = msg;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 3000);
}



function attachRowClicks() {
    document.querySelectorAll('.clickable-row').forEach(row => {
        row.removeEventListener('click', row._h);
        const h = () => {
            const type = row.dataset.type;
            const id = parseInt(row.dataset.id);
            if (type === 'event') {
                const ev = eventsData.find(e => e.id === id);
                if (ev) openEventModal(ev);
            } else if (type === 'team') {
                const m = teamData.find(t => t.id === id);
                if (m) openTeamModal(m);
            }
        };
        row.addEventListener('click', h);
        row._h = h;
    });
}

function openEventModal(ev) {
    document.getElementById('modalTitle').innerHTML = `
        <svg class="icon icon-accent" style="flex-shrink:0;"><use href="#ic-detail"/></svg>
        Детали ивента
    `;
    
    const formattedDate = formatDate(ev.date);  // 👈 ФОРМАТИРУЕМ
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="detail-row"><span class="detail-label">Название:</span><span>${escapeHtml(ev.name)}</span></div>
        <div class="detail-row"><span class="detail-label">Организатор:</span><span>${ev.platform}</span></div>
        <div class="detail-row"><span class="detail-label">Дата:</span><span>${formattedDate}</span></div>  <!-- 👈 ЗДЕСЬ -->
        <div class="detail-row"><span class="detail-label">Категория:</span><span>${ev.callStatus}</span></div>
        <div style="margin-top:12px; background:var(--card-bg); padding:12px; border-radius:24px;">
            <b>Описание:</b><br>${ev.fullDetails.description}
        </div>
        <div id="commentsContainer"></div>
    `;
    
    const commentsContainer = document.getElementById('commentsContainer');
    renderCommentsSection(ev.id, commentsContainer);
    
    document.getElementById('infoModal').style.display = 'flex';
}   

function openTeamModal(m) {
    document.getElementById('modalTitle').innerHTML = '👤 Информация о сотруднике';
    document.getElementById('modalBody').innerHTML = `
        <div class="detail-row"><span class="detail-label">Имя:</span><span><strong>${escapeHtml(m.name)}</strong></span></div>
        <div class="detail-row"><span class="detail-label">Роль:</span><span>${m.role}</span></div>
        <div class="detail-row"><span class="detail-label">Discord ID:</span><span>${m.discord}</span></div>
        <div class="detail-row"><span class="detail-label">Steam ID:</span><span>${m.steamId || 'Не указан'}</span></div>
        <div class="detail-row"><span class="detail-label">Статус:</span><span>${m.status}</span></div>
        <div class="detail-row"><span class="detail-label">Ранг:</span><span>${m.rating}</span></div>
        <div class="detail-row"><span class="detail-label">В отделе с:</span><span>${formatDate(m.joinDate)}</span></div>
        <div class="detail-row"><span class="detail-label">Категория:</span><span>${m.category === 'Старший состав' ? '👑 Старший состав' : '🌟 Младший состав'}</span></div>
        <div class="detail-row"><span class="detail-label">Обязанности:</span><span>${m.fullDetails?.responsibilities || 'Не указаны'}</span></div>
    `;
    document.getElementById('infoModal').style.display = 'flex';
}

function updateClock() { 
    const el = document.getElementById('liveClockEvent'); 
    if(el) el.innerText = new Date().toLocaleTimeString('ru-RU'); 
}
setInterval(updateClock, 1000); 
updateClock();
    
document.body.classList.add('dark');

// НАВИГАЦИЯ
const navs = document.querySelectorAll('.nav-item');
navs.forEach(n => {
    n.addEventListener('click', () => {
        navs.forEach(i => i.classList.remove('active'));
        n.classList.add('active');
        const tab = n.dataset.tab;
        if (tab === 'events_table') renderEventsTable();
        else if (tab === 'team_table') renderTeamTable();
        else if (tab === 'add_event') renderAddEventForm();
        else if (tab === 'event_adons') renderAddonsPage();
        else if (tab === 'event_guidee') {
    // Показываем глобальную загрузку с орлом
    showGlobalLoading();
    
    // Асинхронно загружаем данные
    (async () => {
        // Загружаем тикеты из Google Sheets (теперь там есть eventsGoal)
        const ticketsFromSheet = await loadTicketsFromSheet();
        console.log('Данные из таблицы Тикеты:', ticketsFromSheet);
        
        const totalPrizes = calculateTotalPrizes();
        const eventsCount = eventsData.length;
        const teamMembersCount = teamData.length;
        const onlineCount = teamData.filter(m => m.status === "Онлайн").length;
        
        // Подсчитываем ивенты для каждого участника
        const eventCounts = {};
        eventsData.forEach(event => {
            const organizer = event.platform;
            if (organizer && organizer !== "Нет" && organizer !== "") {
                eventCounts[organizer] = (eventCounts[organizer] || 0) + 1;
            }
        });
       
        // Данные по участникам (теперь берем eventsGoal из таблицы Тикеты)
        const membersStats = {
            "T1Ran": { 
                discordId: "1246076621484724320", 
                eventsGoal: (ticketsFromSheet["T1Ran"] && ticketsFromSheet["T1Ran"].eventsGoal) || 1,
                eventsDone: eventCounts["T1Ran"] || 0, 
                inDepartment: false 
            },
            "somcop": { 
                discordId: "989919183036874772", 
                eventsGoal: (ticketsFromSheet["somcop"] && ticketsFromSheet["somcop"].eventsGoal) || 1,
                eventsDone: eventCounts["somcop"] || 0, 
                inDepartment: false 
            },
            "Гарик Халамовв": { 
                discordId: "1064190272789041293", 
                eventsGoal: (ticketsFromSheet["Гарик Халамовв"] && ticketsFromSheet["Гарик Халамовв"].eventsGoal) || 1,
                eventsDone: eventCounts["Гарик Халамовв"] || 0, 
                inDepartment: false 
            },
            "Zoffi": { 
                discordId: "1364620438600159262", 
                eventsGoal: (ticketsFromSheet["Zoffi"] && ticketsFromSheet["Zoffi"].eventsGoal) || 0,
                eventsDone: eventCounts["Zoffi"] || 0, 
                ticketsDone: (ticketsFromSheet["Zoffi"] && ticketsFromSheet["Zoffi"].done) || 0,
                ticketsGoal: (ticketsFromSheet["Zoffi"] && ticketsFromSheet["Zoffi"].goal) || 0,
                inDepartment: true 
            },
            "Артур П": { 
                discordId: "1207948847670890526", 
                eventsGoal: (ticketsFromSheet["Артур П"] && ticketsFromSheet["Артур П"].eventsGoal) || 0,
                eventsDone: eventCounts["Артур П"] || 0, 
                ticketsDone: (ticketsFromSheet["Артур П"] && ticketsFromSheet["Артур П"].done) || 0,
                ticketsGoal: (ticketsFromSheet["Артур П"] && ticketsFromSheet["Артур П"].goal) || 0,
                inDepartment: true 
            },
            "Тявкобай": { 
                discordId: "859747626115006474", 
                eventsGoal: (ticketsFromSheet["Тявкобай"] && ticketsFromSheet["Тявкобай"].eventsGoal) || 0,
                eventsDone: eventCounts["Тявкобай"] || 0, 
                ticketsDone: (ticketsFromSheet["Тявкобай"] && ticketsFromSheet["Тявкобай"].done) || 0,
                ticketsGoal: (ticketsFromSheet["Тявкобай"] && ticketsFromSheet["Тявкобай"].goal) || 0,
                inDepartment: true 
            },
            "Дмитрий Морозов": { 
                discordId: "859747626115006474", 
                eventsGoal: (ticketsFromSheet["Дмитрий Морозов"] && ticketsFromSheet["Дмитрий Морозов"].eventsGoal) || 0,
                eventsDone: eventCounts["Дмитрий Морозов"] || 0, 
                ticketsDone: (ticketsFromSheet["Дмитрий Морозов"] && ticketsFromSheet["Дмитрий Морозов"].done) || 0,
                ticketsGoal: (ticketsFromSheet["Дмитрий Морозов"] && ticketsFromSheet["Дмитрий Морозов"].goal) || 0,
                inDepartment: true 
            },
            "кусочек шаурмы": { 
                discordId: "636585910552756284", 
                eventsGoal: (ticketsFromSheet["кусочек шаурмы"] && ticketsFromSheet["кусочек шаурмы"].eventsGoal) || 0,
                eventsDone: eventCounts["кусочек шаурмы"] || 0,
                ticketsDone: (ticketsFromSheet["кусочек шаурмы"] && ticketsFromSheet["кусочек шаурмы"].done) || 0,
                ticketsGoal: (ticketsFromSheet["кусочек шаурмы"] && ticketsFromSheet["кусочек шаурмы"].goal) || 0,
                inDepartment: true 
            },
            "Himas": { 
                discordId: "1467081827670954015", 
                eventsGoal: (ticketsFromSheet["Himas"] && ticketsFromSheet["Himas"].eventsGoal) || 0,
                eventsDone: eventCounts["Himas"] || 0,
                ticketsDone: (ticketsFromSheet["Himas"] && ticketsFromSheet["Himas"].done) || 0,
                ticketsGoal: (ticketsFromSheet["Himas"] && ticketsFromSheet["Himas"].goal) || 0,
                reason: "Есть причина", 
                inDepartment: true 
            },
            "Гофикал": { 
                discordId: "1135087142385754123", 
                eventsGoal: (ticketsFromSheet["Гофикал"] && ticketsFromSheet["Гофикал"].eventsGoal) || 0,
                eventsDone: eventCounts["Гофикал"] || 0,
                ticketsDone: (ticketsFromSheet["Гофикал"] && ticketsFromSheet["Гофикал"].done) || 0,
                ticketsGoal: (ticketsFromSheet["Гофикал"] && ticketsFromSheet["Гофикал"].goal) || 0,
                inDepartment: true 
            },
            "Foxy": { 
                discordId: "1344959502436532304", 
                eventsGoal: (ticketsFromSheet["Foxy"] && ticketsFromSheet["Foxy"].eventsGoal) || 0,
                eventsDone: eventCounts["Foxy"] || 0,
                ticketsDone: (ticketsFromSheet["Foxy"] && ticketsFromSheet["Foxy"].done) || 0,
                ticketsGoal: (ticketsFromSheet["Foxy"] && ticketsFromSheet["Foxy"].goal) || 0,
                inDepartment: true 
            }
        };
        
        // СОБИРАЕМ СТРОКИ ДЛЯ КОПИРОВАНИЯ (ДРУГОЙ ОТДЕЛ)
        let otherDeptLinesForCopy = [];
        let otherDeptHtml = '';
        
        for (const [name, stats] of Object.entries(membersStats)) {
            if (!stats.inDepartment) {
                const isCompleted = stats.eventsDone >= stats.eventsGoal;
                const icon = isCompleted ? '✅' : '❌';
                
                // Строка для копирования (с Discord ID)
                const copyLine = `<@${stats.discordId}> - Ивенты: ${stats.eventsDone}/${stats.eventsGoal} ${icon}`;
                otherDeptLinesForCopy.push(copyLine);
                
                // Отображение на сайте (с именем)
                otherDeptHtml += `
                    <div style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                        <strong>${name}</strong> - Ивенты: ${stats.eventsDone}/${stats.eventsGoal} ${icon}
                    </div>
                `;
            }
        }
        
        // СОБИРАЕМ СТРОКИ ДЛЯ КОПИРОВАНИЯ (ПОЛНОЦЕННЫЙ ОТДЕЛ)
        let fullDeptLinesForCopy = [];
        let fullDeptHtml = '';
        
        for (const [name, stats] of Object.entries(membersStats)) {
            if (stats.inDepartment) {
                const isEventsCompleted = stats.eventsDone >= stats.eventsGoal;
                const eventsIcon = isEventsCompleted ? '✅' : '❌';
                
                const isTicketsCompleted = (stats.ticketsDone || 0) >= (stats.ticketsGoal || 0);
                const ticketsIcon = isTicketsCompleted ? '✅' : '❌';
                
                // Строка для копирования (с Discord ID)
                const copyLine = `<@${stats.discordId}> - Ивенты: ${stats.eventsDone}/${stats.eventsGoal} ${eventsIcon} | Тикеты: ${stats.ticketsDone || 0}/${stats.ticketsGoal || 25} ${ticketsIcon}`;
                fullDeptLinesForCopy.push(copyLine);
                
                // Отображение на сайте (с именем)
                fullDeptHtml += `
                    <div style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                        <strong>${name}</strong> - Ивенты: ${stats.eventsDone}/${stats.eventsGoal} ${eventsIcon} | Тикеты: ${stats.ticketsDone || 0}/${stats.ticketsGoal || 25} ${ticketsIcon}
                    </div>
                `;
            }
        }
        
        // Объединяем строки для каждого раздела
        const otherDeptTextToCopy = otherDeptLinesForCopy.join('\n');
        const fullDeptTextToCopy = fullDeptLinesForCopy.join('\n');
        
        const ticketsEditorButton = isEditor ? `
            <div style="text-align: right; margin-bottom: 15px;">
                <button id="ticketsEditorFromNormBtn" style="background: linear-gradient(95deg, rgba(85,85,85,0.5), rgba(51,51,51,0.5)); border: none; border-radius: 40px; padding: 8px 16px; color: white; cursor: pointer; font-size: 0.8rem;">
                    Управление Нормой
                </button>
            </div>
        ` : '';
        
        // Вставляем HTML
        document.getElementById('eventDynamicContent').innerHTML = `
            <style>
                .norm-container {
                    background: var(--card-bg);
                    border-radius: 32px;
                    padding: 1.5rem;
                    border: 1px solid var(--card-border);
                    backdrop-filter: blur(20px);
                }
                
                .norm-header {
                    text-align: center;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid var(--table-row-border);
                }
                
                .norm-header h2 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #fff, #aaa);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    margin-bottom: 0.5rem;
                }
                
                .norm-header p {
                    color: var(--text-muted);
                    font-size: 0.85rem;
                }
                
                .norm-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    margin-bottom: 2rem;
                }
                
                .norm-stat-card {
                    background: rgba(0,0,0,0.2);
                    border-radius: 24px;
                    padding: 1.2rem;
                    text-align: center;
                    border: 1px solid var(--card-border);
                    backdrop-filter: blur(12px);
                    transition: transform 0.2s;
                }
                
                .norm-stat-card:hover {
                    transform: translateY(-3px);
                    border-color: rgba(95, 95, 91, 0.3);
                }
                
                .norm-stat-value {
                    font-size: 2.5rem;
                    font-weight: 800;
                    background: linear-gradient(135deg, #fff, #aaa);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                
                .norm-stat-label {
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--text-muted);
                    margin-top: 0.3rem;
                }
                
                .member-stats-section {
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                }
                
                .member-stats-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 1rem;
                    padding-left: 0.5rem;
                    border-left: 4px solid #c1c0be;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                
                .member-stats-block {
                    background: rgba(0,0,0,0.2);
                    border-radius: 24px;
                    padding: 1.2rem;
                    font-family: monospace;
                    font-size: 0.9rem;
                    line-height: 1.8;
                    color: var(--text-primary);
                    border: 1px solid var(--card-border);
                }
                
                .member-stats-note {
                    margin-top: 1rem;
                    font-size: 0.7rem;
                    color: var(--text-muted);
                    text-align: center;
                    padding-top: 0.8rem;
                    border-top: 1px solid var(--card-border);
                }
                
                .norm-week {
                    margin-top: 1.5rem;
                    background: rgba(0,0,0,0.2);
                    border-radius: 24px;
                    padding: 1.2rem;
                    border: 1px solid var(--card-border);
                }
                
                .norm-week-title {
                    font-size: 0.85rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: #e0e0e0;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .norm-week-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                    gap: 0.8rem;
                }
                
                .norm-day-card {
                    background: rgba(0,0,0,0.15);
                    border-radius: 16px;
                    padding: 0.8rem;
                    text-align: center;
                    border: 1px solid var(--card-border);
                }
                
                .norm-day-name {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: #a5a5a4;
                    margin-bottom: 0.3rem;
                }
                
                .norm-day-value {
                    font-size: 0.7rem;
                    color: var(--text-secondary);
                }
                
                .copy-section-btn {
    background: var(--badge-bg);
    border: 1px solid var(--card-border);
    border-radius: 40px;
    padding: 8px 20px;
    color: var(--text-primary);
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.2s;
    backdrop-filter: blur(8px);
}

.copy-section-btn:hover {
    background: var(--input-bg);
    border-color: rgba(255,255,255,0.3);
    transform: scale(1.02);
}
            </style>
            
            <div class="norm-container">
                <div class="norm-header">
                    <h2>НОРМА ОТДЕЛА</h2>
                    <p>Статистика и выполнение норм сотрудниками</p>
                </div>
                
                ${ticketsEditorButton}
                
                <div class="norm-stats-grid">
                    <div class="norm-stat-card">
                        <div class="norm-stat-value">${teamMembersCount}</div>
                        <div class="norm-stat-label">Ивентеров</div>
                    </div>
                    <div class="norm-stat-card">
                        <div class="norm-stat-value">${eventsCount}</div>
                        <div class="norm-stat-label">Проведено ивентов</div>
                    </div>
                    <div class="norm-stat-card">
                        <div class="norm-stat-value">${onlineCount}</div>
                        <div class="norm-stat-label">Сейчас онлайн</div>
                    </div>
                    <div class="norm-stat-card">
                        <div class="norm-stat-value" style="color: #5fe147;">${totalPrizes.toLocaleString('ru-RU')}$</div>
                        <div class="norm-stat-label">Всего призовых</div>
                    </div>
                </div>
                
                <div class="member-stats-section">
                    <div class="member-stats-title">
                        <span>В другом отделе</span>
                        <button class="copy-section-btn" id="copyOtherDeptBtn">📋 Копировать строки</button>
                    </div>
                    <div class="member-stats-block">
                        ${otherDeptHtml || 'Нет данных'}
                    </div>
                </div>
                
                <div class="member-stats-section">
                    <div class="member-stats-title">
                        <span>Полноценно в отделе</span>
                        <button class="copy-section-btn" id="copyFullDeptBtn">📋 Копировать строки</button>
                    </div>
                    <div class="member-stats-block">
                        ${fullDeptHtml || 'Нет данных'}
                    </div>
                    <div class="member-stats-note">
                        ✅ - норма выполнена | ❌ - норма не выполнена<br>
                        Ивенты считаются автоматически, норма ивентов берется из таблицы "Тикеты"<br>
                        📋 Нажмите на кнопку "Копировать строки", чтобы скопировать строки с Discord упоминаниями
                    </div>
                </div>
                
                <div class="norm-week">
                    <div class="norm-week-title">Норма после отпуска/вступления</div>
                    <div class="norm-week-grid">
                        <div class="norm-day-card"><div class="norm-day-name">ПН</div><div class="norm-day-value">35 тикетов | 3 ивента</div></div>
                        <div class="norm-day-card"><div class="norm-day-name">ВТ</div><div class="norm-day-value">35 тикетов | 3 ивента</div></div>
                        <div class="norm-day-card"><div class="norm-day-name">СР</div><div class="norm-day-value">30 тикетов | 2 ивента</div></div>
                        <div class="norm-day-card"><div class="norm-day-name">ЧТ</div><div class="norm-day-value">25 тикетов | 1 ивент</div></div>
                        <div class="norm-day-card"><div class="norm-day-name">ПТ</div><div class="norm-day-value">20 тикетов | 1 ивент</div></div>
                        <div class="norm-day-card"><div class="norm-day-name">СБ</div><div class="norm-day-value">10 тикетов | 1 ивент</div></div>
                        <div class="norm-day-card"><div class="norm-day-name">ВС</div><div class="norm-day-value">Освобождены</div></div>
                    </div>
                </div>
            </div>
        `;
        
        // Функция для копирования текста
        async function copyToClipboard(text, btn, successMessage) {
            try {
                await navigator.clipboard.writeText(text);
                showNotif(successMessage);
                
                const originalText = btn.innerHTML;
                btn.innerHTML = '✅ Скопировано!';
                btn.style.background = 'linear-gradient(95deg, #4caf50, #45a049)';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = 'linear-gradient(95deg, #ffaa44, #ff8844)';
                }, 2000);
                
            } catch (err) {
                showNotif('❌ Не удалось скопировать', true);
            }
        }
        
        // Кнопка для раздела "В другом отделе"
        const copyOtherDeptBtn = document.getElementById('copyOtherDeptBtn');
        if (copyOtherDeptBtn && otherDeptTextToCopy) {
            copyOtherDeptBtn.addEventListener('click', () => {
                copyToClipboard(otherDeptTextToCopy, copyOtherDeptBtn, `✅ Скопировано ${otherDeptLinesForCopy.length} строк!`);
            });
        }
        
        // Кнопка для раздела "Полноценно в отделе"
        const copyFullDeptBtn = document.getElementById('copyFullDeptBtn');
        if (copyFullDeptBtn && fullDeptTextToCopy) {
            copyFullDeptBtn.addEventListener('click', () => {
                copyToClipboard(fullDeptTextToCopy, copyFullDeptBtn, `✅ Скопировано ${fullDeptLinesForCopy.length} строк!`);
            });
        }
        
        // Скрываем загрузку после того как всё отрисовалось
        hideGlobalLoading();
        
        // Добавляем обработчик для кнопки управления тикетами
        if (isEditor) {
            const ticketsEditorBtn = document.getElementById('ticketsEditorFromNormBtn');
            if (ticketsEditorBtn) {
                ticketsEditorBtn.addEventListener('click', () => {
                    renderTicketsEditor();
                });
            }
        }
    })();
}
        else if (tab === 'event_guide') {
    document.getElementById('eventDynamicContent').innerHTML = ` 
        <style>
            .methodology-container {
                background: var(--card-bg);
                border-radius: 32px;
                padding: 2rem;
                border: 1px solid var(--card-border);
                box-shadow: 0 8px 32px var(--shadow-color);
            }
            
            .methodology-header {
                text-align: center;
                margin-bottom: 2rem;
                padding-bottom: 1.5rem;
                border-bottom: 2px solid var(--card-border);
            }
            
            .methodology-title {
                font-size: 2.5rem;
                font-weight: 800;
                background: linear-gradient(135deg, #fd72f4, #ffaa44, #44ffaa);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                margin-bottom: 0.5rem;
            }
            
            .methodology-subtitle {
                font-size: 1.3rem;
                color: var(--text-muted);
                letter-spacing: 2px;
            }
            
            .section-block {
                background: var(--badge-bg);
                border-radius: 24px;
                padding: 1.5rem;
                margin-bottom: 1.5rem;
                transition: transform 0.2s;
            }
            
            .section-block:hover {
                transform: translateY(-2px);
            }
            
            .section-title {
                font-size: 1.6rem;
                font-weight: 700;
                margin-bottom: 1rem;
                padding-bottom: 0.5rem;
                border-bottom: 3px solid;
                display: inline-block;
            }
            
            .section-title.green { color: #44ffaa; border-color: #44ffaa; }
            .section-title.orange { color: #ffaa44; border-color: #ffaa44; }
            .section-title.red { color: #ff6666; border-color: #ff6666; }
            .section-title.blue { color: #44aaff; border-color: #44aaff; }
            .section-title.purple { color: #fd72f4; border-color: #fd72f4; }
            .section-title.pink { color: #ff66cc; border-color: #ff66cc; }
            
            .rule-list {
                list-style: none;
                padding: 0;
            }
            
            .rule-list li {
                padding: 0.5rem 0;
                padding-left: 1.5rem;
                position: relative;
                color: var(--text-primary);
            }
            
            .rule-list li::before {
                content: "•";
                position: absolute;
                left: 0;
                color: #ffaa44;
                font-size: 1.2rem;
            }
            
            .rank-card {
                background: var(--card-bg);
                border-radius: 20px;
                padding: 1rem;
                margin-bottom: 1rem;
                border-left: 4px solid;
                transition: all 0.2s;
            }
            
            .rank-card:hover {
                transform: translateX(5px);
            }
            
            .rank-card.ivent { border-left-color: #ffaa44; }
            .rank-card.senior { border-left-color: #44ffaa; }
            .rank-card.zam { border-left-color: #fd72f4; }
            .rank-card.glava { border-left-color: #ff4444; }
            
            .rank-name {
                font-size: 1.2rem;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .rank-desc {
                font-size: 0.85rem;
                color: var(--text-muted);
                margin-top: 0.5rem;
                line-height: 1.4;
            }
            
            .norm-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .norm-card {
                background: var(--card-bg);
                border-radius: 16px;
                padding: 1rem;
                text-align: center;
                border: 1px solid var(--card-border);
            }
            
            .norm-day {
                font-size: 1rem;
                font-weight: 700;
                color: #ffaa44;
            }
            
            .norm-value {
                font-size: 0.85rem;
                color: var(--text-primary);
                margin-top: 0.3rem;
            }
            
            .punishment-card {
                background: linear-gradient(135deg, rgba(255,68,68,0.1), rgba(255,68,68,0.05));
                border-radius: 16px;
                padding: 1rem;
                margin-bottom: 0.8rem;
                border-left: 3px solid #ff4444;
            }
            
            .stats-mini {
                display: inline-block;
                background: var(--badge-bg);
                padding: 0.2rem 0.6rem;
                border-radius: 20px;
                font-size: 0.7rem;
                color: var(--text-muted);
                margin-left: 0.5rem;
            }
        </style>
        
        <div class="methodology-container">
            <div class="methodology-header">
                <div class="methodology-title">Методичка Ивентологов</div>
                <div class="methodology-subtitle">ОСНОВНЫЕ ПРАВИЛА ОТДЕЛА ИВЕНТОЛОГИИ</div>
            </div>
            
            <!-- ЧТО МОЖНО ДЕЛАТЬ -->
            <div class="section-block">
                <div class="section-title green">ЧТО МОЖНО ДЕЛАТЬ?</div>
                <div class="rank-card ivent">
                    <div class="rank-name">Кто может проводить ивенты?</div>
                    <div class="rank-desc">Проводить ивенты можно с ранга «Оператор», если вы состоите в отделе Ивентологии. С рангов ниже — только с разрешения Главы отдела или Куратора сервера.</div>
                </div>
                <div class="rank-card ivent">
                    <div class="rank-name">Кол-во администрации на ивенте</div>
                    <div class="rank-desc">В ивенте может участвовать не более 25% от всей наборной администрации. <span class="stats-mini">Например: 10 админов → максимум 3</span></div>
                </div>
                <div class="rank-card ivent">
                    <div class="rank-name">⏸ Игнор завалов</div>
                    <div class="rank-desc">Если завал начался во время ивента, его разрешено игнорировать.</div>
                </div>
                <div class="rank-card ivent">
                    <div class="rank-name">Самостоятельность</div>
                    <div class="rank-desc">Каждый Ивентер может проводить ивенты без разрешения от Ст. Администрации. Если ты на испытательном сроке — нужно одобрение от Ст. Ивентера.</div>
                </div>
                <div class="rank-card ivent">
                    <div class="rank-name">Награды</div>
                    <div class="rank-desc">Если игрок использует баги/преимущества/нарушал правила — Ивентер может не выдавать приз. Если победа честная — Ивентер обязан выдать приз.</div>
                </div>
                <div class="rank-card ivent">
                    <div class="rank-name">RP-Мероприятия</div>
                    <div class="rank-desc">Помимо ивентов, вам также доступны РП-Мероприятия — сюжетные ролевые отыгровки в пределах RP-зоны. РП-мероприятие засчитывается как полноценный ивент.</div>
                </div>
            </div>
            
            <!-- ЧТО ВЫ ОБЯЗАНЫ ДЕЛАТЬ -->
            <div class="section-block">
                <div class="section-title orange">ЧТО ВЫ ОБЯЗАНЫ ДЕЛАТЬ?</div>
                <div class="rank-card senior">
                    <div class="rank-name">После ивента/РП-Мероприятия</div>
                    <div class="rank-desc">Убрать всё, что было построено/создано. Написать отчёт в специальный канал.</div>
                </div>
                <div class="rank-card senior">
                    <div class="rank-name">Лаги</div>
                    <div class="rank-desc">Если во время ивента появились лаги или высокий пинг — ивент нужно как можно быстрее прекратить и сообщить Главе/Зам. Главы.</div>
                </div>
            </div>
            
            <!-- ЧТО НЕЛЬЗЯ ДЕЛАТЬ -->
            <div class="section-block">
                <div class="section-title red">ЧТО НЕЛЬЗЯ ДЕЛАТЬ?</div>
                <ul class="rule-list">
                    <li>Запрещается привлекать игроков к РП-мероприятию через /OOC, участие должно происходить естественным RP путем.</li>
                    <li>Нельзя принуждать игроков к участию в мероприятии.</li>
                    <li>Создавать мероприятия, мешающие обычному RP-процессу сервера.</li>
                    <li>Запрещено начинать ивенты во время активных завалов.</li>
                    <li>Запрещено проводить 2 и более ивентов одновременно. Если кто-то уже проводит ивент — ждём, пока закончат.</li>
                    <li>Запрещено мешать подготовке или проведению ивентов (включая ивент-мастеров).</li>
                    <li>Категорически запрещено проводить ивенты в RP зоне. Исключение: РП-Мероприятия.</li>
                    <li>Запрещается проводить ивенты, которые нацелены на разжигание ненависти, дискриминацию, имеют деструктивный или политический контент.</li>
                    <li>Запрещено выпрашивать бонусы/привилегии за ивенты (будут наказания и возможно снятие).</li>
                    <li>Донатной администрации категорически запрещено проводить ивенты. Даже под вашим присмотром и даже в качестве помощников.</li>
                </ul>
            </div>
            
            <!-- УТОЧНЕНИЯ -->
            <div class="section-block">
                <div class="section-title purple">УТОЧНЕНИЯ</div>
                <ul class="rule-list">
                    <li>При проведении РП-мероприятий обязательно соблюдение всех действующих правил сервера.</li>
                    <li>Повышение до Ивент-Мастера не будет. Однако попросить его помощь вы можете в канале ┣🍽️・запрос-вещей.</li>
                    <li>Набирать людей в Ивентологию могут только Глава и Зам. Главы отдела.</li>
                    <li>Отдел Ивентологии является «совмещенным». Любой администратор из другого отдела может попасть к нам при наличии свободных слотов.</li>
                </ul>
            </div>
            
            <!-- МАКСИМАЛЬНОЕ КОЛИЧЕСТВО МЕСТ -->
            <div class="section-block">
                <div class="section-title blue">Максимальное количество мест в отделе — 9</div>
                <div class="norm-grid">
                    <div class="norm-card"><div class="norm-day">👑 Глава</div><div class="norm-value">1 место</div></div>
                    <div class="norm-card"><div class="norm-day">📿 Зам. Главы</div><div class="norm-value">1 место</div></div>
                    <div class="norm-card"><div class="norm-day">🍉 Ст. Ивентер</div><div class="norm-value">1 место</div></div>
                    <div class="norm-card"><div class="norm-day">🤡 Ивентеры</div><div class="norm-value">7 мест</div></div>
                </div>
            </div>
            
            <!-- РАНГИ -->
            <div class="section-block">
                <div class="section-title pink">РАНГИ</div>
                <div class="rank-card ivent"><div class="rank-name">Ивентер</div><div class="rank-desc">Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела. Может игнорировать завал в случае, если ивент начался до завала.</div></div>
                <div class="rank-card senior"><div class="rank-name">Ст. Ивентер</div><div class="rank-desc">Имеет все полномочия Ивентера, а также имеет право корректировать работу Ивентеров и давать рекомендации по поводу ивентов, выдавать наказания за их ошибки, а также одобрять отчётности.</div></div>
                <div class="rank-card zam"><div class="rank-name">Зам. Главы Ивентологии</div><div class="rank-desc">Имеет все полномочия нижестоящих рангов, а также имеет право набирать новых кадров в отдел, определять курс развития отдела и изменять норму и правила.</div></div>
                <div class="rank-card glava"><div class="rank-name">Глава Ивентологии</div><div class="rank-desc">Имеет полное владение над отделом Ивентологии, может самостоятельно изменять состав отдела Ивентологии и их норму/правила.</div></div>
            </div>
            
            <!-- НОРМА -->
            <div class="section-block">
                <div class="section-title pink">НОРМА</div>
                <ul class="rule-list">
                    <li>Ивентер из другого отдела — кол-во тикетов из вашего отдела | 2 ивента в неделю</li>
                    <li>Ивентер — 30 тикетов | 2 ивента в неделю</li>
                    <li>Ст. Ивентер — 25 тикетов</li>
                    <li>Зам. Главы Ивентологии — не имеет нормы</li>
                    <li>Глава Ивентологии — не имеет нормы</li>
                </ul>
            </div>
            
            <!-- НОРМА ПОСЛЕ ОТПУСКА -->
            <div class="section-block">
                <div class="section-title orange">Норма после отпуска/заморозки/вступлении в отдел</div>
                <div class="norm-grid">
                    <div class="norm-card"><div class="norm-day">ПН</div><div class="norm-value">30 тикетов | 3 ивента</div></div>
                    <div class="norm-card"><div class="norm-day">ВТ</div><div class="norm-value">30 тикетов | 3 ивента</div></div>
                    <div class="norm-card"><div class="norm-day">СР</div><div class="norm-value">25 тикетов | 2 ивента</div></div>
                    <div class="norm-card"><div class="norm-day">ЧТ</div><div class="norm-value">20 тикетов | 1 ивент</div></div>
                    <div class="norm-card"><div class="norm-day">ПТ</div><div class="norm-value">15 тикетов | 1 ивент</div></div>
                    <div class="norm-card"><div class="norm-day">СБ</div><div class="norm-value">10 тикетов | 1 ивент</div></div>
                    <div class="norm-card"><div class="norm-day">ВС</div><div class="norm-value">Освобождены от нормы</div></div>
                </div>
                <div class="rank-card ivent" style="margin-top: 1rem;">
                    <div class="rank-name">Примечание</div>
                    <div class="rank-desc">Если вы состоите в другом отделе и вышли с отпуска/мороза — с четверга вы обязуетесь провести 1 ивент. Если с понедельника и до среды – 2 ивента.</div>
                </div>
            </div>
            
            <!-- НАКАЗАНИЯ -->
            <div class="section-block">
                <div class="section-title red">Наказания за невыполнение нормы</div>
                <div class="punishment-card"><strong>25-35 тикетов и 2-3 ивента:</strong> В случае уважительной причины недобор прощается, в другом случае выдается предупреждение.</div>
                <div class="punishment-card"><strong>15-24 тикета и 1-2 ивента:</strong> В случае уважительной причины выдается предупреждение, в другом случае выдается выговор.</div>
                <div class="punishment-card"><strong>0-14 тикета и 0-1 ивент:</strong> В случае уважительной причины выдается выговор, в другом случае снятие или два выговора.</div>
                <div class="punishment-card"><strong>Для ивентеров из другого отдела:</strong> Если проведено менее двух ивентов, выдается предупреждение. При уважительной причине недобор прощается.</div>
            </div>
            
            <!-- ЗАРПЛАТА -->
            <div class="section-block">
                <div class="section-title green">Зарплата</div>
                <div class="rank-card glava">
                    <div class="rank-desc">Зарплата выдаётся только за выполненные тикеты. Тех. Администрация не намеревается выдавать ЗП за ивенты, возможно когда-то в будущем у вас будет вознаграждение за ваши прекрасные ивенты.</div>
                </div>
            </div>
        </div>
    `;
}
    });
});

function renderAddonsPage() {
    const container = document.getElementById('eventDynamicContent');
    container.innerHTML = `
        <div class="page-header"><h2>🔧 Аддоны для строительства</h2></div>
        <div class="addons-grid">
            <div class="addon-card"><div class="addon-icon">🛠️</div><div class="addon-title">Вайт-Лист пропов 4-ого сервера</div><div class="addon-desc">Счётчик в 75 пропов</div><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3488412511" target="_blank" class="addon-link">Скачать</a></div>
            <div class="addon-card"><div class="addon-icon">📋</div><div class="addon-title">Advanced Duplicator</div><div class="addon-desc">Копирование построек</div><a href="https://steamcommunity.com/workshop/filedetails/?id=773402917" target="_blank" class="addon-link">Скачать</a></div>
            <div class="addon-card"><div class="addon-icon">📍</div><div class="addon-title">Precision Tool</div><div class="addon-desc">Точная установка пропов</div><a href="https://steamcommunity.com/workshop/filedetails/?id=104482086" target="_blank" class="addon-link">Скачать</a></div>
            <div class="addon-card"><div class="addon-icon">📦</div><div class="addon-title">Stacker</div><div class="addon-desc">Удобная укладка пропов</div><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=264467687" target="_blank" class="addon-link">Скачать</a></div>
            <div class="addon-card"><div class="addon-icon">🎨</div><div class="addon-title">Material</div><div class="addon-desc">Больше материалов</div><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=105841291" target="_blank" class="addon-link">Скачать</a></div>
            <div class="addon-card"><div class="addon-icon">🎨</div><div class="addon-title">Ещё больше материалов</div><div class="addon-desc">Дополнительные текстуры</div><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=730187817" target="_blank" class="addon-link">Скачать</a></div>
            <div class="addon-card"><div class="addon-icon">🌍</div><div class="addon-title">Весь контент 4-ого сервера</div><div class="addon-desc">Полный пак</div><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3297333501" target="_blank" class="addon-link">Скачать</a></div>
            <div class="addon-card"><div class="addon-icon">🗺️</div><div class="addon-title">Карта 4-ого сервера</div><div class="addon-desc">Тематическая карта</div><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3298873388" target="_blank" class="addon-link">Скачать</a></div>
        </div>
    `;
}

function renderAddEventForm() {
    const container = document.getElementById('eventDynamicContent');
    container.innerHTML = `
        <div class="page-header"><h2>📝 Добавить новый ивент</h2><button class="add-btn" id="backToEventsBtn">← Назад</button></div>
        <div style="background:var(--card-bg); border-radius:28px; padding:1.8rem; border:1px solid var(--card-border);">
            <div class="form-group"><label>Название ивента *</label><input type="text" id="eventName" placeholder="Введите название ивента"></div>
            <div class="form-group"><label>Краткое описание *</label><textarea id="eventDescription" rows="3" placeholder="Опишите ивент..."></textarea></div>
            <div class="form-row"><div class="form-group"><label>Время начала</label><input type="text" id="eventStartTime" placeholder="Например: 15.04.26, 18:30"></div><div class="form-group"><label>Время окончания</label><input type="text" id="eventEndTime" placeholder="Например: 15.04.26, 19:00"></div></div>
            <div class="form-group"><label>Количество участников</label><input type="number" id="eventMembers" placeholder="Сколько человек участвовало"></div>
            <div class="form-group"><label>Были призы? Если да, то какие</label><textarea id="eventPrizes" rows="2" placeholder="Напишите какие призы были выданы..."></textarea></div>
            <div class="form-group"><label>Организатор</label><input type="text" id="eventOrganizer" value="${currentUser || ''}" placeholder="Введите имя организатора"></div>
            <div class="form-group"><label>Помощники</label><input type="text" id="eventHelpers" placeholder="Перечислите помощников (через запятую)"><small style="color: var(--text-muted);">Кто помогал проводить ивент</small></div>
            <div class="form-group" style="background: var(--badge-bg); border-radius: 20px; padding: 1rem; margin-top: 1rem;"><label style="color: var(--text-primary);">📸 Скриншоты или видео</label><p style="font-size: 0.85rem; margin-bottom: 0.5rem;">Скиньте фотографии или видео в <strong>ветку бот-отчетность</strong></p><small style="color: var(--text-muted);">2-3 скриншота или видео, сделанных во время ивента</small></div>
            <button class="submit-btn" id="sendEventToDiscordBtn">📤 Отправить в Discord</button>
        </div>
    `;
    document.getElementById('backToEventsBtn')?.addEventListener('click', () => renderEventsTable());
    document.getElementById('sendEventToDiscordBtn')?.addEventListener('click', sendEventToDiscord);
}

async function sendEventToDiscord() {
    const name = document.getElementById('eventName')?.value.trim();
    const description = document.getElementById('eventDescription')?.value.trim();
    const startTime = document.getElementById('eventStartTime')?.value.trim() || 'Не указано';
    const endTime = document.getElementById('eventEndTime')?.value.trim() || 'Не указано';
    const members = document.getElementById('eventMembers')?.value.trim() || '0';
    const prizes = document.getElementById('eventPrizes')?.value.trim() || 'Не было';
    let organizer = document.getElementById('eventOrganizer')?.value.trim() || currentUser || 'Неизвестно';
    const helpers = document.getElementById('eventHelpers')?.value.trim() || 'Нет';
    
    if (!name || !description) {
        showNotif('❌ Заполните название и описание ивента!', true);
        return;
    }
    
    const sendBtn = document.getElementById('sendEventToDiscordBtn');
    sendBtn.disabled = true;
    sendBtn.textContent = '🔄 Отправка...';
    
    try {
        const date = startTime + " - " + endTime;
        const rating = (prizes !== 'Не было' ? prizes.replace(/[^0-9]/g, '') : '0') + '$';
        
        // 1. Сохраняем в Google Sheets
        const sheetResult = await addEventToSheet({
            name: name,
            platform: organizer,
            organizer: helpers,
            helpers: helpers,
            date: date,
            status: 'Проведен',
            rating: rating,
            members: members,
            description: description
        });
        
        if (!sheetResult.success) {
            throw new Error('Ошибка сохранения в таблицу');
        }
        
        // 2. Отправляем в Discord через Cloudflare Worker (вебхук скрыт!)
        const discordResponse = await fetch(`${CLOUDFLARE_API}/api/send-event`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                description: description,
                date: date,
                members: members,
                prizes: prizes,
                organizer: organizer,
                helpers: helpers
            })
        });
        
        const discordResult = await discordResponse.json();
        
        if (!discordResult.success) {
            console.warn('Discord warning:', discordResult.error);
        }
        
        showNotif('✅ Ивент добавлен!');
        
        await sendAuditLog('ADD_EVENT', {
    name: name,
    organizer: organizer,
    helpers: helpers,
    date: date,
    rating: rating,
    members: members,
    description: description
});

        // Очищаем форму
        document.getElementById('eventName').value = '';
        document.getElementById('eventDescription').value = '';
        document.getElementById('eventStartTime').value = '';
        document.getElementById('eventEndTime').value = '';
        document.getElementById('eventMembers').value = '';
        document.getElementById('eventPrizes').value = '';
        document.getElementById('eventOrganizer').value = '';
        document.getElementById('eventHelpers').value = '';
        
        // Обновляем таблицу
        await refreshEventsData();
        renderEventsTable();
        
        // Активируем вкладку с таблицей
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        document.querySelector('[data-tab="events_table"]')?.classList.add('active');
        
    } catch (error) {
        console.error('Send event error:', error);
        showNotif('❌ Ошибка: ' + error.message, true);
    } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = '📤 Отправить в Discord';
    }
}

// АВТОРИЗАЦИЯ
const loginOverlay = document.getElementById('loginOverlay');
const welcomeContainer = document.getElementById('welcomeContainer');
const mainDashboard = document.getElementById('mainDashboard');
const loginBtn = document.getElementById('loginBtn');
const loginInput = document.getElementById('loginInput');
const passInput = document.getElementById('passwordInput');
const errMsg = document.getElementById('errorMsg');
const contBtn = document.getElementById('continueBtn');
const logoutBtn = document.getElementById('logoutBtn');

function updateUIBasedOnRole() {
    const addMemberBtn = document.getElementById('addMemberNavBtn');
    if (addMemberBtn) {
        addMemberBtn.style.display = isEditor ? 'flex' : 'none';
    }
    
    const ticketsEditorBtn = document.getElementById('ticketsEditorBtn');
    if (ticketsEditorBtn) {
        ticketsEditorBtn.style.display = isEditor ? 'flex' : 'none';
    }
    
    const manageTeamBtn = document.getElementById('manageTeamBtn');
    if (manageTeamBtn) {
        manageTeamBtn.style.display = isEditor ? 'flex' : 'none';
    }
    
    // Добавляем кнопку импорта тикетов
    const importTicketsBtn = document.getElementById('importTicketsBtn');
    if (importTicketsBtn) {
        importTicketsBtn.style.display = isEditor ? 'flex' : 'none';
    }
}

// Инициализация модального окна добавления участника
const addMemberModal = document.getElementById('addMemberModal');
const addMemberNavBtn = document.getElementById('addMemberNavBtn');
const closeAddMemberModal = document.getElementById('closeAddMemberModal');
const saveMemberBtn = document.getElementById('saveMemberBtn');

if (addMemberNavBtn) {
    addMemberNavBtn.addEventListener('click', () => {
        addMemberModal.style.display = 'flex';
    });
}

if (closeAddMemberModal) {
    closeAddMemberModal.addEventListener('click', () => {
        addMemberModal.style.display = 'none';
    });
}

// Закрытие по клику на фон
window.addEventListener('click', (e) => {
    if (e.target === addMemberModal) {
        addMemberModal.style.display = 'none';
    }
});

function checkAuth() {
    const saved = sessionStorage.getItem('user');
    const savedIsEditor = sessionStorage.getItem('isEditor');
    const continued = sessionStorage.getItem('continued');
    if (saved && VALID_LOGINS.includes(saved)) {
        currentUser = saved;
        updateSidebarAvatar(saved);
        isEditor = savedIsEditor === 'true';
        loginOverlay.style.display = 'none';
        updateUIBasedOnRole();
        
        if (continued === 'true') {
            welcomeContainer.classList.add('hidden');
            mainDashboard.style.display = 'block';
            renderEventsTable();
            
            // ========== ДОБАВЬ ЗАГРУЗКУ КОМАНДЫ ==========
            refreshTeamData();  // 👈 Асинхронно загружаем команду
            // ============================================
            
            refreshEventsData();
            
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => item.classList.remove('active'));
            const eventsTab = document.querySelector('[data-tab="events_table"]');
            if (eventsTab) {
                eventsTab.classList.add('active');
            }
        } else {
            welcomeContainer.classList.remove('hidden');
            mainDashboard.style.display = 'none';
        }
    } else {
        currentUser = null;
        isEditor = false;
        loginOverlay.style.display = 'flex';
        welcomeContainer.classList.add('hidden');
        mainDashboard.style.display = 'none';
    }
}

let cachedPasswords = null;

async function doLogin() {
    const login = loginInput.value.trim();
    const pwd = passInput.value;
    
    if (!login || !pwd) {
        errMsg.textContent = "❌ Введите логин и пароль!";
        errMsg.classList.add('show');
        setTimeout(() => errMsg.classList.remove('show'), 2000);
        return;
    }
    
    loginBtn.disabled = true;
    loginBtn.textContent = '⏳ Вход...';
    
    try {
        const response = await fetch(`${CLOUDFLARE_API}/api/login`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'  // 👈 ЭТОТ ЗАГОЛОВОК ВАЖЕН!
            },
            body: JSON.stringify({ login, password: pwd })
        });
        
        const data = await response.json();
        
        if (data.success) {
            sessionStorage.setItem('user', data.user);
            sessionStorage.setItem('isEditor', data.isEditor);
            sessionStorage.setItem('continued', 'false');
            
            currentUser = data.user;
            isEditor = data.isEditor;
            
            sendAuditLog('LOGIN', {}).catch(err => console.error('Ошибка отправки лога входа:', err));
            
            loginOverlay.style.display = 'none';
            welcomeContainer.classList.remove('hidden');
            mainDashboard.style.display = 'none';
            
            updateSidebarAvatar(login);
            errMsg.classList.remove('show');
            showNotif(`✅ Добро пожаловать, ${login}!`);
            
            refreshEventsData();
        } else {
            errMsg.textContent = `❌ ${data.error || "Неверный логин или пароль!"}`;
            errMsg.classList.add('show');
            setTimeout(() => errMsg.classList.remove('show'), 2000);
        }
    } catch (error) {
        console.error('Login error:', error);
        errMsg.textContent = "❌ Ошибка соединения с сервером!";
        errMsg.classList.add('show');
        setTimeout(() => errMsg.classList.remove('show'), 2000);
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Войти';
    }
}

async function onContinue() {
    showBugReportMessage();

    sessionStorage.setItem('continued', 'true');
    welcomeContainer.classList.add('hidden');
    mainDashboard.style.display = 'block';
    renderEventsTable();
    
    showGlobalLoading();
    await refreshEventsData();
    await refreshTeamData();  // 👈 ДОБАВЬ ЭТУ СТРОКУ
    hideGlobalLoading();
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    const eventsTab = document.querySelector('[data-tab="events_table"]');
    if (eventsTab) {
        eventsTab.classList.add('active');
    }
}

function logout() {
    if (currentUser) {
        sendAuditLog('LOGOUT', {}).catch(err => console.error('Ошибка отправки лога выхода:', err));
    }
    
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('isEditor');
    sessionStorage.removeItem('continued');
    checkAuth();
    showNotif('👋 Вы вышли из системы');
}

loginBtn.addEventListener('click', doLogin);
contBtn.addEventListener('click', onContinue);
logoutBtn.addEventListener('click', logout);
loginInput.addEventListener('keypress', e => e.key === 'Enter' && doLogin());
passInput.addEventListener('keypress', e => e.key === 'Enter' && doLogin());

const modal = document.getElementById('infoModal');
document.getElementById('closeModalBtn')?.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

loadAllData();
checkAuth();

const bg = document.getElementById('moving-bg');
if (bg) {
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    function smoothAnimate() {
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        bg.style.transform = `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`;
        requestAnimationFrame(smoothAnimate);
    }
    document.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 15;
        targetY = (e.clientY / window.innerHeight - 0.5) * 15;
    });
    smoothAnimate();
    }

function updateSidebarAvatar(username) {
    const avatarImg = document.querySelector('.sidebar-logo');
    if (!avatarImg) return;

    const avatarMap = {
        "T1Ran": "https://avatars.akamai.steamstatic.com/57dac1d4d44de03338708c08310198b23192ab51_full.jpg", 
        "manisule": "https://avatars.akamai.steamstatic.com/3973c828510cfd75f32b6a4d09bffa642f6c975f_full.jpg",
        "Гербикс": "https://avatars.akamai.steamstatic.com/3acd2544afbc953feb4af6da64440fa4bf48618e_full.jpg",
        "Arbuz madrazo": "https://avatars.akamai.steamstatic.com/60c2b352131f11a8bcbd08f452decd9dfea10a32_full.jpg",
        "somcop": "https://avatars.akamai.steamstatic.com/181420ae4a4f46eabd79c3b6b56e5e5e70aa4b91_full.jpg",
        "Foxy": "https://avatars.akamai.steamstatic.com/e2ae91fee516fc12a05fbfe995f52891db03c63f_full.jpg",
        "Дмитрий Морозов": "https://avatars.akamai.steamstatic.com/5a54395d65879aed3fc59787f1d9eaf21a839ff5_full.jpg",
        "Гофикал": "https://avatars.akamai.steamstatic.com/ed77d818ec20ca4aad3417f5033647f79229c92a_full.jpg",
        "Himas": "https://avatars.akamai.steamstatic.com/40ddf358c9028e084e617b8edecfdc620e5c12c9_full.jpg",
        "yaroslav1432": "https://shared.akamai.steamstatic.com/community_assets/images/items/1313140/4ae9f2b8739631ea806a9508785f0445557e9bff.gif",
        "кусочек шаурмы": "https://avatars.akamai.steamstatic.com/a350434d0216c11358393f13cf8a95bfcf1509db_full.jpg",
        "gans7824": "https://avatars.akamai.steamstatic.com/7ccb0ac2e182c765a7ddf35bb64dde75e26ddfc2_full.jpg"
    };
    
    const newAvatar = avatarMap[username] || "https://i.ytimg.com/vi/_pMmC52HB2k/hqdefault.jpg";
    avatarImg.src = newAvatar;
}

doLogin

const avatarImg = document.querySelector('.sidebar-logo');
const settingsModal = document.getElementById('settingsModal');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const brightnessSlider = document.getElementById('brightnessSlider');
const brightnessValue = document.getElementById('brightnessValue');
const bgOptions = document.querySelectorAll('.bg-option');
const userEventsCountSpan = document.getElementById('userEventsCount');
const userPrizesCountSpan = document.getElementById('userPrizesCount');
const userJoinDateSpan = document.getElementById('userJoinDate');

// Функция форматирования даты (убедись, что она есть в начале файла)
function formatDate(dateString) {
    if (!dateString) return 'Дата не указана';
    
    // Если дата уже в нормальном формате (ДД.ММ.ГГ)
    if (dateString.match(/^\d{2}\.\d{2}\.\d{2}/)) {
        return dateString;
    }
    
    // Пробуем распарсить ISO формат (2026-03-13T21:00:00.000Z)
    try {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = String(date.getFullYear()).slice(-2);
            return `${day}.${month}.${year}`;
        }
    } catch(e) {
        console.error('Ошибка парсинга даты:', e);
    }
    
    // Если ничего не помогло, возвращаем как есть
    return dateString;
}

// Функция получения статистики пользователя (ИСПРАВЛЕННАЯ)
function getUserStats() {
    const username = currentUser || sessionStorage.getItem('user') || 'Гость';
    let userEvents = eventsData.filter(e => e.platform === username).length;
    let totalPrizes = 0;
    eventsData.forEach(e => {
        if (e.platform === username) {
            let clean = String(e.rating).replace(/[^0-9]/g, '');
            let num = parseInt(clean);
            if (!isNaN(num)) totalPrizes += num;
        }
    });
    
    // Берем дату вступления из teamData
    const userInfo = teamData.find(m => m.name === username);
    let joinDate = "14.03.26";
    if (userInfo && userInfo.joinDate) {
        // ПРИМЕНЯЕМ ФОРМАТИРОВАНИЕ ДАТЫ ЗДЕСЬ!
        joinDate = formatDate(userInfo.joinDate);
    }
    
    return { events: userEvents, prizes: totalPrizes, joinDate: joinDate };
}

// Функция обновления отображения статистики
function updateStatsDisplay() {
    const stats = getUserStats();
    if (userEventsCountSpan) userEventsCountSpan.textContent = stats.events;
    if (userPrizesCountSpan) userPrizesCountSpan.textContent = stats.prizes.toLocaleString() + '$';
    if (userJoinDateSpan) userJoinDateSpan.textContent = stats.joinDate;
}

function updateStatsDisplay() {
    const stats = getUserStats();
    if (userEventsCountSpan) userEventsCountSpan.textContent = stats.events;
    if (userPrizesCountSpan) userPrizesCountSpan.textContent = stats.prizes.toLocaleString() + '$';
    if (userJoinDateSpan) userJoinDateSpan.textContent = stats.joinDate;
}

function applyBrightness(value) {
    const percent = value / 100;
    const bg = document.getElementById('moving-bg');
    if (bg) {
        bg.style.filter = `brightness(${percent}) blur(8px) saturate(0) grayscale(1)`;
    }
    let overlay = document.getElementById('brightnessOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'brightnessOverlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none';
        overlay.style.zIndex = '9998';
        overlay.style.transition = 'background-color 0.2s ease';
        document.body.appendChild(overlay);
    }
    if (value < 100) {
        const darkAmount = (100 - value) / 100;
        overlay.style.backgroundColor = `rgba(0, 0, 0, ${darkAmount * 0.5})`;
    } else if (value > 100) {
        const lightAmount = (value - 100) / 100;
        overlay.style.backgroundColor = `rgba(255, 255, 255, ${lightAmount * 0.3})`;
    } else {
        overlay.style.backgroundColor = 'transparent';
    }
    if (brightnessValue) brightnessValue.textContent = value + '%';
}

function applyBackground(bgId) {
    const bgUrls = {
        1: 'https://imgfy.ru/ib/XGApUH780EjwsYN_1776609369.webp',
        2: 'https://imgfy.ru/ib/qv3BW9jCym57tnU_1776609369.webp',
        3: 'https://imgfy.ru/ib/lEqijyGxCjX8z3l_1776609368.webp',
        4: 'https://imgfy.ru/ib/msGNDVjfXFM4ffS_1776609635.webp',
        5: 'https://imgfy.ru/ib/yTWGwkqDzLAjhoc_1776609368.webp',
        6: 'https://i.ibb.co/vC3t0sSq/Garrys-Mod-x64-18-04-2026-22-21-03.png'
    };
    const bgElement = document.getElementById('moving-bg');
    if (bgElement && bgUrls[bgId]) {
        bgElement.style.backgroundImage = `url('${bgUrls[bgId]}')`;
    }
}

function openSettings() {
    updateStatsDisplay();
    settingsModal.classList.add('show');
}

function closeSettings() {
    settingsModal.classList.remove('show');
}

function loadSavedSettings() {
    const savedBrightness = localStorage.getItem('brightness');
    if (savedBrightness && brightnessSlider) {
        brightnessSlider.value = savedBrightness;
        applyBrightness(savedBrightness);
    }
    const savedBg = localStorage.getItem('selectedBg');
    if (savedBg) {
        applyBackground(savedBg);
        bgOptions.forEach(opt => {
            if (opt.dataset.bg === savedBg) {
                opt.classList.add('selected');
            } else {
                opt.classList.remove('selected');
            }
        });
    }
}

function saveAllSettings() {
    const brightness = brightnessSlider.value;
    localStorage.setItem('brightness', brightness);
    applyBrightness(brightness);
    const selectedBg = document.querySelector('.bg-option.selected');
    if (selectedBg) {
        localStorage.setItem('selectedBg', selectedBg.dataset.bg);
        applyBackground(selectedBg.dataset.bg);
    }
    closeSettings();
    showNotif('✅ Настройки сохранены!');
}

bgOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        bgOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
    });
});

if (brightnessSlider) {
    brightnessSlider.addEventListener('input', (e) => {
        applyBrightness(parseInt(e.target.value));
    });
}

if (avatarImg) avatarImg.addEventListener('click', openSettings);
if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', closeSettings);
if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', saveAllSettings);
if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) closeSettings();
    });
}
openEditEventModal
loadSavedSettings();

const salaryBtn = document.getElementById('salaryBtn');
const salaryModal = document.getElementById('salaryModal');
const closeSalaryBtn = document.getElementById('closeSalaryBtn');
const salaryAudio = document.getElementById('salaryAudio');

function openSalaryModal() {
    salaryModal.classList.add('show');
    if (salaryAudio) {
        salaryAudio.play().catch(e => console.log('Автовоспроизведение заблокировано, нажмите на окно'));
    }
}

function closeSalaryModal() {
    salaryModal.classList.remove('show');
    if (salaryAudio) {
        salaryAudio.pause();
        salaryAudio.currentTime = 0; 
    }
}

if (salaryBtn) {
    salaryBtn.addEventListener('click', openSalaryModal);
}

if (closeSalaryBtn) {
    closeSalaryBtn.addEventListener('click', closeSalaryModal);
}

if (salaryModal) {
    salaryModal.addEventListener('click', function(e) {
        if (e.target === salaryModal) {
            closeSalaryModal();
        }
    });
}

if (salaryModal) {
    salaryModal.addEventListener('click', function() {
        if (salaryModal.classList.contains('show') && salaryAudio && salaryAudio.paused) {
            salaryAudio.play().catch(e => console.log('Всё ещё заблокировано'));
        }
    });
}

   const BanConfig = {
        containerId:     'banContainer',
        texts: [
            { text: 'БАН',            weight: 4 },
            { text: 'ВЫГОВОР',        weight: 3 },
            { text: 'ПРЕДУПРЕЖДЕНИЕ', weight: 2 },
            { text: 'ЧСП',            weight: 2 }
        ],
        spawnRateMs:     250,
        initialBurst:    40,
        burstIntervalMs: 120,
        minSize: 8,
        maxSize: 20,
        animations: ['flyRight', 'flyLeft', 'flyUp', 'flyDiagonal']
    };

    function getRandomText() {
        const totalWeight = BanConfig.texts.reduce((sum, item) => sum + item.weight, 0);
        let random = Math.random() * totalWeight;
        for (const item of BanConfig.texts) { random -= item.weight; if (random <= 0) return item.text; }
        return BanConfig.texts[0].text;
    }

    function createBanText() {
        if (document.hidden) return;
        const container = document.getElementById(BanConfig.containerId);
        if (!container) return;
        const el           = document.createElement('span');
        el.className       = 'ban-text';
        el.setAttribute('aria-hidden', 'true');
        const selectedText = getRandomText();
        el.textContent     = selectedText;
        el.dataset.type    = selectedText.toLowerCase();
        if (Math.random() > 0.75) el.classList.add('glow');
        let size = BanConfig.minSize + Math.random() * (BanConfig.maxSize - BanConfig.minSize);
        if (selectedText.length > 6) size *= 0.7;
        el.style.fontSize = `${size}px`;
        el.style.setProperty('--max-opacity', (0.10 + Math.random() * 0.18).toFixed(2));
        el.style.setProperty('--rot', `${-25 + Math.random() * 50}deg`);
        el.style.top  = `${Math.random() * 100}%`;
        el.style.left = `${Math.random() * 100}%`;
        const anim     = BanConfig.animations[Math.floor(Math.random() * BanConfig.animations.length)];
        const duration = 6 + Math.random() * 8;
        el.style.animation = `${anim} ${duration}s linear forwards, gradientPulse ${2 + Math.random() * 2}s ease-in-out infinite`;
        container.appendChild(el);
        setTimeout(() => { if (el.parentNode) el.remove(); }, duration * 1000 + 300);
    }

    function startBanAnimation() {
        for (let i = 0; i < BanConfig.initialBurst; i++) setTimeout(createBanText, i * BanConfig.burstIntervalMs);
        setInterval(createBanText, BanConfig.spawnRateMs);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startBanAnimation);
    else startBanAnimation();

    let sweetEarnIsOpen       = false;
    let sweetEarnCloseTimer   = null;
    let sweetEarnCleanupTimer = null;

    function initSweetEarnFeature() {
    if (window.__sweetEarnFeatureInit) return;
    window.__sweetEarnFeatureInit = true;

    function getSweetEarnEls() {
        return {
            overlay:   document.getElementById('sweetEarnOverlay'),
            text:      document.getElementById('sweetEarnText'),
            imageWrap: document.getElementById('sweetEarnImageWrap')
        };
    }

    function clearSweetEarnTimers() {
        if (sweetEarnCloseTimer)   { clearTimeout(sweetEarnCloseTimer);   sweetEarnCloseTimer   = null; }
        if (sweetEarnCleanupTimer) { clearTimeout(sweetEarnCleanupTimer); sweetEarnCleanupTimer = null; }
    }

    function openSweetEarn() {
        const { overlay, text, imageWrap } = getSweetEarnEls();
        if (!overlay || !text || !imageWrap) { console.error('SweetEarn: элементы не найдены'); return; }
        clearSweetEarnTimers();
        sweetEarnIsOpen = true;
        overlay.classList.remove('sweet-earn-hide', 'is-closing', 'is-active', 'is-flashing');
        text.classList.remove('animate');
        imageWrap.classList.remove('animate');
        void overlay.offsetWidth; void text.offsetWidth; void imageWrap.offsetWidth;
        overlay.classList.add('is-active', 'is-flashing');
        overlay.setAttribute('aria-hidden', 'false');
        text.classList.add('animate');
        setTimeout(() => imageWrap.classList.add('animate'), 180);
        sweetEarnCloseTimer = setTimeout(closeSweetEarn, 7000);
    }

    function closeSweetEarn() {
        const { overlay, text, imageWrap } = getSweetEarnEls();
        if (!overlay) return;
        clearSweetEarnTimers();
        sweetEarnIsOpen = false;
        overlay.classList.remove('is-active', 'is-flashing');
        overlay.classList.add('is-closing');
        overlay.setAttribute('aria-hidden', 'true');
        sweetEarnCleanupTimer = setTimeout(() => {
            overlay.classList.add('sweet-earn-hide');
            overlay.classList.remove('is-closing');
            if (text)      text.classList.remove('animate');
            if (imageWrap) imageWrap.classList.remove('animate');
        }, 450);
    }
initSweetEarnFeature()

// Закрытие модалки
const closeEditModalBtn = document.getElementById('closeEditEventModal');
if (closeEditModalBtn) {
    closeEditModalBtn.addEventListener('click', function() {
        document.getElementById('editEventModal').style.display = 'none';
    });
}

// Сохранение
const saveEditBtn = document.getElementById('saveEditEventBtn');
if (saveEditBtn) {
    saveEditBtn.addEventListener('click', async function() {
        const eventId = parseInt(document.getElementById('editEventId').value);
        const name = document.getElementById('editEventName').value.trim();
        const description = document.getElementById('editEventDescription').value.trim();
        const date = document.getElementById('editEventDate').value.trim();
        const rating = document.getElementById('editEventRating').value.trim();
        const members = document.getElementById('editEventMembers').value.trim();
        const helpers = document.getElementById('editEventHelpers').value.trim();
        
        if (!name) {
            showNotif('❌ Название обязательно!', true);
            return;
        }
        
        this.disabled = true;
        
        const result = await updateEventInSheet({
            id: eventId,
            name,
            description,
            date,
            rating,
            members,
            helpers
        });
        
        if (result.success) {
            showNotif('✅ Ивент обновлён');
            document.getElementById('editEventModal').style.display = 'none';
            await refreshEventsData();
        } else {
            showNotif('❌ Ошибка обновления', true);
        }
        
        this.disabled = false;
    });
}

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sweetEarnIsOpen) closeSweetEarn();
    });
}

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbypHeOJJsTeeYryopA4g1lrg_cUQa1FfkpKv5WzD_VWnU1toj-rz6YLIhz3CKEYUY0Pig/exec';

function syncStatusToSheet(eventId, newStatus, userName) {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_status_sync_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            console.log('✅ Статус сохранён в Google Sheets:', eventId, newStatus, data);
            resolve(data || { success: true });
        };
        
        const params = new URLSearchParams({
            action: 'updateStatus',
            eventId: eventId,
            newStatus: newStatus,
            userName: userName || 'Система',
            callback: callbackName
        });
        
        script.src = `${GOOGLE_SHEETS_URL}?${params.toString()}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            console.error('❌ Ошибка сохранения статуса');
            resolve({ success: false, error: 'Network error' });
        };
        document.body.appendChild(script);
    });
}

function loadStatusesFromSheet() {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_status_load_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(Array.isArray(data) ? data : []);
        };
        
        script.src = `${GOOGLE_SHEETS_URL}?callback=${callbackName}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve([]);
        };
        document.body.appendChild(script);
    });
}

async function loadAndApplyStatuses() {
    const statuses = await loadStatusesFromSheet();
    console.log('Загруженные статусы из таблицы:', statuses);
    
    if (statuses && statuses.length > 0) {
        statuses.forEach(item => {
            const eventId = parseInt(item['ID ивента']);
            const statusFromSheet = item['Статус'];
            
            // Находим ивент в eventsData
            const event = eventsData.find(e => e.id === eventId);
            if (event && statusFromSheet) {
                // Сохраняем статус как есть (с эмодзи)
                let cleanStatus = statusFromSheet;
                if (statusFromSheet === 'Одобрен') cleanStatus = '✅Одобрен';
                else if (statusFromSheet === 'Отказано') cleanStatus = '🔴Отказано';
                else if (statusFromSheet === 'Скоро') cleanStatus = '🟡Скоро';
                
                event.callStatus = cleanStatus;
                console.log(`Применён статус для ивента ${eventId}: ${cleanStatus}`);
            }
        });
        saveAllData();
        renderEventsTable();
    }
}

async function initStatuses() {
    await loadAndApplyStatuses();
    renderEventsTable();
    console.log('Статусы загружены из Google Sheets');
}

initStatuses();

function refreshStatusesFromSheet() {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_status_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = async (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            
            console.log('Получены данные из таблицы статусов:', data);
            
            let updated = false;
            if (Array.isArray(data)) {
                for (const item of data) {
                    // ПРАВИЛЬНЫЕ КЛЮЧИ!
                    const eventId = parseInt(item['ID ивента']);
                    const newStatus = item['Статус'];
                    
                    let cleanStatus = newStatus;
                    if (newStatus && newStatus.includes('✅')) cleanStatus = '✅Одобрен';
                    else if (newStatus && newStatus.includes('🔴')) cleanStatus = '🔴Отказано';
                    else if (newStatus && newStatus.includes('🟡')) cleanStatus = '🟡Скоро';
                    
                    const event = eventsData.find(e => e.id === eventId);
                    if (event && event.callStatus !== cleanStatus) {
                        event.callStatus = cleanStatus;
                        updated = true;
                        console.log(`Обновлён статус ивента ${eventId}: ${cleanStatus}`);
                    }
                }
            }
            
            if (updated) {
                saveAllData();
                renderEventsTable();
                showNotif('📊 Статусы обновлены');
            }
            
            resolve(data);
        };
        
        script.src = `${GOOGLE_SHEETS_URL}?callback=${callbackName}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve([]);
        };
        document.body.appendChild(script);
    });
}

showImportButton();
initImportButton();

setInterval(() => {
    refreshStatusesFromSheet();
}, 180000);
    
function openEditEventModal(eventId) {
    const event = eventsData.find(ev => ev.id === eventId);
    if (!event) {
        console.error('Ивент не найден:', eventId);
        showNotif('❌ Ивент не найден', true);
        return;
    }
    
    const modal = document.getElementById('editEventModal');
    if (!modal) {
        console.error('Модалка editEventModal не найдена в DOM');
        showNotif('❌ Ошибка: модальное окно не найдено', true);
        return;
    }
    
    // Заполняем поля
    document.getElementById('editEventId').value = event.id;
    document.getElementById('editEventName').value = event.name || '';
    document.getElementById('editEventDescription').value = event.fullDetails?.description || '';
    document.getElementById('editEventDate').value = event.date || '';
    document.getElementById('editEventRating').value = event.rating || '';
    document.getElementById('editEventMembers').value = event.members || '';
    
    // ИСПРАВЛЕНО: helpers - это помощники, а organizer - это организатор
    document.getElementById('editEventHelpers').value = event.helpers || '';  // ПОМОЩНИКИ
    
    // Показываем модалку
    modal.style.display = 'flex';
}

async function deleteEventHandler(eventId) {
    if (!confirm('🗑️ Удалить ивент навсегда? Это действие нельзя отменить!')) {
        return;
    }
    
    // ========== СОХРАНЯЕМ ДАННЫЕ ДО УДАЛЕНИЯ ==========
    const eventToDelete = eventsData.find(e => e.id === eventId);
    if (!eventToDelete) {
        showNotif('❌ Ивент не найден', true);
        return;
    }
    // =================================================
    
    const result = await deleteEventFromSheet(eventId);
    if (result.success) {
        // ========== ОТПРАВЛЯЕМ ЛОГ ПОСЛЕ УСПЕШНОГО УДАЛЕНИЯ ==========
        await sendAuditLog('DELETE_EVENT', {
            eventId: eventId,
            name: eventToDelete.name,
            organizer: eventToDelete.organizer || eventToDelete.platform,
            date: eventToDelete.date,
            rating: eventToDelete.rating
        });
        // ============================================================
        
        showNotif('✅ Ивент удалён');
        await refreshEventsData();
        renderEventsTable();
    } else {
        showNotif('❌ Ошибка удаления: ' + (result.error || 'неизвестная ошибка'), true);
    }
}

// Глобальный обработчик кликов для кнопок (ОСНОВНОЙ)
document.addEventListener('click', function(e) {
    // Кнопка редактирования
    const editBtn = e.target.closest('.edit-event-btn');
    if (editBtn) {
        e.preventDefault();
        e.stopPropagation();
        const eventId = parseInt(editBtn.dataset.id);
        console.log('Редактирование ивента:', eventId);
        openEditEventModal(eventId);
        return;
    }
    
    // Кнопка удаления
    const deleteBtn = e.target.closest('.delete-event-btn');
    if (deleteBtn) {
        e.preventDefault();
        e.stopPropagation();
        const eventId = parseInt(deleteBtn.dataset.id);
        console.log('Удаление ивента:', eventId);
        deleteEventHandler(eventId);
        return;
    }
});

// ========== ПОКАЗ СООБЩЕНИЯ О БАГАХ ПОСЛЕ КНОПКИ "ПРОДОЛЖИТЬ" ==========
let bugMessageActive = false;

// Функция для принудительного скрытия сообщения (если нужно)
function hideBugReportMessage() {
    const messageDiv = document.getElementById('bugMessageBlock');
    if (messageDiv) {
        messageDiv.remove();
        bugMessageActive = false;
    }
}

// Закрытие модалки редактирования
const closeEditModalBtn = document.getElementById('closeEditEventModal');
if (closeEditModalBtn) {
    closeEditModalBtn.addEventListener('click', function() {
        document.getElementById('editEventModal').style.display = 'none';
    });
}

// Закрытие по клику на фон
const editEventModal = document.getElementById('editEventModal');
if (editEventModal) {
    editEventModal.addEventListener('click', function(e) {
        if (e.target === editEventModal) {
            editEventModal.style.display = 'none';
        }
    });
}

// Сохранение изменений
const saveEditBtn = document.getElementById('saveEditEventBtn');
if (saveEditBtn) {
    saveEditBtn.addEventListener('click', async function() {
        const eventId = parseInt(document.getElementById('editEventId').value);
        const name = document.getElementById('editEventName').value.trim();
        const description = document.getElementById('editEventDescription').value.trim();
        const date = document.getElementById('editEventDate').value.trim();
        const rating = document.getElementById('editEventRating').value.trim();
        const members = document.getElementById('editEventMembers').value.trim();
        const helpers = document.getElementById('editEventHelpers').value.trim();
        
        if (!name) {
            showNotif('❌ Название ивента обязательно!', true);
            return;
        }
        
        // Внутри обработчика сохранения, до обновления:
const oldEvent = eventsData.find(e => e.id === eventId);

// После успешного обновления:
await sendAuditLog('EDIT_EVENT', 
    { eventId: eventId, name: name },
    { 
        name: oldEvent.name,
        description: oldEvent.fullDetails?.description,
        date: oldEvent.date,
        rating: oldEvent.rating,
        members: oldEvent.members,
        helpers: oldEvent.helpers
    },
    {
        name: name,
        description: description,
        date: date,
        rating: rating,
        members: members,
        helpers: helpers
    }
);

        // Блокируем кнопку
        this.disabled = true;
        this.textContent = '💾 Сохранение...';
        
        // Обновляем в Google Sheets
        const result = await updateEventInSheet({
            id: eventId,
            name: name,
            description: description,
            date: date,
            rating: rating,
            members: members,
            helpers: helpers
        });
        
        if (result.success) {
            showNotif('✅ Ивент сохранён! Обновление через 2 секунды...');
            document.getElementById('editEventModal').style.display = 'none';
            
            // Показываем индикатор загрузки
            showGlobalLoading();
            
            // ЖДЕМ 2 СЕКУНДЫ И ОБНОВЛЯЕМ
            setTimeout(async () => {
                await refreshEventsData();  // Загружаем свежие данные
                renderEventsTable();        // Перерисовываем таблицу
                hideGlobalLoading();        // Скрываем индикатор
                showNotif('✅ Таблица обновлена!');
            }, 2000);
            
        } else {
            showNotif('❌ Ошибка обновления: ' + (result.error || 'неизвестная ошибка'), true);
            this.disabled = false;
            this.textContent = '💾 Сохранить';
        }
        
        // Разблокируем кнопку (только если не было ошибки, иначе уже разблокировали)
        if (result.success) {
            this.disabled = false;
            this.textContent = '💾 Сохранить';
        }

    });
}



(function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const ctx = canvas.getContext('2d');
    

    const PARTICLE_COUNT = 120;        
    const COLORS = ['#ff66cc', '#c9a0ff', '#ff99ff', '#ff66aa', '#d4b8ff', '#ff88dd'];
    const MOUSE_RADIUS = 100;          
    
    let particles = [];
    let mouseX = null, mouseY = null;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 4 + 2;
            this.speedX = (Math.random() - 0.5) * 1.5;
            this.speedY = (Math.random() - 0.5) * 1.5;
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            this.alpha = Math.random() * 0.6 + 0.3;
            this.angle = Math.random() * Math.PI * 2;
            this.angleSpeed = (Math.random() - 0.5) * 0.05;
            this.sizePulse = Math.random() * 0.05 + 0.02;
            this.pulseDir = 1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            this.size += this.sizePulse * this.pulseDir;
            if (this.size > 6) this.pulseDir = -1;
            if (this.size < 2) this.pulseDir = 1;
            
            this.angle += this.angleSpeed;
            
            if (mouseX !== null && mouseY !== null) {
                const dx = this.x - mouseX;
                const dy = this.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    const angle = Math.atan2(dy, dx);
                    this.x += Math.cos(angle) * force * 3;
                    this.y += Math.sin(angle) * force * 3;
                }
            }
            
            if (this.x < -20) this.x = canvas.width + 20;
            if (this.x > canvas.width + 20) this.x = -20;
            if (this.y < -20) this.y = canvas.height + 20;
            if (this.y > canvas.height + 20) this.y = -20;
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const radius = this.size * (i % 2 === 0 ? 1 : 0.5);
                const x = Math.cos(i * 72 * Math.PI / 180) * radius;
                const y = Math.sin(i * 72 * Math.PI / 180) * radius;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.globalAlpha = this.alpha * 0.5;
            ctx.fill();
            
            ctx.restore();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let p of particles) {
            p.update();
            p.draw();
        }
        
        ctx.globalAlpha = 0.15;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 80) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = particles[i].color;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
        ctx.globalAlpha = 1;
        
        requestAnimationFrame(animateParticles);
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    document.addEventListener('mouseleave', () => {
        mouseX = null;
        mouseY = null;
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    initParticles();
    animateParticles();

    
})();

// ========== КАСТОМНЫЙ КУРСОР ==========
(function() {
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');
    
    if (!cursor || !cursorDot) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1.2)';
        cursor.style.transition = 'transform 0.1s ease';
        cursorDot.style.transition = 'transform 0.1s ease';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.transition = 'transform 0.15s ease-out';
        cursorDot.style.transition = 'transform 0.15s ease-out';
    });
    
    const clickables = document.querySelectorAll('a, button, .clickable-row, .clickable-card, .nav-item, .status-change-btn, .comment-send-btn, .continue-btn, .login-btn, .submit-btn, .close-modal, .settings-save, .logout-btn');
    
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    document.body.style.cursor = 'none';
})();

// ========== КНОПКА 67 ==========
function play67Track() {
    const audio = new Audio();
    audio.src = 'https://videotourl.com/audio/1776950054502-7076b567-2429-4db8-8053-ece161ff38ac.mp3';
    audio.volume = 0.7;
    showNotif('Вам конец, ребенок 67 взломал вас');
    audio.play().catch(e => console.log('Ошибка воспроизведения:', e));
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        showNotif('Успешный взлом!');
    }, 6000);
}

const play67Btn = document.getElementById('play67FooterBtn');
if (play67Btn) {
    play67Btn.addEventListener('click', play67Track);
}

// ========== КНОПКА УПРАВЛЕНИЯ ТИКЕТАМИ ==========
const ticketsEditorBtn = document.getElementById('ticketsEditorBtn');
if (ticketsEditorBtn) {
    ticketsEditorBtn.addEventListener('click', () => {
        console.log('Кнопка нажата!');
        renderTicketsEditor();
    });
} else {
    console.log('Кнопка ticketsEditorBtn НЕ НАЙДЕНА');
}

// ========== УПРАВЛЕНИЕ КОМАНДОЙ ==========
const manageTeamBtn = document.getElementById('manageTeamBtn');
const addTeamMemberModal = document.getElementById('addTeamMemberModal');
const closeTeamMemberModal = document.getElementById('closeTeamMemberModal');
const saveTeamMemberBtn = document.getElementById('saveTeamMemberBtn');

// Открытие модального окна добавления участника
if (manageTeamBtn) {
    manageTeamBtn.addEventListener('click', () => {
        if (!isEditor) {
            showNotif('❌ Нет прав для управления командой', true);
            return;
        }
        // Очищаем поля
        document.getElementById('teamMemberName').value = '';
        document.getElementById('teamMemberRole').value = '';
        document.getElementById('teamMemberDiscord').value = '';
        document.getElementById('teamMemberAvatar').value = '';
        document.getElementById('teamMemberJoinDate').value = '';
        document.getElementById('teamMemberRating').value = '';
        document.getElementById('teamMemberCategory').value = 'Младший состав';
        document.getElementById('teamMemberStatus').value = 'Онлайн';
        addTeamMemberModal.style.display = 'flex';
    });
}

// Закрытие модального окна
if (closeTeamMemberModal) {
    closeTeamMemberModal.addEventListener('click', () => {
        addTeamMemberModal.style.display = 'none';
    });
}

// Закрытие по клику на фон
if (addTeamMemberModal) {
    addTeamMemberModal.addEventListener('click', (e) => {
        if (e.target === addTeamMemberModal) {
            addTeamMemberModal.style.display = 'none';
        }
    });
}

// Сохранение нового участника
if (saveTeamMemberBtn) {
    saveTeamMemberBtn.addEventListener('click', async () => {
        const name = document.getElementById('teamMemberName').value.trim();
        const role = document.getElementById('teamMemberRole').value.trim();
        const discord = document.getElementById('teamMemberDiscord').value.trim();
        let avatar = document.getElementById('teamMemberAvatar').value.trim();
        const joinDate = document.getElementById('teamMemberJoinDate').value.trim();
        const rating = document.getElementById('teamMemberRating').value.trim();
        const category = document.getElementById('teamMemberCategory').value;
        const status = document.getElementById('teamMemberStatus').value;
        
        // Валидация
        if (!name) {
            showNotif('❌ Введите никнейм!', true);
            return;
        }
        if (!role) {
            showNotif('❌ Введите роль!', true);
            return;
        }
        if (!discord) {
            showNotif('❌ Введите Discord ID!', true);
            return;
        }
        if (!joinDate) {
            showNotif('❌ Введите дату вступления!', true);
            return;
        }
        if (!rating) {
            showNotif('❌ Введите ранг!', true);
            return;
        }
        
        // Если аватарка не указана, используем дефолтную
        if (!avatar) {
            avatar = "https://i.imgur.com/IAIJe65.png";
        }
        
        // Добавляем аватарку в avatarMap
        avatarMap[name] = avatar;
        
        saveTeamMemberBtn.disabled = true;
        saveTeamMemberBtn.textContent = '⏳ Добавление...';
        
        try {
            const steamId = document.getElementById('teamMemberSteamId').value.trim();  

            const result = await addMemberToSheet({
                name: name,
                role: role,
                discord: discord,
                steamId: steamId,
                avatar: avatar,
                joinDate: joinDate,
                rating: rating,
                category: category,
                status: status
            });
            
            if (result.success) {
                showNotif(`✅ Участник ${name} добавлен в команду!`);
                
                // Отправляем лог в аудит
                await sendAuditLog('ADD_MEMBER', {
                    name: name,
                    role: role,
                    rating: rating,
                    category: category
                });
                
                // Закрываем модалку
                addTeamMemberModal.style.display = 'none';
                
                // Обновляем данные команды
                await refreshTeamData();
                
                // Обновляем отображение
                renderTeamTable();
            } else {
                showNotif(`❌ Ошибка: ${result.error || 'неизвестная ошибка'}`, true);
            }
        } catch (error) {
            console.error('Ошибка добавления участника:', error);
            showNotif('❌ Ошибка соединения с сервером', true);
        } finally {
            saveTeamMemberBtn.disabled = false;
            saveTeamMemberBtn.textContent = '➕ Добавить участника';
        }
    });
}

function updateMemberInSheet(memberData) {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_update_member_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            console.log('Ответ сервера при обновлении участника:', data);
            resolve(data);
        };
        
        const params = new URLSearchParams({
            action: 'updateMember',
            id: memberData.id,
            name: memberData.name,
            role: memberData.role,
            discord: memberData.discord,
            steamId: memberData.steamId || '',  // 👈 ДОБАВЬ
            avatar: memberData.avatar,
            joinDate: memberData.joinDate,
            rating: memberData.rating,
            category: memberData.category,
            status: memberData.status,
            callback: callbackName
        });
        
        script.src = `${COMMENTS_API_URL}?${params.toString()}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve({ success: false, error: 'Network error' });
        };
        document.body.appendChild(script);
    });
}

// Удаление участника из Google Sheets
function deleteMemberFromSheet(memberId, memberName) {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_delete_member_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            console.log('Ответ сервера при удалении участника:', data);
            resolve(data);
        };
        
        const params = new URLSearchParams({
            action: 'deleteMember',
            id: memberId,
            name: memberName,
            callback: callbackName
        });
        
        script.src = `${COMMENTS_API_URL}?${params.toString()}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve({ success: false, error: 'Network error' });
        };
        document.body.appendChild(script);
    });
}

// ========== МОДАЛЬНОЕ ОКНО РЕДАКТИРОВАНИЯ УЧАСТНИКА ==========
const editTeamMemberModal = document.getElementById('editTeamMemberModal');
const closeEditTeamMemberModal = document.getElementById('closeEditTeamMemberModal');
const saveEditMemberBtn = document.getElementById('saveEditMemberBtn');
const deleteMemberBtn = document.getElementById('deleteMemberBtn');

async function openEditMemberModal(memberId) {
    const member = teamData.find(m => m.id === memberId);
    if (!member) {
        showNotif('❌ Участник не найден', true);
        return;
    }
    
    document.getElementById('editMemberId').value = member.id;
    document.getElementById('editMemberName').value = member.name;
    document.getElementById('editMemberRole').value = member.role;
    document.getElementById('editMemberDiscord').value = member.discord;
    document.getElementById('editMemberSteamId').value = member.steamId || '';  // 👈 ДОБАВЬ
    document.getElementById('editMemberAvatar').value = avatarMap[member.name] || '';
    document.getElementById('editMemberJoinDate').value = member.joinDate;
    document.getElementById('editMemberRating').value = member.rating;
    document.getElementById('editMemberCategory').value = member.category;
    document.getElementById('editMemberStatus').value = member.status;
    
    editTeamMemberModal.style.display = 'flex';
} 

// Закрытие модалки редактирования
if (closeEditTeamMemberModal) {
    closeEditTeamMemberModal.addEventListener('click', () => {
        editTeamMemberModal.style.display = 'none';
    });
}

// Закрытие по клику на фон
if (editTeamMemberModal) {
    editTeamMemberModal.addEventListener('click', (e) => {
        if (e.target === editTeamMemberModal) {
            editTeamMemberModal.style.display = 'none';
        }
    });
}

// Сохранение изменений участника
if (saveEditMemberBtn) {
    saveEditMemberBtn.addEventListener('click', async () => {
        const memberId = parseInt(document.getElementById('editMemberId').value);
        const oldMember = teamData.find(m => m.id === memberId);
        
        const name = document.getElementById('editMemberName').value.trim();
        const role = document.getElementById('editMemberRole').value.trim();
        const discord = document.getElementById('editMemberDiscord').value.trim();
        let avatar = document.getElementById('editMemberAvatar').value.trim();
        const joinDate = document.getElementById('editMemberJoinDate').value.trim();
        const rating = document.getElementById('editMemberRating').value.trim();
        const category = document.getElementById('editMemberCategory').value;
        const status = document.getElementById('editMemberStatus').value;
        
        // Валидация
        if (!name) {
            showNotif('❌ Введите никнейм!', true);
            return;
        }
        if (!role) {
            showNotif('❌ Введите роль!', true);
            return;
        }
        if (!discord) {
            showNotif('❌ Введите Discord ID!', true);
            return;
        }
        if (!joinDate) {
            showNotif('❌ Введите дату вступления!', true);
            return;
        }
        if (!rating) {
            showNotif('❌ Введите ранг!', true);
            return;
        }
        
        // Если аватарка не указана, используем дефолтную
        if (!avatar) {
            avatar = "https://i.imgur.com/IAIJe65.png";
        }
        
        // Обновляем аватарку в avatarMap
        if (oldMember && oldMember.name !== name) {
            delete avatarMap[oldMember.name];
        }
        avatarMap[name] = avatar;
        
        saveEditMemberBtn.disabled = true;
        saveEditMemberBtn.textContent = '⏳ Сохранение...';
        
        // Формируем список изменений для лога
        let changesList = [];
        if (oldMember.name !== name) changesList.push(`Имя: "${oldMember.name}" → "${name}"`);
        if (oldMember.role !== role) changesList.push(`Роль: "${oldMember.role}" → "${role}"`);
        if (oldMember.discord !== discord) changesList.push(`Discord: ${oldMember.discord} → ${discord}`);
        if (oldMember.joinDate !== joinDate) changesList.push(`Дата: ${oldMember.joinDate} → ${joinDate}`);
        if (oldMember.rating !== rating) changesList.push(`Ранг: "${oldMember.rating}" → "${rating}"`);
        if (oldMember.category !== category) changesList.push(`Категория: ${oldMember.category === 'Старший состав' ? '👑' : '🌟'} → ${category === 'Старший состав' ? '👑' : '🌟'}`);
        if (oldMember.status !== status) changesList.push(`Статус: ${oldMember.status} → ${status}`);
        
        try {
            const steamId = document.getElementById('editMemberSteamId').value.trim();  // 👈 ДОБАВЬ

            // Потом в объект для отправки:
            const result = await updateMemberInSheet({
                id: memberId,
                name: name,
                role: role,
                discord: discord,
                steamId: steamId,  // 👈 ДОБАВЬ
                avatar: avatar,
                joinDate: joinDate,
                rating: rating,
                category: category,
                status: status
            });
            
            if (result.success) {
                showNotif(`✅ Данные участника ${name} обновлены!`);
                
                // Отправляем лог в аудит
                if (changesList.length > 0) {
                    await sendAuditLog('EDIT_MEMBER', {
                        name: name,
                        changes: changesList.join('; ')
                    });
                }
                
                // Закрываем модалку
                editTeamMemberModal.style.display = 'none';
                
                // Обновляем данные команды
                await refreshTeamData();
                
                // Обновляем отображение
                renderTeamTable();
            } else {
                showNotif(`❌ Ошибка: ${result.error || 'неизвестная ошибка'}`, true);
            }
        } catch (error) {
            console.error('Ошибка обновления участника:', error);
            showNotif('❌ Ошибка соединения с сервером', true);
        } finally {
            saveEditMemberBtn.disabled = false;
            saveEditMemberBtn.textContent = '💾 Сохранить изменения';
        }
    });
}

// Удаление участника
if (deleteMemberBtn) {
    deleteMemberBtn.addEventListener('click', async () => {
        const memberId = parseInt(document.getElementById('editMemberId').value);
        const memberName = document.getElementById('editMemberName').value.trim();
        
        if (!confirm(`🗑️ Вы уверены, что хотите удалить участника "${memberName}" из команды? Это действие нельзя отменить!`)) {
            return;
        }
        
        deleteMemberBtn.disabled = true;
        deleteMemberBtn.textContent = '⏳ Удаление...';
        
        try {
            const result = await deleteMemberFromSheet(memberId, memberName);
            
            if (result.success) {
                showNotif(`✅ Участник ${memberName} удалён из команды!`);
                
                // Отправляем лог в аудит
                await sendAuditLog('DELETE_MEMBER', {
                    name: memberName,
                    role: 'участник команды'
                });
                
                // Удаляем аватарку из avatarMap
                delete avatarMap[memberName];
                
                // Закрываем модалку
                editTeamMemberModal.style.display = 'none';
                
                // Обновляем данные команды
                await refreshTeamData();
                
                // Обновляем отображение
                renderTeamTable();
            } else {
                showNotif(`❌ Ошибка удаления: ${result.error || 'неизвестная ошибка'}`, true);
            }
        } catch (error) {
            console.error('Ошибка удаления участника:', error);
            showNotif('❌ Ошибка соединения с сервером', true);
        } finally {
            deleteMemberBtn.disabled = false;
            deleteMemberBtn.textContent = '🗑️ Удалить';
        }
    });
}

function showBugReportMessage() {
    console.log('🟢 Показываем сообщение о багах');
    
    // Если сообщение уже показано - не создаём новое
    if (bugMessageActive) {
        console.log('⚠️ Сообщение уже показано');
        return;
    }
    
    const welcomeCard = document.querySelector('.welcome-card');
    if (!welcomeCard) {
        console.log('❌ welcome-card не найден');
        return;
    }
    
    // Удаляем старое сообщение, если есть
    const oldMessage = document.getElementById('bugMessageBlock');
    if (oldMessage) oldMessage.remove();
    
    // Создаем блок с сообщением
    const messageDiv = document.createElement('div');
    messageDiv.id = 'bugMessageBlock';
    messageDiv.style.cssText = `
        margin: 20px 0 15px 0;
        padding: 20px 16px;
        background: linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3));
        border-radius: 24px;
        border: 1px solid rgba(255,170,68,0.4);
        text-align: center;
        animation: fadeInUp 0.4s ease;
        backdrop-filter: blur(8px);
    `;
    
    messageDiv.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 12px;">
            <svg class="icon" style="fill:#c9a0ff; width: 55px; height: 55px;">
                <use href="#ic-eagle"/>
            </svg>
        </div>
        <div style="font-size: 0.95rem; color: #ffd6aa; margin-bottom: 8px;">
            ⚠️ Если нашли баг или ошибку
        </div>
        <div style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 15px;">
            Пишите <span style="color: #ffaa44; text-decoration: underline;">T1Ran</span> в Discord ➜ 🎫
        </div>
        <button id="closeBugMessageBtn" style="
            background: linear-gradient(95deg, rgba(85,85,85,0.6), rgba(51,51,51,0.6));
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 40px;
            padding: 8px 24px;
            color: white;
            font-size: 0.85rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            font-family: inherit;
            backdrop-filter: blur(8px);
        ">✕ Понятно, закрыть</button>
    `;
    
    // Находим кнопку "Продолжить" и вставляем ПЕРЕД НЕЙ
    const continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
        welcomeCard.insertBefore(messageDiv, continueBtn);
        console.log('✅ Сообщение вставлено перед кнопкой');
    } else {
        welcomeCard.appendChild(messageDiv);
        console.log('✅ Сообщение вставлено в конец');
    }
    
    bugMessageActive = true;
    
    // Обработчик для кнопки закрытия
    const closeBtn = document.getElementById('closeBugMessageBtn');
    if (closeBtn) {
        closeBtn.onclick = () => {
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateY(-15px)';
            setTimeout(() => {
                if (messageDiv && messageDiv.parentNode) {
                    messageDiv.remove();
                    bugMessageActive = false;
                }
            }, 300);
        };
    }
}
