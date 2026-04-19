// ============================================================
//  УТИЛИТЫ
// ============================================================



function escapeHtml(text) {
    if (!text) return '';
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
    return text.replace(/[&<>]/g, char => map[char]);
}

/**
 * Возвращает SVG-иконку через <use href>.
 */
function svgIcon(iconId, extraClass = '', extraStyle = '') {
    const styleAttr = extraStyle ? ` style="${extraStyle}"` : '';
    return `<svg class="icon ${extraClass}"${styleAttr}><use href="#${iconId}"/></svg>`;
}


const EVENT_API = 'https://api-event.glent1754.workers.dev';
const AUTH_API  = 'https://jolly-bird-368f.roman-gonchukov.workers.dev';

let eventsData = []; 
let teamData = [
    {
        id: 1,
        name: "manisule",
        role: "Глава ивент-отдела",
        discord: "565584233981280270",
        status: "Онлайн",
        eventsCount: "Нет нормы",
        joinDate: "21.01.26",
        rating: "Судо-Куратор",
        category: "Старший состав",
        fullDetails: {
            responsibilities: "Имеет полное владение над отделом Ивентологии, может самостоятельно изменять состав отдела Ивентологии и их норму/правила.",
            contacts: "https://admin.unionteams.ru/4/admin/76561198386405573",
            achievements: "0",
            notes: "",
        },
    },
    {
        id: 2,
        name: "Гербикс",
        role: "Зам.Главы ивент-отдела",
        discord: "694286975158583317",
        status: "Онлайн",
        eventsCount: "Нет нормы",
        joinDate: "21.01.26",
        rating: "Ассистент",
        category: "Старший состав",
        fullDetails: {
            responsibilities: "Имеет все полномочия нижестоящих рангов, а также имеет право набирать новых кадров в отдел, определять курс развития отдела и изменять норму и правила с разрешения/уведомления об этом Главы Ивентологии.",
            contacts: "https://admin.unionteams.ru/4/admin/76561199196300974",
            achievements: "0",
            notes: "",
        },
    },
    {
        id: 3,
        name: "Arbuz Madrazo",
        role: "Ст.Ивентер",
        discord: "1066705962972495922",
        status: "Онлайн",
        eventsCount: "Нет нормы",
        joinDate: "07.02.26",
        rating: "Ст.Администратор",
        category: "Старший состав",
        fullDetails: {
            responsibilities: "Имеет все полномочия Ивентера, а также имеет право корректировать работу Ивентеров и давать рекомендации по поводу ивентов, выдавать наказания за их ошибки, а также одобрять отчётности.",
            contacts: "https://admin.unionteams.ru/4/admin/76561199236074729",
            achievements: "1",
            notes: "",
        },
    },
    {
        id: 4,
        name: "T1Ran",
        role: "Ивентер",
        discord: "1246076621484724320",
        status: "Онлайн",
        eventsCount: "-",
        joinDate: "14.03.26",
        rating: "Оператор",
        category: "Младший состав",
        fullDetails: {
            responsibilities: "Отвечает за таблицу. Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера.",
            contacts: "https://admin.unionteams.ru/4/admin/76561199705616791",
            achievements: "11",
            notes: "",
        },
    },
    {
        id: 5,
        name: "Дмитрий Морозов",
        role: "Ивентер",
        discord: "859747626115006474",
        status: "Онлайн",
        eventsCount: "-",
        joinDate: "30.03.26",
        rating: "Оператор",
        category: "Младший состав",
        fullDetails: {
            responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера.",
            contacts: "https://admin.unionteams.ru/4/admin/76561199403370553",
            achievements: "11",
            notes: "",
        },
    },
    {
        id: 6,
        name: "Гофикал",
        role: "Ивентер",
        discord: "1135087142385754123",
        status: "Онлайн",
        eventsCount: "-",
        joinDate: "09.04.26",
        rating: "Модератор",
        category: "Младший состав",
        fullDetails: {
            responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера.",
            contacts: "https://admin.unionteams.ru/4/admin/76561199636555608",
            achievements: "0",
            notes: "",
        },
    },
    {
        id: 7,
        name: "Himas",
        role: "Ивентер",
        discord: "1467081827670954015",
        status: "Онлайн",
        eventsCount: "-",
        joinDate: "10.04.26",
        rating: "Оператор",
        category: "Младший состав",
        fullDetails: {
            responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера.",
            contacts: "https://admin.unionteams.ru/4/admin/76561199683531094",
            achievements: "0",
            notes: "",
        },
    },
    {
        id: 8,
        name: "yaroslav1432",
        role: "Ивентер",
        discord: "1286725096278331565",
        status: "Онлайн",
        eventsCount: "-",
        joinDate: "10.04.26",
        rating: "Администратор",
        category: "Младший состав",
        fullDetails: {
            responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера.",
            contacts: "https://admin.unionteams.ru/4/admin/76561199775920153",
            achievements: "0",
            notes: "",
        },
    },
    {
        id: 9,
        name: "Foxy",
        role: "Ивентер",
        discord: "1344959502436532304",
        status: "Онлайн",
        eventsCount: "-",
        joinDate: "10.04.26",
        rating: "Модератор",
        category: "Младший состав",
        fullDetails: {
            responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера.",
            contacts: "https://admin.unionteams.ru/4/admin/76561199775920153",
            achievements: "0",
            notes: "",
        },
    },
    {
        id: 10,
        name: "somcop",
        role: "Ивентер",
        discord: "76561199768219919",
        status: "Онлайн",
        eventsCount: "-",
        joinDate: "13.04.26",
        rating: "Модератор",
        category: "Младший состав",
        fullDetails: {
            responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера.",
            contacts: "https://admin.unionteams.ru/4/admin/76561199768219919",
            achievements: "0",
            notes: "",
        },
    },
    {
         id: 11,
         name: "кусочек шаурмы",
         role: "Ивентер",
         discord: "636585910552756284",
         status: "Онлайн", eventsCount: "-",
         joinDate: "17.04.26",
         rating: "Администратор",
         category: "Младший состав",
         fullDetails: { 
            responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199768219919", achievements: "0", notes: "" } 
    }
];

// ============================================================
//  ЭКРАН ЗАГРУЗКИ
// ============================================================

function showLoadingScreen(statusText) {
    const screen = document.getElementById('loadingScreen');
    if (!screen) return;
    screen.classList.remove('hidden', 'fade-out');
    updateLoadingStatus(statusText || 'Подключение к серверу');
    updateLoadingProgress(0);
}

function hideLoadingScreen() {
    const screen = document.getElementById('loadingScreen');
    if (!screen) return;
    updateLoadingProgress(100);
    setTimeout(() => {
        screen.classList.add('fade-out');
        setTimeout(() => {
            screen.classList.add('hidden');
        }, 500);
    }, 300);
}

function updateLoadingStatus(text) {
    const el = document.getElementById('loadingStatus');
    if (el) el.textContent = text;
}

function updateLoadingProgress(percent) {
    const bar = document.getElementById('loadingBarFill');
    if (bar) bar.style.width = Math.min(100, Math.max(0, percent)) + '%';
}

async function loadAllDataWithProgress() {
    showLoadingScreen('Подключение к серверу');

    try {
        // Шаг 1 — ивенты и команда
        updateLoadingStatus('Загрузка ивентов и команды...');
        updateLoadingProgress(10);
        await new Promise(r => setTimeout(r, 200));

        const [events, team] = await Promise.all([
            fetchFromApi('/api/events'),
            fetchFromApi('/api/team')
        ]);

        if (events && Array.isArray(events)) {
            eventsData = events;
        }

        if (team && Array.isArray(team) && team.length > 0) {
            teamData = team;
            console.log("Данные команды загружены из API");
        } else {
            console.warn("API команды пустое, использую список из кода");
        }

        updateLoadingProgress(40);

        // Шаг 2 — локальные данные
        updateLoadingStatus('Загрузка сохранённых данных...');
        await new Promise(r => setTimeout(r, 150));
        loadAllData();
        updateLoadingProgress(60);

        // Шаг 3 — рендер интерфейса
        updateLoadingStatus('Подготовка интерфейса...');
        await new Promise(r => setTimeout(r, 150));
        renderEventsTable();
        updateNormStats();
        updateLoadingProgress(85);

        // Шаг 4 — финализация
        updateLoadingStatus('Почти готово...');
        await new Promise(r => setTimeout(r, 200));
        updateLoadingProgress(100);

        updateLoadingStatus('Готово!');
        await new Promise(r => setTimeout(r, 300));

    } catch (e) {
        console.error('Ошибка загрузки данных:', e);
        updateLoadingStatus('Загрузка завершена с ошибками');
        updateLoadingProgress(100);
        await new Promise(r => setTimeout(r, 500));

        // Используем локальные данные при ошибке
        loadAllData();
        renderEventsTable();
    }

    hideLoadingScreen();
}
async function fetchFromApi(path, options = {}) {
    const res = await fetch(`${EVENT_API}${path}`, {
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        ...options
    });
    return await res.json();
}

async function loadInitialData() {
    try {
        const [events, team] = await Promise.all([
            fetchFromApi('/api/events'),
            fetchFromApi('/api/team')
        ]);

        if (events && Array.isArray(events)) {
            eventsData = events;
        }

        // ПРОВЕРКА: Если API вернуло пустую команду или ошибку, 
        // НЕ перезаписываем локальный список из кода
        if (team && Array.isArray(team) && team.length > 0) {
            teamData = team;
            console.log("Данные команды загружены из API");
        } else {
            console.warn("API команды пустое, использую список из кода");
        }
    } catch (err) {
        console.error('Ошибка БД (использую локальные данные):', err);
    }
}

/**
 * Подсчитывает количество ивентов по каждому организатору (platform).
 * @returns {Object} { имяОрганизатора: количество }
 */
function countEventsByPlatform() {
    const counts = {};

    for (const event of eventsData) {
        const platform = event.platform;
        if (platform && platform !== "Нет" && platform !== "") {
            counts[platform] = (counts[platform] || 0) + 1;
        }
    }

    return counts;
}

/**
 * Суммирует все призовые фонды из таблицы ивентов.
 * @returns {number} Общая сумма призовых.
 */
function calculateTotalPrizes() {
    let total = 0;

    for (const event of eventsData) {
        const cleaned = String(event.rating).replace('$', '').replace(/\./g, '');
        const match = cleaned.match(/(\d+(?:[.,]\d+)?)/);

        if (match) {
            const num = parseFloat(match[1].replace(',', '.'));
            if (!isNaN(num)) {
                total += num;
            }
        }
    }

    return total;
}

/**
 * Обновляет карточку «Призовые» на странице статистики.
 */
function updateNormStats() {
    const totalPrizes = calculateTotalPrizes();
    const normContainer = document.getElementById('normStatsContainer');

    if (!normContainer) return;

    const prizeCard = normContainer.querySelector('.stat-card:last-child .stat-value');
    if (prizeCard) {
        prizeCard.innerHTML = totalPrizes.toLocaleString('ru-RU') + '$';
        prizeCard.style.color = '#5fe147';
    }
}

/**
 * Сохраняет статусы одобрения и призы в localStorage.
 */
function saveAllData() {
    const statusMap = {};
    const prizesMap = {};

    for (const event of eventsData) {
        statusMap[event.id] = event.callStatus;
        prizesMap[event.id] = event.rating;
    }

    localStorage.setItem('unionEventsStatuses', JSON.stringify(statusMap));
    localStorage.setItem('unionEventsPrizes', JSON.stringify(prizesMap));
}

/**
 * Загружает сохранённые статусы одобрения из localStorage.
 */
function loadAllData() {
    const saved = localStorage.getItem('unionEventsStatuses');
    if (!saved) return;

    try {
        const statusMap = JSON.parse(saved);
        for (const event of eventsData) {
            if (statusMap[event.id]) {
                event.callStatus = statusMap[event.id];
            }
        }
    } catch {
        // Данные повреждены — игнорируем
    }
}


// ============================================================
//  ОТЛАДКА: ГЕНЕРАЦИЯ ХЕШЕЙ
// ============================================================

/**
 * Выводит в консоль хеши всех логинов и паролей (для разработки).
 */


// ============================================================
//  АВТОРИЗАЦИЯ
// ============================================================

let currentUser = null;
let isEditor = false;

// DOM-элементы авторизации
const loginOverlay     = document.getElementById('loginOverlay');
const welcomeContainer = document.getElementById('welcomeContainer');
const mainDashboard    = document.getElementById('mainDashboard');
const loginBtn         = document.getElementById('loginBtn');
const loginInput       = document.getElementById('loginInput');
const passInput        = document.getElementById('passwordInput');
const errMsg           = document.getElementById('errorMsg');
const contBtn          = document.getElementById('continueBtn');
const logoutBtn        = document.getElementById('logoutBtn');

/**
 * Показывает ошибку авторизации на 2 секунды.
 */
function flashLoginError() {
    errMsg.classList.add('show');
    setTimeout(() => errMsg.classList.remove('show'), 2000);
}

/**
 * Выполняет вход пользователя.
 */
async function doLogin() {
  const login = loginInput.value.trim();
  const password = passInput.value;

  if (!login || !password) {
    flashLoginError();
    return;
  }

  try {
    const response = await fetch('https://sparkling-star-1ea5.glent1754.workers.dev/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login: login, pass: password })
    });

    const data = await response.json();

    if (!data.success) {
      flashLoginError();
      return;
    }

    // Определяем уровень доступа по роли из Worker'а
    const editorAccess = (data.role === 'creator');
    let welcomeMessage = '';

    if (editorAccess) {
      welcomeMessage = `${svgIcon('ic-star', '', 'fill:#5fe147;width:16px;height:16px;vertical-align:middle;')} Добро пожаловать, создатель ${data.login}!`;
    } else {
      welcomeMessage = `${svgIcon('ic-star', '', 'fill:#5fe147;width:16px;height:16px;vertical-align:middle;')} Добро пожаловать, ${data.login}!`;
    }

    // Сохраняем сессию
    currentUser = data.login;
    isEditor = editorAccess;
    sessionStorage.setItem('user', data.login);
    sessionStorage.setItem('isEditor', String(editorAccess));
    sessionStorage.setItem('token', data.token);
    sessionStorage.removeItem('continued');

    // Показываем экран приветствия
    loginOverlay.style.display = 'none';
    welcomeContainer.classList.remove('hidden');
    mainDashboard.style.display = 'none';
    errMsg.classList.remove('show');
    showNotification(welcomeMessage);

  } catch (error) {
    console.error('Ошибка авторизации:', error);
    showNotification('Ошибка подключения к серверу', true);
    flashLoginError();
  }
}

