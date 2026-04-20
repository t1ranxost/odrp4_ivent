// ========== ТВОИ ДАННЫЕ ==========
let eventsData = [
    { id: 1, name: "емендемс", platform: "Foxy", organizer: "Тявкобой", date: "20.04.26, 0:39 - 20.04.26, 0:44", status: "Проведен", rating: "30.000$", members: 3, callStatus: "🟡Скоро", fullDetails: { description: "под вами 4 пропа разных цветов и над вами 1 проп. вам нужно встать на цвета соответствующие пропу над вами.", tasks: "", feedback: "", rewards: "", extra: "" } },
    { id: 2, name: "емендемс 2.0", platform: "Foxy", organizer: "Тявкобой", date: "20.04.26, 12:40 - 20.04.26, 13:00", status: "Проведен", rating: "30.000$", members: 3, callStatus: "🟡Скоро", fullDetails: { description: "под вами 4 пропа разных цветов и над вами 1 проп. вам нужно встать на цвета соответствующие пропу над вами.", tasks: "", feedback: "", rewards: "", extra: "" } },
];

let teamData = [
    { id: 1, name: "manisule", role: "Глава ивент-отдела", discord: "565584233981280270", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "21.01.26", rating: "Судо-Куратор", category: "Старший состав", fullDetails: { responsibilities: "Имеет полное владение над отделом Ивентологии, может самостоятельно изменять состав отдела Ивентологии и их норму/правила.", contacts: "https://admin.unionteams.ru/4/admin/76561198386405573", achievements: "0", notes: "" } },
    { id: 2, name: "Гербикс", role: "Зам.Главы ивент-отдела", discord: "694286975158583317", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "21.01.26", rating: "Ассистент", category: "Старший состав", fullDetails: { responsibilities: "Имеет все полномочия нижестоящих рангов, а также имеет право набирать новых кадров в отдел, определять курс развития отдела и изменять норму и правила с разрешения/уведомления об этом Главы Ивентологии.", contacts: "https://admin.unionteams.ru/4/admin/76561199196300974", achievements: "0", notes: "" } },
    { id: 3, name: "Arbuz Madrazo", role: "Ст.Ивентер", discord: "1066705962972495922", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "07.02.26", rating: "Ст.Администратор", category: "Старший состав", fullDetails: { responsibilities: "Имеет все полномочия Ивентера, а также имеет право корректировать работу Ивентеров и давать рекомендации по поводу ивентов, выдавать наказания за их ошибки, а также одобрять отчётности.", contacts: "https://admin.unionteams.ru/4/admin/76561199236074729", achievements: "1", notes: "" } },
    { id: 4, name: "T1Ran", role: "Ивентер", discord: "1246076621484724320", status: "Онлайн", eventsCount: "-", joinDate: "14.03.26", rating: "Администратор", category: "Младший состав", fullDetails: { responsibilities: "Отвечает за таблицу ТАКЖЕ: Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199705616791", achievements: "11", notes: "" } },
    { id: 5, name: "Дмитрий Морозов", role: "Ивентер", discord: "859747626115006474", status: "Онлайн", eventsCount: "-", joinDate: "30.03.26", rating: "Администратор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199403370553", achievements: "11", notes: "" } },
    { id: 6, name: "Гофикал", role: "Ивентер", discord: "1135087142385754123", status: "Онлайн", eventsCount: "-", joinDate: "09.04.26", rating: "Оператор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199636555608", achievements: "0", notes: "" } },
    { id: 7, name: "Himas", role: "Ивентер", discord: "1467081827670954015", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Оператор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199683531094", achievements: "0", notes: "" } },
    { id: 8, name: "yaroslav1432", role: "Ивентер", discord: "1286725096278331565", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Администратор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199775920153", achievements: "0", notes: "" } },
    { id: 9, name: "Foxy", role: "Ивентер", discord: "1344959502436532304", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Модератор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199775920153", achievements: "0", notes: "" } },
    { id: 10, name: "somcop", role: "Ивентер", discord: "76561199768219919", status: "Онлайн", eventsCount: "-", joinDate: "13.04.26", rating: "Модератор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199768219919", achievements: "0", notes: "" } },
    { id: 11, name: "кусочек шаурмы", role: "Ивентер", discord: "636585910552756284", status: "Онлайн", eventsCount: "-", joinDate: "17.04.26", rating: "Администратор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199768219919", achievements: "0", notes: "" } }
];

// URL Google Apps Script
const COMMENTS_API_URL = 'https://script.google.com/macros/s/AKfycbzCAoL5YLA1PXdU4Xbl9xl7taKo8SIjxFmO7SL-61K6uAm0CiAtqShL-ImYwsu1OuUo/exec';

// Словарь аватарок
const avatarMap = {
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
    "gans7824": "https://avatars.akamai.steamstatic.com/7ccb0ac2e182c765a7ddf35bb64dde75e26ddfc2_full.jpg"
};

function getAvatarUrl(username) {
    return avatarMap[username] || "https://i.imgur.com/IAIJe65.png";
}

