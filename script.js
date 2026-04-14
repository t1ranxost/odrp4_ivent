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
    { id: 8, name: "yaroslav1432", role: "Ивентер", discord: "1286725096278331565", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Администратор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199775920153", achievements: "0", notes: "" } }
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

function renderTeamTable() { // ========== ТВОИ ДАННЫЕ ==========
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
    { id: 8, name: "yaroslav1432", role: "Ивентер", discord: "1286725096278331565", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Администратор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199775920153", achievements: "0", notes: "" } }
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
