// ========== ТВОИ ДАННЫЕ ==========
let eventsData = [
    { id: 1, name: "Пол это лава", platform: "T1Ran", organizer: "Нет", date: "13.04.26, 18.30 - 18.45", status: "Проведен", rating: "10.000$", members: 10, callStatus: "🟡Скоро", fullDetails: { description: "Сначала открытая местность потом появиться пропы и через 3 секунды открывается пол. Те кто не встал на проп погибают.", tasks: "", feedback: "", rewards: "", extra: "" } }
];

let teamData = [
    // ========== СТАРШИЙ СОСТАВ ==========
    { id: 1, name: "manisule", role: "Глава ивент-отдела", discord: "565584233981280270", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "21.01.26", rating: "Судо-Куратор", category: "Старший состав", fullDetails: { responsibilities: "Имеет полное владение над отделом Ивентологии, может самостоятельно изменять состав отдела Ивентологии и их норму/правила.", contacts: "https://admin.unionteams.ru/4/admin/76561198386405573", achievements: "0", notes: "" } },
    { id: 2, name: "Гербикс", role: "Зам.Главы ивент-отдела", discord: "694286975158583317", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "21.01.26", rating: "Ассистент", category: "Старший состав", fullDetails: { responsibilities: "Имеет все полномочия нижестоящих рангов, а также имеет право набирать новых кадров в отдел, определять курс развития отдела и изменять норму и правила с разрешения/уведомления об этом Главы Ивентологии.", contacts: "https://admin.unionteams.ru/4/admin/76561199196300974", achievements: "0", notes: "" } },
    { id: 3, name: "Arbuz Madrazo", role: "Ст.Ивентер", discord: "1066705962972495922", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "07.02.26", rating: "Ст.Администратор", category: "Старший состав", fullDetails: { responsibilities: "Имеет все полномочия Ивентера, а также имеет право корректировать работу Ивентеров и давать рекомендации по поводу ивентов, выдавать наказания за их ошибки, а также одобрять отчётности.", contacts: "https://admin.unionteams.ru/4/admin/76561199236074729", achievements: "1", notes: "" } },
    
    // ========== МЛАДШИЙ СОСТАВ ==========
    { id: 4, name: "T1Ran", role: "Ивентер", discord: "1246076621484724320", status: "Онлайн", eventsCount: "-", joinDate: "14.03.26", rating: "Оператор", category: "Младший состав", fullDetails: { responsibilities: "Отвечает за таблицу ТАКЖЕ: Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199705616791", achievements: "11", notes: "" } },
    { id: 5, name: "Дмитрий Морозов", role: "Ивентер", discord: "859747626115006474", status: "Онлайн", eventsCount: "-", joinDate: "30.03.26", rating: "Оператор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199403370553", achievements: "11", notes: "" } },
    { id: 6, name: "Гофикал", role: "Ивентер", discord: "1135087142385754123", status: "Онлайн", eventsCount: "-", joinDate: "09.04.26", rating: "Модератор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199636555608", achievements: "0", notes: "" } },
    { id: 7, name: "Himas", role: "Ивентер", discord: "1467081827670954015", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Оператор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199683531094", achievements: "0", notes: "" } },
    { id: 8, name: "yaroslav1432", role: "Ивентер", discord: "1286725096278331565", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Администратор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199775920153", achievements: "0", notes: "" } },
    { id: 9, name: "Foxy", role: "Ивентер", discord: "1344959502436532304", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Модератор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199775920153", achievements: "0", notes: "" } },
    { id: 10, name: "somcop", role: "Ивентер", discord: "76561199768219919", status: "Онлайн", eventsCount: "0", joinDate: "13.04.26", rating: "Модератор", category: "Младший состав", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199768219919", achievements: "0", notes: "" } }
];

// Функция подсчёта ивентов по организатору
function countEventsByOrganizer() {
    const counts = {};
    for (let event of eventsData) {
        const organizer = event.organizer;
        if (organizer && organizer !== "Нет") {
            counts[organizer] = (counts[organizer] || 0) + 1;
        }
    }
    return counts;
}

// Функция подсчёта ивентов по платформе
function countEventsByPlatform() {
    const counts = {};
    for (let event of eventsData) {
        const platform = event.platform;
        if (platform && platform !== "Нет") {
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

// ========== СИСТЕМА ЛОГИНОВ И ПАРОЛЕЙ ==========
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
    "yaroslav1432"
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
        <div class="click-hint">🔽 ${canEdit ? 'У вас есть права изменять статус' : '🔽 Режим просмотра'}</div>
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
    const eventCounts = countEventsByPlatform();
    
    const seniorMembers = teamData.filter(m => m.category === "Старший состав");
    const juniorMembers = teamData.filter(m => m.category === "Младший состав");
    
    function renderMemberCard(m, type) {
        const eventsCount = getEventsCountForMember(m, eventCounts);
        const cardClass = type === 'senior' ? 'senior' : 'junior';
        
        // Рейтинг звездами
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
        
        // Статус (Онлайн/Оффлайн)
        const statusHtml = m.status === "Онлайн" 
            ? '<span class="team-status online">🟢 Онлайн</span>' 
            : '<span class="team-status offline">🔴 ' + m.status + '</span>';
        
        return `
            <div class="team-card ${cardClass} clickable-card" data-type="team" data-id="${m.id}">
                <div class="team-card-header">
                    <div>
                        <div class="team-name">${escapeHtml(m.name)}</div>
                        <div class="team-role">${escapeHtml(m.role)}</div>
                    </div>
                    ${statusHtml}
                </div>
                <div class="team-card-body">
                    <div class="team-info-item">
                        <div class="team-info-label">DISCORD</div>
                        <div class="team-info-value">${m.discord}</div>
                    </div>
                    <div class="team-info-item">
                        <div class="team-info-label">ИВЕНТОВ</div>
                        <div class="team-info-value">${eventsCount}</div>
                    </div>
                    <div class="team-info-item">
                        <div class="team-info-label">ВСТУПИЛ</div>
                        <div class="team-info-value">${m.joinDate}</div>
                    </div>
                </div>
                <div class="team-card-footer">
                    <span class="team-badge ${type === 'senior' ? 'senior-badge' : 'junior-badge'}">
                        ${type === 'senior' ? '👑' : '🌟'} ${type === 'senior' ? 'Старший' : 'Младший'} состав
                    </span>
                    <div class="team-rating">
                        ${starsHtml}
                    </div>
                </div>
            </div>
        `;
    }
    
    let seniorHtml = '';
    let juniorHtml = '';
    
    seniorMembers.forEach(m => { seniorHtml += renderMemberCard(m, 'senior'); });
    juniorMembers.forEach(m => { juniorHtml += renderMemberCard(m, 'junior'); });
    
    container.innerHTML = `
        <div class="page-header"><h2>👥 Команда ивент-отдела</h2></div>
        <div class="click-hint">🔽 Нажмите на карточку участника — полная информация</div>
        
        <div class="team-section">
            <div class="section-header senior">
                <span class="section-icon">👑</span>
                <span class="section-title senior">Старший состав</span>
                <span class="section-count">${seniorMembers.length} чел</span>
            </div>
            <div class="team-grid">${seniorHtml || '<div style="text-align:center; padding:2rem;">Нет участников</div>'}</div>
        </div>
        
        <div class="team-section">
            <div class="section-header junior">
                <span class="section-icon">🌟</span>
                <span class="section-title junior">Младший состав</span>
                <span class="section-count">${juniorMembers.length} чел</span>
            </div>
            <div class="team-grid">${juniorHtml || '<div style="text-align:center; padding:2rem;">Нет участников</div>'}</div>
        </div>
    `;
    
    document.querySelectorAll('.clickable-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            const member = teamData.find(m => m.id === id);
            if (member) openTeamModal(member);
        });
    });
}

function getEventsCountForMember(m, eventCounts) {
    let eventsCount = eventCounts[m.name] || 0;
    if (m.eventsCount !== "-" && m.eventsCount !== "Нет нормы" && m.eventsCount !== "Отпуск" && !isNaN(parseInt(m.eventsCount))) {
        eventsCount = m.eventsCount;
    } else if (m.eventsCount === "Нет нормы" || m.eventsCount === "Отпуск") {
        eventsCount = m.eventsCount;
    }
    return eventsCount;
}

// Вспомогательная функция для подсчёта ивентов участника
function getEventsCountForMember(m, eventCounts) {
    let eventsCount = eventCounts[m.name] || 0;
    if (m.eventsCount !== "-" && m.eventsCount !== "Нет нормы" && m.eventsCount !== "Отпуск" && !isNaN(parseInt(m.eventsCount))) {
        eventsCount = m.eventsCount;
    } else if (m.eventsCount === "Нет нормы" || m.eventsCount === "Отпуск") {
        eventsCount = m.eventsCount;
    }
    return eventsCount;
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
            document.getElementById('eventDynamicContent').innerHTML = `
                <div class="page-header"><h2>📖 Методичка</h2></div>
                <div style="background:var(--card-bg); border-radius:28px; padding:1.5rem; border:1px solid var(--card-border);">
                    <b><p style="text-align: center; font-size: 39px; font-family: 'Courier New', Courier, monospace; color: #fd72f4;">Методичка Ивентологов</p></b>
                    <b><p style="text-align: center; font-size: 36px; font-family: 'Courier New', Courier, monospace; color: #fd72f4;">ОСНОВНЫЕ ПРАВИЛА  ОТДЕЛА ИВЕНТОЛОГИИ</p></b>
                    <p>ㅤ</p>
                    
                    <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #882381;">ЧТО МОЖНО ДЕЛАТЬ?</p></b>
                    <div class="metod_one">
                        <b><p style="font-size: 19px;">Кто может проводить ивенты?</p></b>
                        <p>Проводить ивенты можно с ранга «Оператор», если вы состоите в отделе Ивентологии.</p>
                        <p style="color: #818181">С рангов ниже — только с разрешения Главы отдела или Куратора сервера.</p>
                        <b><p style="font-size: 19px;">Кол-во администрации на ивенте</p></b>
                        <p>В ивенте может участвовать не более 25% от всей наборной администрации.</p>
                        <p style="color: #818181">(Например: 10 админов → максимум участвуют 3, округление вверх)</p>
                        <b><p style="font-size: 19px;">Игнор завалов</p></b>
                        <p>Если завал начался во время ивента, его разрешено игнорировать.</p>
                        <b><p style="font-size: 19px;">Самостоятельность</p></b>
                        <p>Каждый Ивентер может проводить ивенты без разрешения от Ст. Администрации.</p>
                        <p style="color: #818181">Если ты на испытательном сроке — нужно одобрение от Ст. Ивентера.</p>
                        <b><p style="font-size: 19px;">Награды</p></b>
                        <p>Если игрок использует баги/преимущества/нарушал правила, что привело его к победе — Ивентер может не выдавать приз.</p>
                        <p style="color: #818181">Если победа честная — Ивентер обязан выдать приз (если он конечно есть).</p>
                        <b><p style="font-size: 19px;">RP-Мероприятия</p></b>
                        <p>Помимо ивентов, вам также доступны РП-Мероприятия. Такие мероприятия представляют собой сюжетные или ситуационные ролевые отыгровки в пределах RP-зоны и направлены на создание "живого" игрового процесса.</p>
                        <p style="color: #818181">РП-мероприятие засчитывается как полноценный ивент и учитывается в норме Ивентера. Призы за участие в РП-Мероприятиях можно не выдавать.</p>
                    </div>
                    
                    <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #ca6019;">ЧТО ВЫ ОБЯЗАНЫ ДЕЛАТЬ?</p></b>
                    <div class="metod_one">
                        <b><p style="font-size: 19px;">После ивента/РП-Мероприятия</p></b>
                        <p>Убрать всё, что было построено/создано. Написать отчёт в специальный канал.</p>
                        <b><p style="font-size: 19px;">Лаги</p></b>
                        <p>Если во время ивента появились лаги или высокий пинг — ивент нужно как можно быстрее прекратить и сообщить Главе/Зам. Главы.</p>
                    </div>
                    
                    <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #ca1919;">ЧТО НЕЛЬЗЯ ДЕЛАТЬ?</p></b>
                    <div class="metod_one">
                        <b><p style="font-size: 19px;">Правила RP-Мероприятий</p></b>
                        <p>・Запрещается привлекать игроков к РП-мероприятию через /OOC, участие должно происходить естественным RP путем.</p>
                        <p>・Нельзя принуждать игроков к участию в мероприятии.</p>
                        <p>・Создавать мероприятия, мешающие обычному RP-процессу сервера.</p>
                        
                        <b><p style="font-size: 19px;">Завалы</p></b>
                        <p>Запрещено начинать ивенты во время активных завалов.</p>
                        
                        <b><p style="font-size: 19px;">Несколько ивентов</p></b>
                        <p>Запрещено проводить 2 и более ивентов одновременно. Если кто-то уже проводит ивент — ждём, пока закончат.</p>
                        
                        <b><p style="font-size: 19px;">Мешать другим</p></b>
                        <p>Запрещено мешать подготовке или проведению ивентов (включая ивент-мастеров).</p>
                        
                        <b><p style="font-size: 19px;">RP Зона</p></b>
                        <p>Категорически запрещено проводить ивенты в RP зоне. Исключение: РП-Мероприятия.</p>
                        
                        <b><p style="font-size: 19px;">Оскорбительный контент</p></b>
                        <p>Запрещается проводить ивенты, которые нацелены на разжигание ненависти, дискриминацию, имеют деструктивный или политический контент. Помните: важно соблюдать нейтралитет.</p>
                        
                        <b><p style="font-size: 19px;">Привилегии</p></b>
                        <p>Запрещено выпрашивать бонусы/привилегии за ивенты (будут наказания и возможно снятие).</p>
                        
                        <b><p style="font-size: 19px;">Донат-Администрация</p></b>
                        <p>Донатной администрации (далее д.админ) категорически запрещено проводить ивенты. Даже под вашим присмотром и даже в качестве помощников. Вы можете взять идею, приз или дубликат у д.админа, а также попросить его поставить дубликат, если вам не хватает пропов.</p>
                    </div>
                    
                    <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #ffaa44;">⠀УТОЧНЕНИЯ⠀</p></b>
                    <div class="metod_one">
                        <b><p style="font-size: 19px;">RP-Мероприятия</p></b>
                        <p>При проведении РП-мероприятий обязательно соблюдение всех действующих правил сервера. РП-мероприятие не освобождает участников от ответственности за нарушения. (Исключение: правило 8.1, правила для которых нужно разрешение от администратора).</p>
                        
                        <b><p style="font-size: 19px;">Ивент-Мастер</p></b>
                        <p>Повышение до Ивент-Мастера не будет. Как вы бы не просили, умоляли, заслужили, его не будет. Однако попросить его помощь в вашем ивенте вы можете в канале ┣🍽️・запрос-вещей.</p>
                        
                        <b><p style="font-size: 19px;">Набор</p></b>
                        <p>Набирать людей в Ивентологию могут только Глава и Зам. Главы отдела.</p>
                        
                        <b><p style="font-size: 19px;">Отдел</p></b>
                        <p>Отдел Ивентологии является «совмещенным». Любой администратор из другого отдела может попасть к нам при наличии свободных слотов и соответствии установленным критериям. Для таких администраторов действует пониженная норма.</p>
                    </div>
                    
                    <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #44aaff;">Максимальное количество мест в отделе - 9:</p></b>
                    <div class="metod_one">
                        <p>• 7 младших ивентеров</p>
                        <p>• 1 Старший ивентер</p>
                        <p>• 1 Заместитель главы отдела</p>
                        <p>• 1 Глава отдела Ивентологии</p>
                    </div>
                    
                    <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #44ffaa;">РАНГИ</p></b>
                    <div class="metod_one">
                        <b><p style="font-size: 19px;">Ивентер🤡</p></b>
                        <p>Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.</p>
                        
                        <b><p style="font-size: 19px;">Ст. Ивентер🍉</p></b>
                        <p>Имеет все полномочия Ивентера, а также имеет право корректировать работу Ивентеров и давать рекомендации по поводу ивентов, выдавать наказания за их ошибки, а также одобрять отчётности.</p>
                        
                        <b><p style="font-size: 19px;">Зам. Главы Ивентологии📿</p></b>
                        <p>Имеет все полномочия нижестоящих рангов, а также имеет право набирать новых кадров в отдел, определять курс развития отдела и изменять норму и правила с разрешения/уведомления об этом Главы Ивентологии.</p>
                        
                        <b><p style="font-size: 19px;">Глава Ивентологии👑</p></b>
                        <p>Имеет полное владение над отделом Ивентологии, может самостоятельно изменять состав отдела Ивентологии и их норму/правила.</p>
                    </div>
                    
                    <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #ff66cc;">НОРМА</p></b>
                    <div class="metod_one">
                        <p>• Ивентер из другого отдела - кол-во тикетов из вашего отдела | 2 ивента в неделю</p>
                        <p>• Ивентер - 35 тикетов | 3 ивента в неделю</p>
                        <p>• Ст. Ивентер - 25 тикетов</p>
                        <p>• Зам. Главы Ивентологии - не имеет нормы</p>
                        <p>• Глава Ивентологии - не имеет нормы</p>
                    </div>
                    
                    <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #ffaa66;">Норма после отпуска/заморозки/вступлении в отдел ивентов в течение недели:</p></b>
                    <div class="metod_one">
                        <p>• Понедельник — 35 тикетов | 3 ивента</p>
                        <p>• Вторник — 35 тикетов | 3 ивента</p>
                        <p>• Среда — 30 тикетов | 2 ивента</p>
                        <p>• Четверг (промежуточная норма) — 25 тикетов | 1 ивент</p>
                        <p>• Пятница — 20 тикетов | 1 ивент</p>
                        <p>• Суббота — 10 тикетов | 1 ивент</p>
                        <p>• Воскресенье — освобождены от нормы</p>
                        <p>Если вы состоите в другом отделе и вышли с отпуска/мороза и т.п. С четверга вы обязуетесь провести 1 ивент. Если с понедельника и до среды – 2 ивента.</p>
                    </div>
                    
                    <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #ff6666;">Наказания за невыполнение нормы:</p></b>
                    <div class="metod_one">
                        <p>• 25-35 тикетов и 2-3 ивента: В случае уважительной причины недобор прощается, в другом случае выдается предупреждение.</p>
                        <p>• 15-24 тикета и 1-2 ивента: В случае уважительной причины выдается предупреждение, в другом случае выдается выговор.</p>
                        <p>• 0-14 тикета и 0-1 ивент: В случае уважительной причины выдается выговор, в другом случае снятие или два выговора.</p>
                        <p>• Для ивентеров, состоящих в другом отделе: если проведено менее двух ивентов, выдается предупреждение. При уважительной причине недобор прощается.</p>
                    </div>
                    
                    <div class="metod_one">
                        <b><p style="font-size: 19px;">Зарплата</p></b>
                        <p>Зарплата выдаётся только за выполненные тикеты. Тех. Администрация не намеревается выдавать ЗП за ивенты, возможно когда-то в будущем у вас будет вознаграждение за ваши прекрасные ивенты.</p>
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
            showNotif(`✅ Добро пожаловать, создатель ${login}!`);
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


// Супер-плавный движущийся фон за мышкой
const bg = document.getElementById('moving-bg');
if (bg) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;
    
    function smoothAnimate() {
        // Плавное приближение к цели (чем меньше число, тем плавнее)
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        
        bg.style.transform = `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`;
        
        rafId = requestAnimationFrame(smoothAnimate);
    }
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Максимальное смещение фона (чем больше число, тем сильнее движение)
        targetX = (mouseX - 0.5) * 15;
        targetY = (mouseY - 0.5) * 15;
    });
    
    smoothAnimate();
}