function loadComments(eventId) {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_callback_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        const script = document.createElement('script');
        
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(Array.isArray(data) ? data : []);
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

async function renderCommentsSection(eventId, container) {
    // Сначала показываем заглушку "Загрузка..."
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
    
    // Загружаем комментарии в фоне
    const comments = await loadComments(eventId);
    
    // Мгновенно заменяем заглушку на реальные данные
    listEl.style.opacity = '1';
    listEl.style.textAlign = 'left';
    listEl.style.padding = '0';
    listEl.innerHTML = '';
    
    const template = document.getElementById('commentTemplate');
    
    if (comments.length === 0) {
        listEl.innerHTML = '<div style="color:var(--text-muted); text-align:center; padding:20px;">Пока нет комментариев</div>';
    } else {
        comments.forEach(c => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.comment-avatar').src = c.avatarUrl;
            clone.querySelector('.comment-author').textContent = c.userName;
            clone.querySelector('.comment-time').textContent = c.timestamp;
            clone.querySelector('.comment-text').textContent = c.text;
            listEl.appendChild(clone);
        });
    }
    
    // Обновляем счётчик
    section.querySelector('.comments-title').innerHTML = `
        <svg class="icon" style="fill:var(--icon-fill); width:20px; height:20px;"><use href="#ic-chat"/></svg>
        Комментарии (${comments.length})
    `;
    
    // Настройка кнопки отправки (код остаётся тот же)
    if (currentUser) {
        const sendBtn = section.querySelector('#sendCommentBtn');
        const textarea = section.querySelector('#newCommentText');
        
        sendBtn.addEventListener('click', async () => {
            const text = textarea.value.trim();
            if (!text) {
                showNotif('Введите текст комментария', true);
                return;
            }
            
            sendBtn.disabled = true;
            sendBtn.textContent = 'Отправка...';
            
            const result = await addComment(eventId, currentUser, text);
            
            if (result.success) {
                showNotif('✅ Комментарий добавлен');
                
                const clone = template.content.cloneNode(true);
                clone.querySelector('.comment-avatar').src = getAvatarUrl(currentUser);
                clone.querySelector('.comment-author').textContent = currentUser;
                clone.querySelector('.comment-time').textContent = new Date().toLocaleString("ru-RU");
                clone.querySelector('.comment-text').textContent = text;
                listEl.appendChild(clone);
                
                if (listEl.querySelector('div[style*="Пока нет комментариев"]')) {
                    listEl.innerHTML = '';
                    listEl.appendChild(clone);
                }
                
                const newCount = listEl.children.length;
                section.querySelector('.comments-title').innerHTML = `
                    <svg class="icon" style="fill:var(--icon-fill); width:20px; height:20px;"><use href="#ic-chat"/></svg>
                    Комментарии (${newCount})
                `;
                
                textarea.value = '';
            } else {
                showNotif('❌ Ошибка отправки', true);
            }
            
            sendBtn.disabled = false;
            sendBtn.innerHTML = `
                <svg class="icon" style="fill:#fff; width:16px; height:16px;"><use href="#ic-send"/></svg>
                Отправить
            `;
        });
        
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendBtn.click();
            }
        });
    }
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

async function loadConfig() {
    if (cachedConfig) return cachedConfig;
    
    const GIST_URL = "https://gist.githubusercontent.com/t1ranxost/aa24e72a4a38ff01eae3b7ee4908cf43/raw/604af3c017601560842b7007b1f159e7771f81e9/config.json";
    try {
        const response = await fetch(GIST_URL);
        const data = await response.json();
        cachedConfig = data;
        return data;
    } catch(e) {
        console.error('Ошибка загрузки конфига:', e);
        return null;
    }
}

// Получение вебхука
async function getWebhookUrl() {
    const config = await loadConfig();
    return config ? config.webhook : null;
}

// ========== СИСТЕМА ЛОГИНОВ ==========
const VALID_LOGINS = [
    "кусочек шаурмы", "Foxy", "somcop", "T1Ran", "manisule",
    "Гербикс", "Arbuz madrazo", "Дмитрий Морозов", "Гофикал", "Himas", "yaroslav1432", "gans7824"
];

let currentUser = null;
let isEditor = false;

function showNotif(msg, isErr = false) {
    const d = document.createElement('div');
    d.style.cssText = `position:fixed;bottom:20px;right:20px;background:${isErr ? '#c2410c' : '#2e7d32'};color:white;padding:12px 20px;border-radius:30px;z-index:9999;font-weight:bold;`;
    d.innerHTML = msg;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 3000);
}

function escapeHtml(s) { 
    if(!s) return ''; 
    return s.replace(/[&<>]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])); 
}

function changeEventStatus(eventId, newStatus) {
    if (!isEditor) return false;
    const event = eventsData.find(e => e.id === eventId);
    if (event) {
        event.callStatus = newStatus;
        saveAllData();
        renderEventsTable();
        updateNormStats();
        showNotif(`✅ Статус изменён на "${newStatus}"`);
        
        // 👇 ЭТУ СТРОЧКУ ДОБАВЬ (отправка в Google Sheets)
        syncStatusToSheet(eventId, newStatus, currentUser);
        
        return true;
    }
    return false;
}