/**
 * Проверяет, есть ли активная сессия, и восстанавливает её.
 */
function checkAuth() {
    const savedUser = sessionStorage.getItem('user');
    const savedEditor = sessionStorage.getItem('isEditor');
    const continued = sessionStorage.getItem('continued');

    if (!savedUser) {
        currentUser = null;
        isEditor = false;
        loginOverlay.style.display = 'flex';
        welcomeContainer.classList.add('hidden');
        mainDashboard.style.display = 'none';
        // Скрываем экран загрузки, если он виден
        const ls = document.getElementById('loadingScreen');
        if (ls) ls.classList.add('hidden');
        return;
    }

    currentUser = savedUser;
    isEditor = savedEditor === 'true';
    loginOverlay.style.display = 'none';

    if (continued === 'true') {
        welcomeContainer.classList.add('hidden');
        mainDashboard.style.display = 'block';
        loadAllDataWithProgress();   // ← ЗДЕСЬ
    } else {
        welcomeContainer.classList.remove('hidden');
        mainDashboard.style.display = 'none';
        // Скрываем экран загрузки на экране приветствия
        const ls = document.getElementById('loadingScreen');
        if (ls) ls.classList.add('hidden');
    }
}

async function onContinue() {
    sessionStorage.setItem('continued', 'true');
    welcomeContainer.classList.add('hidden');
    mainDashboard.style.display = 'block';
    await loadAllDataWithProgress();   // ← ЗДЕСЬ вместо loadInitialData + renderEventsTable
}

