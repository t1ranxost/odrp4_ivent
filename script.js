


// ========== ТЕМА И ЭМОДЗИ ==========
    function initTheme() {
        const savedTheme = localStorage.getItem('unionTheme');
        const themeBtn = document.getElementById('themeToggleBtn');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            if (themeBtn) themeBtn.innerHTML = '🌙';
        } else {
            document.body.classList.remove('dark');
            if (themeBtn) themeBtn.innerHTML = '🌞';
        }
    }

    function toggleTheme() {
        const themeBtn = document.getElementById('themeToggleBtn');
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            localStorage.setItem('unionTheme', 'light');
            if (themeBtn) themeBtn.innerHTML = '🌞';
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('unionTheme', 'dark');
            if (themeBtn) themeBtn.innerHTML = '🌙';
        }
    }

    // ========== ДАННЫЕ ИВЕНТОВ ==========
    // 🟡Скоро
    // ✅Одобрен
    const colorteap = 0

    let eventsData = [
        {
            id: 4,
            name: "Выбери Цвет",
            platform: "T1Ran",
            organizer: "Нет",
            date: "06.04, 13:25 - 21.50 - 22.05",
            status: "Проведен",
            rating: "15.000$",
            members: 12 ,
            callStatus: "✅Одобрен",
            
            fullDetails: {
                description: "Есть 6 цветов, игроки должны встать на разные цвета (любые). После чего я закрываю забором и выбираю любого игрока. Он выбирает цвет. И эти цвета увеличиваются",
                tasks: "",
                feedback: "",
                rewards: "",
                extra:""
            }
        },
        {
            id: 3,
            name: "1 Мировая",
            platform: "Дмитрий Морозов, бредик",
            organizer: "Нет",
            date: "08.04, 13:25 - 15:00 - 15:20",
            status: "Проведен",
            rating: "-",
            members: "20-30" ,
            callStatus: "✅Одобрен",
            
            fullDetails: {
                description: "4 союз напал на Антанта. Я являлся Маршаром. Сказал красивую речь. В итоге 4 союз выйграл",
                tasks: "",
                feedback: "",
                rewards: "",
                extra:""
            }
        },
        {
            id: 2,
            name: "Темная комната с людьми",
            platform: "Дмитрий Морозов",
            organizer: "Нет",
            date: "08.04, 13:25 - 13:38",
            status: "Проведен",
            rating: "Биту и 40к",
            members: "10-11" ,
            callStatus: "✅Одобрен",
            
            fullDetails: {
                description: "Надо убить людей битой в маленькой комнате с выключенным светом.",
                tasks: "",
                feedback: "",
                rewards: "",
                extra:""
            }
        },
        {
            id: 1,
            name: "Прятки",
            platform: "ratatu1cc",
            organizer: "Нет",
            date: "06.04.26, 15.21-15.30",
            status: "Проведен",
            rating: "45.000$",
            members: 10 ,
            callStatus: "🟡Скоро",
            
            fullDetails: {
                description: "10 человек прячутся , мы их ищем и ебашим",
                tasks: "",
                feedback: "",
                rewards: "",
                extra:""
            }
        }, 
    ];

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
            fullDetails: {
                responsibilities: "Имеет полное владение над отделом Ивентологии, может самостоятельно изменять состав отдела Ивентологии и их норму/правила.",
                contacts: "https://admin.unionteams.ru/4/admin/76561198386405573",
                achievements: "0",
                notes: ""
            }
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
            fullDetails: {
                responsibilities: "Имеет все полномочия нижестоящих рангов, а также имеет право набирать новых кадров в отдел, определять курс развития отдела и изменять норму и правила с разрешения/уведомления об этом Главы Ивентологии.",
                contacts: "https://admin.unionteams.ru/4/admin/76561199196300974",
                achievements: "0",
                notes: ""
            }
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
            fullDetails: {
                responsibilities: "Имеет все полномочия Ивентера, а также имеет право корректировать работу Ивентеров и давать рекомендации по поводу ивентов, выдавать наказания за их ошибки, а также одобрять отчётности.",
                contacts: "https://admin.unionteams.ru/4/admin/76561199236074729",
                achievements: "1",
                notes: ""
            }
        },
        {
            id: 4,
            name: "T1Ran",
            role: "Ивентер",
            discord: "1246076621484724320",
            status: "Онлайн",
            eventsCount: "1",
            joinDate: "14.03.26",
            rating: "Оператор",
            fullDetails: {
                responsibilities: "Отвечает за таблицу ТАКЖЕ: Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту. ",
                contacts: "https://admin.unionteams.ru/4/admin/76561199705616791",
                achievements: "11",
                notes: ""
            }
        },
        {
            id: 5,
            name: "Дмитрий Морозов",
            role: "Ивентер",
            discord: "859747626115006474",
            status: "Онлайн",
            eventsCount: "2",
            joinDate: "30.03.26",
            rating: "Оператор",
            fullDetails: {
                responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту. ",
                contacts: "https://admin.unionteams.ru/4/admin/76561199403370553",
                achievements: "11",
                notes: ""
            }
        },
        {
            id: 6,
            name: "Nintendo",
            role: "Ивентер",
            discord: "1160166622703652905",
            status: "Онлайн",
            eventsCount: "-",
            joinDate: "31.03.26",
            rating: "Модератор",
            fullDetails: {
                responsibilities: "Имеет право проводить ивенты без разрешения со стороны Ст. Ивентера, но обязуется подчиняться всем адекватным приказам со стороны старших представителей отдела и брать во внимание всю обоснованную критику с их стороны. Может игнорировать завал в случае, если ивент начался до  завала, но обязуется брать участие в его разборе, если идёт подготовка к ивенту. ",
                contacts: "https://admin.unionteams.ru/4/admin/76561199563030900",
                achievements: "0",
                notes: ""
            }
        },
    ];
    

    let nextEventId = 5;
    let nextTeamId = 5;

    // ========== ОТОБРАЖЕНИЕ ТАБЛИЦ ==========
    function renderEventsTable() {
        const container = document.getElementById('eventDynamicContent');
        container.innerHTML = `
            <div class="page-header">
                <h2><i class="fas fa-calendar-alt"></i> Таблица мероприятий</h2>
            </div>
            <div class="click-hint">
                <i class="fas fa-mouse-pointer"></i> <span>Нажмите строку которая вам понравилась - Полная информация об ивенте</span>
            </div>
            <div class="table-wrapper">
                <table class="data-table">
                    <thead><tr><th>ИВЕНТ</th><th>ОРГАНИЗАТОР</th><th>ПОМОЩНИКИ</th><th>ДАТА</th><th>СТАТУС</th><th>ПРИЗОВЫЕ</th><th>УЧАСТНИКИ</th><th>ОДОБРЕН</th></tr></thead>
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
            let ratingHtml = event.rating !== '—' ? `<span class="rating-star">${getStarRating(parseFloat(event.rating))} ${event.rating}</span>` : '<span style="opacity:0.6;">нет оценок</span>';
            row.insertCell(5).innerHTML = ratingHtml;
            row.insertCell(6).innerHTML = `<span style="font-weight:600;">${event.members}</span>`;
            row.insertCell(7).innerHTML = `<span style="background:var(--badge-bg); padding:0.2rem 0.6rem; border-radius:20px;">${event.callStatus}</span>`;
        });
        attachRowClickHandlers();
        document.getElementById('openAddEventBtn')?.addEventListener('click', showAddEventForm);
    }

    function renderTeamTable() {
        const container = document.getElementById('eventDynamicContent');
        container.innerHTML = `
            <div class="page-header">
                <h2><i class="fas fa-users"></i> Команда ивент-отдела</h2>
            </div>
            <div class="click-hint">
                <i class="fas fa-mouse-pointer"></i> <span>Нажмите на строку участника — полная информация</span>
            </div>
            <div class="table-wrapper">
                <table class="data-table">
                    <thead><tr><th>Никнейм</th><th>РОЛЬ</th><th>DISCORD</th><th>СТАТУС</th><th>ИВЕНТОВ</th><th>ДАТА ВСТУПЛЕНИЯ</th><th>Должность</th></tr></thead>
                    <tbody id="teamTableBody"></tbody>
                </table>
            </div>
        `;
        const tbody = document.getElementById('teamTableBody');
        tbody.innerHTML = '';
        teamData.forEach(member => {
            const row = tbody.insertRow();
            row.classList.add('clickable-row');
            row.setAttribute('data-type', 'team');
            row.setAttribute('data-id', member.id);
            row.insertCell(0).innerHTML = `<strong>${escapeHtml(member.name)}</strong>`;
            row.insertCell(1).innerHTML = `<span class="role-badge">${escapeHtml(member.role)}</span>`;
            row.insertCell(2).textContent = member.discord;
            let statusClass = member.status === 'Онлайн' ? 'status-online' : 'status-offline';
            row.insertCell(3).innerHTML = `<span class="status-badge ${statusClass}"><i class="fas fa-circle" style="font-size: 0.5rem;"></i> ${member.status}</span>`;
            row.insertCell(4).innerHTML = `<span style="font-weight:600;">${member.eventsCount}</span>`;
            row.insertCell(5).textContent = member.joinDate;
            row.insertCell(6).innerHTML = `<span class="rating-star">${getStarRating(parseFloat(member.rating))} ${member.rating}</span>`;
        });
        attachRowClickHandlers();
        document.getElementById('openAddMemberBtn')?.addEventListener('click', showAddMemberForm);
    }

    function getStarRating(value) {
        let fullStars = Math.floor(value);
        let hasHalf = value % 1 >= 0.5;
        let stars = '';
        for(let i=0; i<fullStars; i++) stars += '<i class="fas fa-star"></i>';
        if(hasHalf) stars += '<i class="fas fa-star-half-alt"></i>';
        let empty = 5 - fullStars - (hasHalf ? 1 : 0);
        for(let i=0; i<empty; i++) stars += '<i class="far fa-star"></i>';
        return stars;
    }

    function attachRowClickHandlers() {
        document.querySelectorAll('.clickable-row').forEach(row => {
            row.removeEventListener('click', row._listener);
            const handler = () => {
                const type = row.getAttribute('data-type');
                const id = parseInt(row.getAttribute('data-id'));
                if (type === 'event') {
                    const event = eventsData.find(e => e.id === id);
                    if (event) openEventModal(event);
                } else if (type === 'team') {
                    const member = teamData.find(m => m.id === id);
                    if (member) openTeamModal(member);
                }
            };
            row.addEventListener('click', handler);
            row._listener = handler;
        });
    }

    function openEventModal(event) {
        document.getElementById('modalTitle').innerHTML = '<i class="fas fa-calendar-check"></i> Детали ивента';
        document.getElementById('modalBody').innerHTML = `
            <div class="detail-row"><span class="detail-label">Название:</span><span>${escapeHtml(event.name)}</span></div>
            <div class="detail-row"><span class="detail-label">Помощники:</span><span>${event.organizer}</span></div>
            <div class="detail-row"><span class="detail-label">Организатор:</span><span>${event.platform}</span></div>
            <div class="detail-row"><span class="detail-label">Дата:</span><span>${event.date}</span></div>
            <div class="detail-row"><span class="detail-label">Статус:</span><span>${event.status}</span></div>
            <div class="detail-row"><span class="detail-label">Участники:</span><span>${event.members} чел.</span></div>
            <div class="detail-row"><span class="detail-label">Призовые:</span><span>${event.rating}</span></div>
            <div class="detail-row"><span class="detail-label">Одобрен:</span><span>${event.callStatus}</span></div>
            <div style="margin-top: 12px; background: var(--card-bg); padding: 12px; border-radius: 24px; border:1px solid var(--card-border);">
                <div style="font-weight: 700; margin-bottom: 10px;">ПОДРОБНОСТИ:</div>
                <div><i class="fas fa-clipboard-list"></i> Описание: ${event.fullDetails.description}</div>
                <div><i class="fas fa-tasks"></i>${event.fullDetails.tasks}</div>
                <div><i class="fas fa-comment-dots"></i>${event.fullDetails.feedback}</div>
                <div><i class="fas fa-gift"></i> ${event.fullDetails.rewards}</div>
                <div><i class="fas fa-phone-alt"></i>${event.fullDetails.extra}</div>
            </div>
        `;
        document.getElementById('infoModal').style.display = 'flex';
    }

    function openTeamModal(member) {
        document.getElementById('modalTitle').innerHTML = '<i class="fas fa-user-circle"></i> Информация о сотруднике';
        document.getElementById('modalBody').innerHTML = `
            <div class="detail-row"><span class="detail-label">Имя:</span><span><strong>${escapeHtml(member.name)}</strong></span></div>
            <div class="detail-row"><span class="detail-label">Роль:</span><span>${member.role}</span></div>
            <div class="detail-row"><span class="detail-label">Discord:</span><span>${member.discord}</span></div>
            <div class="detail-row"><span class="detail-label">Статус:</span><span>${member.status}</span></div>
            <div class="detail-row"><span class="detail-label">Проведено ивентов в неделю:</span><span>${member.eventsCount}</span></div>
            <div class="detail-row"><span class="detail-label">Дата вступления:</span><span>${member.joinDate}</span></div>
            <div class="detail-row"><span class="detail-label">Должность:</span><span>${member.rating} ★</span></div>
            <div style="margin-top: 12px; background: var(--card-bg); padding: 12px; border-radius: 24px; border:1px solid var(--card-border);">
                <div style="font-weight: 700; margin-bottom: 10px;">👤 РАСШИРЕННАЯ ИНФОРМАЦИЯ:</div>
                <div><i class="fas fa-briefcase"></i> Обязанности: ${member.fullDetails.responsibilities}</div>
                <div><i class="fas fa-address-card">Ссылка на таблицу: </i>${member.fullDetails.contacts}</div>
                <div><i class="fas fa-trophy">Тикеты в неделю: </i> ${member.fullDetails.achievements}</div>
                <div><i class="fas fa-sticky-note"></i>${member.fullDetails.notes}</div>
            </div>
        `;
        document.getElementById('infoModal').style.display = 'flex';
    }

    // ========== ФОРМЫ ДОБАВЛЕНИЯ ==========
    function showAddEventForm() {
        const container = document.getElementById('eventDynamicContent');
        container.innerHTML = `
            <div class="page-header"><h2><i class="fas fa-plus-circle"></i> Новое мероприятие</h2>
            <button class="add-btn" id="backToEventsBtn"><i class="fas fa-arrow-left"></i> Назад</button></div>
            <div style="background:var(--card-bg); border-radius:28px; padding:1.8rem; border:1px solid var(--card-border);">
                <div class="form-group"><label>Название *</label><input type="text" id="newEventName"></div>
                <div class="form-group"><label>Организатор</label><input type="text" id="newEventPlatform"></div>
                <div class="form-group"><label>Помощники</label><input type="text" id="newEventOrganizer"></div>
                <div class="form-group"><label>Дата</label><input type="text" id="newEventDate" placeholder="05.05.26, 20:00"></div>
                <div class="form-group"><label>Статус</label><select id="newEventStatus"><option>Запланирован</option><option>Проведен</option><option></option></select></div>
                <div class="form-group"><label>Участники</label><input type="number" id="newEventMembers" value="0"></div>
                <div class="form-group"><label>Описание</label><textarea id="newEventDesc" rows="2"></textarea></div>
                <button class="submit-btn" id="saveEventBtn">➕ Сохранить ивент</button>
            </div>
        `;
        document.getElementById('backToEventsBtn')?.addEventListener('click', () => renderEventsTable());
        document.getElementById('saveEventBtn')?.addEventListener('click', () => {
            const name = document.getElementById('newEventName')?.value;
            if (!name) { alert('Введите название'); return; }
            eventsData.push({
                id: nextEventId++,
                name: name,
                platform: document.getElementById('newEventPlatform')?.value || '—',
                organizer: document.getElementById('newEventOrganizer')?.value || '—',
                date: document.getElementById('newEventDate')?.value || '—',
                status: document.getElementById('newEventStatus')?.value || 'Запланирован',
                rating: '—',
                members: parseInt(document.getElementById('newEventMembers')?.value) || 0,
                callStatus: '🟡 Ожидает',
                fullDetails: { description: document.getElementById('newEventDesc')?.value || '—', tasks: '—', feedback: '—', rewards: '—', extra: '—' }
            });
            renderEventsTable();
            showNotification('✅ Ивент добавлен!');
        });
    }

    function showAddMemberForm() {
        const container = document.getElementById('eventDynamicContent');
        container.innerHTML = `
            <button class="add-btn" id="backToTeamBtn"><i class="fas fa-arrow-left"></i> Назад</button></div>
            <div style="background:var(--card-bg); border-radius:28px; padding:1.8rem; border:1px solid var(--card-border);">
                <div class="form-group"><label>Имя *</label><input type="text" id="newMemberName"></div>
                <div class="form-group"><label>Роль</label><input type="text" id="newMemberRole"></div>
                <div class="form-group"><label>Discord</label><input type="text" id="newMemberDiscord"></div>
                <div class="form-group"><label>Статус</label><select id="newMemberStatus"><option>Онлайн</option><option>Не в сети</option></select></div>
                <div class="form-group"><label>Обязанности</label><textarea id="newMemberDuties" rows="2"></textarea></div>
                <button class="submit-btn" id="saveMemberBtn">👤 Добавить</button>
            </div>
        `;
        document.getElementById('backToTeamBtn')?.addEventListener('click', () => renderTeamTable());
        document.getElementById('saveMemberBtn')?.addEventListener('click', () => {
            const name = document.getElementById('newMemberName')?.value;
            if (!name) { alert('Введите имя'); return; }
            teamData.push({
                id: nextTeamId++,
                name: name,
                role: document.getElementById('newMemberRole')?.value || '—',
                discord: document.getElementById('newMemberDiscord')?.value || '—',
                status: document.getElementById('newMemberStatus')?.value || 'Не в сети',   
                eventsCount: 0,
                joinDate: new Date().toLocaleDateString(),
                rating: '0',
                fullDetails: { responsibilities: document.getElementById('newMemberDuties')?.value || '—', contacts: '—', achievements: '—', notes: '—' }
            });
            renderTeamTable();
            showNotification('✅ Участник добавлен в команду!');
        });
    }

    function showNotification(text) {
        const notif = document.createElement('div');
        notif.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#2e7d32;color:white;padding:12px 20px;border-radius:30px;z-index:999;';
        notif.innerHTML = `<i class="fas fa-check-circle"></i> ${text}`;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 3000);
    }

    function escapeHtml(str) { if(!str) return ''; return str.replace(/[&<>]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])); }

    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('ru-RU', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
        document.getElementById('liveClockEvent').innerText = timeStr;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Модалка
    const modal = document.getElementById('infoModal');
    document.getElementById('closeModalBtn')?.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
    document.getElementById('logoutEventBtn')?.addEventListener('click', () => window.location.reload());

    // Тема
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    initTheme();

    // Навигация
    const navItemss = document.querySelectorAll('.nav-item');
    navItemss.forEach(item => {
        item.addEventListener('click', () => {
            navItemss.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const tab = item.getAttribute('data-tab');
            if (tab === 'events_table') renderEventsTable();
            else if (tab === 'team_table') renderTeamTable();
            else if (tab === 'new_event') showAddEventForm();
            else if (tab === 'new_event') showAddEventForm();
            else if (tab === 'event_guidee') {
                document.getElementById('eventDynamicContent').innerHTML = `
                    <div class="stats-grid">
                        <!-- Карточка 1: Ивентеры (13) -->
                        <div class="stat-card">
                            <div class="stat-value" id="valueRecruiters">6</div>
                            <div class="stat-label">Ивентеры</div>
                            <div class="stat-sub">активных сотрудников</div>
                        </div>

                        <!-- Карточка 2: Проведенно Ивентов -->
                        <div class="stat-card">
                            <div class="stat-value" id="valueRecruited">4</div>
                            <div class="stat-label">Проведенно Ивентов</div>
                            <div class="stat-sub">успешно проведенные ивенты</div>
                        </div>

                        <!-- Карточка 3: Тикеты 7д (170) -->
                        <div class="stat-card">
                            <div class="stat-value" id="valueTickets">23</div>
                            <div class="stat-label">ТИКЕТЫ</div>
                            <div class="stat-sub">за последние 7 дней</div>
                        </div>

                        <!-- Карточка 4: Онлайн (2) -->
                        <div class="stat-card">
                            <div class="stat-value" id="valueOnline">6</div>
                            <div class="stat-label">ОНЛАЙН</div>
                            <div class="stat-sub">сейчас вне отпуска</div>
                        </div>
                    </div>
                `;
            }
        });
    });

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const tab = item.getAttribute('data-tab');
            if (tab === 'events_table') renderEventsTable();
            else if (tab === 'team_table') renderTeamTable();
            else if (tab === 'new_event') showAddEventForm();
            else if (tab === 'event_guide') {
                document.getElementById('eventDynamicContent').innerHTML = `
                    <div class="page-header"><h2><i class="fas fa-book"></i> Методичка</h2></div>
                    <div style="background:var(--card-bg); border-radius:28px; padding:1.5rem; border:1px solid var(--card-border);">
                        <b><p style="text-align: center; font-size: 39px; font-family: 'Courier New', Courier, monospace; color: #fd72f4;">Методичка Ивентологов</p></b>

                        ⠀<b><p style="text-align: center; font-size: 36px; font-family: 'Courier New', Courier, monospace; color: #fd72f4;">ОСНОВНЫЕ ПРАВИЛА  ОТДЕЛА ИВЕНТОЛОГИИ⠀</p></b>
                        <p>ㅤ</p>
                        <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #882381;">⠀ЧТО МОЖНО ДЕЛАТЬ?</p></b>
                        <p>ㅤ</p>
                        <p>ㅤ</p>
                        <div class="metod_one" style="padding: 10px; margin: 5px; border-radius: 18px;">
                            <b><p style="font-size: 19px;" >Кто может проводить ивенты?</p></b>
                            <p>Проводить ивенты можно с ранга «Оператор», если вы состоите в отделе Ивентологии.</p>
                            <p style="color: #818181">С рангов ниже — только с разрешения Главы отдела или Куратора сервера.</p>

                            <p>ㅤ</p>
                            <b><p style="font-size: 19px;" >Кол-во администрации на ивенте</p></b>
                            <p>В ивенте может участвовать не более 25% от всей наборной администрации.</p>
                            <p style="color: #818181">(Например: 10 админов → максимум участвуют 3, округление вверх)</p>

                            <p>ㅤ</p>
                            <b><p style="font-size: 19px;" >Игнор завалов</p></b>
                            <p>Если завал начался во время ивента, его разрешено игнорировать.</p>

                            <p>ㅤ</p>
                            <b><p style="font-size: 19px;" >Самостоятельность</p></b>
                            <p>Каждый Ивентер может проводить ивенты без разрешения от Ст. Администрации.</p>
                            <p style="color: #818181">Если ты на испытательном сроке — нужно одобрение от Ст. Ивентера.</p>

                            <p>ㅤ</p>
                            <b><p style="font-size: 19px;" >Награды</p></b>
                            <p>Если игрок использует баги/преимущества/нарушал правила, что привело его к победе — Ивентер может не выдавать приз.</p>
                            <p style="color: #818181">Если победа честная — Ивентер обязан выдать приз (если он конечно есть).</p>

                            <p>ㅤ</p>
                            <b><p style="font-size: 19px;" >RP-Мероприятия</p></b>
                            <p>Помимо ивентов, вам также доступны РП-Мероприятия.
                            Такие мероприятия представляют собой сюжетные или ситуационные ролевые отыгровки в пределах RP-зоны и направлены на создание “живого” игрового процесса.</p>                          
                            <p style="color: #818181">РП-мероприятие засчитывается как полноценный ивент и учитывается в норме Ивентера. Призы за участие в РП-Мероприятиях можно не выдавать.</p>
                             </div>
                                <p>ㅤ</p>
                                <p>ㅤ</p>
                                <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #ca6019;">ЧТО ВЫ ОБЯЗАНЫ ДЕЛАТЬ?</p></b>
                                <p>ㅤ</p>
                                <p>ㅤ</p>
                                <div class="metod_one" style="padding: 10px; margin: 5px; border-radius: 18px;">
                                    <b><p style="font-size: 19px;" >После ивента/РП-Мероприятия</p></b>
                                    <p>Убрать всё, что было построено/создано. Написать отчёт в специальный канал.</p>
                                    <p>ㅤ</p>
                                    <b><p style="font-size: 19px;" >Лаги</p></b>
                                    <p>Если во время ивента появились лаги или высокий пинг — ивент нужно как можно быстрее прекратить и сообщить Главе/Зам. Главы.</p>
                                </div>
                                    <b><p style="text-align: center; font-size: 35px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color: #ca1919;">ЧТО НЕЛЬЗЯ ДЕЛАТЬ?</p></b>
                                    <div>

                                    </div>
                                </div>
                `;
            }
        });
    });

    renderEventsTable();

 // Допустимые логины (gey или lox) и пароль
        const VALID_LOGINS = ["manisule_1888", "gerbiks_1777", "arbuz_1666", "t1ran_1555", "ratatuy_1444", "dmitry_1333", "nintendo_1222", "gans_0000", "r"];
        const VALID_PASSWORD = "ivent4";

        // Элементы
        const loginOverlay = document.getElementById('loginOverlay');
        const mainContent = document.getElementById('mainContent');
        const loginBtn = document.getElementById('loginBtn');
        const loginInput = document.getElementById('loginInput');
        const passwordInput = document.getElementById('passwordInput');
        const errorMsg = document.getElementById('errorMsg');
        const welcomeContainer = document.getElementById('welcomeContainer');
        const continueBtn = document.getElementById('continueBtn');
        const emptyPage = document.getElementById('emptyPage');
        const logoutBtn = document.getElementById('logoutBtn');

        // Функция проверки авторизации
        function checkAuth() {
            const isLoggedIn = sessionStorage.getItem('isLoggedIn');
            const hasContinued = sessionStorage.getItem('hasContinued');
            
            if (isLoggedIn === 'true') {
                // Скрываем окно входа
                loginOverlay.style.display = 'none';
            
                
                if (hasContinued === 'true') {
                    // Приветствие скрыто, показываем пустую страницу
                    welcomeContainer.classList.add('hidden');
                    emptyPage.classList.add('visible');
                } else {
                    // Показываем приветствие
                    welcomeContainer.classList.remove('hidden');
                    emptyPage.classList.remove('visible');
                }
            } else {
                // Показываем окно входа
                loginOverlay.style.display = 'flex';
                mainContent.style.display = 'none';
                loginInput.value = '';
                passwordInput.value = '';
                errorMsg.classList.remove('show');
            }
        }

        // Функция входа
        function attemptLogin() {
            const login = loginInput.value.trim();
            const password = passwordInput.value;

            // Проверка логина и пароля
            if (VALID_LOGINS.includes(login.toLowerCase()) && password === VALID_PASSWORD) {
                // Успешный вход - сохраняем в sessionStorage
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.removeItem('hasContinued'); // Сбрасываем, чтобы приветствие показалось снова
                checkAuth(); // Обновляем интерфейс - сразу показываем приветствие
            } else {
                errorMsg.classList.add('show');
                // Встряска модалки при ошибке
                const modal = document.querySelector('.login-modal');
                modal.style.animation = 'none';
                setTimeout(() => {
                    modal.style.animation = 'modalAppear 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
                }, 10);
            }
        }

        // Функция выхода
        function logout() {
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('hasContinued');
            checkAuth();
        }

        // Кнопка "Продолжить"
        function handleContinue() {
            // Плавно скрываем приветствие
            welcomeContainer.style.opacity = '0';
            welcomeContainer.style.visibility = 'hidden';
            // Показываем пустую страницу (тёмный фон)
            emptyPage.classList.add('visible');
            // Сохраняем, что пользователь нажал "Продолжить"
            sessionStorage.setItem('hasContinued', 'true');
        }

        // Обработчики событий
        loginBtn.addEventListener('click', attemptLogin);
        
        // Вход по нажатию Enter
        const handleEnter = (e) => {
            if (e.key === 'Enter') {
                attemptLogin();
            }
        };
        loginInput.addEventListener('keypress', handleEnter);
        passwordInput.addEventListener('keypress', handleEnter);

        // Кнопка "Продолжить"
        continueBtn.addEventListener('click', handleContinue);
        
        // Кнопка выхода
        logoutBtn.addEventListener('click', logout);

        // Запускаем проверку авторизации при загрузке страницы
        checkAuth();




    