function renderEventsTable() {
    const container = document.getElementById('eventDynamicContent');
    const canEdit = isEditor;
    container.innerHTML = `
        <div class="page-header"><h2>📅 Таблица мероприятий</h2></div>
        <div class="click-hint">🔽 ${canEdit ? 'У вас есть права изменять статус' : '🔽 Режим просмотра'}</div>
        <div class="table-wrapper">
            <table class="data-table">
                <thead><tr><th>ИВЕНТ</th><th>ОРГАНИЗАТОР</th><th>ПОМОЩНИКИ</th><th>ДАТА</th><th>СТАТУС</th><th>ПРИЗОВЫЕ</th><th>УЧАСТНИКИ</th><th>ОДОБРЕН</th>${canEdit ? '<th>ДЕЙСТВИЯ</th>' : ''}</td></thead>
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
        row.insertCell(1).textContent = event.platform;
        row.insertCell(2).textContent = event.organizer;
        row.insertCell(3).textContent = event.date;
        row.insertCell(4).innerHTML = `<span class="status-badge status-active">${event.status}</span>`;
        row.insertCell(5).innerHTML = `<span class="rating-star">⭐ ${event.rating}</span>`;
        row.insertCell(6).innerHTML = `<span style="font-weight:600;">${event.members}</span>`;
        row.insertCell(7).innerHTML = `<span style="background:var(--badge-bg); padding:0.2rem 0.6rem; border-radius:20px;">${event.callStatus}</span>`;
        if (canEdit) {
            const cell = row.insertCell(8);
            cell.innerHTML = `
                <button class="status-change-btn btn-approved" data-id="${event.id}" data-status="✅Одобрен">✅ Одобрен</button>
                <button class="status-change-btn btn-soon" data-id="${event.id}" data-status="🟡Скоро">🟡 Скоро</button>
                <button class="status-change-btn btn-completed" data-id="${event.id}" data-status="🔴Отказано">🔴 Отказано</button>
            `;
        }
    });
    if (canEdit) {
        document.querySelectorAll('.status-change-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                changeEventStatus(parseInt(btn.dataset.id), btn.dataset.status);
            });
        });
    }
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
    
    // ПОЛУЧАЕМ АВАТАРКУ ПО ИМЕНИ
    const avatarMap = {
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
        "gans7824": "https://avatars.akamai.steamstatic.com/7ccb0ac2e182c765a7ddf35bb64dde75e26ddfc2_full.jpg",
    };
    
    const avatarUrl = avatarMap[m.name] || "https://i.imgur.com/IAIJe65.png";
    
    return `
        <div class="team-card ${cardClass} clickable-card" data-type="team" data-id="${m.id}">
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
                <div class="team-info-item"><div class="team-info-label">DISCORD</div><div class="team-info-value">${m.discord}</div></div>
                <div class="team-info-item"><div class="team-info-label">ИВЕНТОВ</div><div class="team-info-value">${eventsCount}</div></div>
                <div class="team-info-item"><div class="team-info-label">ВСТУПИЛ</div><div class="team-info-value">${m.joinDate}</div></div>
            </div>
            <div class="team-card-footer">
                <span class="team-badge ${type === 'senior' ? 'senior-badge' : 'junior-badge'}">${type === 'senior' ? '👑' : '🌟'} ${type === 'senior' ? 'Старший' : 'Младший'} состав</span>
                <div class="team-rating">${starsHtml}</div>
            </div>
        </div>
    `;
}
    
    let seniorHtml = '', juniorHtml = '';
    seniorMembers.forEach(m => { seniorHtml += renderMemberCard(m, 'senior'); });
    juniorMembers.forEach(m => { juniorHtml += renderMemberCard(m, 'junior'); });
    
    container.innerHTML = `
        <div class="page-header"><h2>👥 Команда ивент-отдела</h2></div>
        <div class="click-hint">🔽 Нажмите на карточку участника — полная информация</div>
        <div class="team-section"><div class="section-header senior"><span class="section-icon">👑</span><span class="section-title senior">Старший состав</span><span class="section-count">${seniorMembers.length} чел</span></div><div class="team-grid">${seniorHtml || '<div style="text-align:center; padding:2rem;">Нет участников</div>'}</div></div>
        <div class="team-section"><div class="section-header junior"><span class="section-icon">🌟</span><span class="section-title junior">Младший состав</span><span class="section-count">${juniorMembers.length} чел</span></div><div class="team-grid">${juniorHtml || '<div style="text-align:center; padding:2rem;">Нет участников</div>'}</div></div>
    `;
    document.querySelectorAll('.clickable-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            const member = teamData.find(m => m.id === id);
            if (member) openTeamModal(member);
        });
    });
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
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="detail-row"><span class="detail-label">Название:</span><span>${escapeHtml(ev.name)}</span></div>
        <div class="detail-row"><span class="detail-label">Организатор:</span><span>${ev.platform}</span></div>
        <div class="detail-row"><span class="detail-label">Дата:</span><span>${ev.date}</span></div>
        <div class="detail-row"><span class="detail-label">Категория:</span><span>${ev.callStatus}</span></div>
        <div style="margin-top:12px; background:var(--card-bg); padding:12px; border-radius:24px;">
            <b>Описание:</b><br>${ev.fullDetails.description}
        </div>
        <div id="commentsContainer"></div>
    `;
    
    // ВОТ ЭТА СТРОКА ДОБАВЛЯЕТ КОММЕНТАРИИ
    const commentsContainer = document.getElementById('commentsContainer');
    renderCommentsSection(ev.id, commentsContainer);
    
    document.getElementById('infoModal').style.display = 'flex';
}