/**
 * Выход из системы.
 */
function logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('isEditor');
    sessionStorage.removeItem('continued');
    checkAuth();
    showNotification(
        `${svgIcon('ic-wave', '', 'fill:#ffd6aa;width:16px;height:16px;vertical-align:middle;')} Вы вышли из системы`
    );
}

// Привязка обработчиков авторизации
loginBtn.addEventListener('click', doLogin);
contBtn.addEventListener('click', onContinue);
logoutBtn.addEventListener('click', logout);
loginInput.addEventListener('keypress', e => { if (e.key === 'Enter') doLogin(); });
passInput.addEventListener('keypress', e => { if (e.key === 'Enter') doLogin(); });


// ============================================================
//  УВЕДОМЛЕНИЯ
// ============================================================

/**
 * Показывает всплывающее уведомление в правом нижнем углу.
 * @param {string}  message  — HTML-содержимое уведомления.
 * @param {boolean} isError  — если true, уведомление красное.
 */
function showNotification(message, isError = false) {
    // Добавляем анимацию (один раз)
    if (!document.querySelector('#notifStyle')) {
        const style = document.createElement('style');
        style.id = 'notifStyle';
        style.textContent = `
            @keyframes notifSlide {
                from { opacity: 0; transform: translateX(40px); }
                to   { opacity: 1; transform: translateX(0); }
            }
        `;
        document.head.appendChild(style);
    }

    const background = isError
        ? 'linear-gradient(135deg, #c2410c, #9a3412)'
        : 'linear-gradient(135deg, #2e7d32, #1b5e20)';

    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${background};
        color: white;
        padding: 14px 24px;
        border-radius: 30px;
        z-index: 9999;
        font-weight: 600;
        font-size: 0.9rem;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        animation: notifSlide 0.3s ease;
        font-family: 'Inter', sans-serif;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    notification.innerHTML = message;
    document.body.appendChild(notification);

    // Автоскрытие через 3 секунды
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(40px)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Обратная совместимость (старое название)
const showNotif = showNotification;


// ============================================================
//  ТАБЛИЦА ИВЕНТОВ
// ============================================================

/**
 * Меняет статус одобрения ивента (доступно только редактору).
 */
async function changeEventStatus(eventId, newStatus) {
    if (!isEditor) return false;

    try {
        await fetchFromApi(`/api/events/${eventId}`, {
            method: 'PUT',
            body: JSON.stringify({ call_status: newStatus })
        });

        await loadInitialData();
        renderEventsTable();
        updateNormStats();

        showNotification(
            `${svgIcon('ic-star', '', 'fill:#5fe147;width:16px;height:16px;vertical-align:middle;')} Статус изменён на "${newStatus}"`
        );
        return true;
    } catch (err) {
        showNotification('Ошибка сохранения статуса в БД', true);
        return false;
    }
}

/**
 * Возвращает HTML-бейдж статуса одобрения.
 */
function renderCallStatusBadge(callStatus) {
    let dotClass = '';
    let label = callStatus || 'Скоро';

    if (callStatus.includes('Одобрен')) {
        dotClass = 'online';
        label = 'Одобрен';
    } else if (callStatus.includes('Скоро')) {
        dotClass = 'planned';
        label = 'Скоро';
    } else if (callStatus.includes('Отказано')) {
        dotClass = 'offline';
        label = 'Отказано';
    }

    const dot = dotClass ? `<span class="status-dot ${dotClass}"></span>` : '';

    return `
        <span style="background:var(--badge-bg); padding:0.2rem 0.6rem; border-radius:20px; display:inline-flex; align-items:center; gap:5px">
            ${dot} ${label}
        </span>
    `;
}

/**
 * Отрисовывает таблицу мероприятий.
 */
function renderEventsTable() {
    const container = document.getElementById('eventDynamicContent');
    const canEdit = isEditor;

    // Шапка страницы
    container.innerHTML = `
        <div class="page-header">
            <h2>
                ${svgIcon('ic-table', 'icon-accent', 'width:24px;height:24px;vertical-align:middle;margin-right:8px;')}
                Таблица мероприятий
            </h2>
        </div>

        <div class="click-hint">
            ${svgIcon('ic-info', 'hint-icon')}
            ${canEdit ? 'У вас есть права изменять статус' : 'Режим просмотра'}
        </div>

        <div class="table-wrapper">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>ИВЕНТ</th>
                        <th>ОРГАНИЗАТОР</th>
                        <th>ПОМОЩНИКИ</th>
                        <th>ДАТА</th>
                        <th>СТАТУС</th>
                        <th>ПРИЗОВЫЕ</th>
                        <th>УЧАСТНИКИ</th>
                        <th>ОДОБРЕН</th>
                        ${canEdit ? '<th>ДЕЙСТВИЯ</th>' : ''}
                    </tr>
                </thead>
                <tbody id="eventsTableBody"></tbody>
            </table>
        </div>
    `;

    // Заполняем строки
    const tbody = document.getElementById('eventsTableBody');

    eventsData.forEach(event => {
        const row = tbody.insertRow();
        row.classList.add('clickable-row');
        row.setAttribute('data-type', 'event');
        row.setAttribute('data-id', event.id);

        row.insertCell(0).innerHTML = `<strong>${escapeHtml(event.name)}</strong>`;
        row.insertCell(1).textContent = event.platform;
        row.insertCell(2).textContent = event.organizer;
        row.insertCell(3).textContent = event.date;

        row.insertCell(4).innerHTML = `
            <span class="status-badge status-active">
                <span class="status-dot active"></span> ${event.status}
            </span>
        `;

        row.insertCell(5).innerHTML = `
            <span class="rating-star">
                ${svgIcon('ic-star', '', 'fill:#ffbc6e;width:14px;height:14px;vertical-align:middle;')}
                ${event.rating}
            </span>
        `;

        row.insertCell(6).innerHTML = `<span style="font-weight:600">${event.members}</span>`;
        row.insertCell(7).innerHTML = renderCallStatusBadge(event.call_status || event.callStatus);

        // Кнопки редактирования (только для редактора)
        if (canEdit) {
            row.insertCell(8).innerHTML = `
                <button class="status-change-btn btn-approved" data-id="${event.id}" data-status="Одобрен">
                    <span class="status-dot online"></span> Одобрен
                </button>
                <button class="status-change-btn btn-soon" data-id="${event.id}" data-status="Скоро">
                    <span class="status-dot planned"></span> Скоро
                </button>
                <button class="status-change-btn btn-completed" data-id="${event.id}" data-status="Отказано">
                    <span class="status-dot offline"></span> Отказано
                </button>
            `;
        }
    });

    // Обработчики кнопок статуса
    if (canEdit) {
        document.querySelectorAll('.status-change-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                changeEventStatus(parseInt(btn.dataset.id), btn.dataset.status);
            });
        });
    }

    attachRowClicks();
}


