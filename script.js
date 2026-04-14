// ========== ТВОИ ДАННЫЕ ==========
let eventsData = [
    { id: 1, name: "Пол это лава", platform: "T1Ran", organizer: "Нет", date: "13.04.26, 18.30 - 18.45", status: "Проведен", rating: "10.000$", members: 10, callStatus: "🟡Скоро", fullDetails: { description: "Сначала открытая местность потом появиться пропы и через 3 секунды открывается пол. Те кто не встал на проп погибают.", tasks: "", feedback: "", rewards: "", extra:"" } }
];

let teamData = [
    { id: 1, name: "manisule", role: "Глава ивент-отдела", discord: "565584233981280270", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "21.01.26", rating: "Судо-Куратор", fullDetails: { responsibilities: "Имеет полное владение над отделом Ивентологии, может самостоятельно изменять состав отдела Ивентологии и их норму/правила.", contacts: "https://admin.unionteams.ru/4/admin/76561198386405573", achievements: "0", notes: "" } },
    { id: 2, name: "Гербикс", role: "Зам.Главы ивент-отдела", discord: "694286975158583317", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "21.01.26", rating: "Ассистент", fullDetails: { responsibilities: "Имеет все полномочия нижестоящих рангов, а также имеет право набирать новых кадров в отдел, определять курс развития отдела и изменять норму и правила с разрешения/уведомления об этом Главы Ивентологии.", contacts: "https://admin.unionteams.ru/4/admin/76561199196300974", achievements: "0", notes: "" } },
    { id: 3, name: "Arbuz Madrazo", role: "Ст.Ивентер", discord: "1066705962972495922", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "07.02.26", rating: "Ст.Администратор", fullDetails: { responsibilities: "Имеет все полномочия Ивентера, а также имеет право корректировать работу Ивентеров и давать рекомендации по поводу ивентов, выдавать наказания за их ошибки, а также одобрять отчётности.", contacts: "https://admin.unionteams.ru/4/admin/76561199236074729", achievements: "1", notes: "" } },
    { id: 4, name: "T1Ran", role: "Ивентер", discord: "1246076621484724320", status: "Онлайн", eventsCount: "-", joinDate: "14.03.26", rating: "Оператор", fullDetails: { responsibilities: "Отвечает за таблицу ТАКЖЕ: Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199705616791", achievements: "11", notes: "" } },
    { id: 5, name: "Дмитрий Морозов", role: "Ивентер", discord: "859747626115006474", status: "Онлайн", eventsCount: "-", joinDate: "30.03.26", rating: "Оператор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199403370553", achievements: "11", notes: "" } },
    { id: 6, name: "Гофикал", role: "Ивентер", discord: "1135087142385754123", status: "Онлайн", eventsCount: "-", joinDate: "09.04.26", rating: "Модератор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199636555608", achievements: "0", notes: "" } },
    { id: 7, name: "Himas", role: "Ивентер", discord: "1467081827670954015", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Оператор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199683531094", achievements: "0", notes: "" } },
    { id: 8, name: "yaroslav1432", role: "Ивентер", discord: "1286725096278331565", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Администратор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199775920153", achievements: "0", notes: "" } },
    { id: 9, name: "Foxy", role: "Ивентер", discord: "1344959502436532304", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Модератор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199775920153", achievements: "0", notes: "" }
];

// Функция подсчёта ивентов для КАЖДОГО организатора
function countEventsByOrganizer() {
    const counts = {};
    for (let event of eventsData) {
        const organizer = event.platform;
        if (organizer && organizer !== "Нет") {
            counts[organizer] = (counts[organizer] || 0) + 1;
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
    // ПРИНУДИТЕЛЬНО ОЧИЩАЕМ СТАРЫЕ ДАННЫЕ ПРИ ЗАГРУЗКЕ
    localStorage.removeItem('unionEventsPrizes');
    
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

// ========== НОВАЯ СИСТЕМА ЛОГИНОВ И ПАРОЛЕЙ (С ЗАГЛАВНЫМИ БУКВАМИ) ==========
const VALID_LOGINS = [
    "Foxy",
    "somcop",
    "T1Ran",
    "manisule",
    "Гербикс",
    "Arbuz madrazo",
    "Дмитрий Морозов",
    "Гофикал",
    "Himas",
    "Yaroslav1432"
];

const USER_PASSWORD = "ivent4";
const CREATOR_PASSWORD = "creator2026";

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
        return true;
    }
    return false;
}

function renderEventsTable() {
    const container = document.getElementById('eventDynamicContent');
    const canEdit = isEditor;
    container.innerHTML = `
        <div class="page-header"><h2>📅 Таблица мероприятий</h2></div>
        <div class="click-hint">🔽 ${canEdit ? 'У вас есть права изменять статус "Одобрен" ➜ "Скоро" или "Проведен"' : '🔽 Режим просмотра'}</div>
        <div class="table-wrapper">
            <table class="data-table">
                <thead><tr><th>ИВЕНТ</th><th>ОРГАНИЗАТОР</th><th>ПОМОЩНИКИ</th><th>ДАТА</th><th>СТАТУС</th><th>ПРИЗОВЫЕ</th><th>УЧАСТНИКИ</th><th>ОДОБРЕН</th>${canEdit ? '<th>ДЕЙСТВИЯ</th>' : ''}</tr></thead>
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
    const eventCounts = countEventsByOrganizer();
    
    container.innerHTML = `
        <div class="page-header"><h2>👥 Команда ивент-отдела</h2></div>
        <div class="click-hint">🔽 Нажмите на строку участника — полная информация</div>
        <div class="table-wrapper">
            <table class="data-table">
                <thead><tr><th>Никнейм</th><th>РОЛЬ</th><th>DISCORD</th><th>СТАТУС</th><th>ИВЕНТОВ</th><th>ДАТА ВСТУПЛЕНИЯ</th><th>Должность</th></tr></thead>
                <tbody id="teamTableBody"></tbody>
            </tr>
        </div>
    `;
    const tbody = document.getElementById('teamTableBody');
    tbody.innerHTML = '';
    teamData.forEach(m => {
        const row = tbody.insertRow();
        row.classList.add('clickable-row');
        row.setAttribute('data-type', 'team');
        row.setAttribute('data-id', m.id);
        row.insertCell(0).innerHTML = `<strong>${escapeHtml(m.name)}</strong>`;
        row.insertCell(1).innerHTML = `<span class="role-badge">${escapeHtml(m.role)}</span>`;
        row.insertCell(2).textContent = m.discord;
        row.insertCell(3).innerHTML = `<span class="status-badge status-online">🟢 ${m.status}</span>`;
        
        let eventsCount = eventCounts[m.name] || 0;
        if (m.eventsCount !== "-" && m.eventsCount !== "Нет нормы" && m.eventsCount !== "Отпуск" && !isNaN(parseInt(m.eventsCount))) {
            eventsCount = m.eventsCount;
        } else if (m.eventsCount === "Нет нормы" || m.eventsCount === "Отпуск") {
            eventsCount = m.eventsCount;
        }
        row.insertCell(4).innerHTML = `<span style="font-weight:600;">${eventsCount}</span>`;
        row.insertCell(5).textContent = m.joinDate;
        row.insertCell(6).innerHTML = `<span class="rating-star">⭐ ${m.rating}</span>`;
    });
    attachRowClicks();
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
    document.getElementById('modalTitle').innerHTML = '📌 Детали ивента';
    document.getElementById('modalBody').innerHTML = `
        <div class="detail-row"><span class="detail-label">Название:</span><span>${escapeHtml(ev.name)}</span></div>
        <div class="detail-row"><span class="detail-label">Организатор:</span><span>${ev.platform}</span></div>
        <div class="detail-row"><span class="detail-label">Дата:</span><span>${ev.date}</span></div>
        <div class="detail-row"><span class="detail-label">Категория:</span><span>${ev.callStatus}</span></div>
        <div style="margin-top:12px; background:var(--card-bg); padding:12px; border-radius:24px;"><b>Описание:</b><br>${ev.fullDetails.description}</div>
    `;
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

function initTheme() { 
    if(localStorage.getItem('unionTheme') === 'dark') { 
        document.body.classList.add('dark'); 
        document.getElementById('themeToggleBtn').innerHTML = '🌙'; 
    } 
}
function toggleTheme() { 
    document.body.classList.toggle('dark'); 
    const isDark = document.body.classList.contains('dark'); 
    localStorage.setItem('unionTheme', isDark ? 'dark' : 'light'); 
    document.getElementById('themeToggleBtn').innerHTML = isDark ? '🌙' : '🌞'; 
}
document.getElementById('themeToggleBtn')?.addEventListener('click', toggleTheme);
initTheme();

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
            
            document.getElementById('eventDynamicContent').innerHTML = `
                <div class="stats-grid" id="normStatsContainer">
                    <div class="stat-card"><div class="stat-value">${teamMembersCount}</div><div class="stat-label">Ивентеры</div><div class="stat-sub">активных сотрудников</div></div>
                    <div class="stat-card"><div class="stat-value">${eventsCount}</div><div class="stat-label">ПРОВЕДЕННО ИВЕНТОВ</div><div class="stat-sub">успешно проведенные ивенты</div></div>
                    <div class="stat-card"><div class="stat-value">-</div><div class="stat-label">ТИКЕТЫ</div><div class="stat-sub">за последние 7 дней</div></div>
                    <div class="stat-card"><div class="stat-value">${onlineCount}</div><div class="stat-label">ОНЛАЙН</div><div class="stat-sub">сейчас вне отпуска</div></div>
                    <div class="stat-card"><div class="stat-value" style="color: #5fe147;">${totalPrizes.toLocaleString('ru-RU')}$</div><div class="stat-label">ПРИЗОВЫЕ</div><div class="stat-sub">выданно валюты в неделю</div></div>
                </div>
            `;
        } else if (tab === 'event_guide') {
            document.getElementById('eventDynamicContent').innerHTML = `<div class="page-header"><h2>📖 Методичка</h2></div><div style="background:var(--card-bg); border-radius:28px; padding:1.5rem; border:1px solid var(--card-border);"><b><p style="text-align: center; font-size: 39px;">Методичка Ивентологов</p></b><div class="metod_one"><b>Кто может проводить ивенты?</b><p>Проводить ивенты можно с ранга «Оператор»</p><b>Награды</b><p>Если победа честная — Ивентер обязан выдать приз</p></div></div>`;
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
        <div class="page-header">
            <h2>📝 Добавить новый ивент</h2>
            <button class="add-btn" id="backToEventsBtn">← Назад</button>
        </div>
        <div style="background:var(--card-bg); border-radius:28px; padding:1.8rem; border:1px solid var(--card-border);">
            <div class="form-group">
                <label>Название ивента *</label>
                <input type="text" id="eventName" placeholder="Введите название ивента">
            </div>
            <div class="form-group">
                <label>Краткое описание *</label>
                <textarea id="eventDescription" rows="3" placeholder="Опишите ивент..."></textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Время начала</label>
                    <input type="text" id="eventStartTime" placeholder="Например: 15.04.26, 18:30">
                </div>
                <div class="form-group">
                    <label>Время окончания</label>
                    <input type="text" id="eventEndTime" placeholder="Например: 15.04.26, 19:00">
                </div>
            </div>
            <div class="form-group">
                <label>Количество участников</label>
                <input type="number" id="eventMembers" placeholder="Сколько человек участвовало">
            </div>
            <div class="form-group">
                <label>Были призы? Если да, то какие</label>
                <textarea id="eventPrizes" rows="2" placeholder="Напишите какие призы были выданы..."></textarea>
            </div>
            <div class="form-group">
                <label>Организатор</label>
                <input type="text" id="eventOrganizer" value="${currentUser || ''}" placeholder="Введите имя организатора">
            </div>
            <div class="form-group">
                <label>Помощники</label>
                <input type="text" id="eventHelpers" placeholder="Перечислите помощников (через запятую)">
                <small style="color: var(--text-muted);">Кто помогал проводить ивент</small>
            </div>
            <div class="form-group" style="background: var(--badge-bg); border-radius: 20px; padding: 1rem; margin-top: 1rem;">
                <label style="color: var(--text-primary);">📸 Скриншоты/видео</label>
                <p style="font-size: 0.85rem; margin-bottom: 0.5rem;">Скиньте фотографии и видео в <strong>ветку канала ┣📸・ивент-скрины</strong></p>
                <small style="color: var(--text-muted);">2-3 скриншота или видео, сделанных во время ивента</small>
            </div>
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
    const organizer = document.getElementById('eventOrganizer')?.value.trim() || currentUser || 'Неизвестно';
    const helpers = document.getElementById('eventHelpers')?.value.trim() || 'Нет';
    
    if (!name) {
        showNotif('❌ Введите название ивента!', true);
        return;
    }
    if (!description) {
        showNotif('❌ Введите описание ивента!', true);
        return;
    }
    
    const webhookURL = "https://discord.com/api/webhooks/1492180488733851771/aVB2IzG8pZ9aASEjEc7Wa1yjugZcIvHFwmKsRrgHWCZbF0G0ULoZ6tcnx01MlaLi286O";
    
    const embed = {
        title: "📅 Новый ивент",
        color: 0x5865F2,
        fields: [
            { name: "📌 Название", value: name, inline: false },
            { name: "📝 Описание", value: description.substring(0, 500), inline: false },
            { name: "⏰ Время начала", value: startTime, inline: true },
            { name: "⏰ Время окончания", value: endTime, inline: true },
            { name: "👥 Участников", value: members.toString(), inline: true },
            { name: "🎁 Призы", value: prizes, inline: false },
            { name: "👤 Организатор", value: organizer, inline: true },
            { name: "🤝 Помощники", value: helpers, inline: true },
            { name: "📸 Скриншоты/видео", value: "Скинуты в ветку канала ┣📸・ивент-скрины", inline: false }
        ],
        footer: { text: "Ивент-отдел UnionTeam" },
        timestamp: new Date().toISOString()
    };
    
    const payload = {
        content: `<@1246076621484724320> <@1066705962972495922> Новый ивент от ${organizer}!`,
        embeds: [embed],
        username: "Ивент-отдел UnionTeam",
        avatar_url: "https://i.ytimg.com/vi/_pMmC52HB2k/hqdefault.jpg"
    };
    
    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (response.ok) {
            showNotif('✅ Ивент успешно отправлен в Discord!');
            renderEventsTable();
        } else {
            showNotif('❌ Ошибка отправки. Попробуйте позже.', true);
        }
    } catch (error) {
        console.error(error);
        showNotif('❌ Ошибка сети. Проверьте подключение.', true);
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

function doLogin() {
    const login = loginInput.value.trim();
    const pwd = passInput.value;
    
    if (VALID_LOGINS.includes(login)) {
        if (pwd === CREATOR_PASSWORD) {
            sessionStorage.setItem('user', login);
            sessionStorage.setItem('isEditor', 'true');
            sessionStorage.removeItem('continued');
            currentUser = login;
            isEditor = true;
            loginOverlay.style.display = 'none';
            welcomeContainer.classList.remove('hidden');
            mainDashboard.style.display = 'none';
            errMsg.classList.remove('show');
        } else if (pwd === USER_PASSWORD) {
            sessionStorage.setItem('user', login);
            sessionStorage.setItem('isEditor', 'false');
            sessionStorage.removeItem('continued');
            currentUser = login;
            isEditor = false;
            loginOverlay.style.display = 'none';
            welcomeContainer.classList.remove('hidden');
            mainDashboard.style.display = 'none';
            errMsg.classList.remove('show');
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