function openTeamModal(m) {
    document.getElementById('modalTitle').innerHTML = '👤 Информация о сотруднике';
    document.getElementById('modalBody').innerHTML = `
        <div class="detail-row"><span class="detail-label">Имя:</span><span><strong>${escapeHtml(m.name)}</strong></span></div>
        <div class="detail-row"><span class="detail-label">Роль:</span><span>${m.role}</span></div>
        <div class="detail-row"><span class="detail-label">Обязанности:</span><span>${m.fullDetails.responsibilities}</span></div>
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
    const totalPrizes = calculateTotalPrizes();
    const eventsCount = eventsData.length;
    const teamMembersCount = teamData.length;
    const onlineCount = teamData.filter(m => m.status === "Онлайн").length;
    
    // Считаем ивенты по каждому сотруднику
    const eventCounts = countEventsByPlatform();
    
    // Сортируем сотрудников по количеству ивентов
    const sortedByEvents = [...teamData].sort((a, b) => {
        const countA = eventCounts[a.name] || 0;
        const countB = eventCounts[b.name] || 0;
        return countB - countA;
    });
    
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
            
            /* СТАТИСТИКА */
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
                border-color: rgba(255,215,0,0.3);
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
            
            /* ТАБЛИЦА НОРМЫ */
            .norm-table-wrapper {
                overflow-x: auto;
                border-radius: 24px;
                background: rgba(0,0,0,0.25);
                border: 1px solid var(--card-border);
                backdrop-filter: blur(28px);
                margin-bottom: 1.5rem;
            }
            
            .norm-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 0.85rem;
            }
            
            .norm-table th {
                text-align: left;
                padding: 1rem;
                background: var(--table-header-bg);
                color: #888;
                font-weight: 700;
                font-size: 0.7rem;
                letter-spacing: 1.2px;
                text-transform: uppercase;
                border-bottom: 2px solid var(--table-row-border);
            }
            
            .norm-table td {
                padding: 0.9rem 1rem;
                border-bottom: 1px solid var(--table-row-border);
                color: var(--text-primary);
            }
            
            .norm-table tr:last-child td {
                border-bottom: none;
            }
            
            .norm-table tr:hover td {
                background: var(--table-row-hover);
            }
            
            .norm-badge {
                display: inline-block;
                padding: 0.2rem 0.7rem;
                border-radius: 40px;
                font-size: 0.7rem;
                font-weight: 600;
                background: var(--badge-bg);
                backdrop-filter: blur(12px);
            }
            
            .norm-badge.good {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
            }
            
            .norm-badge.bad {
                background: rgba(244, 67, 54, 0.2);
                color: #f44336;
            }
            
            .norm-badge.warning {
                background: rgba(255, 152, 0, 0.2);
                color: #ff9800;
            }
            
            .norm-badge.none {
                background: var(--badge-bg);
                color: var(--text-muted);
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
                color: #ffaa44;
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
                color: #ffaa44;
                margin-bottom: 0.3rem;
            }
            
            .norm-day-value {
                font-size: 0.7rem;
                color: var(--text-secondary);
            }
        </style>
        
        <div class="norm-container">
            <div class="norm-header">
                <h2>📊 НОРМА ОТДЕЛА</h2>
                <p>Статистика и выполнение норм сотрудниками</p>
            </div>
            
            <!-- ОБЩАЯ СТАТИСТИКА -->
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
            
            
            
            <!-- НОРМА ПО ДНЯМ -->
            <div class="norm-week">
                <div class="norm-week-title">📅 Норма после отпуска/вступления</div>
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
        } else if (tab === 'event_guide') {
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
                <div class="methodology-title">📖 Методичка Ивентологов</div>
                <div class="methodology-subtitle">ОСНОВНЫЕ ПРАВИЛА ОТДЕЛА ИВЕНТОЛОГИИ</div>
            </div>
            
            <!-- ЧТО МОЖНО ДЕЛАТЬ -->
            <div class="section-block">
                <div class="section-title green">✅ ЧТО МОЖНО ДЕЛАТЬ?</div>
                <div class="rank-card ivent">
                    <div class="rank-name">🎮 Кто может проводить ивенты?</div>
                    <div class="rank-desc">Проводить ивенты можно с ранга «Оператор», если вы состоите в отделе Ивентологии. С рангов ниже — только с разрешения Главы отдела или Куратора сервера.</div>
                </div>
                <div class="rank-card ivent">
                    <div class="rank-name">👥 Кол-во администрации на ивенте</div>
                    <div class="rank-desc">В ивенте может участвовать не более 25% от всей наборной администрации. <span class="stats-mini">Например: 10 админов → максимум 3</span></div>
                </div>
                <div class="rank-card ivent">
                    <div class="rank-name">⏸ Игнор завалов</div>
                    <div class="rank-desc">Если завал начался во время ивента, его разрешено игнорировать.</div>
                </div>
                <div class="rank-card ivent">
                    <div class="rank-name">🎯 Самостоятельность</div>
                    <div class="rank-desc">Каждый Ивентер может проводить ивенты без разрешения от Ст. Администрации. Если ты на испытательном сроке — нужно одобрение от Ст. Ивентера.</div>
                </div>
                <div class="rank-card ivent">
                    <div class="rank-name">💰 Награды</div>
                    <div class="rank-desc">Если игрок использует баги/преимущества/нарушал правила — Ивентер может не выдавать приз. Если победа честная — Ивентер обязан выдать приз.</div>
                </div>
                <div class="rank-card ivent">
                    <div class="rank-name">🎭 RP-Мероприятия</div>
                    <div class="rank-desc">Помимо ивентов, вам также доступны РП-Мероприятия — сюжетные ролевые отыгровки в пределах RP-зоны. РП-мероприятие засчитывается как полноценный ивент.</div>
                </div>
            </div>
            
            <!-- ЧТО ВЫ ОБЯЗАНЫ ДЕЛАТЬ -->
            <div class="section-block">
                <div class="section-title orange">⚠️ ЧТО ВЫ ОБЯЗАНЫ ДЕЛАТЬ?</div>
                <div class="rank-card senior">
                    <div class="rank-name">📝 После ивента/РП-Мероприятия</div>
                    <div class="rank-desc">Убрать всё, что было построено/создано. Написать отчёт в специальный канал.</div>
                </div>
                <div class="rank-card senior">
                    <div class="rank-name">🐌 Лаги</div>
                    <div class="rank-desc">Если во время ивента появились лаги или высокий пинг — ивент нужно как можно быстрее прекратить и сообщить Главе/Зам. Главы.</div>
                </div>
            </div>
            
            <!-- ЧТО НЕЛЬЗЯ ДЕЛАТЬ -->
            <div class="section-block">
                <div class="section-title red">🚫 ЧТО НЕЛЬЗЯ ДЕЛАТЬ?</div>
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
                <div class="section-title purple">📌 УТОЧНЕНИЯ</div>
                <ul class="rule-list">
                    <li>При проведении РП-мероприятий обязательно соблюдение всех действующих правил сервера.</li>
                    <li>Повышение до Ивент-Мастера не будет. Однако попросить его помощь вы можете в канале ┣🍽️・запрос-вещей.</li>
                    <li>Набирать людей в Ивентологию могут только Глава и Зам. Главы отдела.</li>
                    <li>Отдел Ивентологии является «совмещенным». Любой администратор из другого отдела может попасть к нам при наличии свободных слотов.</li>
                </ul>
            </div>
            
            <!-- МАКСИМАЛЬНОЕ КОЛИЧЕСТВО МЕСТ -->
            <div class="section-block">
                <div class="section-title blue">👥 Максимальное количество мест в отделе — 9</div>
                <div class="norm-grid">
                    <div class="norm-card"><div class="norm-day">👑 Глава</div><div class="norm-value">1 место</div></div>
                    <div class="norm-card"><div class="norm-day">📿 Зам. Главы</div><div class="norm-value">1 место</div></div>
                    <div class="norm-card"><div class="norm-day">🍉 Ст. Ивентер</div><div class="norm-value">1 место</div></div>
                    <div class="norm-card"><div class="norm-day">🤡 Ивентеры</div><div class="norm-value">7 мест</div></div>
                </div>
            </div>
            
            <!-- РАНГИ -->
            <div class="section-block">
                <div class="section-title pink">🏅 РАНГИ</div>
                <div class="rank-card ivent"><div class="rank-name">🤡 Ивентер</div><div class="rank-desc">Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела. Может игнорировать завал в случае, если ивент начался до завала.</div></div>
                <div class="rank-card senior"><div class="rank-name">🍉 Ст. Ивентер</div><div class="rank-desc">Имеет все полномочия Ивентера, а также имеет право корректировать работу Ивентеров и давать рекомендации по поводу ивентов, выдавать наказания за их ошибки, а также одобрять отчётности.</div></div>
                <div class="rank-card zam"><div class="rank-name">📿 Зам. Главы Ивентологии</div><div class="rank-desc">Имеет все полномочия нижестоящих рангов, а также имеет право набирать новых кадров в отдел, определять курс развития отдела и изменять норму и правила.</div></div>
                <div class="rank-card glava"><div class="rank-name">👑 Глава Ивентологии</div><div class="rank-desc">Имеет полное владение над отделом Ивентологии, может самостоятельно изменять состав отдела Ивентологии и их норму/правила.</div></div>
            </div>
            
            <!-- НОРМА -->
            <div class="section-block">
                <div class="section-title pink">📊 НОРМА</div>
                <ul class="rule-list">
                    <li>Ивентер из другого отдела — кол-во тикетов из вашего отдела | 2 ивента в неделю</li>
                    <li>Ивентер — 35 тикетов | 3 ивента в неделю</li>
                    <li>Ст. Ивентер — 25 тикетов</li>
                    <li>Зам. Главы Ивентологии — не имеет нормы</li>
                    <li>Глава Ивентологии — не имеет нормы</li>
                </ul>
            </div>
            
            <!-- НОРМА ПОСЛЕ ОТПУСКА -->
            <div class="section-block">
                <div class="section-title orange">📅 Норма после отпуска/заморозки/вступлении в отдел</div>
                <div class="norm-grid">
                    <div class="norm-card"><div class="norm-day">ПН</div><div class="norm-value">35 тикетов | 3 ивента</div></div>
                    <div class="norm-card"><div class="norm-day">ВТ</div><div class="norm-value">35 тикетов | 3 ивента</div></div>
                    <div class="norm-card"><div class="norm-day">СР</div><div class="norm-value">30 тикетов | 2 ивента</div></div>
                    <div class="norm-card"><div class="norm-day">ЧТ</div><div class="norm-value">25 тикетов | 1 ивент</div></div>
                    <div class="norm-card"><div class="norm-day">ПТ</div><div class="norm-value">20 тикетов | 1 ивент</div></div>
                    <div class="norm-card"><div class="norm-day">СБ</div><div class="norm-value">10 тикетов | 1 ивент</div></div>
                    <div class="norm-card"><div class="norm-day">ВС</div><div class="norm-value">Освобождены от нормы</div></div>
                </div>
                <div class="rank-card ivent" style="margin-top: 1rem;">
                    <div class="rank-name">📌 Примечание</div>
                    <div class="rank-desc">Если вы состоите в другом отделе и вышли с отпуска/мороза — с четверга вы обязуетесь провести 1 ивент. Если с понедельника и до среды – 2 ивента.</div>
                </div>
            </div>
            
            <!-- НАКАЗАНИЯ -->
            <div class="section-block">
                <div class="section-title red">⚖️ Наказания за невыполнение нормы</div>
                <div class="punishment-card"><strong>25-35 тикетов и 2-3 ивента:</strong> В случае уважительной причины недобор прощается, в другом случае выдается предупреждение.</div>
                <div class="punishment-card"><strong>15-24 тикета и 1-2 ивента:</strong> В случае уважительной причины выдается предупреждение, в другом случае выдается выговор.</div>
                <div class="punishment-card"><strong>0-14 тикета и 0-1 ивент:</strong> В случае уважительной причины выдается выговор, в другом случае снятие или два выговора.</div>
                <div class="punishment-card"><strong>Для ивентеров из другого отдела:</strong> Если проведено менее двух ивентов, выдается предупреждение. При уважительной причине недобор прощается.</div>
            </div>
            
            <!-- ЗАРПЛАТА -->
            <div class="section-block">
                <div class="section-title green">💰 Зарплата</div>
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
    const members = document.getElementById('eventMembers')?.value.trim() || 'Не указано';
    const prizes = document.getElementById('eventPrizes')?.value.trim() || 'Не было';
    let organizer = document.getElementById('eventOrganizer')?.value.trim() || currentUser || 'Неизвестно';
    const helpers = document.getElementById('eventHelpers')?.value.trim() || 'Нет';
    
    if (!name || !description) {
        showNotif('❌ Заполните название и описание ивента!', true);
        return;
    }
    
    const newId = eventsData.length + 1;
    eventsData.push({
        id: newId, name: name, platform: organizer, organizer: helpers,
        date: startTime + " - " + endTime, status: "Проведен",
        rating: (prizes !== 'Не было' ? prizes.replace(/[^0-9]/g, '') : '0') + '$',
        members: parseInt(members) || 0, callStatus: "🟡Скоро",
        fullDetails: { description: description, tasks: "", feedback: "", rewards: "", extra: "" }
    });
    saveAllData();
    renderEventsTable();
    renderTeamTable();
    updateNormStats();
    
    const webhookURL = await getWebhookUrl();
    if (!webhookURL) {
        showNotif('❌ Не удалось загрузить вебхук.', true);
        return;
    }
    
    try {
        await fetch(webhookURL, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: `<@1246076621484724320> Новый ивент от ${organizer}!`,
                embeds: [{
                    title: "📅 Новый ивент", color: 0x5865F2,
                    fields: [
                        { name: "📌 Название", value: name },
                        { name: "📝 Описание", value: description.substring(0, 500) },
                        { name: "⏰ Время", value: startTime + " - " + endTime, inline: true },
                        { name: "👥 Участников", value: members.toString(), inline: true },
                        { name: "🎁 Призы", value: prizes, inline: false },
                        { name: "👤 Организатор", value: organizer, inline: true },
                        { name: "🤝 Помощники", value: helpers, inline: true }
                    ], footer: { text: "Ивент-отдел UnionTeam" }, timestamp: new Date().toISOString()
                }], username: "Ивент-отдел UnionTeam", avatar_url: "https://i.ytimg.com/vi/_pMmC52HB2k/hqdefault.jpg"
            })
        });
        showNotif('✅ Ивент добавлен!');
    } catch(e) {
        showNotif('❌ Ошибка отправки в Discord', true);
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

function checkAuth() {
    const saved = sessionStorage.getItem('user');
    const savedIsEditor = sessionStorage.getItem('isEditor');
    const continued = sessionStorage.getItem('continued');
    if (saved && VALID_LOGINS.includes(saved)) {
        currentUser = saved;
        updateSidebarAvatar(saved);
        isEditor = savedIsEditor === 'true';
        loginOverlay.style.display = 'none';
        if (continued === 'true') {
            welcomeContainer.classList.add('hidden');
            mainDashboard.style.display = 'block';
            renderEventsTable();
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

async function doLogin() {
    const login = loginInput.value.trim();
    const pwd = passInput.value;
    
    const config = await loadConfig();
    if (!config) {
        showNotif('❌ Ошибка загрузки конфигурации', true);
        return;
    }
    
    if (VALID_LOGINS.includes(login)) {
        if (pwd === config.creator_password) {
            sessionStorage.setItem('user', login);
            sessionStorage.setItem('isEditor', 'true');
            sessionStorage.removeItem('continued');
            currentUser = login;
            isEditor = true;
            loginOverlay.style.display = 'none';
            welcomeContainer.classList.remove('hidden');
            mainDashboard.style.display = 'none';
            errMsg.classList.remove('show');
            showNotif(`✅ Добро пожаловать, создатель ${login}!`);
        } else if (pwd === config.user_password) {
            sessionStorage.setItem('user', login);
            sessionStorage.setItem('isEditor', 'false');
            sessionStorage.removeItem('continued');
            currentUser = login;
            updateSidebarAvatar(login);
            isEditor = false;
            loginOverlay.style.display = 'none';
            welcomeContainer.classList.remove('hidden');
            mainDashboard.style.display = 'none';
            errMsg.classList.remove('show');
            showNotif(`✅ Добро пожаловать, ${login}!`);
        } else {
            errMsg.classList.add('show');
            setTimeout(() => errMsg.classList.remove('show'), 2000);
        }
    } else {
        errMsg.classList.add('show');
        setTimeout(() => errMsg.classList.remove('show'), 2000);
    }
}

function onContinue() {
    sessionStorage.setItem('continued', 'true');
    welcomeContainer.classList.add('hidden');
    mainDashboard.style.display = 'block';
    renderEventsTable();
}

function logout() {
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

    // ===== СМЕНА АВАТАРКИ В ЗАВИСИМОСТИ ОТ ЛОГИНА =====
function updateSidebarAvatar(username) {
    const avatarImg = document.querySelector('.sidebar-logo');
    if (!avatarImg) return;
    
    // Словарь: логин → ссылка на аватарку
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

// ========== НАСТРОЙКИ ПО НАЖАТИЮ НА АВАТАРКУ ==========
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

// ПОЛУЧИТЬ СТАТИСТИКУ ПОЛЬЗОВАТЕЛЯ
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
    let firstEvent = eventsData.filter(e => e.platform === username).sort((a,b) => new Date(a.date) - new Date(b.date))[0];
    let joinDate = firstEvent ? firstEvent.date.split(',')[0] : "15.03.2026";
    return { events: userEvents, prizes: totalPrizes, joinDate: joinDate };
}

// ОБНОВИТЬ СТАТИСТИКУ
function updateStatsDisplay() {
    const stats = getUserStats();
    if (userEventsCountSpan) userEventsCountSpan.textContent = stats.events;
    if (userPrizesCountSpan) userPrizesCountSpan.textContent = stats.prizes.toLocaleString() + '$';
    if (userJoinDateSpan) userJoinDateSpan.textContent = stats.joinDate;
}

// РЕАЛЬНОЕ ИЗМЕНЕНИЕ ЯРКОСТИ
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

// ПРИМЕНИТЬ ВЫБРАННЫЙ ФОН
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

// ОТКРЫТЬ НАСТРОЙКИ
function openSettings() {
    updateStatsDisplay();
    settingsModal.classList.add('show');
}

// ЗАКРЫТЬ НАСТРОЙКИ
function closeSettings() {
    settingsModal.classList.remove('show');
}

// ЗАГРУЗИТЬ СОХРАНЁННЫЕ НАСТРОЙКИ
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

// СОХРАНИТЬ НАСТРОЙКИ
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

// ВЫБОР ФОНА
bgOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        bgOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
    });
});

// СЛУШАТЕЛИ ЯРКОСТИ
if (brightnessSlider) {
    brightnessSlider.addEventListener('input', (e) => {
        applyBrightness(parseInt(e.target.value));
    });
}

// СОБЫТИЯ
if (avatarImg) avatarImg.addEventListener('click', openSettings);
if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', closeSettings);
if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', saveAllSettings);
if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) closeSettings();
    });
}

// ЗАГРУЗИТЬ НАСТРОЙКИ ПРИ СТАРТЕ
loadSavedSettings();

// ========== КНОПКА ПОЛУЧИТЬ ЗАРПЛАТУ (картинка + аудио) ==========
const salaryBtn = document.getElementById('salaryBtn');
const salaryModal = document.getElementById('salaryModal');
const closeSalaryBtn = document.getElementById('closeSalaryBtn');
const salaryAudio = document.getElementById('salaryAudio');

// ОТКРЫТИЕ - показываем картинку и включаем музыку
function openSalaryModal() {
    salaryModal.classList.add('show');
    if (salaryAudio) {
        salaryAudio.play().catch(e => console.log('Автовоспроизведение заблокировано, нажмите на окно'));
    }
}

// ЗАКРЫТИЕ - прячем окно и ВЫКЛЮЧАЕМ музыку
function closeSalaryModal() {
    salaryModal.classList.remove('show');
    if (salaryAudio) {
        salaryAudio.pause();
        salaryAudio.currentTime = 0;  // перематываем на начало
    }
}

// НАЖАТИЕ НА КНОПКУ
if (salaryBtn) {
    salaryBtn.addEventListener('click', openSalaryModal);
}

// НАЖАТИЕ НА КРЕСТИК
if (closeSalaryBtn) {
    closeSalaryBtn.addEventListener('click', closeSalaryModal);
}

// КЛИК ПО ФОНУ (ЗАТЕМНЕНИЮ) - тоже закрывает
if (salaryModal) {
    salaryModal.addEventListener('click', function(e) {
        if (e.target === salaryModal) {
            closeSalaryModal();
        }
    });
}

// ДОПОЛНИТЕЛЬНО: если браузер блокирует автовоспроизведение,
// пользователь может кликнуть по окну чтобы включить музыку
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

    /* ========================================
       SWEET EARN
    ======================================== */
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

        document.addEventListener('click', (e) => {
            const btn = e.target.closest('#sweetEarnBtn');
            if (btn) { e.preventDefault(); openSweetEarn(); return; }
            const overlay = document.getElementById('sweetEarnOverlay');
            if (overlay && e.target === overlay && sweetEarnIsOpen) closeSweetEarn();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sweetEarnIsOpen) closeSweetEarn();
        });
    }
    
    // ========== ПОДКЛЮЧЕНИЕ К GOOGLE SHEETS ==========
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzVWRepqj2f3qyoMNBrrz-4k00v2BqH2YtoxlkSBKc_ThaRLSF9pFf8eCgf6AF33R0TtA/exec';

// ФУНКЦИЯ ДЛЯ ОБНОВЛЕНИЯ СТАТУСА В ТАБЛИЦЕ
async function syncStatusToSheet(eventId, newStatus, userName) {
    try {
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ eventId, newStatus, userName })
        });
        console.log('Статус отправлен в таблицу:', eventId, newStatus);
    } catch(e) {
        console.error('Ошибка отправки в таблицу:', e);
    }
}

// ФУНКЦИЯ ЗАГРУЗКИ СТАТУСОВ ИЗ ТАБЛИЦЫ
async function loadStatusesFromSheet() {
    try {
        const response = await fetch(GOOGLE_SHEETS_URL);
        const data = await response.json();
        console.log('Статусы из таблицы:', data);
        return data;
    } catch(e) {
        console.error('Ошибка загрузки статусов:', e);
        return [];
    }
}

// ЗАГРУЗКА СТАТУСОВ ПРИ СТАРТЕ
async function initStatuses() {
    const statuses = await loadStatusesFromSheet();
    if (statuses && statuses.length > 0) {
        statuses.forEach(item => {
            const event = eventsData.find(e => e.id == item.ID);
            if (event && item.Статус) {
                event.callStatus = item.Статус;
            }
        });
        saveAllData();
        renderEventsTable();
        console.log('Статусы загружены из Google Sheets');
    }
}

// Вызови эту функцию после загрузки данных
initStatuses();

// ПРИНУДИТЕЛЬНОЕ ОБНОВЛЕНИЕ СТАТУСОВ ИЗ ТАБЛИЦЫ
async function refreshStatusesFromSheet() {
    try {
        const response = await fetch(GOOGLE_SHEETS_URL);
        const data = await response.json();
        
        console.log('Получены данные из таблицы:', data);
        
        // Обновляем статусы в eventsData
        let updated = false;
        for (const item of data) {
            const eventId = parseInt(item.ID);
            const newStatus = item.Статус;
            
            // Убираем эмодзи если есть
            let cleanStatus = newStatus;
            if (newStatus.includes('✅')) cleanStatus = '✅Одобрен';
            else if (newStatus.includes('❌')) cleanStatus = '🔴Отказано';
            else if (newStatus.includes('🟡')) cleanStatus = '🟡Скоро';
            
            const event = eventsData.find(e => e.id === eventId);
            if (event && event.callStatus !== cleanStatus) {
                event.callStatus = cleanStatus;
                updated = true;
                console.log(`Обновлён статус ивента ${eventId}: ${cleanStatus}`);
            }
        }
        
        if (updated) {
            saveAllData();
            renderEventsTable();
            showNotif('📊 Статусы обновлены из Google Sheets');
        }
        
        return data;
    } catch(e) {
        console.error('Ошибка обновления:', e);
        return [];
    }
}

// АВТООБНОВЛЕНИЕ КАЖДЫЕ 10 СЕКУНД
setInterval(() => {
    refreshStatusesFromSheet();
}, 5000);

// ========== ПРИКОЛЬНЫЕ ЧАСТИЦЫ ==========
(function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const ctx = canvas.getContext('2d');
    
    // НАСТРОЙКИ (меняй на свои)
    const PARTICLE_COUNT = 120;        // Количество частиц
    const COLORS = ['#ff66cc', '#c9a0ff', '#ff99ff', '#ff66aa', '#d4b8ff', '#ff88dd'];
    const MOUSE_RADIUS = 100;          // Радиус отталкивания от мыши
    
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
            // Движение
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Пульсация размера
            this.size += this.sizePulse * this.pulseDir;
            if (this.size > 6) this.pulseDir = -1;
            if (this.size < 2) this.pulseDir = 1;
            
            // Вращение
            this.angle += this.angleSpeed;
            
            // Отталкивание от мыши
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
            
            // Границы с отражением
            if (this.x < -20) this.x = canvas.width + 20;
            if (this.x > canvas.width + 20) this.x = -20;
            if (this.y < -20) this.y = canvas.height + 20;
            if (this.y > canvas.height + 20) this.y = -20;
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            
            // Рисуем звездочку/цветочек
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
            
            // Внутреннее свечение
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.globalAlpha = this.alpha * 0.5;
            ctx.fill();
            
            ctx.restore();
        }
    }
    
    // СОЗДАНИЕ ЧАСТИЦ
    function initParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }
    
    // ОТРИСОВКА
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Фоновое свечение
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let p of particles) {
            p.update();
            p.draw();
        }
        
        // Рисуем линии между близкими частицами
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
    
    // ОБРАБОТКА ДВИЖЕНИЯ МЫШИ
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    document.addEventListener('mouseleave', () => {
        mouseX = null;
        mouseY = null;
    });
    
    // ОБНОВЛЕНИЕ ПРИ ИЗМЕНЕНИИ РАЗМЕРА ОКНА
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });
    
    // ЗАПУСК
    initParticles();
    animateParticles();
})();