// ============================================================
//  КОМАНДА (КАРТОЧКИ)
// ============================================================

/**
 * Генерирует HTML одной карточки сотрудника.
 */
function renderMemberCard(member, type, eventCounts) {
    // Определяем количество ивентов
    let eventsCount = eventCounts[member.name] || 0;
    const specialValues = ["Нет нормы", "Отпуск"];

    const memberEvCount = member.events_count || member.eventsCount || '-';
    if (specialValues.includes(memberEvCount)) {
        eventsCount = memberEvCount;
    } else if (memberEvCount !== "-" && !isNaN(parseInt(memberEvCount))) {
        eventsCount = memberEvCount;
    }

    // Генерируем звёзды рейтинга
    const ratingValue = parseFloat(member.rating);
    let starsHtml = '';

    if (!isNaN(ratingValue)) {
        const fullStars = Math.floor(ratingValue);
        const hasHalf = ratingValue % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            starsHtml += svgIcon('ic-star', 'rating-star', 'fill:#ffbc6e;width:14px;height:14px;');
        }
        if (hasHalf) {
            starsHtml += svgIcon('ic-star', 'rating-star', 'fill:#ffbc6e;width:14px;height:14px;opacity:0.5;');
        }
        for (let i = 0; i < emptyStars; i++) {
            starsHtml += svgIcon('ic-star', 'rating-star empty', 'fill:var(--text-muted);width:14px;height:14px;opacity:0.3;');
        }
    } else {
        starsHtml = `<span class="rating-star">${member.rating}</span>`;
    }

    // Статус онлайн/оффлайн
    const isOnline = member.status === "Онлайн";
    const statusHtml = isOnline
        ? `<span class="team-status online"><span class="status-dot online"></span> Онлайн</span>`
        : `<span class="team-status offline"><span class="status-dot offline"></span> ${member.status}</span>`;

    // Иконка бейджа
    const badgeIconId = type === 'senior' ? 'ic-crown' : 'ic-star';
    const badgeIcon = svgIcon(badgeIconId, `team-card-badge-icon ${type}`);

    // Лейбл категории
    const categoryLabel = type === 'senior' ? 'Старший' : 'Младший';
    const categoryIconId = type === 'senior' ? 'ic-crown' : 'ic-star';

    return `
        <div class="team-card ${type} has-svg-badge clickable-card" data-type="team" data-id="${member.id}">
            ${badgeIcon}

            <div class="team-card-header">
                <div>
                    <div class="team-name">${escapeHtml(member.name)}</div>
                    <div class="team-role">${escapeHtml(member.role)}</div>
                </div>
                ${statusHtml}
            </div>

            <div class="team-card-body">
                <div class="team-info-item">
                    <div class="team-info-label">DISCORD</div>
                    <div class="team-info-value">${member.discord}</div>
                </div>
                <div class="team-info-item">
                    <div class="team-info-label">ИВЕНТОВ</div>
                    <div class="team-info-value">${eventsCount}</div>
                </div>
                <div class="team-info-item">
                    <div class="team-info-label">ВСТУПИЛ</div>
                    <div class="team-info-value">${member.join_date || member.joinDate || ''}</div>
                </div>
            </div>

            <div class="team-card-footer">
                <span class="team-badge ${type}-badge">
                    ${svgIcon(categoryIconId, '', 'fill:#1a1a2e;width:12px;height:12px;vertical-align:middle;')}
                    ${categoryLabel} состав
                </span>
                <div class="team-rating">${starsHtml}</div>
            </div>
        </div>
    `;
}

/**
 * Отрисовывает страницу «Команда» с карточками сотрудников.
 */
function renderTeamTable() {
    const container = document.getElementById('eventDynamicContent');
    const eventCounts = countEventsByPlatform();

    const seniorMembers = teamData.filter(m => m.category === "Старший состав");
    const juniorMembers = teamData.filter(m => m.category === "Младший состав");

    const seniorCardsHtml = seniorMembers
        .map(m => renderMemberCard(m, 'senior', eventCounts))
        .join('');

    const juniorCardsHtml = juniorMembers
        .map(m => renderMemberCard(m, 'junior', eventCounts))
        .join('');

    container.innerHTML = `
        <div class="page-header">
            <h2>
                ${svgIcon('ic-team', 'icon-accent', 'width:24px;height:24px;vertical-align:middle;margin-right:8px;')}
                Команда ивент-отдела
            </h2>
        </div>

        <div class="click-hint">
            ${svgIcon('ic-info', 'hint-icon')}
            Нажмите на карточку участника — полная информация
        </div>

        <!-- Старший состав -->
        <div class="team-section">
            <div class="section-header senior">
                ${svgIcon('ic-crown', 'section-icon-svg senior')}
                <span class="section-title senior">Старший состав</span>
                <span class="section-count">${seniorMembers.length} чел</span>
            </div>
            <div class="team-grid">
                ${seniorCardsHtml || '<div style="text-align:center;padding:2rem">Нет участников</div>'}
            </div>
        </div>

        <!-- Младший состав -->
        <div class="team-section">
            <div class="section-header junior">
                ${svgIcon('ic-star', 'section-icon-svg junior')}
                <span class="section-title junior">Младший состав</span>
                <span class="section-count">${juniorMembers.length} чел</span>
            </div>
            <div class="team-grid">
                ${juniorCardsHtml || '<div style="text-align:center;padding:2rem">Нет участников</div>'}
            </div>
        </div>
    `;

    // Обработчики кликов по карточкам
    document.querySelectorAll('.clickable-card').forEach(card => {
        card.addEventListener('click', () => {
            const member = teamData.find(t => t.id === parseInt(card.dataset.id));
            if (member) openTeamModal(member);
        });
    });
}


// ============================================================
//  МОДАЛЬНЫЕ ОКНА
// ============================================================

const modal = document.getElementById('infoModal');

document.getElementById('closeModalBtn')?.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});

/**
 * Привязывает клики по строкам таблицы для открытия модалок.
 */
function attachRowClicks() {
    document.querySelectorAll('.clickable-row').forEach(row => {
        // Удаляем старый обработчик
        if (row._clickHandler) {
            row.removeEventListener('click', row._clickHandler);
        }

        const handler = () => {
            const id = parseInt(row.dataset.id);

            if (row.dataset.type === 'event') {
                const event = eventsData.find(e => e.id === id);
                if (event) openEventModal(event);
            } else if (row.dataset.type === 'team') {
                const member = teamData.find(t => t.id === id);
                if (member) openTeamModal(member);
            }
        };

        row.addEventListener('click', handler);
        row._clickHandler = handler;
    });
}

/**
 * Открывает модалку с деталями ивента.
 */
function openEventModal(event) {
    document.getElementById('modalTitle').innerHTML = `
        ${svgIcon('ic-detail', 'icon-accent', 'flex-shrink:0;')} Детали ивента
    `;

    document.getElementById('modalBody').innerHTML = `
        <div class="detail-row">
            <span class="detail-label">Название:</span>
            <span>${escapeHtml(event.name)}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Организатор:</span>
            <span>${event.platform}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Дата:</span>
            <span>${event.date}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Категория:</span>
            <span>${event.call_status || event.callStatus || ''}</span>
        </div>
        <div style="margin-top:12px; background:var(--card-bg); padding:12px; border-radius:24px">
            <b>Описание:</b><br>${event.description || (event.fullDetails && event.fullDetails.description) || ''}
        </div>
    `;

    modal.style.display = 'flex';
}

/**
 * Открывает модалку с информацией о сотруднике.
 */
