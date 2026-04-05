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
    let eventsData = [
        {
            id: 1,
            name: "Игра в креветку",
            platform: "Дмитрий Морозов",
            organizer: "Гербикс",
            date: "05.04.26, 20:00",
            status: "Проведен",
            rating: "10.000$",
            members: 10 ,
            callStatus: "✅ Одобрен",
            fullDetails: {
                description: "",
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
            eventsCount: 12,
            joinDate: "01.01.25",
            rating: "Судо-Куратор",
            fullDetails: {
                responsibilities: "Координация всех мероприятий, финальное утверждение, обзвон ключевых участников",
                contacts: "",
                achievements: "",
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
                <button class="add-btn" id="openAddEventBtn"><i class="fas fa-plus"></i> Добавить ивент</button>
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
                <button class="add-btn" id="openAddMemberBtn"><i class="fas fa-user-plus"></i> Добавить участника</button>
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
                <div><i class="fas fa-tasks"></i> ${event.fullDetails.tasks}</div>
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
            <div class="detail-row"><span class="detail-label">Проведено ивентов:</span><span>${member.eventsCount}</span></div>
            <div class="detail-row"><span class="detail-label">Дата вступления:</span><span>${member.joinDate}</span></div>
            <div class="detail-row"><span class="detail-label">Должность:</span><span>${member.rating} ★</span></div>
            <div style="margin-top: 12px; background: var(--card-bg); padding: 12px; border-radius: 24px; border:1px solid var(--card-border);">
                <div style="font-weight: 700; margin-bottom: 10px;">👤 РАСШИРЕННАЯ ИНФОРМАЦИЯ:</div>
                <div><i class="fas fa-briefcase"></i> Обязанности: ${member.fullDetails.responsibilities}</div>
                <div><i class="fas fa-address-card"></i>${member.fullDetails.contacts}</div>
                <div><i class="fas fa-trophy"></i> ${member.fullDetails.achievements}</div>
                <div><i class="fas fa-sticky-note"></i>${member.fullDetails.notes}</div>
            </div>
            <button id="openDiscordFromModal" style="margin-top: 12px; background:#5865F2; border:none; padding:0.5rem; border-radius:30px; cursor:pointer; width:100%;"><i class="fab fa-discord"></i> Написать в Discord</button>
        `;
        document.getElementById('infoModal').style.display = 'flex';
        document.getElementById('openDiscordFromModal')?.addEventListener('click', () => window.open('https://discord.com/channels/@me', '_blank'));
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
            <div class="page-header"><h2><i class="fas fa-user-plus"></i> Новый участник команды</h2>
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
                        <p>📌 Стандарты обзвона участников:</p>
                        <ul style="margin:1rem 0 0 1.5rem;"><li>Оповещение за 3 дня</li><li>Фиксация подтверждений</li><li>Оценка ошибок 1-5</li></ul>
                    </div>
                `;
            }
        });
    });

    renderEventsTable();