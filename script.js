    // ========== ТВОИ ДАННЫЕ (НЕТРОНУТЫЕ) ==========
    // 🔴 Отпуск


    let eventsData = [
        { id: 10, name: "Паркур", platform: "T1Ran", organizer: "Нет", date: "10.04, 13:25 - 20.20 - 20.30", status: "Проведен", rating: "11.111$", members: 13, callStatus: "🟡Скоро", fullDetails: { description: "Просто надо пройти паркур", tasks: "", feedback: "", rewards: "", extra:"" } },
        { id: 9, name: "Смертельные собаки", platform: "T1Ran", organizer: "Нет", date: "10.04, 13:25 - 20.00 - 20.10", status: "Проведен", rating: "10.000$", members: 10, callStatus: "🟡Скоро", fullDetails: { description: "Три собаки и игроки должны от них убегать кто выживет получит 10.000$", tasks: "", feedback: "", rewards: "", extra:"" } },
        { id: 8, name: "Правильный ответ...!", platform: "T1Ran", organizer: "Нет", date: "10.04, 13:25 - 19.35 - 19.53", status: "Проведен", rating: "15.000$", members: 13, callStatus: "🟡Скоро", fullDetails: { description: "Людям задают вопрос про сервер ОДРП и они должны отвечать правда или не правда", tasks: "", feedback: "", rewards: "", extra:"" } },
        { id: 7, name: "Выбери Цвет", platform: "T1Ran", organizer: "Нет", date: "10.04, 13:25 - 18.45 - 18.55", status: "Проведен", rating: "10.000$", members: 12, callStatus: "🟡Скоро", fullDetails: { description: "Есть 6 цветов, игроки должны встать на разные цвета (любые). После чего я закрываю забором и выбираю любого игрока. Он выбирает цвет. И эти цвета увеличиваются", tasks: "", feedback: "", rewards: "", extra:"" } },
        { id: 6, name: "Выбери Цвет", platform: "T1Ran", organizer: "Нет", date: "10.04, 13:25 - 18.45 - 18.55", status: "Проведен", rating: "10.000$", members: 12, callStatus: "🟡Скоро", fullDetails: { description: "Есть 6 цветов, игроки должны встать на разные цвета (любые). После чего я закрываю забором и выбираю любого игрока. Он выбирает цвет. И эти цвета увеличиваются", tasks: "", feedback: "", rewards: "", extra:"" } },
        { id: 5, name: "Музыкальные Стулья", platform: "T1Ran", organizer: "Нет", date: "08.04, 13:25 - 21.20 - 21.35", status: "Проведен", rating: "20.000$", members: 8, callStatus: "🟡Скоро", fullDetails: { description: "Крутится пока музыка, останавливается. Надо сесть", tasks: "", feedback: "", rewards: "", extra:"" } },
        { id: 4, name: "Выбери Цвет", platform: "T1Ran", organizer: "Нет", date: "06.04, 13:25 - 21.50 - 22.05", status: "Проведен", rating: "15.000$", members: 12, callStatus: "✅Одобрен", fullDetails: { description: "Есть 6 цветов, игроки должны встать на разные цвета (любые). После чего я закрываю забором и выбираю любого игрока. Он выбирает цвет. И эти цвета увеличиваются", tasks: "", feedback: "", rewards: "", extra:"" } },
        { id: 3, name: "1 Мировая", platform: "Дмитрий Морозов, бредик", organizer: "Нет", date: "08.04, 13:25 - 15:00 - 15:20", status: "Проведен", rating: "-", members: "20-30", callStatus: "✅Одобрен", fullDetails: { description: "4 союз напал на Антанта. Я являлся Маршаром. Сказал красивую речь. В итоге 4 союз выйграл", tasks: "", feedback: "", rewards: "", extra:"" } },
        { id: 2, name: "Темная комната с людьми", platform: "Дмитрий Морозов", organizer: "Нет", date: "08.04, 13:25 - 13:38", status: "Проведен", rating: "Биту и 40к", members: "10-11", callStatus: "✅Одобрен", fullDetails: { description: "Надо убить людей битой в маленькой комнате с выключенным светом.", tasks: "", feedback: "", rewards: "", extra:"" } },
        { id: 1, name: "Прятки", platform: "ratatu1cc", organizer: "Нет", date: "06.04.26, 15.21-15.30", status: "Проведен", rating: "45.000$", members: 10, callStatus: "🟡Скоро", fullDetails: { description: "10 человек прячутся , мы их ищем и ебашим", tasks: "", feedback: "", rewards: "", extra:"" } }
    ];

    let teamData = [
        { id: 1, name: "manisule", role: "Глава ивент-отдела", discord: "565584233981280270", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "21.01.26", rating: "Судо-Куратор", fullDetails: { responsibilities: "Имеет полное владение над отделом Ивентологии, может самостоятельно изменять состав отдела Ивентологии и их норму/правила.", contacts: "https://admin.unionteams.ru/4/admin/76561198386405573", achievements: "0", notes: "" } },
        { id: 2, name: "Гербикс", role: "Зам.Главы ивент-отдела", discord: "694286975158583317", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "21.01.26", rating: "Ассистент", fullDetails: { responsibilities: "Имеет все полномочия нижестоящих рангов, а также имеет право набирать новых кадров в отдел, определять курс развития отдела и изменять норму и правила с разрешения/уведомления об этом Главы Ивентологии.", contacts: "https://admin.unionteams.ru/4/admin/76561199196300974", achievements: "0", notes: "" } },
        { id: 3, name: "Arbuz Madrazo", role: "Ст.Ивентер", discord: "1066705962972495922", status: "Онлайн", eventsCount: "Нет нормы", joinDate: "07.02.26", rating: "Ст.Администратор", fullDetails: { responsibilities: "Имеет все полномочия Ивентера, а также имеет право корректировать работу Ивентеров и давать рекомендации по поводу ивентов, выдавать наказания за их ошибки, а также одобрять отчётности.", contacts: "https://admin.unionteams.ru/4/admin/76561199236074729", achievements: "1", notes: "" } },
        { id: 4, name: "T1Ran", role: "Ивентер", discord: "1246076621484724320", status: "Онлайн", eventsCount: "6", joinDate: "14.03.26", rating: "Оператор", fullDetails: { responsibilities: "Отвечает за таблицу ТАКЖЕ: Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199705616791", achievements: "11", notes: "" } },
        { id: 5, name: "Дмитрий Морозов", role: "Ивентер", discord: "859747626115006474", status: "Онлайн", eventsCount: "2", joinDate: "30.03.26", rating: "Оператор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199403370553", achievements: "11", notes: "" } },
        { id: 6, name: "Nintendo", role: "Ивентер", discord: "1160166622703652905", status: "Отпуск!", eventsCount: "Отпуск", joinDate: "31.03.26", rating: "Модератор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199563030900", achievements: "0", notes: "" } },
        { id: 7, name: "Гофикал", role: "Ивентер", discord: "1135087142385754123", status: "Онлайн", eventsCount: "-", joinDate: "09.04.26", rating: "Модератор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199636555608", achievements: "0", notes: "" } },
        { id: 8, name: "Himas", role: "Ивентер", discord: "1467081827670954015", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Оператор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199683531094", achievements: "0", notes: "" } },
        { id: 9, name: "yaroslav1432", role: "Ивентер", discord: "1286725096278331565", status: "Онлайн", eventsCount: "-", joinDate: "10.04.26", rating: "Администратор", fullDetails: { responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту.", contacts: "https://admin.unionteams.ru/4/admin/76561199775920153", achievements: "0", notes: "" } }
    ];

     // ЗАГРУЗКА СОХРАНЁННЫХ СТАТУСОВ ИЗ LOCALSTORAGE
     // ФУНКЦИЯ ПОДСЧЁТА СУММЫ ПРИЗОВЫХ
    function calculateTotalPrizes() {
        let total = 0;
        for (let event of eventsData) {
            let ratingStr = String(event.rating);
            // Убираем знак доллара и пробелы, оставляем только цифры и точку
            let match = ratingStr.match(/(\d+(?:[.,]\d+)?)/);
            if (match) {
                let num = parseFloat(match[1].replace(',', '.'));
                if (!isNaN(num)) {
                    total += num;
                }
            }
        }
        return total;
    }

    // ОБНОВЛЕНИЕ СТАТИСТИКИ В РАЗДЕЛЕ "НОРМА"
    function updateNormStats() {
        const totalPrizes = calculateTotalPrizes();
        const normContainer = document.getElementById('normStatsContainer');
        if (normContainer) {
            // Обновляем карточку с призовыми
            const prizeCard = normContainer.querySelector('.stat-card:last-child .stat-value');
            if (prizeCard) {
                prizeCard.innerHTML = totalPrizes.toLocaleString('ru-RU') + '$';
                prizeCard.style.color = '#5fe147';
            }
        }
    }

    // ЗАГРУЗКА СОХРАНЁННЫХ СТАТУСОВ ИЗ LOCALSTORAGE
    function loadSavedStatuses() {
        const saved = localStorage.getItem('unionEventsStatuses');
        if (saved) {
            try {
                const statusMap = JSON.parse(saved);
                for (let event of eventsData) {
                    if (statusMap[event.id]) {
                        event.callStatus = statusMap[event.id];
                    }
                }
            } catch(e) {}
        }
    }

    // СОХРАНЕНИЕ СТАТУСОВ В LOCALSTORAGE
    function saveStatuses() {
        const statusMap = {};
        for (let event of eventsData) {
            statusMap[event.id] = event.callStatus;
        }
        localStorage.setItem('unionEventsStatuses', JSON.stringify(statusMap));
    }


    // ========== ЛОГИНЫ И ПРАВА ==========
    const EDITORS = ["manisule_1888", "gerbiks_1777", "arbuz_1666", "t1ran_1555"];
    const VALID_LOGINS = [...EDITORS,"dmitry_1333", "nintendo_1222", "gans_0000", "r", "himos_1111", "gofi_2222", "yaroslav1432"];
    const PASSWORD = "ivent4";
    let currentUser = null;

     function changeEventStatus(eventId, newStatus) {
        if (!EDITORS.includes(currentUser)) return false;
        const event = eventsData.find(e => e.id === eventId);
        if (event) {
            event.callStatus = newStatus;
            saveStatuses(); // СОХРАНЯЕМ ПОСЛЕ ИЗМЕНЕНИЯ
            renderEventsTable();
            showNotif(`✅ Статус изменён на "${newStatus}"`);
            return true;
        }
        return false;
    }

     function changeEventStatus(eventId, newStatus) {
        if (!EDITORS.includes(currentUser)) return false;
        const event = eventsData.find(e => e.id === eventId);
        if (event) {
            event.callStatus = newStatus;
            saveStatuses();
            renderEventsTable();
            // Обновляем статистику в норме, если она открыта
            updateNormStats();
            showNotif(`✅ Статус изменён на "${newStatus}"`);
            return true;
        }
        return false;
    }

    function showNotif(msg) {
        const d = document.createElement('div');
        d.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#2e7d32;color:white;padding:12px 20px;border-radius:30px;z-index:9999;font-weight:bold;';
        d.innerHTML = msg;
        document.body.appendChild(d);
        setTimeout(() => d.remove(), 2500);
    }

    function renderEventsTable() {
        const container = document.getElementById('eventDynamicContent');
        const canEdit = EDITORS.includes(currentUser);
        container.innerHTML = `
            <div class="page-header"><h2>📅 Таблица мероприятий</h2></div>
            <div class="click-hint">🔽 ${canEdit ? 'У вас есть права изменять статус "Одобрен" ➜ "Скоро" или "Проведен"' : 'Режим просмотра (изменять статус могут: manisule_1888, gerbiks_1777, arbuz_1666)'}</div>
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
                    <button class="status-change-btn btn-completed" data-id="${event.id}" data-status="✅Проведен">✅ Проведен</button>
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
        container.innerHTML = `
            <div class="page-header"><h2>👥 Команда ивент-отдела</h2></div>
            <div class="click-hint">🔽 Нажмите на строку участника — полная информация</div>
            <div class="table-wrapper">
                <table class="data-table">
                    <thead><tr><th>Никнейм</th><th>РОЛЬ</th><th>DISCORD</th><th>СТАТУС</th><th>ИВЕНТОВ</th><th>ДАТА ВСТУПЛЕНИЯ</th><th>Должность</th></tr></thead>
                    <tbody id="teamTableBody"></tbody>
                </table>
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
            row.insertCell(4).innerHTML = `<span style="font-weight:600;">${m.eventsCount}</span>`;
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

    function escapeHtml(s) { if(!s) return ''; return s.replace(/[&<>]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])); }

    function updateClock() { const el = document.getElementById('liveClockEvent'); if(el) el.innerText = new Date().toLocaleTimeString('ru-RU'); }
    setInterval(updateClock, 1000); updateClock();

    function initTheme() { if(localStorage.getItem('unionTheme') === 'dark') { document.body.classList.add('dark'); document.getElementById('themeToggleBtn').innerHTML = '🌙'; } }
    function toggleTheme() { document.body.classList.toggle('dark'); const isDark = document.body.classList.contains('dark'); localStorage.setItem('unionTheme', isDark ? 'dark' : 'light'); document.getElementById('themeToggleBtn').innerHTML = isDark ? '🌙' : '🌞'; }
    document.getElementById('themeToggleBtn')?.addEventListener('click', toggleTheme);
    initTheme();

    // НАВИГАЦИЯ (ТВОЯ МЕТОДИЧКА - НЕТРОНУТАЯ, НО С ОБНОВЛЯЕМОЙ СУММОЙ)
    const navs = document.querySelectorAll('.nav-item');
    navs.forEach(n => {
        n.addEventListener('click', () => {
            navs.forEach(i => i.classList.remove('active'));
            n.classList.add('active');
            const tab = n.dataset.tab;
            if (tab === 'events_table') renderEventsTable();
            else if (tab === 'team_table') renderTeamTable();
            else if (tab === 'event_guidee') {
                const totalPrizes = calculateTotalPrizes();
                document.getElementById('eventDynamicContent').innerHTML = `
                    <div class="stats-grid" id="normStatsContainer">
                        <div class="stat-card"><div class="stat-value">6</div><div class="stat-label">Ивентеры</div><div class="stat-sub">активных сотрудников</div></div>
                        <div class="stat-card"><div class="stat-value">10</div><div class="stat-label">Проведенно Ивентов</div><div class="stat-sub">успешно проведенные ивенты</div></div>
                        <div class="stat-card"><div class="stat-value">-</div><div class="stat-label">ТИКЕТЫ</div><div class="stat-sub">за последние 7 дней</div></div>
                        <div class="stat-card"><div class="stat-value">6</div><div class="stat-label">ОНЛАЙН</div><div class="stat-sub">сейчас вне отпуска</div></div>
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
                    </div>
                `;
            }
        });
    });

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
        const continued = sessionStorage.getItem('continued');
        if (saved && VALID_LOGINS.includes(saved.toLowerCase())) {
            currentUser = saved.toLowerCase();
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
            loginOverlay.style.display = 'flex';
            welcomeContainer.classList.add('hidden');
            mainDashboard.style.display = 'none';
        }
    }

    function doLogin() {
        const login = loginInput.value.trim().toLowerCase();
        const pwd = passInput.value;
        if (VALID_LOGINS.includes(login) && pwd === PASSWORD) {
            sessionStorage.setItem('user', login);
            sessionStorage.removeItem('continued');
            currentUser = login;
            loginOverlay.style.display = 'none';
            welcomeContainer.classList.remove('hidden');
            mainDashboard.style.display = 'none';
            errMsg.classList.remove('show');
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

    // ЗАГРУЖАЕМ СОХРАНЁННЫЕ СТАТУСЫ ПЕРЕД СТАРТОМ
    loadSavedStatuses();
    checkAuth();