function openTeamModal(member) {
    document.getElementById('modalTitle').innerHTML = `
        ${svgIcon('ic-team', 'icon-accent', 'flex-shrink:0;')} Информация о сотруднике
    `;

    document.getElementById('modalBody').innerHTML = `
        <div class="detail-row">
            <span class="detail-label">Имя:</span>
            <span><strong>${escapeHtml(member.name)}</strong></span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Роль:</span>
            <span>${member.role}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Обязанности:</span>
            <span>${member.responsibilities || (member.fullDetails && member.fullDetails.responsibilities) || ''}</span>
        </div>
    `;

    modal.style.display = 'flex';
}


// ============================================================
//  ЧАСЫ
// ============================================================

function updateClock() {
    const clockEl = document.getElementById('liveClockEvent');
    if (clockEl) {
        clockEl.innerText = new Date().toLocaleTimeString('ru-RU');
    }
}

setInterval(updateClock, 1000);
updateClock();


// ============================================================
//  ТЕМА (ТЁМНАЯ / СВЕТЛАЯ)
// ============================================================

function initTheme() {
    const isDark = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark', isDark);

    const themeIconUse = document.getElementById('themeIconUse');
    if (themeIconUse) {
        themeIconUse.setAttribute('href', isDark ? '#ic-moon' : '#ic-sun');
    }
}

initTheme();


// ============================================================
//  НАВИГАЦИЯ (ВКЛАДКИ)
// ============================================================

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        // Убираем active у всех
        navItems.forEach(item => item.classList.remove('active'));
        navItem.classList.add('active');

        // Переключаем контент
        const tab = navItem.dataset.tab;

        switch (tab) {
            case 'events_table':   renderEventsTable();      break;
            case 'team_table':     renderTeamTable();        break;
            case 'add_event':      renderAddEventForm();     break;
            case 'event_adons':    renderAddonsPage();       break;
            case 'event_guidee':   renderNormPage();         break;
            case 'event_guide':    renderMethodologyPage();  break;
        }
    });
});


// ============================================================
//  СТРАНИЦА: СТАТИСТИКА / НОРМА
// ============================================================

function renderNormPage() {
    const totalPrizes = calculateTotalPrizes();
    const onlineCount = teamData.filter(m => m.status === "Онлайн").length;

    document.getElementById('eventDynamicContent').innerHTML = `
        <div class="stats-grid" id="normStatsContainer">

            <div class="stat-card">
                ${svgIcon('ic-team', 'stat-icon')}
                <div class="stat-value">${teamData.length}</div>
                <div class="stat-label">Ивентеры</div>
                <div class="stat-sub">активных сотрудников</div>
            </div>

            <div class="stat-card">
                ${svgIcon('ic-table', 'stat-icon')}
                <div class="stat-value">${eventsData.length}</div>
                <div class="stat-label">ПРОВЕДЕНО ИВЕНТОВ</div>
                <div class="stat-sub">успешно проведённые ивенты</div>
            </div>

            <div class="stat-card">
                ${svgIcon('ic-chat', 'stat-icon')}
                <div class="stat-value">-</div>
                <div class="stat-label">ТИКЕТЫ</div>
                <div class="stat-sub">за последние 7 дней</div>
            </div>

            <div class="stat-card">
                ${svgIcon('ic-chart', 'stat-icon')}
                <div class="stat-value">${onlineCount}</div>
                <div class="stat-label">ОНЛАЙН</div>
                <div class="stat-sub">сейчас вне отпуска</div>
            </div>

            <div class="stat-card">
                ${svgIcon('ic-star', 'stat-icon', 'fill:#5fe147;')}
                <div class="stat-value" style="color:#5fe147">
                    ${totalPrizes.toLocaleString('ru-RU')}$
                </div>
                <div class="stat-label">ПРИЗОВЫЕ</div>
                <div class="stat-sub">выданно валюты в неделю</div>
            </div>

        </div>
    `;
}


// ============================================================
//  СТРАНИЦА: МЕТОДИЧКА
// ============================================================

function renderMethodologyPage() {
    document.getElementById('eventDynamicContent').innerHTML = `
        <style>
            .methodology-container {
                background: var(--card-bg);
                border-radius: 32px;
                padding: 2rem;
                border: 1px solid var(--card-border);
                box-shadow: 0 8px 32px var(--shadow);
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
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
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
            .section-block:hover { transform: translateY(-2px); }

            .section-title-m {
                font-size: 1.6rem;
                font-weight: 700;
                margin-bottom: 1rem;
                padding-bottom: 0.5rem;
                border-bottom: 3px solid;
                display: inline-flex;
                align-items: center;
                gap: 8px;
            }
            .section-title-m.green  { color: #44ffaa; border-color: #44ffaa; }
            .section-title-m.orange { color: #ffaa44; border-color: #ffaa44; }
            .section-title-m.red    { color: #ff6666; border-color: #ff6666; }
            .section-title-m.blue   { color: #44aaff; border-color: #44aaff; }
            .section-title-m.purple { color: #fd72f4; border-color: #fd72f4; }
            .section-title-m.pink   { color: #ff66cc; border-color: #ff66cc; }

            .rule-list { list-style: none; padding: 0; }
            .rule-list li {
                padding: 0.5rem 0 0.5rem 1.5rem;
                position: relative;
                color: var(--text-primary);
            }
            .rule-list li::before {
                content: "";
                position: absolute;
                left: 0; top: 50%;
                transform: translateY(-50%);
                width: 6px; height: 6px;
                border-radius: 50%;
                background: #ffaa44;
            }

            .rank-card {
                background: var(--card-bg);
                border-radius: 20px;
                padding: 1rem;
                margin-bottom: 1rem;
                border-left: 4px solid;
                transition: transform 0.2s;
            }
            .rank-card:hover  { transform: translateX(5px); }
            .rank-card.ivent  { border-left-color: #ffaa44; }
            .rank-card.senior { border-left-color: #44ffaa; }
            .rank-card.zam    { border-left-color: #fd72f4; }
            .rank-card.glava  { border-left-color: #ff4444; }

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
            .norm-day   { font-size: 1rem;  font-weight: 700; color: #ffaa44; }
            .norm-value { font-size: 0.85rem; color: var(--text-primary); margin-top: 0.3rem; }

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

            <!-- Заголовок -->
            <div class="methodology-header">
                <div class="methodology-title">
                    ${svgIcon('ic-book', '', 'width:36px;height:36px;fill:#fd72f4;')}
                    Методичка Ивентологов
                </div>
                <div class="methodology-subtitle">ОСНОВНЫЕ ПРАВИЛА ОТДЕЛА ИВЕНТОЛОГИИ</div>
            </div>

            <!-- ЧТО МОЖНО ДЕЛАТЬ -->
            <div class="section-block">
                <div class="section-title-m green">
                    ${svgIcon('ic-star', '', 'fill:#44ffaa;width:22px;height:22px;')}
                    ЧТО МОЖНО ДЕЛАТЬ?
                </div>

                <div class="rank-card ivent">
                    <div class="rank-name">
                        ${svgIcon('ic-chart', '', 'fill:#ffaa44;width:20px;height:20px;')}
                        Кто может проводить ивенты?
                    </div>
                    <div class="rank-desc">
                        Проводить ивенты можно с ранга «Оператор», если вы состоите в отделе Ивентологии.
                        С рангов ниже — только с разрешения Главы отдела или Куратора сервера.
                    </div>
                </div>

                <div class="rank-card ivent">
                    <div class="rank-name">
                        ${svgIcon('ic-team', '', 'fill:#ffaa44;width:20px;height:20px;')}
                        Кол-во администрации на ивенте
                    </div>
                    <div class="rank-desc">
                        В ивенте может участвовать не более 25% от всей наборной администрации.
                        <span class="stats-mini">Например: 10 админов → максимум 3</span>
                    </div>
                </div>

                <div class="rank-card ivent">
                    <div class="rank-name">
                        ${svgIcon('ic-clock', '', 'fill:#ffaa44;width:20px;height:20px;')}
                        Игнор завалов
                    </div>
                    <div class="rank-desc">
                        Если завал начался во время ивента, его разрешено игнорировать.
                    </div>
                </div>

                <div class="rank-card ivent">
                    <div class="rank-name">
                        ${svgIcon('ic-arrow-right', '', 'fill:#ffaa44;width:20px;height:20px;')}
                        Самостоятельность
                    </div>
                    <div class="rank-desc">
                        Каждый Ивентер может проводить ивенты без разрешения от Ст. Администрации.
                        Если ты на испытательном сроке — нужно одобрение от Ст. Ивентера.
                    </div>
                </div>

                <div class="rank-card ivent">
                    <div class="rank-name">
                        ${svgIcon('ic-star', '', 'fill:#ffaa44;width:20px;height:20px;')}
                        Награды
                    </div>
                    <div class="rank-desc">
                        Если игрок использует баги/преимущества/нарушал правила — Ивентер может не выдавать приз.
                        Если победа честная — Ивентер обязан выдать приз.
                    </div>
                </div>

                <div class="rank-card ivent">
                    <div class="rank-name">
                        ${svgIcon('ic-chat', '', 'fill:#ffaa44;width:20px;height:20px;')}
                        RP-Мероприятия
                    </div>
                    <div class="rank-desc">
                        Помимо ивентов, вам также доступны РП-Мероприятия — сюжетные ролевые отыгровки
                        в пределах RP-зоны. РП-мероприятие засчитывается как полноценный ивент.
                    </div>
                </div>
            </div>

            <!-- ЧТО ВЫ ОБЯЗАНЫ ДЕЛАТЬ -->
            <div class="section-block">
                <div class="section-title-m orange">
                    ${svgIcon('ic-warn', '', 'fill:#ffaa44;width:22px;height:22px;')}
                    ЧТО ВЫ ОБЯЗАНЫ ДЕЛАТЬ?
                </div>

                <div class="rank-card senior">
                    <div class="rank-name">
                        ${svgIcon('ic-detail', '', 'fill:#44ffaa;width:20px;height:20px;')}
                        После ивента/РП-Мероприятия
                    </div>
                    <div class="rank-desc">
                        Убрать всё, что было построено/создано. Написать отчёт в специальный канал.
                    </div>
                </div>

                <div class="rank-card senior">
                    <div class="rank-name">
                        ${svgIcon('ic-warn', '', 'fill:#44ffaa;width:20px;height:20px;')}
                        Лаги
                    </div>
                    <div class="rank-desc">
                        Если во время ивента появились лаги или высокий пинг —
                        ивент нужно как можно быстрее прекратить и сообщить Главе/Зам. Главы.
                    </div>
                </div>
            </div>

            <!-- ЧТО НЕЛЬЗЯ ДЕЛАТЬ -->
            <div class="section-block">
                <div class="section-title-m red">
                    ${svgIcon('ic-close', '', 'fill:#ff6666;width:22px;height:22px;')}
                    ЧТО НЕЛЬЗЯ ДЕЛАТЬ?
                </div>
                <ul class="rule-list">
                    <li>Запрещается привлекать игроков к РП-мероприятию через /OOC, участие должно происходить естественным RP путем.</li>
                    <li>Нельзя принуждать игроков к участию в мероприятии.</li>
                    <li>Создавать мероприятия, мешающие обычному RP-процессу сервера.</li>
                    <li>Запрещено начинать ивенты во время активных завалов.</li>
                    <li>Запрещено проводить 2 и более ивентов одновременно.</li>
                    <li>Запрещено мешать подготовке или проведению ивентов.</li>
                    <li>Категорически запрещено проводить ивенты в RP зоне. Исключение: РП-Мероприятия.</li>
                    <li>Запрещается проводить ивенты, нацеленные на разжигание ненависти/дискриминацию.</li>
                    <li>Запрещено выпрашивать бонусы/привилегии за ивенты.</li>
                    <li>Донатной администрации категорически запрещено проводить ивенты.</li>
                </ul>
            </div>

            <!-- УТОЧНЕНИЯ -->
            <div class="section-block">
                <div class="section-title-m purple">
                    ${svgIcon('ic-info', '', 'fill:#fd72f4;width:22px;height:22px;')}
                    УТОЧНЕНИЯ
                </div>
                <ul class="rule-list">
                    <li>При проведении РП-мероприятий обязательно соблюдение всех действующих правил сервера.</li>
                    <li>Повышение до Ивент-Мастера не будет. Однако попросить его помощь вы можете в канале запрос-вещей.</li>
                    <li>Набирать людей в Ивентологию могут только Глава и Зам. Главы отдела.</li>
                    <li>Отдел Ивентологии является «совмещенным». Любой администратор из другого отдела может попасть к нам при наличии свободных слотов.</li>
                </ul>
            </div>

            <!-- СТРУКТУРА ОТДЕЛА -->
            <div class="section-block">
                <div class="section-title-m blue">
                    ${svgIcon('ic-team', '', 'fill:#44aaff;width:22px;height:22px;')}
                    Максимальное количество мест в отделе — 9
                </div>
                <div class="norm-grid">
                    <div class="norm-card">
                        <div class="norm-day">
                            ${svgIcon('ic-crown', '', 'fill:#ffaa44;width:16px;height:16px;vertical-align:middle;')} Глава
                        </div>
                        <div class="norm-value">1 место</div>
                    </div>
                    <div class="norm-card">
                        <div class="norm-day">
                            ${svgIcon('ic-star', '', 'fill:#fd72f4;width:16px;height:16px;vertical-align:middle;')} Зам. Главы
                        </div>
                        <div class="norm-value">1 место</div>
                    </div>
                    <div class="norm-card">
                        <div class="norm-day">
                            ${svgIcon('ic-star', '', 'fill:#44ffaa;width:16px;height:16px;vertical-align:middle;')} Ст. Ивентер
                        </div>
                        <div class="norm-value">1 место</div>
                    </div>
                    <div class="norm-card">
                        <div class="norm-day">
                            ${svgIcon('ic-team', '', 'fill:#ffaa44;width:16px;height:16px;vertical-align:middle;')} Ивентеры
                        </div>
                        <div class="norm-value">7 мест</div>
                    </div>
                </div>
            </div>

            <!-- РАНГИ -->
            <div class="section-block">
                <div class="section-title-m pink">
                    ${svgIcon('ic-crown', '', 'fill:#ff66cc;width:22px;height:22px;')}
                    РАНГИ
                </div>

                <div class="rank-card ivent">
                    <div class="rank-name">
                        ${svgIcon('ic-team', '', 'fill:#ffaa44;width:20px;height:20px;')} Ивентер
                    </div>
                    <div class="rank-desc">
                        Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера,
                        но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела.
                    </div>
                </div>

                <div class="rank-card senior">
                    <div class="rank-name">
                        ${svgIcon('ic-star', '', 'fill:#44ffaa;width:20px;height:20px;')} Ст. Ивентер
                    </div>
                    <div class="rank-desc">
                        Имеет все полномочия Ивентера, а также имеет право корректировать работу Ивентеров
                        и давать рекомендации по поводу ивентов, выдавать наказания за их ошибки,
                        а также одобрять отчётности.
                    </div>
                </div>

                <div class="rank-card zam">
                    <div class="rank-name">
                        ${svgIcon('ic-star', '', 'fill:#fd72f4;width:20px;height:20px;')} Зам. Главы Ивентологии
                    </div>
                    <div class="rank-desc">
                        Имеет все полномочия нижестоящих рангов, а также имеет право набирать новых кадров
                        в отдел, определять курс развития отдела и изменять норму и правила.
                    </div>
                </div>

                <div class="rank-card glava">
                    <div class="rank-name">
                        ${svgIcon('ic-crown', '', 'fill:#ff4444;width:20px;height:20px;')} Глава Ивентологии
                    </div>
                    <div class="rank-desc">
                        Имеет полное владение над отделом Ивентологии, может самостоятельно
                        изменять состав отдела Ивентологии и их норму/правила.
                    </div>
                </div>
            </div>

            <!-- НОРМА -->
            <div class="section-block">
                <div class="section-title-m pink">
                    ${svgIcon('ic-chart', '', 'fill:#ff66cc;width:22px;height:22px;')}
                    НОРМА
                </div>
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
                <div class="section-title-m orange">
                    ${svgIcon('ic-clock', '', 'fill:#ffaa44;width:22px;height:22px;')}
                    Норма после отпуска/заморозки/вступлении в отдел
                </div>
                <div class="norm-grid">
                    <div class="norm-card"><div class="norm-day">ПН</div><div class="norm-value">35 тикетов | 3 ивента</div></div>
                    <div class="norm-card"><div class="norm-day">ВТ</div><div class="norm-value">35 тикетов | 3 ивента</div></div>
                    <div class="norm-card"><div class="norm-day">СР</div><div class="norm-value">30 тикетов | 2 ивента</div></div>
                    <div class="norm-card"><div class="norm-day">ЧТ</div><div class="norm-value">25 тикетов | 1 ивент</div></div>
                    <div class="norm-card"><div class="norm-day">ПТ</div><div class="norm-value">20 тикетов | 1 ивент</div></div>
                    <div class="norm-card"><div class="norm-day">СБ</div><div class="norm-value">10 тикетов | 1 ивент</div></div>
                    <div class="norm-card"><div class="norm-day">ВС</div><div class="norm-value">Освобождены от нормы</div></div>
                </div>

                <div class="rank-card ivent" style="margin-top:1rem">
                    <div class="rank-name">
                        ${svgIcon('ic-info', '', 'fill:#ffaa44;width:20px;height:20px;')} Примечание
                    </div>
                    <div class="rank-desc">
                        Если вы состоите в другом отделе и вышли с отпуска/мороза —
                        с четверга вы обязуетесь провести 1 ивент.
                        Если с понедельника и до среды — 2 ивента.
                    </div>
                </div>
            </div>

            <!-- НАКАЗАНИЯ -->
            <div class="section-block">
                <div class="section-title-m red">
                    ${svgIcon('ic-warn', '', 'fill:#ff6666;width:22px;height:22px;')}
                    Наказания за невыполнение нормы
                </div>
                <div class="punishment-card">
                    <strong>25-35 тикетов и 2-3 ивента:</strong>
                    В случае уважительной причины недобор прощается, в другом случае выдается предупреждение.
                </div>
                <div class="punishment-card">
                    <strong>15-24 тикета и 1-2 ивента:</strong>
                    В случае уважительной причины выдается предупреждение, в другом случае выдается выговор.
                </div>
                <div class="punishment-card">
                    <strong>0-14 тикета и 0-1 ивент:</strong>
                    В случае уважительной причины выдается выговор, в другом случае снятие или два выговора.
                </div>
                <div class="punishment-card">
                    <strong>Для ивентеров из другого отдела:</strong>
                    Если проведено менее двух ивентов, выдается предупреждение.
                    При уважительной причине недобор прощается.
                </div>
            </div>

            <!-- ЗАРПЛАТА -->
            <div class="section-block">
                <div class="section-title-m green">
                    ${svgIcon('ic-star', '', 'fill:#44ffaa;width:22px;height:22px;')}
                    Зарплата
                </div>
                <div class="rank-card glava">
                    <div class="rank-desc">
                        Зарплата выдаётся только за выполненные тикеты. Тех. Администрация
                        не намеревается выдавать ЗП за ивенты, возможно когда-то в будущем
                        у вас будет вознаграждение за ваши прекрасные ивенты.
                    </div>
                </div>
            </div>

        </div>
    `;
}


// ============================================================
//  СТРАНИЦА: АДДОНЫ
// ============================================================

function renderAddonsPage() {
    const addons = [
        {
            icon: 'ic-box',
            title: 'Вайт-Лист пропов 4-ого сервера',
            desc: 'Счётчик в 75 пропов',
            url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3488412511',
        },
        {
            icon: 'ic-detail',
            title: 'Advanced Duplicator',
            desc: 'Копирование построек',
            url: 'https://steamcommunity.com/workshop/filedetails/?id=773402917',
        },
        {
            icon: 'ic-arrow-right',
            title: 'Precision Tool',
            desc: 'Точная установка пропов',
            url: 'https://steamcommunity.com/workshop/filedetails/?id=104482086',
        },
        {
            icon: 'ic-box',
            title: 'Stacker',
            desc: 'Удобная укладка пропов',
            url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=264467687',
        },
        {
            icon: 'ic-star',
            title: 'Material',
            desc: 'Больше материалов',
            url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=105841291',
        },
        {
            icon: 'ic-star',
            title: 'Ещё больше материалов',
            desc: 'Дополнительные текстуры',
            url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=730187817',
        },
        {
            icon: 'ic-chart',
            title: 'Весь контент 4-ого сервера',
            desc: 'Полный пак',
            url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3297333501',
        },
        {
            icon: 'ic-eagle',
            title: 'Карта 4-ого сервера',
            desc: 'Тематическая карта',
            url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3298873388',
        },
    ];

    const cardsHtml = addons.map(addon => `
        <div class="addon-card">
            <div class="addon-icon">${svgIcon(addon.icon, 'addon-icon-svg')}</div>
            <div class="addon-title">${addon.title}</div>
            <div class="addon-desc">${addon.desc}</div>
            <a href="${addon.url}" target="_blank" class="addon-link">Скачать</a>
        </div>
    `).join('');

    document.getElementById('eventDynamicContent').innerHTML = `
        <div class="page-header">
            <h2>
                ${svgIcon('ic-box', 'icon-accent', 'width:24px;height:24px;vertical-align:middle;margin-right:8px;')}
                Аддоны для строительства
            </h2>
        </div>
        <div class="addons-grid">${cardsHtml}</div>
    `;
}


// ============================================================
//  СТРАНИЦА: ДОБАВИТЬ ИВЕНТ
// ============================================================

function renderAddEventForm() {
    document.getElementById('eventDynamicContent').innerHTML = `
        <div class="page-header">
            <h2>
                ${svgIcon('ic-plus', 'icon-accent', 'width:24px;height:24px;vertical-align:middle;margin-right:8px;')}
                Добавить новый ивент
            </h2>
            <button class="add-btn" id="backToEventsBtn">
                ${svgIcon('ic-arrow-left', '', 'fill:white;')} Назад
            </button>
        </div>

        <div style="background:var(--card-bg); border-radius:28px; padding:1.8rem; border:1px solid var(--card-border)">

            <div class="form-group">
                <label>Название ивента *</label>
                <input type="text" id="eventName" placeholder="Введите название ивента">
            </div>

            <div class="form-group">
                <label>Краткое описание *</label>
                <textarea id="eventDescription" rows="3" placeholder="Опишите ивент..."></textarea>
            </div>

            <div class="form-group">
                <label>Время начала</label>
                <input type="text" id="eventStartTime" placeholder="Например: 15.04.26, 18:30">
            </div>

            <div class="form-group">
                <label>Время окончания</label>
                <input type="text" id="eventEndTime" placeholder="Например: 15.04.26, 19:00">
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
                <small style="color:var(--text-muted)">Кто помогал проводить ивент</small>
            </div>

            <div class="form-group" style="background:var(--badge-bg); border-radius:20px; padding:1rem; margin-top:1rem">
                <label style="color:var(--text-primary)">
                    ${svgIcon('ic-detail', '', 'fill:#ffb27a;width:16px;height:16px;vertical-align:middle;')}
                    Скриншоты/видео
                </label>
                <p style="font-size:0.85rem; margin-bottom:0.5rem">
                    Скиньте фотографии и видео в <strong>ветку канала ивент-скрины</strong>
                </p>
                <small style="color:var(--text-muted)">
                    2-3 скриншота или видео, сделанных во время ивента
                </small>
            </div>

            <button class="submit-btn" id="sendEventToDiscordBtn">
                ${svgIcon('ic-send', '', 'fill:white;width:16px;height:16px;vertical-align:middle;')}
                Отправить в Discord
            </button>

        </div>
    `;

    document.getElementById('backToEventsBtn')?.addEventListener('click', () => renderEventsTable());
    document.getElementById('sendEventToDiscordBtn')?.addEventListener('click', sendEventToDiscord);
}


// ============================================================
//  ОТПРАВКА ИВЕНТА В DISCORD
// ============================================================

async function sendEventToDiscord() {
    // Считываем данные формы
    const name        = document.getElementById('eventName')?.value.trim();
    const description = document.getElementById('eventDescription')?.value.trim();
    const startTime   = document.getElementById('eventStartTime')?.value.trim() || 'Не указано';
    const endTime     = document.getElementById('eventEndTime')?.value.trim() || 'Не указано';
    const members     = document.getElementById('eventMembers')?.value.trim() || 'Не указано';
    const prizes      = document.getElementById('eventPrizes')?.value.trim() || 'Не было';
    const organizer   = document.getElementById('eventOrganizer')?.value.trim() || currentUser || 'Неизвестно';
    const helpers     = document.getElementById('eventHelpers')?.value.trim() || 'Нет';

    // Валидация обязательных полей
    const errorIcon = svgIcon('ic-close', '', 'fill:#fca5a5;width:16px;height:16px;vertical-align:middle;');

    if (!name) {
        showNotification(`${errorIcon} Введите название ивента!`, true);
        return;
    }
    if (!description) {
        showNotification(`${errorIcon} Введите описание ивента!`, true);
        return;
    }



    const prizeAmount = prizes !== 'Не было' ? prizes.replace(/[^0-9]/g, '') : '0';

    try {
        await fetchFromApi('/api/events', {
            method: 'POST',
            body: JSON.stringify({
                name,
                platform: organizer,
                organizer: helpers,
                date: `${startTime} - ${endTime}`,
                status: "Проведен",
                rating: `${prizeAmount}$`,
                members: parseInt(members) || 0,
                call_status: "Скоро",
                description
            })
        });
        await loadInitialData();
        updateNormStats();
    } catch (err) {
        console.error('Ошибка сохранения в БД:', err);
    }

    // Формируем payload для Discord
    const payload = {
        content: `Новый ивент от ${organizer}!`,
        embeds: [
            {
                title: "Новый ивент",
                color: 0x5865F2,
                fields: [
                    { name: "Название",         value: name,                           inline: false },
                    { name: "Описание",          value: description.substring(0, 500),  inline: false },
                    { name: "Время начала",      value: startTime,                      inline: true  },
                    { name: "Время окончания",   value: endTime,                        inline: true  },
                    { name: "Участников",        value: members.toString(),              inline: true  },
                    { name: "Призы",             value: prizes,                         inline: false },
                    { name: "Организатор",       value: organizer,                      inline: true  },
                    { name: "Помощники",         value: helpers,                        inline: true  },
                    { name: "Скриншоты/видео",   value: "Скинуты в ветку канала ивент-скрины", inline: false },
                ],
                footer: { text: "Ивент-отдел UnionTeam" },
                timestamp: new Date().toISOString(),
            },
        ],
        username: "Ивент-отдел UnionTeam",
        avatar_url: "https://i.ytimg.com/vi/_pMmC52HB2k/hqdefault.jpg",
    };

    const warnIcon = svgIcon('ic-warn', '', 'fill:#fca5a5;width:16px;height:16px;');
    const successIcon = svgIcon('ic-star', '', 'fill:#5fe147;width:16px;height:16px;vertical-align:middle;');

    // Отправляем через Worker (вебхук спрятан на сервере)
    try {
        const response = await fetch('https://sparkling-star-1ea5.glent1754.workers.dev/send-webhook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            showNotification(`${successIcon} Ивент успешно добавлен и отправлен в Discord!`);
        } else {
            showNotification(`${warnIcon} Ошибка отправки в Discord, но ивент добавлен в таблицу.`, true);
        }
    } catch (error) {
        console.error('Ошибка прокси-отправки:', error);
        showNotification(`${warnIcon} Ошибка сети, но ивент добавлен в таблицу.`, true);
    }

    renderEventsTable();
}


// ============================================================
//  ИНИЦИАЛИЗАЦИЯ
// ============================================================


(function() {
    const ls = document.getElementById('loadingScreen');
    if (ls) ls.classList.add('hidden');
})();

checkAuth();


// ============================================================
//  ПАРАЛЛАКС ФОНА
// ============================================================

(function initParallaxBackground() {
    'use strict';

    const bg = document.getElementById('moving-bg');
    if (!bg) return;

    const MAX_SHIFT = 30;
    const SMOOTHING = 0.035;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    /**
     * Плавно анимирует смещение фона к целевым координатам.
     */
    function animationLoop() {
        currentX += (targetX - currentX) * SMOOTHING;
        currentY += (targetY - currentY) * SMOOTHING;
        bg.style.transform = `translate3d(${currentX.toFixed(3)}px, ${currentY.toFixed(3)}px, 0)`;
        requestAnimationFrame(animationLoop);
    }

    requestAnimationFrame(animationLoop);

    /**
     * Вычисляет смещение фона из нормализованных координат [0..1].
     */
    function setTarget(normalizedX, normalizedY) {
        targetX = -(normalizedX - 0.5) * 2 * MAX_SHIFT;
        targetY = -(normalizedY - 0.5) * 2 * MAX_SHIFT;
    }

    function resetTarget() {
        targetX = 0;
        targetY = 0;
    }

    // Мышь
    window.addEventListener('mousemove', e => {
        setTarget(e.clientX / window.innerWidth, e.clientY / window.innerHeight);
    }, { passive: true });

    document.addEventListener('mouseleave', resetTarget);

    // Тач
    window.addEventListener('touchmove', e => {
        if (!e.touches[0]) return;
        setTarget(
            e.touches[0].clientX / window.innerWidth,
            e.touches[0].clientY / window.innerHeight
        );
    }, { passive: true });

    window.addEventListener('touchend', resetTarget);

    // Гироскоп
    if (window.DeviceOrientationEvent) {
        let gyroActive = false;

        function handleOrientation(e) {
            if (e.gamma === null || e.beta === null) return;
            gyroActive = true;

            const clampedGamma = Math.max(-1, Math.min(1, e.gamma / 30));
            const clampedBeta  = Math.max(-1, Math.min(1, (e.beta - 45) / 30));

            targetX = -clampedGamma * MAX_SHIFT;
            targetY = -clampedBeta * MAX_SHIFT;
        }

        window.addEventListener('deviceorientation', handleOrientation, { passive: true });

        // Если гироскоп не сработал за 3 секунды — убираем слушатель
        setTimeout(() => {
            if (!gyroActive) {
                window.removeEventListener('deviceorientation', handleOrientation);
            }
        }, 3000);
    }

    // При сворачивании вкладки — сбрасываем смещение
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) resetTarget();
    });
})();
