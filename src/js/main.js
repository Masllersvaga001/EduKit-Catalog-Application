/* ============================================================
   TRANSLATIONS
   ============================================================ */
const T = {
  ru: {
    catalog:'Каталог', disc:'Обсуждения', rat:'Рейтинг', coll:'Коллекции', profile:'Профиль',
    heroTitle:'Форум студенческих приложений',
    heroSub:'Находите, обсуждайте и голосуйте за лучшие сервисы для учёбы и жизни.',
    searchBtn:'Найти', searchPH:'Поиск приложений...',
    suggestBtn:'Предложить приложение',
    voted:'Голос учтён', vote:'Голосовать', votes:'голосов', alts:'Альтернативы:',
    official:'Официальный сайт 🔗', links:'🔗 Ссылки:',
    cat:'Категория', desc:'Описание', pc:'Плюсы / Минусы',
    alts2:'Альтернативы', sub2:'Предложил',
    votesLabel:'голосов:', commentsLabel:'Комментарии', close:'Закрыть',
    suggestTitle:'Предложить приложение', sendMod:'Отправить на модерацию', cancel:'Отмена',
    discTitle:'Обсуждения', discSub:'Последние комментарии и дискуссии сообщества',
    ratTitle:'Топ приложений', ratSub:'Самые популярные сервисы по версии студентов',
    collTitle:'Коллекции', collSub:'Авторские подборки приложений от сообщества',
    newColl:'Создать коллекцию',
    logout:'Выйти', login:'Войти', guest:'Гость', guestLetter:'Г',
    writeComment:'Написать комментарий...', send:'Отправить',
    loginToComment:'Войдите, чтобы оставить комментарий',
    noDiscussions:'Нет обсуждений', inWord:'в',
    recentlyViewed:'👁 Недавно просмотренные',
    authLoginTab:'Вход', authRegisterTab:'Регистрация',
    usernameOrEmail:'Имя пользователя или email', password:'Пароль',
    loginBtn:'🔑 Войти', forgotPassword:'Забыли пароль?', orLoginVia:'или войти через',
    usernamePh:'Имя пользователя *', emailPh:'Email *', passwordMin:'Пароль (мин. 6 символов) *',
    repeatPassword:'Повторите пароль *', studySectionOpt:'🎓 Учёба (необязательно)',
    universityPh:'Университет / институт', facultyPh:'Факультет / направление',
    coursePh:'Курс (1–6)', cityPh:'Город', registerBtn:'✅ Зарегистрироваться', orViaSocial:'или через соцсети',
    backToLogin:'← Назад ко входу', forgotIntro:'Введите email, указанный при регистрации — мы отправим на него ссылку для восстановления доступа.',
    emailPh2:'Email', sendLinkBtn:'✉️ Отправить ссылку',
    resetIntro:'Придумайте новый пароль для входа.', newPasswordPh:'Новый пароль (мин. 6 символов)',
    repeatNewPasswordPh:'Повторите новый пароль', saveNewPasswordBtn:'🔑 Сохранить новый пароль',
    showPassword:'Показать пароль', hidePassword:'Скрыть пароль',
    themeTitle:'Тема', langTitle:'Сменить язык', moderationNav:'Модерация',
    sortVotes:'🔥 По голосам', sortNewOpt:'🆕 Новые', sortAlpha:'🔤 А–Я',
    guestLockText:'🔒 Войдите для просмотра', noAppsFound:'Ничего не найдено',
    addToCollBtn:'📚 Добавить в коллекцию',
    commentSortNew:'🕐 Новые', commentSortOld:'🕰 Старые', commentSortLikes:'👍 По лайкам',
    pendingReview:'на проверке', blockedBadge:'заблокирован',
    hiddenUntilReview:'Комментарий скрыт до проверки модератором',
    approveBtn:'✅ Одобрить', blockBtn:'🚫 Заблокировать', restoreBtn:'↩️ Восстановить', deleteBtn:'🗑 Удалить',
    suggestNamePh:'Название приложения *', suggestDescPh:'Описание приложения *',
    suggestAltsPh:'Альтернативы (через запятую)', suggestProsPh:'Плюсы', suggestConsPh:'Минусы',
    suggestLinkPh:'Ссылка на сайт', suggestTagsPh:'Теги: #free #mobile #openSource',
    deleteAppBtn:'🗑 Удалить карточку (модератор)', deleteAppTooltip:'Удалить карточку из каталога (только для модератора)',
    confirmDeleteApp:'Удалить эту карточку из каталога? Это действие нельзя отменить.',
    toastAppDeleted:'🗑 Карточка удалена из каталога',
    confirmDeleteComment:'Удалить этот комментарий? Это действие нельзя отменить.',
    toastCommentDeleted:'🗑 Комментарий удалён',
    editBtn:'✏️ Редактировать', toastCommentEdited:'✏️ Комментарий обновлён',
    editAppBtn:'✏️ Редактировать карточку (модератор)',
    editAppTooltip:'Редактировать карточку (только для модератора)',
    editAppModalTitle:'✏️ Редактировать приложение', toastAppEdited:'✅ Карточка обновлена',
    editDescRuPh:'Описание (RU) *', editDescEnPh:'Описание (EN)',
    editProsRuPh:'Плюсы (RU)', editProsEnPh:'Плюсы (EN)',
    editConsRuPh:'Минусы (RU)', editConsEnPh:'Минусы (EN)',
    editBilingualHint:'Можно заполнить только один язык — второй переведётся автоматически при сохранении.',
    newCollTitle:'📚 Новая коллекция', collNamePh:'Название коллекции *', collDescPh:'Описание (необязательно)',
    publicCollLabel:'Публичная коллекция', createBtn:'Создать',
    addToCollTitle:'📚 Добавить в коллекцию', noCollectionsHaveLink:'У вас нет коллекций.',
    deleteCollBtn:'🗑 Удалить коллекцию', confirmDeleteColl:'Удалить эту коллекцию? Это действие нельзя отменить.',
    editProfileTitle:'✏️ Редактировать профиль', uploadPhotoHint:'Нажмите чтобы загрузить фото',
    uploadPhotoBtn:'📷 Загрузить фото', orChooseColor:'или выбери цвет:',
    displayNamePh:'Отображаемое имя', bioPh:'О себе (краткое описание)', studySection:'🎓 Учёба',
    specialtyPh:'Специальность', tgPh:'Telegram (@username)', vkPh:'VK (ссылка или @id)',
    settingsSection:'⚙️ Настройки', themeLight:'☀️ Светлая', themeDark:'🌙 Тёмная', themeAuto:'⚙️ Авто',
    weeklyDigest:'📧 Еженедельный дайджест на email', saveBtn:'💾 Сохранить',
    loginToAccount:'Войдите в аккаунт', loginToAccountSub:'Чтобы видеть профиль, историю и коллекции',
    loginOrRegisterBtn:'🔑 Войти / Зарегистрироваться', courseWord:'курс',
    statVotes:'Голосов', statColls:'Коллекций', statViewed:'Просмотрено',
    editProfileBtn:'✏️ Редактировать профиль', viewHistoryTitle:'👁 История просмотров',
    clearHistoryBtn:'🗑 Очистить историю', myCollectionsTitle:'📚 Мои коллекции', appsWord:'приложений',
    publicBadge:'🌐 Публичная', privateBadge:'🔒 Приватная', logoutBtn:'🚪 Выйти из аккаунта',
    noCollectionsYet:'Пока нет коллекций. Создайте первую!',
    moderationTitle:'🛡 Модерация', moderationSub:'Заявки на приложения и комментарии, отмеченные автофильтром — требуют решения',
    modAccessDenied:'Доступ только для модераторов', loadingText:'Загрузка…', loadError:'Ошибка загрузки',
    noPendingComments:'Нет комментариев, ожидающих проверки 🎉', autofilterBadge:'автофильтр',
    appQueueTitle:'Заявки на приложения', commentQueueTitle:'Комментарии на проверке',
    noPendingApps:'Нет заявок на приложения 🎉', rejectBtn:'🗑 Отклонить',
    toastBye:'👋 До свидания!', toastOauthErr:'Ошибка OAuth', toastAuthErr:'Ошибка авторизации',
    toastWelcome:'👋 Добро пожаловать, {name}!',
    toastSelectImage:'❌ Выберите изображение', toastFileTooBig:'❌ Файл слишком большой (макс. 3 МБ)',
    toastUploadingPhoto:'⏳ Загружаем фото...', toastUploadErr:'❌ Ошибка загрузки',
    toastPhotoUpdated:'✅ Фото обновлено!', toastSaveErr:'❌ Ошибка сохранения', toastProfileSaved:'✅ Профиль сохранён!',
    toastGenericErr:'Ошибка', toastLoginToOpen:'🔑 Войдите, чтобы открыть приложение',
    toastCommentPending:'⏳ Комментарий отправлен на проверку модератору (найдены недопустимые слова)',
    toastDone:'Готово', toastAppSubmitted:'✅ Приложение отправлено на модерацию!',
    toastAppApproved:'✅ Приложение одобрено и добавлено в каталог', toastAppRejected:'🗑 Приложение отклонено',
    toastCollCreated:'📚 Коллекция создана!', toastAddedToColl:'✅ Добавлено в коллекцию!',
    toastCollDeleted:'🗑 Коллекция удалена',
    toastEmailInvalid:'Введите корректный email', toastSending:'⏳ Отправляем...',
    toastEmailSendErr:'Не удалось отправить письмо',
    modLabelApproved:'✅ Одобрено', modLabelBlocked:'🚫 Заблокировано', modLabelDeleted:'🗑 Удалено', modLabelRestored:'↩️ Восстановлено',
    noAccessColl:'У вас нет коллекций.', dataLoading:'Загрузка...',
    forgotSuccessMsg:'Если такой email зарегистрирован, на него отправлена ссылка для восстановления пароля. Проверьте почту (в том числе папку "Спам").',
    errPasswordMin6:'Пароль должен быть минимум 6 символов', errPasswordMismatch:'Пароли не совпадают',
    errInvalidLink:'Ссылка недействительна. Запросите восстановление пароля заново.',
    toastSavingPassword:'⏳ Сохраняем...', errSavePasswordFailed:'Не удалось сохранить пароль. Возможно, ссылка устарела.',
    errEnterUsername:'Введите имя пользователя', toastLoggingIn:'⏳ Входим...', errLoginFailed:'Ошибка входа',
    errUsernameFormat:'Только латиница, цифры и _ (3–30 символов)', toastRegistering:'⏳ Регистрируем...', errRegisterFailed:'Ошибка регистрации',
    cats:['Все','Сообщество','Продуктивность','AI / Инструменты','Образование','Шаблоны',
          'Заметки','Управление задачами','Тайм-менеджмент','Совместная работа',
          'Программирование','Дизайн','Математика','Языки','Здоровье',
          'Финансы','Карьера','Новости','Подкасты / Аудио','Видео / Медиа',
          'Безопасность','Облако / Файлы','Расписание',
          'Мессенджеры','Open Source'],
    catVals:['all','community','productivity','ai','education','templates',
             'notes','tasks','time','collab','coding','design','math','languages',
             'health','finance','career','news','podcasts','video',
             'security','cloud','schedule','messengers','opensource'],
  },
  en: {
    catalog:'Catalog', disc:'Discussions', rat:'Ratings', coll:'Collections', profile:'Profile',
    heroTitle:'Student Apps Forum',
    heroSub:'Find, discuss and vote for the best services for study and life.',
    searchBtn:'Search', searchPH:'Search apps...',
    suggestBtn:'Suggest App',
    voted:'Voted', vote:'Vote', votes:'votes', alts:'Alternatives:',
    official:'Official site 🔗', links:'🔗 Links:',
    cat:'Category', desc:'Description', pc:'Pros / Cons',
    alts2:'Alternatives', sub2:'Submitted by',
    votesLabel:'votes:', commentsLabel:'Comments', close:'Close',
    suggestTitle:'Suggest App', sendMod:'Send for moderation', cancel:'Cancel',
    discTitle:'Discussions', discSub:'Latest comments and community discussions',
    ratTitle:'Top Apps', ratSub:'Most popular services according to students',
    collTitle:'Collections', collSub:'Curated app bundles from the community',
    newColl:'New Collection',
    logout:'Logout', login:'Login', guest:'Guest', guestLetter:'G',
    writeComment:'Write a comment...', send:'Send',
    loginToComment:'Login to leave a comment',
    noDiscussions:'No discussions yet', inWord:'in',
    recentlyViewed:'👁 Recently viewed',
    authLoginTab:'Login', authRegisterTab:'Register',
    usernameOrEmail:'Username or email', password:'Password',
    loginBtn:'🔑 Log in', forgotPassword:'Forgot password?', orLoginVia:'or log in with',
    usernamePh:'Username *', emailPh:'Email *', passwordMin:'Password (min. 6 characters) *',
    repeatPassword:'Repeat password *', studySectionOpt:'🎓 Studies (optional)',
    universityPh:'University / institute', facultyPh:'Faculty / department',
    coursePh:'Year (1–6)', cityPh:'City', registerBtn:'✅ Register', orViaSocial:'or via social',
    backToLogin:'← Back to login', forgotIntro:'Enter the email you registered with — we\'ll send a recovery link to it.',
    emailPh2:'Email', sendLinkBtn:'✉️ Send link',
    resetIntro:'Come up with a new password to log in.', newPasswordPh:'New password (min. 6 characters)',
    repeatNewPasswordPh:'Repeat new password', saveNewPasswordBtn:'🔑 Save new password',
    showPassword:'Show password', hidePassword:'Hide password',
    themeTitle:'Theme', langTitle:'Switch language', moderationNav:'Moderation',
    sortVotes:'🔥 By votes', sortNewOpt:'🆕 Newest', sortAlpha:'🔤 A–Z',
    guestLockText:'🔒 Log in to view', noAppsFound:'Nothing found',
    addToCollBtn:'📚 Add to collection',
    commentSortNew:'🕐 Newest', commentSortOld:'🕰 Oldest', commentSortLikes:'👍 By likes',
    pendingReview:'pending review', blockedBadge:'blocked',
    hiddenUntilReview:'Comment hidden until reviewed by a moderator',
    approveBtn:'✅ Approve', blockBtn:'🚫 Block', restoreBtn:'↩️ Restore', deleteBtn:'🗑 Delete',
    suggestNamePh:'App name *', suggestDescPh:'App description *',
    suggestAltsPh:'Alternatives (comma-separated)', suggestProsPh:'Pros', suggestConsPh:'Cons',
    suggestLinkPh:'Website link', suggestTagsPh:'Tags: #free #mobile #openSource',
    deleteAppBtn:'🗑 Delete card (moderator)', deleteAppTooltip:'Delete this card from the catalog (moderators only)',
    confirmDeleteApp:'Delete this card from the catalog? This cannot be undone.',
    toastAppDeleted:'🗑 Card deleted from the catalog',
    confirmDeleteComment:'Delete this comment? This cannot be undone.',
    toastCommentDeleted:'🗑 Comment deleted',
    editBtn:'✏️ Edit', toastCommentEdited:'✏️ Comment updated',
    editAppBtn:'✏️ Edit card (moderator)',
    editAppTooltip:'Edit this card (moderators only)',
    editAppModalTitle:'✏️ Edit app', toastAppEdited:'✅ Card updated',
    editDescRuPh:'Description (RU) *', editDescEnPh:'Description (EN)',
    editProsRuPh:'Pros (RU)', editProsEnPh:'Pros (EN)',
    editConsRuPh:'Cons (RU)', editConsEnPh:'Cons (EN)',
    editBilingualHint:'You can fill in just one language — the other will be auto-translated on save.',
    newCollTitle:'📚 New collection', collNamePh:'Collection name *', collDescPh:'Description (optional)',
    publicCollLabel:'Public collection', createBtn:'Create',
    addToCollTitle:'📚 Add to collection', noCollectionsHaveLink:'You have no collections.',
    deleteCollBtn:'🗑 Delete collection', confirmDeleteColl:'Delete this collection? This cannot be undone.',
    editProfileTitle:'✏️ Edit profile', uploadPhotoHint:'Click to upload a photo',
    uploadPhotoBtn:'📷 Upload photo', orChooseColor:'or choose a color:',
    displayNamePh:'Display name', bioPh:'About you (short bio)', studySection:'🎓 Studies',
    specialtyPh:'Major', tgPh:'Telegram (@username)', vkPh:'VK (link or @id)',
    settingsSection:'⚙️ Settings', themeLight:'☀️ Light', themeDark:'🌙 Dark', themeAuto:'⚙️ Auto',
    weeklyDigest:'📧 Weekly email digest', saveBtn:'💾 Save',
    loginToAccount:'Log in to your account', loginToAccountSub:'To see your profile, history and collections',
    loginOrRegisterBtn:'🔑 Log in / Register', courseWord:'yr',
    statVotes:'Votes', statColls:'Collections', statViewed:'Viewed',
    editProfileBtn:'✏️ Edit profile', viewHistoryTitle:'👁 View history',
    clearHistoryBtn:'🗑 Clear history', myCollectionsTitle:'📚 My collections', appsWord:'apps',
    publicBadge:'🌐 Public', privateBadge:'🔒 Private', logoutBtn:'🚪 Log out',
    noCollectionsYet:'No collections yet. Create the first one!',
    moderationTitle:'🛡 Moderation', moderationSub:'App suggestions and auto-flagged comments — need a decision',
    modAccessDenied:'Moderators only', loadingText:'Loading…', loadError:'Failed to load',
    noPendingComments:'No comments awaiting review 🎉', autofilterBadge:'auto-filter',
    appQueueTitle:'App suggestions', commentQueueTitle:'Comments pending review',
    noPendingApps:'No pending app suggestions 🎉', rejectBtn:'🗑 Reject',
    toastBye:'👋 Goodbye!', toastOauthErr:'OAuth error', toastAuthErr:'Authorization error',
    toastWelcome:'👋 Welcome, {name}!',
    toastSelectImage:'❌ Please select an image', toastFileTooBig:'❌ File too large (max 3 MB)',
    toastUploadingPhoto:'⏳ Uploading photo...', toastUploadErr:'❌ Upload error',
    toastPhotoUpdated:'✅ Photo updated!', toastSaveErr:'❌ Save error', toastProfileSaved:'✅ Profile saved!',
    toastGenericErr:'Error', toastLoginToOpen:'🔑 Log in to open the app',
    toastCommentPending:'⏳ Comment sent for moderator review (flagged words found)',
    toastDone:'Done', toastAppSubmitted:'✅ App submitted for moderation!',
    toastAppApproved:'✅ App approved and added to the catalog', toastAppRejected:'🗑 App rejected',
    toastCollCreated:'📚 Collection created!', toastAddedToColl:'✅ Added to collection!',
    toastCollDeleted:'🗑 Collection deleted',
    toastEmailInvalid:'Enter a valid email', toastSending:'⏳ Sending...',
    toastEmailSendErr:'Failed to send email',
    modLabelApproved:'✅ Approved', modLabelBlocked:'🚫 Blocked', modLabelDeleted:'🗑 Deleted', modLabelRestored:'↩️ Restored',
    noAccessColl:'You have no collections.', dataLoading:'Loading...',
    forgotSuccessMsg:'If this email is registered, a password reset link has been sent to it. Check your inbox (including spam).',
    errPasswordMin6:'Password must be at least 6 characters', errPasswordMismatch:'Passwords do not match',
    errInvalidLink:'The link is invalid. Please request a password reset again.',
    toastSavingPassword:'⏳ Saving...', errSavePasswordFailed:'Could not save the password. The link may have expired.',
    errEnterUsername:'Enter a username', toastLoggingIn:'⏳ Logging in...', errLoginFailed:'Login failed',
    errUsernameFormat:'Latin letters, digits and _ only (3–30 characters)', toastRegistering:'⏳ Registering...', errRegisterFailed:'Registration failed',
    cats:['All','Community','Productivity','AI / Tools','Education','Templates',
          'Notes','Task Management','Time Management','Collaboration',
          'Coding','Design','Math','Languages','Health',
          'Finance','Career','News','Podcasts / Audio','Video / Media',
          'Security','Cloud / Files','Scheduling',
          'Messengers','Open Source'],
    catVals:['all','community','productivity','ai','education','templates',
             'notes','tasks','time','collab','coding','design','math','languages',
             'health','finance','career','news','podcasts','video',
             'security','cloud','schedule','messengers','opensource'],
  }
};

/* ============================================================
   STATE
   ============================================================ */
let lang           = 'ru';
let currentPage    = 'catalog';
let activeCategory = 'all';
let activeTag      = null;
let currentUser    = null;   // username string
// userDB удалён — данные хранятся на сервере
let votedIds       = [];
let selectedAppId  = null;
let collections    = [];
let viewHistory    = [];
let theme          = 'system';
let userRole       = 'user'; // 'user' | 'moderator' | 'admin' — приходит с сервера
let modalComments  = [];     // комментарии текущего открытого приложения (с сервера)
let editingCommentId = null; // id комментария, который сейчас редактируется инлайн (или null)
let editAppContext   = null; // {clientId, fromQueue} — карточка, открытая в модалке редактирования
let moderationQueueApps = []; // последний загруженный список заявок на модерации (для кнопки "Редактировать")

const AVATAR_COLORS = ['#1a3a6b','#2356b6','#0f7b6c','#e08c0a','#7b2d8b','#c0392b','#2c3e50','#16a085'];
// Одобренные приложения приходят с сервера с id из таблицы apps (1,2,3...),
// которые пересекаются со статическими id ниже. Сдвигаем их на большое
// число, чтобы не было коллизий id в общем массиве apps[].
const SERVER_APP_ID_OFFSET = 100000;

let apps = [
  // ── CORE DISCOVERY PLATFORMS ──
  {id:1,  name:'Product Hunt',          category:'community',   desc:{ru:'Платформа для запуска продуктов с голосованием и ежедневными трендами.',                         en:'Platform for launching products with daily voting and trending discoveries.'},                    votes:0, pros:{ru:'Огромное комьюнити, ежедневные тренды',en:'Huge community, daily trending picks'},              cons:{ru:'Нет студенческого фокуса',en:'No student focus'},                          alts:['AlternativeTo','Reddit'],                      submittedBy:'admin',      link:'https://producthunt.com',         tags:['#community','#discovery'],             comments:[]},
  {id:2,  name:'AlternativeTo',         category:'productivity',desc:{ru:'Каталог альтернатив любому программному обеспечению с тегами и категориями.',                    en:'Catalog of alternatives to any software with tags and categories.'},                            votes:0, pros:{ru:'Большая база альтернатив',en:'Large database of alternatives'},                            cons:{ru:'Слабый UX, нет соц. взаимодействия',en:'Weak UX, no social interaction'},                alts:['Product Hunt','Reddit'],                       submittedBy:'admin',      link:'https://alternativeto.net',        tags:['#productivity','#free'],               comments:[]},
  {id:3,  name:'Toolfinder',            category:'productivity',desc:{ru:'Помогает быстро найти подходящий инструмент для любой задачи с подробными обзорами.',           en:'Helps quickly find the right tool for any task with in-depth curated reviews.'},                votes:0, pros:{ru:'Быстрый поиск инструментов',en:'Fast tool search'},                         cons:{ru:'Мало образовательных фильтров',en:'Few educational filters'},                     alts:['ProductHunt','G2'],                            submittedBy:'admin',      link:'https://toolfinder.co',            tags:['#productivity','#discovery'],          comments:[]},
  {id:4,  name:"There's An AI For That",category:'ai',          desc:{ru:'Огромный каталог AI-инструментов для любых задач с поиском и тегами.',                         en:'Massive directory of AI tools for any purpose, with search and tagging.'},                     votes:0, pros:{ru:'Огромный каталог AI-инструментов',en:'Massive catalog of AI tools'},                  cons:{ru:'Качество описаний нестабильное',en:'Inconsistent description quality'},                    alts:['FutureTools','Futurepedia'],                  submittedBy:'admin',      link:'https://theresanaiforthat.com',    tags:['#ai','#free','#discovery'],            comments:[]},
  {id:5,  name:'FutureTools',           category:'ai',          desc:{ru:'Куратированная подборка лучших AI-инструментов с удобным поиском по категориям.',              en:'Curated collection of the best AI tools organized by category.'},                               votes:0, pros:{ru:'Хорошая куратура',en:'Good curation'},                                   cons:{ru:'Обновляется нечасто',en:'Updated infrequently'},                               alts:["There's An AI For That"],                     submittedBy:'admin',      link:'https://futuretools.io',           tags:['#ai','#curated'],                      comments:[]},

  // ── EDUCATIONAL DIRECTORIES ──
  {id:6,  name:'SchoolDay',             category:'schedule',    desc:{ru:'Академический планировщик расписания с фокусом на студентов и безопасные приложения.',          en:'Academic schedule planner focused on students with safe, curated apps.'},                       votes:0, pros:{ru:'Отличный планировщик для студентов',en:'Great planner for students'},              cons:{ru:'B2B-ориентирован; нет вовлечённости',en:'B2B-oriented; low engagement'},               alts:['Notion','Google Calendar'],                   submittedBy:'admin',      link:'https://schoolday.app',            tags:['#free','#mobile','#schedule'],         comments:[]},
  {id:7,  name:'AppInventory',          category:'education',   desc:{ru:'Структурированный каталог образовательных приложений с академической классификацией.',          en:'Structured catalog of educational apps with academic classification.'},                         votes:0, pros:{ru:'Академическая классификация; структурированность',en:'Academic classification; well-structured'},cons:{ru:'Устарел; нет сообщества',en:'Outdated; no community'},                          alts:['SchoolDay','Common Sense Education'],          submittedBy:'admin',      link:'https://appinventory.net',         tags:['#education','#free'],                  comments:[]},
  {id:8,  name:'Common Sense Education',category:'education',   desc:{ru:'Платформа с доверенными обзорами образовательных инструментов для преподавателей и учащихся.',  en:'Trusted platform with detailed educational tool reviews for teachers and learners.'},           votes:0, pros:{ru:'Доверенные отзывы; детальный анализ',en:'Trusted reviews; detailed analysis'},            cons:{ru:'Фокус на учителях/родителях, не студентах',en:'Focused on teachers/parents, not students'},        alts:['EdSurge Index','AppInventory'],               submittedBy:'admin',      link:'https://www.commonsense.org/education',tags:['#education','#reviews'],              comments:[]},
  {id:9,  name:'EdSurge Index',         category:'education',   desc:{ru:'Профессиональный каталог образовательных технологий с качественно отобранным контентом.',       en:'Professional edtech catalog with high-quality curated educational content.'},                   votes:0, pros:{ru:'Профессиональная куратура',en:'Professional curation'},                       cons:{ru:'Неудобный UX; нет рейтингов',en:'Clunky UX; no ratings'},                      alts:['Common Sense Education','AppInventory'],      submittedBy:'admin',      link:'https://www.edsurge.com/product-reviews',tags:['#education','#curated'],           comments:[]},

  // ── PRODUCTIVITY & STUDENT TOOLS ──
  {id:10, name:'Notion',                category:'notes',       desc:{ru:'Универсальное рабочее пространство для заметок, задач, баз данных и командной работы.',         en:'All-in-one workspace for notes, tasks, databases and team collaboration.'},                    votes:0, pros:{ru:'Гибкость, шаблоны, командная работа',en:'Flexible, templates, team collaboration'},          cons:{ru:'Долгий онбординг',en:'Long onboarding'},                                 alts:['Obsidian','Roam'],                            submittedBy:'admin',      link:'https://notion.so',                tags:['#notes','#templates','#collab'],       comments:[]},
  {id:11, name:'Obsidian',              category:'notes',       desc:{ru:'Локальная база знаний на Markdown с мощными плагинами и приватностью данных.',                  en:'Local-first Markdown knowledge base with powerful plugins and full data privacy.'},             votes:0, pros:{ru:'Приватность, мощные плагины',en:'Privacy, powerful plugins'},                  cons:{ru:'Нет облачной синхронизации бесплатно',en:'No free cloud sync'},             alts:['Notion','Roam'],                              submittedBy:'admin',      link:'https://obsidian.md',              tags:['#notes','#openSource','#free'],        comments:[]},
  {id:12, name:'Anki',                  category:'education',   desc:{ru:'Обучение на карточках с методом интервального повторения, научно доказанная эффективность.',     en:'Flashcard learning with spaced repetition, proven scientifically effective.'},                  votes:0, pros:{ru:'Научно доказанный метод',en:'Scientifically proven method'},                      cons:{ru:'Устаревший дизайн',en:'Outdated design'},                                alts:['Quizlet','Memrise'],                          submittedBy:'admin',      link:'https://apps.ankiweb.net',         tags:['#free','#openSource','#education'],    comments:[]},
  {id:13, name:'Figma',                 category:'design',      desc:{ru:'Профессиональный инструмент для UI/UX-дизайна с поддержкой совместной работы в реальном времени.',en:'Professional UI/UX design tool with real-time collaboration support.'},                          votes:0, pros:{ru:'Отраслевой стандарт дизайна',en:'Industry-standard design tool'},                 cons:{ru:'Платно для команд',en:'Paid for teams'},                                alts:['Sketch','Adobe XD'],                          submittedBy:'admin',      link:'https://figma.com',                tags:['#design','#collab'],                   comments:[]},

  // ── APP ECOSYSTEM MODELS ──
  {id:14, name:'Notion Template Galleries',category:'templates',desc:{ru:'Галереи готовых Notion-шаблонов от сообщества для учёбы, работы и личной организации.',       en:'Community-made Notion template galleries for studying, work and personal organization.'},      votes:0, pros:{ru:'Популярны у студентов; реальные кейсы',en:'Popular with students; real-world use cases'},       cons:{ru:'Только шаблоны; не приложения',en:'Templates only; not apps'},                    alts:['Gumroad','Notion'],                           submittedBy:'admin',      link:'https://notion.so/templates',      tags:['#templates','#free'],                  comments:[]},
  {id:15, name:'Gumroad',               category:'templates',   desc:{ru:'Площадка для продажи цифровых продуктов: шаблонов, курсов и инструментов от авторов.',         en:'Marketplace for selling digital products: templates, courses and creator tools.'},             votes:0, pros:{ru:'Создательский контент; разнообразие',en:'Creator content; variety'},         cons:{ru:'Нет структуры; хаотичный поиск',en:'No structure; chaotic search'},                   alts:['Notion Template Galleries','Payhip'],         submittedBy:'admin',      link:'https://gumroad.com',              tags:['#templates'],                          comments:[]},
  {id:16, name:'Canva Apps Marketplace',category:'design',      desc:{ru:'Маркетплейс встроенных приложений и дополнений для экосистемы дизайна Canva.',                 en:'Marketplace of integrated apps and add-ons within the Canva design ecosystem.'},               votes:0, pros:{ru:'Встроенные инструменты; экосистема дизайна',en:'Built-in tools; design ecosystem'},  cons:{ru:'Узкий кейс использования',en:'Narrow use case'},                         alts:['Figma','Adobe Express'],                      submittedBy:'admin',      link:'https://www.canva.com/marketplace',tags:['#design'],                             comments:[]},
  {id:17, name:'Setapp',                category:'productivity',desc:{ru:'Подписочный сервис качественных Mac-приложений с чистым UX и тщательным отбором.',             en:'Subscription service of high-quality Mac apps with clean UX and careful curation.'},           votes:0, pros:{ru:'Качественные приложения; чистый UX',en:'Quality apps; clean UX'},          cons:{ru:'Платно; нет соц. функций',en:'Paid; no social features'},                         alts:['Chrome Web Store','Microsoft Store'],         submittedBy:'admin',      link:'https://setapp.com',               tags:['#productivity'],                       comments:[]},
  {id:18, name:'Microsoft Store',       category:'productivity',desc:{ru:'Официальный магазин приложений Microsoft с интеграцией в экосистему Windows и Office.',        en:'Official Microsoft app store with deep integration into the Windows and Office ecosystem.'},  votes:0, pros:{ru:'Встроенные инструменты; интеграция',en:'Built-in tools; integration'},          cons:{ru:'Не ориентирован на поиск',en:'Not search-oriented'},                         alts:['Setapp','Chrome Web Store'],                  submittedBy:'admin',      link:'https://apps.microsoft.com',       tags:['#productivity'],                       comments:[]},
  {id:19, name:'Chrome Web Store',      category:'productivity',desc:{ru:'Огромная экосистема расширений и приложений для браузера Chrome на все случаи жизни.',         en:'Huge ecosystem of extensions and apps for the Chrome browser covering all use cases.'},        votes:0, pros:{ru:'Огромная экосистема расширений',en:'Huge extension ecosystem'},              cons:{ru:'Слабый поиск; перегруженность',en:'Weak search; cluttered'},                    alts:['Setapp','Microsoft Store'],                   submittedBy:'admin',      link:'https://chrome.google.com/webstore',tags:['#productivity','#free'],              comments:[]},

  // ── COMMUNITY-DRIVEN DISCOVERY ──
  {id:20, name:'Reddit',                category:'community',   desc:{ru:'Форумы и сообщества с реальными мнениями, обсуждениями и пользовательским контентом.',          en:'Forums and communities with real opinions, discussions and authentic user content.'},           votes:0, pros:{ru:'Реальные мнения; обсуждения; доверие',en:'Real opinions; discussions; trust'},        cons:{ru:'Хаотично; нет структуры; тяжело искать',en:'Chaotic; no structure; hard to search'},           alts:['Discord communities','YouTube'],              submittedBy:'admin',      link:'https://reddit.com',               tags:['#community','#free'],                  comments:[]},
  {id:21, name:'YouTube',               category:'video',       desc:{ru:'Видеоплатформа с наглядными демо и углублёнными обзорами инструментов и сервисов.',             en:'Video platform with visual demos and in-depth reviews of tools and services.'},                votes:0, pros:{ru:'Визуальные демо; глубокие обзоры',en:'Visual demos; in-depth reviews'},            cons:{ru:'Долго; нет структуры',en:'Time-consuming; no structure'},                             alts:['TikTok','Reddit'],                            submittedBy:'admin',      link:'https://youtube.com',              tags:['#video','#free'],                      comments:[]},
  {id:22, name:'TikTok',                category:'video',       desc:{ru:'Короткие вирусные видео с открытием трендовых инструментов и приложений.',                      en:'Short viral videos for discovering trending tools and apps quickly.'},                          votes:0, pros:{ru:'Вирусный поиск; тренды',en:'Viral discovery; trends'},                      cons:{ru:'Поверхностно; нет глубины',en:'Superficial; lacks depth'},                        alts:['YouTube','Instagram'],                        submittedBy:'admin',      link:'https://tiktok.com',               tags:['#video','#mobile'],                    comments:[]},
  {id:23, name:'Discord communities',   category:'community',   desc:{ru:'Нишевые сообщества и серверы с высокой вовлечённостью участников по интересам.',               en:'Niche communities and servers with high member engagement around specific interests.'},         votes:0, pros:{ru:'Нишевые группы; высокая вовлечённость',en:'Niche groups; high engagement'},      cons:{ru:'Закрытые; сложно масштабировать',en:'Closed; hard to scale'},                  alts:['Reddit','Telegram'],                          submittedBy:'admin',      link:'https://discord.com',              tags:['#community','#messengers'],            comments:[]},

  // ── CONTENT & REVIEW SITES ──
  {id:24, name:'Capterra',              category:'productivity',desc:{ru:'Платформа с детальными отзывами и рейтингами бизнес-программного обеспечения.',                 en:'Platform with detailed reviews and ratings of business software.'},                            votes:0, pros:{ru:'Детальные отзывы; рейтинги',en:'Detailed reviews; ratings'},                  cons:{ru:'Фокус на B2B; сложный интерфейс',en:'B2B-focused; complex interface'},                  alts:['G2','Trustpilot'],                            submittedBy:'admin',      link:'https://capterra.com',             tags:['#reviews'],                            comments:[]},
  {id:25, name:'G2',                    category:'productivity',desc:{ru:'Достоверные отзывы и сравнения корпоративного ПО от реальных пользователей.',                   en:'Reliable reviews and comparisons of corporate software from verified users.'},                  votes:0, pros:{ru:'Достоверные отзывы; сравнения',en:'Reliable reviews; comparisons'},              cons:{ru:'Корпоративные инструменты',en:'Enterprise tools'},                        alts:['Capterra','Trustpilot'],                      submittedBy:'admin',      link:'https://g2.com',                   tags:['#reviews'],                            comments:[]},

  // ── INDIRECT COMPETITORS ──
  {id:26, name:'Google Search',         category:'productivity',desc:{ru:'Универсальный поиск для нахождения любых инструментов, сервисов и информации.',                 en:'Universal search engine for finding any tools, services and information.'},                    votes:0,  pros:{ru:'Универсальный поиск',en:'Universal search'},                           cons:{ru:'Слишком широко; нет куратуры',en:'Too broad; no curation'},                     alts:['AlternativeTo','Toolfinder'],                 submittedBy:'admin',      link:'https://google.com',               tags:['#free'],                               comments:[]},
  {id:27, name:'Pinterest',             category:'community',   desc:{ru:'Визуальная платформа для поиска идей и создания коллекций вдохновения.',                        en:'Visual platform for discovering ideas and building inspiration collections.'},                   votes:0, pros:{ru:'Поиск идей; коллекции',en:'Idea discovery; collections'},                       cons:{ru:'Нет рейтингов; нет структуры',en:'No ratings; no structure'},                     alts:['Product Hunt','Reddit'],                      submittedBy:'admin',      link:'https://pinterest.com',            tags:['#community','#discovery'],             comments:[]},
  // ── ДОПОЛНИТЕЛЬНЫЕ ПОПУЛЯРНЫЕ ПРИЛОЖЕНИЯ ──
  {id:28, name:"ChatGPT", category:"ai", desc:{ru:"Универсальный ИИ-помощник: ответы на вопросы, тексты, код, разбор материала.", en:"Versatile AI assistant for questions, writing, coding and studying."}, votes:0, pros:{ru:"Понимает контекст; много применений", en:"Understands context; many use cases"}, cons:{ru:"Бывают неточности; лучшие функции платные", en:"Can be inaccurate; best features are paid"}, alts:["Claude", "Google Gemini"], submittedBy:'admin', link:"https://chatgpt.com", tags:["#ai", "#free"], comments:[]},
  {id:29, name:"Claude", category:"ai", desc:{ru:"ИИ-ассистент от Anthropic для работы с текстом, кодом и длинными документами.", en:"AI assistant by Anthropic for text, code and long documents."}, votes:0, pros:{ru:"Большой контекст; аккуратные тексты", en:"Large context; careful writing"}, cons:{ru:"Лимиты на бесплатном тарифе", en:"Usage limits on the free plan"}, alts:["ChatGPT", "Google Gemini"], submittedBy:'admin', link:"https://claude.ai", tags:["#ai", "#free"], comments:[]},
  {id:30, name:"Google Gemini", category:"ai", desc:{ru:"ИИ-помощник Google, интегрированный с сервисами Google и поиском.", en:"Google's AI assistant integrated with Google services and Search."}, votes:0, pros:{ru:"Интеграция с Google; мультимодальность", en:"Google integration; multimodal"}, cons:{ru:"Часть функций только в подписке", en:"Some features need a subscription"}, alts:["ChatGPT", "Microsoft Copilot"], submittedBy:'admin', link:"https://gemini.google.com", tags:["#ai", "#free"], comments:[]},
  {id:31, name:"Microsoft Copilot", category:"ai", desc:{ru:"ИИ-помощник Microsoft: чат, генерация изображений и помощь в Office.", en:"Microsoft's AI assistant: chat, image generation and Office help."}, votes:0, pros:{ru:"Встроен в Windows и Office", en:"Built into Windows and Office"}, cons:{ru:"Полная версия для Office платная", en:"Full Office version is paid"}, alts:["ChatGPT", "Google Gemini"], submittedBy:'admin', link:"https://copilot.microsoft.com", tags:["#ai", "#free"], comments:[]},
  {id:32, name:"Perplexity", category:"ai", desc:{ru:"ИИ-поисковик, который отвечает с указанием источников.", en:"AI search engine that answers with cited sources."}, votes:0, pros:{ru:"Ссылки на источники; быстрый поиск", en:"Cited sources; fast research"}, cons:{ru:"Глубокие режимы платные", en:"Deep modes are paid"}, alts:["ChatGPT", "Google Search"], submittedBy:'admin', link:"https://perplexity.ai", tags:["#ai", "#discovery"], comments:[]},
  {id:33, name:"DeepSeek", category:"ai", desc:{ru:"Бесплатный ИИ-чат с сильными возможностями в логике и программировании.", en:"Free AI chat with strong reasoning and coding abilities."}, votes:0, pros:{ru:"Бесплатно; хорош в математике и коде", en:"Free; strong in math and code"}, cons:{ru:"Возможны перегрузки сервиса", en:"Service can be overloaded"}, alts:["ChatGPT", "Claude"], submittedBy:'admin', link:"https://deepseek.com", tags:["#ai", "#free"], comments:[]},
  {id:34, name:"NotebookLM", category:"ai", desc:{ru:"Помощник Google для работы со своими источниками: конспекты, вопросы, аудиообзоры.", en:"Google tool for working with your own sources: summaries, Q&A, audio overviews."}, votes:0, pros:{ru:"Отвечает по вашим материалам; удобно для учёбы", en:"Answers from your materials; great for study"}, cons:{ru:"Ограничения на объём источников", en:"Source size limits"}, alts:["Notion", "ChatGPT"], submittedBy:'admin', link:"https://notebooklm.google.com", tags:["#ai", "#education", "#free"], comments:[]},
  {id:35, name:"Grammarly", category:"ai", desc:{ru:"Проверка грамматики и стиля английского текста с подсказками ИИ.", en:"AI grammar and style checker for English writing."}, votes:0, pros:{ru:"Быстрые исправления; работает в браузере", en:"Quick fixes; works in the browser"}, cons:{ru:"Продвинутые функции платные", en:"Advanced features are paid"}, alts:["DeepL", "ChatGPT"], submittedBy:'admin', link:"https://grammarly.com", tags:["#ai", "#free"], comments:[]},
  {id:36, name:"DeepL", category:"ai", desc:{ru:"Точный онлайн-переводчик, особенно хорош для европейских языков.", en:"Accurate online translator, especially strong for European languages."}, votes:0, pros:{ru:"Естественные переводы; перевод документов", en:"Natural translations; document translation"}, cons:{ru:"Меньше языков, чем у Google", en:"Fewer languages than Google"}, alts:["Google Translate", "ChatGPT"], submittedBy:'admin', link:"https://deepl.com", tags:["#ai", "#free"], comments:[]},
  {id:37, name:"Google Translate", category:"ai", desc:{ru:"Бесплатный переводчик текста, сайтов и речи на более чем 100 языков.", en:"Free translator for text, sites and speech in 100+ languages."}, votes:0, pros:{ru:"Много языков; перевод по камере", en:"Many languages; camera translation"}, cons:{ru:"Неточен в сложных текстах", en:"Less accurate on complex texts"}, alts:["DeepL", "ChatGPT"], submittedBy:'admin', link:"https://translate.google.com", tags:["#ai", "#free", "#mobile"], comments:[]},
  {id:38, name:"Midjourney", category:"design", desc:{ru:"Генерация изображений по текстовому описанию с высоким качеством.", en:"High-quality image generation from text prompts."}, votes:0, pros:{ru:"Впечатляющее качество картинок", en:"Impressive image quality"}, cons:{ru:"Платный; нужен Discord/веб-доступ", en:"Paid; requires Discord/web access"}, alts:["Canva", "Adobe Express"], submittedBy:'admin', link:"https://midjourney.com", tags:["#ai", "#design"], comments:[]},
  {id:39, name:"GitHub Copilot", category:"ai", desc:{ru:"ИИ-подсказки кода прямо в редакторе; для студентов доступен бесплатно.", en:"AI code suggestions right in your editor; free for students."}, votes:0, pros:{ru:"Ускоряет написание кода; бесплатно студентам", en:"Speeds up coding; free for students"}, cons:{ru:"Может предлагать ошибочный код", en:"May suggest faulty code"}, alts:["ChatGPT", "Claude"], submittedBy:'admin', link:"https://github.com/features/copilot", tags:["#ai", "#education"], comments:[]},
  {id:40, name:"Gamma", category:"ai", desc:{ru:"Создание презентаций и сайтов с помощью ИИ за пару минут.", en:"Create presentations and pages with AI in minutes."}, votes:0, pros:{ru:"Быстро делает красивые слайды", en:"Quickly makes good-looking slides"}, cons:{ru:"Лимит бесплатных генераций", en:"Limited free generations"}, alts:["Canva", "Google Docs"], submittedBy:'admin', link:"https://gamma.app", tags:["#ai", "#templates"], comments:[]},
  {id:41, name:"Quizlet", category:"education", desc:{ru:"Карточки, тесты и режимы заучивания для подготовки к экзаменам.", en:"Flashcards, tests and study modes for exam prep."}, votes:0, pros:{ru:"Готовые наборы карточек; удобные режимы", en:"Ready-made sets; handy study modes"}, cons:{ru:"Многое стало платным", en:"Many features are now paid"}, alts:["Anki", "Memrise"], submittedBy:'admin', link:"https://quizlet.com", tags:["#education", "#free"], comments:[]},
  {id:42, name:"Duolingo", category:"education", desc:{ru:"Изучение языков в игровой форме короткими ежедневными уроками.", en:"Language learning through short gamified daily lessons."}, votes:0, pros:{ru:"Затягивает; удобно с телефона", en:"Engaging; great on mobile"}, cons:{ru:"Мало глубины для продвинутых", en:"Shallow for advanced learners"}, alts:["Memrise", "Quizlet"], submittedBy:'admin', link:"https://duolingo.com", tags:["#education", "#mobile", "#free"], comments:[]},
  {id:43, name:"Khan Academy", category:"education", desc:{ru:"Бесплатные видеоуроки и упражнения по математике, естественным наукам и другим предметам.", en:"Free video lessons and exercises in math, science and more."}, votes:0, pros:{ru:"Полностью бесплатно; понятные объяснения", en:"Completely free; clear explanations"}, cons:{ru:"Мало материалов на русском", en:"Limited Russian content"}, alts:["Coursera", "Brilliant"], submittedBy:'admin', link:"https://khanacademy.org", tags:["#education", "#free"], comments:[]},
  {id:44, name:"Coursera", category:"education", desc:{ru:"Онлайн-курсы ведущих университетов и компаний с сертификатами.", en:"Online courses from top universities and companies with certificates."}, votes:0, pros:{ru:"Сильные преподаватели; сертификаты", en:"Strong instructors; certificates"}, cons:{ru:"Сертификаты платные", en:"Certificates are paid"}, alts:["edX", "Udemy"], submittedBy:'admin', link:"https://coursera.org", tags:["#education"], comments:[]},
  {id:45, name:"edX", category:"education", desc:{ru:"Курсы университетов мира (MIT, Harvard и др.) в открытом доступе.", en:"University courses (MIT, Harvard and others) available online."}, votes:0, pros:{ru:"Курсы вузов мирового уровня", en:"World-class university courses"}, cons:{ru:"Сертификаты платные", en:"Certificates are paid"}, alts:["Coursera", "Khan Academy"], submittedBy:'admin', link:"https://edx.org", tags:["#education"], comments:[]},
  {id:46, name:"Stepik", category:"education", desc:{ru:"Российская платформа интерактивных курсов с автопроверкой заданий.", en:"Interactive course platform with auto-graded tasks."}, votes:0, pros:{ru:"Много курсов на русском; практика", en:"Many Russian courses; hands-on practice"}, cons:{ru:"Качество курсов разное", en:"Course quality varies"}, alts:["Coursera", "Codecademy"], submittedBy:'admin', link:"https://stepik.org", tags:["#education", "#free"], comments:[]},
  {id:47, name:"Udemy", category:"education", desc:{ru:"Огромный каталог практических видеокурсов от независимых авторов.", en:"Huge catalog of practical video courses from independent creators."}, votes:0, pros:{ru:"Огромный выбор; частые скидки", en:"Huge selection; frequent discounts"}, cons:{ru:"Качество зависит от автора", en:"Quality depends on the author"}, alts:["Coursera", "YouTube"], submittedBy:'admin', link:"https://udemy.com", tags:["#education"], comments:[]},
  {id:48, name:"Photomath", category:"education", desc:{ru:"Решает математические задачи по фото с пошаговым объяснением.", en:"Solves math problems from a photo with step-by-step explanations."}, votes:0, pros:{ru:"Пошаговые решения; сканирование камерой", en:"Step-by-step solutions; camera scanning"}, cons:{ru:"Пояснения к решениям частично платные", en:"Some explanations are paid"}, alts:["Wolfram Alpha", "Desmos"], submittedBy:'admin', link:"https://photomath.com", tags:["#education", "#mobile", "#free"], comments:[]},
  {id:49, name:"Wolfram Alpha", category:"education", desc:{ru:"Вычислительный движок: решает уравнения, строит графики, отвечает на факты.", en:"Computational engine: solves equations, plots graphs, answers facts."}, votes:0, pros:{ru:"Точные вычисления; широкий охват", en:"Precise computation; broad coverage"}, cons:{ru:"Пошаговые решения платные", en:"Step-by-step solutions are paid"}, alts:["Photomath", "Desmos"], submittedBy:'admin', link:"https://wolframalpha.com", tags:["#education", "#free"], comments:[]},
  {id:50, name:"Desmos", category:"education", desc:{ru:"Бесплатный онлайн-калькулятор и построитель графиков функций.", en:"Free online graphing calculator."}, votes:0, pros:{ru:"Удобный и быстрый; бесплатно", en:"Fast and intuitive; free"}, cons:{ru:"Только графики и вычисления", en:"Limited to graphing and calculation"}, alts:["GeoGebra", "Wolfram Alpha"], submittedBy:'admin', link:"https://desmos.com", tags:["#education", "#free"], comments:[]},
  {id:51, name:"GeoGebra", category:"education", desc:{ru:"Динамическая геометрия, алгебра и графики в одном приложении.", en:"Dynamic geometry, algebra and graphing in one app."}, votes:0, pros:{ru:"Наглядная геометрия; бесплатно", en:"Visual geometry; free"}, cons:{ru:"Интерфейс перегружен", en:"Cluttered interface"}, alts:["Desmos", "Wolfram Alpha"], submittedBy:'admin', link:"https://geogebra.org", tags:["#education", "#free"], comments:[]},
  {id:52, name:"Google Scholar", category:"education", desc:{ru:"Поисковик научных статей, диссертаций и цитирований.", en:"Search engine for scholarly articles, theses and citations."}, votes:0, pros:{ru:"Огромная база; счётчик цитирований", en:"Huge index; citation counts"}, cons:{ru:"Не все статьи в открытом доступе", en:"Not all papers are open access"}, alts:["Zotero", "Mendeley"], submittedBy:'admin', link:"https://scholar.google.com", tags:["#education", "#free", "#discovery"], comments:[]},
  {id:53, name:"Zotero", category:"education", desc:{ru:"Менеджер источников: собирает, хранит и оформляет библиографию.", en:"Reference manager that collects, stores and formats citations."}, votes:0, pros:{ru:"Бесплатный и открытый; плагин для Word", en:"Free and open; Word plugin"}, cons:{ru:"Мало места в облаке бесплатно", en:"Small free cloud storage"}, alts:["Mendeley", "Google Scholar"], submittedBy:'admin', link:"https://zotero.org", tags:["#education", "#openSource", "#free"], comments:[]},
  {id:54, name:"Mendeley", category:"education", desc:{ru:"Менеджер литературы и научная соцсеть для исследователей.", en:"Reference manager and academic network for researchers."}, votes:0, pros:{ru:"Удобный PDF-ридер; синхронизация", en:"Handy PDF reader; sync"}, cons:{ru:"Меньше свободы, чем у Zotero", en:"Less flexible than Zotero"}, alts:["Zotero", "Google Scholar"], submittedBy:'admin', link:"https://mendeley.com", tags:["#education", "#free"], comments:[]},
  {id:55, name:"Wikipedia", category:"education", desc:{ru:"Свободная энциклопедия, которую пишут и редактируют люди по всему миру.", en:"Free encyclopedia written and edited by people worldwide."}, votes:0, pros:{ru:"Огромный охват; ссылки на источники", en:"Vast coverage; cited sources"}, cons:{ru:"Качество статей неравномерно", en:"Uneven article quality"}, alts:["Google Search", "Perplexity"], submittedBy:'admin', link:"https://wikipedia.org", tags:["#education", "#free"], comments:[]},
  {id:56, name:"Google Classroom", category:"education", desc:{ru:"Платформа для заданий, материалов и общения преподавателей со студентами.", en:"Platform for assignments, materials and teacher–student communication."}, votes:0, pros:{ru:"Интеграция с Google Docs и Drive", en:"Integrates with Google Docs and Drive"}, cons:{ru:"Ограниченная аналитика", en:"Limited analytics"}, alts:["Moodle", "Microsoft Teams"], submittedBy:'admin', link:"https://classroom.google.com", tags:["#education", "#collab", "#free"], comments:[]},
  {id:57, name:"Moodle", category:"education", desc:{ru:"Открытая система дистанционного обучения, которой пользуются многие вузы.", en:"Open-source learning management system used by many universities."}, votes:0, pros:{ru:"Гибкая; открытый код", en:"Flexible; open source"}, cons:{ru:"Устаревший интерфейс", en:"Dated interface"}, alts:["Google Classroom", "Stepik"], submittedBy:'admin', link:"https://moodle.org", tags:["#education", "#openSource", "#free"], comments:[]},
  {id:58, name:"Codecademy", category:"education", desc:{ru:"Интерактивные уроки программирования прямо в браузере.", en:"Interactive coding lessons right in the browser."}, votes:0, pros:{ru:"Практика с первых минут", en:"Hands-on from minute one"}, cons:{ru:"Продвинутые курсы платные", en:"Advanced courses are paid"}, alts:["Stepik", "LeetCode"], submittedBy:'admin', link:"https://codecademy.com", tags:["#education"], comments:[]},
  {id:59, name:"LeetCode", category:"education", desc:{ru:"Задачи по алгоритмам и подготовка к техническим собеседованиям.", en:"Algorithm problems and technical interview prep."}, votes:0, pros:{ru:"Огромная база задач; сообщество", en:"Huge problem set; community"}, cons:{ru:"Часть задач только по подписке", en:"Some problems are premium-only"}, alts:["Codecademy", "Stepik"], submittedBy:'admin', link:"https://leetcode.com", tags:["#education", "#free"], comments:[]},
  {id:60, name:"Brilliant", category:"education", desc:{ru:"Интерактивное изучение математики, науки и программирования через задачи.", en:"Interactive learning of math, science and CS through problem solving."}, votes:0, pros:{ru:"Наглядно и интерактивно", en:"Visual and interactive"}, cons:{ru:"Почти всё платно", en:"Mostly paid"}, alts:["Khan Academy", "Coursera"], submittedBy:'admin', link:"https://brilliant.org", tags:["#education"], comments:[]},
  {id:61, name:"Overleaf", category:"education", desc:{ru:"Онлайн-редактор LaTeX для научных работ и курсовых с совместной работой.", en:"Online LaTeX editor for papers and theses with real-time collaboration."}, votes:0, pros:{ru:"Не нужно ничего устанавливать; совместная работа", en:"No install needed; real-time collaboration"}, cons:{ru:"Ограничения бесплатного плана", en:"Free plan limits"}, alts:["Google Docs", "Zotero"], submittedBy:'admin', link:"https://overleaf.com", tags:["#education", "#collab", "#free"], comments:[]},
  {id:62, name:"Google Docs", category:"productivity", desc:{ru:"Онлайн-редактор документов с совместной работой в реальном времени.", en:"Online document editor with real-time collaboration."}, votes:0, pros:{ru:"Бесплатно; совместное редактирование", en:"Free; real-time co-editing"}, cons:{ru:"Меньше функций, чем в Word", en:"Fewer features than Word"}, alts:["Microsoft 365", "Notion"], submittedBy:'admin', link:"https://docs.google.com", tags:["#productivity", "#collab", "#free"], comments:[]},
  {id:63, name:"Google Drive", category:"productivity", desc:{ru:"Облачное хранилище файлов с общим доступом и интеграцией с Google Docs.", en:"Cloud file storage with sharing and Google Docs integration."}, votes:0, pros:{ru:"15 ГБ бесплатно; удобный обмен файлами", en:"15 GB free; easy sharing"}, cons:{ru:"Место общее с почтой и фото", en:"Storage shared with Gmail and Photos"}, alts:["Dropbox", "Microsoft 365"], submittedBy:'admin', link:"https://drive.google.com", tags:["#productivity", "#free"], comments:[]},
  {id:64, name:"Microsoft 365", category:"productivity", desc:{ru:"Word, Excel, PowerPoint и OneDrive — привычный офисный пакет.", en:"Word, Excel, PowerPoint and OneDrive — the classic office suite."}, votes:0, pros:{ru:"Мощные функции; стандарт отрасли", en:"Powerful features; industry standard"}, cons:{ru:"Платная подписка", en:"Paid subscription"}, alts:["Google Docs", "Notion"], submittedBy:'admin', link:"https://microsoft365.com", tags:["#productivity"], comments:[]},
  {id:65, name:"Trello", category:"productivity", desc:{ru:"Канбан-доски с карточками для задач и командных проектов.", en:"Kanban boards with cards for tasks and team projects."}, votes:0, pros:{ru:"Простой; удобен для групповых проектов", en:"Simple; great for group projects"}, cons:{ru:"Ограничения бесплатного плана", en:"Free plan limits"}, alts:["Notion", "Todoist"], submittedBy:'admin', link:"https://trello.com", tags:["#productivity", "#collab", "#free"], comments:[]},
  {id:66, name:"Todoist", category:"productivity", desc:{ru:"Менеджер задач со списками, приоритетами и напоминаниями.", en:"Task manager with lists, priorities and reminders."}, votes:0, pros:{ru:"Чистый интерфейс; кроссплатформенность", en:"Clean UI; cross-platform"}, cons:{ru:"Часть функций платная", en:"Some features are paid"}, alts:["TickTick", "Trello"], submittedBy:'admin', link:"https://todoist.com", tags:["#productivity", "#mobile", "#free"], comments:[]},
  {id:67, name:"Airtable", category:"productivity", desc:{ru:"Гибрид таблицы и базы данных для организации любой информации.", en:"Spreadsheet–database hybrid for organizing any information."}, votes:0, pros:{ru:"Гибкие представления данных", en:"Flexible data views"}, cons:{ru:"Лимиты бесплатной версии", en:"Free plan limits"}, alts:["Notion", "Coda"], submittedBy:'admin', link:"https://airtable.com", tags:["#productivity", "#templates"], comments:[]},
  {id:68, name:"Coda", category:"templates", desc:{ru:"Документы, таблицы и мини-приложения в одном пространстве.", en:"Docs, tables and mini-apps in a single workspace."}, votes:0, pros:{ru:"Мощные шаблоны и автоматизация", en:"Powerful templates and automation"}, cons:{ru:"Кривая обучения", en:"Learning curve"}, alts:["Notion", "Airtable"], submittedBy:'admin', link:"https://coda.io", tags:["#templates", "#productivity", "#collab"], comments:[]},
  {id:69, name:"Dropbox", category:"productivity", desc:{ru:"Облачное хранилище и синхронизация файлов между устройствами.", en:"Cloud storage and file sync across devices."}, votes:0, pros:{ru:"Надёжная синхронизация", en:"Reliable syncing"}, cons:{ru:"Всего 2 ГБ бесплатно", en:"Only 2 GB free"}, alts:["Google Drive", "Microsoft 365"], submittedBy:'admin', link:"https://dropbox.com", tags:["#productivity"], comments:[]},
  {id:70, name:"Bitwarden", category:"productivity", desc:{ru:"Менеджер паролей с открытым кодом для всех устройств.", en:"Open-source password manager for all devices."}, votes:0, pros:{ru:"Бесплатный; открытый код", en:"Free; open source"}, cons:{ru:"Менее отполированный интерфейс", en:"Less polished UI"}, alts:["Google Drive", "Microsoft 365"], submittedBy:'admin', link:"https://bitwarden.com", tags:["#productivity", "#openSource", "#free"], comments:[]},
  {id:71, name:"Forest", category:"productivity", desc:{ru:"Приложение для фокуса: растите виртуальное дерево, пока не отвлекаетесь на телефон.", en:"Focus app: grow a virtual tree while you stay off your phone."}, votes:0, pros:{ru:"Мотивирует не отвлекаться", en:"Motivates you to stay focused"}, cons:{ru:"Мобильная версия платная", en:"Mobile app is paid"}, alts:["Pomofocus", "Todoist"], submittedBy:'admin', link:"https://forestapp.cc", tags:["#productivity", "#mobile"], comments:[]},
  {id:72, name:"Pomofocus", category:"productivity", desc:{ru:"Простой онлайн-таймер Помодоро для концентрации во время учёбы.", en:"Simple online Pomodoro timer for focused studying."}, votes:0, pros:{ru:"Без регистрации; минимализм", en:"No signup; minimalist"}, cons:{ru:"Мало функций", en:"Few features"}, alts:["Forest", "Todoist"], submittedBy:'admin', link:"https://pomofocus.io", tags:["#productivity", "#free"], comments:[]},
  {id:73, name:"Miro", category:"design", desc:{ru:"Онлайн-доска для мозговых штурмов, схем и совместной работы.", en:"Online whiteboard for brainstorming, diagrams and collaboration."}, votes:0, pros:{ru:"Бесконечный холст; шаблоны", en:"Infinite canvas; templates"}, cons:{ru:"Ограничения бесплатного плана", en:"Free plan limits"}, alts:["Figma", "Trello"], submittedBy:'admin', link:"https://miro.com", tags:["#design", "#collab", "#templates"], comments:[]},
  {id:74, name:"Google Keep", category:"notes", desc:{ru:"Быстрые заметки, списки и напоминания с синхронизацией между устройствами.", en:"Quick notes, lists and reminders synced across devices."}, votes:0, pros:{ru:"Мгновенные заметки; бесплатно", en:"Instant capture; free"}, cons:{ru:"Слабое оформление и структура", en:"Weak formatting and structure"}, alts:["Notion", "Evernote"], submittedBy:'admin', link:"https://keep.google.com", tags:["#notes", "#mobile", "#free"], comments:[]},
  {id:75, name:"Evernote", category:"notes", desc:{ru:"Один из старейших сервисов заметок с веб-клиппером и поиском.", en:"One of the oldest note apps with a web clipper and search."}, votes:0, pros:{ru:"Мощный поиск; веб-клиппер", en:"Powerful search; web clipper"}, cons:{ru:"Бесплатный план сильно урезан", en:"Free plan is heavily limited"}, alts:["Notion", "OneNote"], submittedBy:'admin', link:"https://evernote.com", tags:["#notes"], comments:[]},
  {id:76, name:"OneNote", category:"notes", desc:{ru:"Цифровой блокнот Microsoft со свободным размещением заметок на странице.", en:"Microsoft's digital notebook with free-form pages."}, votes:0, pros:{ru:"Бесплатный; рисование и рукописный ввод", en:"Free; ink and drawing support"}, cons:{ru:"Громоздкая организация", en:"Clunky organization"}, alts:["Notion", "Evernote"], submittedBy:'admin', link:"https://onenote.com", tags:["#notes", "#free"], comments:[]},
  {id:77, name:"Logseq", category:"notes", desc:{ru:"Открытая база знаний со связями между заметками и локальным хранением.", en:"Open-source knowledge base with linked notes and local storage."}, votes:0, pros:{ru:"Приватность; двусторонние ссылки", en:"Privacy; bi-directional links"}, cons:{ru:"Нужно привыкнуть к формату", en:"Takes time to get used to"}, alts:["Obsidian", "Notion"], submittedBy:'admin', link:"https://logseq.com", tags:["#notes", "#openSource", "#free"], comments:[]},
  {id:78, name:"Google Calendar", category:"schedule", desc:{ru:"Календарь с событиями, напоминаниями и общим доступом.", en:"Calendar with events, reminders and sharing."}, votes:0, pros:{ru:"Интеграция с почтой; общие календари", en:"Gmail integration; shared calendars"}, cons:{ru:"Нет встроенных задач с приоритетами", en:"No built-in prioritized tasks"}, alts:["Yandex Calendar", "TickTick"], submittedBy:'admin', link:"https://calendar.google.com", tags:["#schedule", "#mobile", "#free"], comments:[]},
  {id:79, name:"Yandex Calendar", category:"schedule", desc:{ru:"Календарь от Яндекса с синхронизацией по CalDAV и встречами.", en:"Yandex's calendar with CalDAV sync and meetings."}, votes:0, pros:{ru:"Удобно для пользователей Яндекса", en:"Convenient for Yandex users"}, cons:{ru:"Меньше интеграций", en:"Fewer integrations"}, alts:["Google Calendar", "TickTick"], submittedBy:'admin', link:"https://calendar.yandex.ru", tags:["#schedule", "#free"], comments:[]},
  {id:80, name:"TickTick", category:"schedule", desc:{ru:"Задачи, календарь, привычки и таймер Помодоро в одном приложении.", en:"Tasks, calendar, habits and a Pomodoro timer in one app."}, votes:0, pros:{ru:"Всё в одном; хороший бесплатный план", en:"All-in-one; solid free plan"}, cons:{ru:"Календарь и Pro-функции платные", en:"Calendar views and Pro are paid"}, alts:["Todoist", "Google Calendar"], submittedBy:'admin', link:"https://ticktick.com", tags:["#schedule", "#productivity", "#mobile"], comments:[]},
  {id:81, name:"Calendly", category:"schedule", desc:{ru:"Удобная запись на встречи: вы публикуете свободные слоты — люди выбирают время.", en:"Easy meeting scheduling: share slots and let people pick a time."}, votes:0, pros:{ru:"Без переписки о времени", en:"No back-and-forth on times"}, cons:{ru:"Расширенные функции платные", en:"Advanced features are paid"}, alts:["Google Calendar", "Zoom"], submittedBy:'admin', link:"https://calendly.com", tags:["#schedule", "#productivity"], comments:[]},
  {id:82, name:"Toggl Track", category:"schedule", desc:{ru:"Учёт времени: сколько вы тратите на учёбу, проекты и задачи.", en:"Time tracking: see how much time you spend on study, projects and tasks."}, votes:0, pros:{ru:"Простой таймер; отчёты", en:"Simple timer; reports"}, cons:{ru:"Расширенные отчёты платные", en:"Advanced reports are paid"}, alts:["Forest", "TickTick"], submittedBy:'admin', link:"https://toggl.com", tags:["#schedule", "#productivity", "#free"], comments:[]},
  {id:83, name:"Canva", category:"design", desc:{ru:"Онлайн-редактор графики: презентации, постеры, соцсети по готовым шаблонам.", en:"Online design tool: presentations, posters and social posts from templates."}, votes:0, pros:{ru:"Тысячи шаблонов; очень просто", en:"Thousands of templates; very easy"}, cons:{ru:"Лучшие ресурсы только в Pro", en:"Best assets require Pro"}, alts:["Adobe Express", "Figma"], submittedBy:'admin', link:"https://canva.com", tags:["#design", "#templates", "#free"], comments:[]},
  {id:84, name:"Adobe Express", category:"design", desc:{ru:"Быстрое создание графики, видео и постов от Adobe с шаблонами.", en:"Quick graphics, video and social posts from Adobe with templates."}, votes:0, pros:{ru:"Шаблоны и шрифты Adobe", en:"Adobe templates and fonts"}, cons:{ru:"Ограничения бесплатного плана", en:"Free plan limits"}, alts:["Canva", "Figma"], submittedBy:'admin', link:"https://adobe.com/express", tags:["#design", "#templates", "#free"], comments:[]},
  {id:85, name:"GIMP", category:"design", desc:{ru:"Бесплатный графический редактор с открытым кодом, альтернатива Photoshop.", en:"Free open-source image editor, a Photoshop alternative."}, votes:0, pros:{ru:"Бесплатно; мощные функции", en:"Free; powerful features"}, cons:{ru:"Непривычный интерфейс", en:"Unfamiliar interface"}, alts:["Krita", "Adobe Express"], submittedBy:'admin', link:"https://gimp.org", tags:["#design", "#openSource", "#free"], comments:[]},
  {id:86, name:"Krita", category:"design", desc:{ru:"Бесплатная программа для цифровой живописи и иллюстраций.", en:"Free digital painting and illustration software."}, votes:0, pros:{ru:"Отличные кисти; бесплатно", en:"Great brushes; free"}, cons:{ru:"Не для фотообработки", en:"Not for photo editing"}, alts:["GIMP", "Blender"], submittedBy:'admin', link:"https://krita.org", tags:["#design", "#openSource", "#free"], comments:[]},
  {id:87, name:"Blender", category:"design", desc:{ru:"Бесплатный пакет 3D-моделирования, анимации и рендера.", en:"Free 3D modeling, animation and rendering suite."}, votes:0, pros:{ru:"Профессиональный уровень бесплатно", en:"Pro-grade and free"}, cons:{ru:"Высокий порог входа", en:"Steep learning curve"}, alts:["Krita", "GIMP"], submittedBy:'admin', link:"https://blender.org", tags:["#design", "#openSource", "#free"], comments:[]},
  {id:88, name:"Penpot", category:"design", desc:{ru:"Открытая платформа для дизайна интерфейсов и прототипов.", en:"Open-source platform for UI design and prototyping."}, votes:0, pros:{ru:"Бесплатно; можно развернуть у себя", en:"Free; self-hostable"}, cons:{ru:"Меньше плагинов, чем у Figma", en:"Fewer plugins than Figma"}, alts:["Figma", "Canva"], submittedBy:'admin', link:"https://penpot.app", tags:["#design", "#openSource", "#collab", "#free"], comments:[]},
  {id:89, name:"Unsplash", category:"design", desc:{ru:"Огромная библиотека бесплатных фотографий высокого качества.", en:"Huge library of high-quality free photos."}, votes:0, pros:{ru:"Качественные фото без оплаты", en:"High-quality photos for free"}, cons:{ru:"Иногда слишком «глянцевые» снимки", en:"Sometimes overly polished imagery"}, alts:["Pinterest", "Canva"], submittedBy:'admin', link:"https://unsplash.com", tags:["#design", "#free", "#discovery"], comments:[]},
  {id:90, name:"Behance", category:"design", desc:{ru:"Портфолио дизайнеров и творческих проектов от Adobe.", en:"Adobe's portfolio platform for designers and creative work."}, votes:0, pros:{ru:"Много вдохновения; портфолио", en:"Lots of inspiration; portfolios"}, cons:{ru:"Перегруженная лента", en:"Cluttered feed"}, alts:["Pinterest", "Dribbble"], submittedBy:'admin', link:"https://behance.net", tags:["#design", "#community", "#free"], comments:[]},
  {id:91, name:"Dribbble", category:"design", desc:{ru:"Сообщество дизайнеров: работы, вдохновение и поиск работы.", en:"Designer community: work showcases, inspiration and jobs."}, votes:0, pros:{ru:"Высокий уровень работ", en:"High-quality work"}, cons:{ru:"Много функций закрыто подпиской", en:"Many features behind a paywall"}, alts:["Behance", "Pinterest"], submittedBy:'admin', link:"https://dribbble.com", tags:["#design", "#community"], comments:[]},
  {id:92, name:"Coolors", category:"design", desc:{ru:"Генератор цветовых палитр для дизайна и презентаций.", en:"Color palette generator for design and presentations."}, votes:0, pros:{ru:"Быстро подбирает сочетания цветов", en:"Quickly generates color schemes"}, cons:{ru:"Часть функций платная", en:"Some features are paid"}, alts:["Canva", "Figma"], submittedBy:'admin', link:"https://coolors.co", tags:["#design", "#free"], comments:[]},
  {id:93, name:"Twitch", category:"video", desc:{ru:"Платформа прямых трансляций: игры, обучение и творчество.", en:"Live streaming platform for games, learning and creativity."}, votes:0, pros:{ru:"Живое общение со стримерами", en:"Live interaction with streamers"}, cons:{ru:"Много контента — только игры", en:"Mostly gaming content"}, alts:["YouTube", "VK Video"], submittedBy:'admin', link:"https://twitch.tv", tags:["#video", "#community", "#free"], comments:[]},
  {id:94, name:"Spotify", category:"video", desc:{ru:"Стриминг музыки и подкастов с персональными подборками.", en:"Music and podcast streaming with personalized playlists."}, votes:0, pros:{ru:"Умные рекомендации; много подкастов", en:"Smart recommendations; lots of podcasts"}, cons:{ru:"Реклама и ограничения бесплатно", en:"Ads and limits on free plan"}, alts:["YouTube", "Yandex Music"], submittedBy:'admin', link:"https://spotify.com", tags:["#video", "#mobile", "#free"], comments:[]},
  {id:95, name:"Yandex Music", category:"video", desc:{ru:"Российский сервис музыки и подкастов с подборками и Алисой.", en:"Russian music and podcast service with playlists and Alice assistant."}, votes:0, pros:{ru:"Большая русскоязычная библиотека", en:"Large Russian-language library"}, cons:{ru:"Полный доступ по подписке", en:"Full access requires a subscription"}, alts:["Spotify", "VK Video"], submittedBy:'admin', link:"https://music.yandex.ru", tags:["#video", "#mobile"], comments:[]},
  {id:96, name:"CapCut", category:"video", desc:{ru:"Простой видеоредактор с шаблонами, эффектами и субтитрами.", en:"Easy video editor with templates, effects and captions."}, votes:0, pros:{ru:"Удобен для коротких роликов", en:"Great for short videos"}, cons:{ru:"Часть эффектов платная", en:"Some effects are paid"}, alts:["DaVinci Resolve", "TikTok"], submittedBy:'admin', link:"https://capcut.com", tags:["#video", "#mobile", "#free"], comments:[]},
  {id:97, name:"DaVinci Resolve", category:"video", desc:{ru:"Профессиональный монтаж и цветокоррекция, есть бесплатная версия.", en:"Professional editing and color grading with a free version."}, votes:0, pros:{ru:"Профессиональные инструменты бесплатно", en:"Pro tools for free"}, cons:{ru:"Требует мощный компьютер", en:"Needs a powerful computer"}, alts:["CapCut", "OBS Studio"], submittedBy:'admin', link:"https://blackmagicdesign.com/products/davinciresolve", tags:["#video", "#free"], comments:[]},
  {id:98, name:"OBS Studio", category:"video", desc:{ru:"Бесплатная программа для записи экрана и стриминга.", en:"Free software for screen recording and streaming."}, votes:0, pros:{ru:"Бесплатно; гибкие настройки", en:"Free; highly flexible"}, cons:{ru:"Настройка непроста для новичков", en:"Setup is tricky for beginners"}, alts:["DaVinci Resolve", "Twitch"], submittedBy:'admin', link:"https://obsproject.com", tags:["#video", "#openSource", "#free"], comments:[]},
  {id:99, name:"VLC", category:"video", desc:{ru:"Универсальный проигрыватель, который открывает почти любые форматы.", en:"Universal player that opens almost any format."}, votes:0, pros:{ru:"Бесплатный; поддерживает всё", en:"Free; plays everything"}, cons:{ru:"Простой устаревший интерфейс", en:"Dated, basic interface"}, alts:["YouTube", "OBS Studio"], submittedBy:'admin', link:"https://videolan.org", tags:["#video", "#openSource", "#free"], comments:[]},
  {id:100, name:"VK Video", category:"video", desc:{ru:"Российская видеоплатформа с трансляциями и клипами.", en:"Russian video platform with live streams and clips."}, votes:0, pros:{ru:"Много русскоязычного контента", en:"Lots of Russian-language content"}, cons:{ru:"Меньше международных авторов", en:"Fewer international creators"}, alts:["YouTube", "Rutube"], submittedBy:'admin', link:"https://vkvideo.ru", tags:["#video", "#free"], comments:[]},
  {id:101, name:"Rutube", category:"video", desc:{ru:"Российский видеохостинг для роликов и трансляций.", en:"Russian video hosting for clips and live streams."}, votes:0, pros:{ru:"Доступен в России; русский контент", en:"Available in Russia; Russian content"}, cons:{ru:"Меньше контента, чем на YouTube", en:"Less content than YouTube"}, alts:["YouTube", "VK Video"], submittedBy:'admin', link:"https://rutube.ru", tags:["#video", "#free"], comments:[]},
  {id:102, name:"Telegram", category:"community", desc:{ru:"Мессенджер с каналами, чатами и ботами — популярен и для учёбы.", en:"Messenger with channels, chats and bots — popular for study groups too."}, votes:0, pros:{ru:"Каналы и боты; большие файлы", en:"Channels and bots; large files"}, cons:{ru:"Много спама в открытых чатах", en:"Spam in public chats"}, alts:["WhatsApp", "Discord communities"], submittedBy:'admin', link:"https://telegram.org", tags:["#messengers", "#community", "#mobile", "#free"], comments:[]},
  {id:103, name:"WhatsApp", category:"community", desc:{ru:"Самый популярный мессенджер: чаты, звонки и группы.", en:"One of the world's most popular messengers: chats, calls and groups."}, votes:0, pros:{ru:"Знаком всем; простой интерфейс", en:"Familiar to everyone; simple UI"}, cons:{ru:"Ограниченные возможности для больших групп", en:"Limited for large groups"}, alts:["Telegram", "Signal"], submittedBy:'admin', link:"https://whatsapp.com", tags:["#messengers", "#mobile", "#free"], comments:[]},
  {id:104, name:"Signal", category:"community", desc:{ru:"Мессенджер с упором на приватность и сквозное шифрование.", en:"Privacy-focused messenger with end-to-end encryption."}, votes:0, pros:{ru:"Максимальная приватность; открытый код", en:"Top-tier privacy; open source"}, cons:{ru:"Меньше пользователей", en:"Smaller user base"}, alts:["Telegram", "WhatsApp"], submittedBy:'admin', link:"https://signal.org", tags:["#messengers", "#openSource", "#free"], comments:[]},
  {id:105, name:"VK", category:"community", desc:{ru:"Крупнейшая российская соцсеть: сообщества, чаты и музыка.", en:"Largest Russian social network: communities, chats and music."}, votes:0, pros:{ru:"Много студенческих сообществ", en:"Many student communities"}, cons:{ru:"Перегруженный интерфейс", en:"Cluttered interface"}, alts:["Telegram", "Discord communities"], submittedBy:'admin', link:"https://vk.com", tags:["#community", "#messengers", "#free"], comments:[]},
  {id:106, name:"Slack", category:"community", desc:{ru:"Рабочий мессенджер с каналами и интеграциями для команд и проектов.", en:"Workplace messenger with channels and integrations for teams."}, votes:0, pros:{ru:"Порядок по каналам; интеграции", en:"Organized channels; integrations"}, cons:{ru:"История в бесплатном плане ограничена", en:"Limited history on free plan"}, alts:["Discord communities", "Microsoft Teams"], submittedBy:'admin', link:"https://slack.com", tags:["#community", "#collab", "#messengers"], comments:[]},
  {id:107, name:"Microsoft Teams", category:"community", desc:{ru:"Чаты, видеозвонки и файлы для учёбы и работы в одном месте.", en:"Chat, video calls and files for study and work in one place."}, votes:0, pros:{ru:"Часто используется в вузах", en:"Widely used by universities"}, cons:{ru:"Тяжеловесное приложение", en:"Heavy application"}, alts:["Zoom", "Slack"], submittedBy:'admin', link:"https://teams.microsoft.com", tags:["#collab", "#messengers", "#education", "#free"], comments:[]},
  {id:108, name:"Zoom", category:"community", desc:{ru:"Видеоконференции и онлайн-занятия с демонстрацией экрана.", en:"Video conferencing and online classes with screen sharing."}, votes:0, pros:{ru:"Стабильная связь; запись встреч", en:"Stable calls; recording"}, cons:{ru:"Ограничение времени в бесплатном плане", en:"Time limits on free plan"}, alts:["Microsoft Teams", "Google Meet"], submittedBy:'admin', link:"https://zoom.us", tags:["#collab", "#education", "#free"], comments:[]},
  {id:109, name:"Google Meet", category:"community", desc:{ru:"Простые видеовстречи в браузере, интегрированные с Google Calendar.", en:"Simple browser-based video meetings integrated with Google Calendar."}, votes:0, pros:{ru:"Не нужно устанавливать; удобно", en:"No install; easy to join"}, cons:{ru:"Меньше функций, чем у Zoom", en:"Fewer features than Zoom"}, alts:["Zoom", "Microsoft Teams"], submittedBy:'admin', link:"https://meet.google.com", tags:["#collab", "#education", "#free"], comments:[]},
  {id:110, name:"GitHub", category:"community", desc:{ru:"Хостинг кода и платформа для совместной разработки и open source.", en:"Code hosting and collaboration platform for open-source development."}, votes:0, pros:{ru:"Стандарт для разработчиков; бесплатно для студентов", en:"Developer standard; free for students"}, cons:{ru:"Нужно изучить Git", en:"Requires learning Git"}, alts:["Stack Overflow", "Reddit"], submittedBy:'admin', link:"https://github.com", tags:["#community", "#openSource", "#collab", "#free"], comments:[]},
  {id:111, name:"Stack Overflow", category:"community", desc:{ru:"Вопросы и ответы для программистов от сообщества разработчиков.", en:"Q&A site for programmers built by the developer community."}, votes:0, pros:{ru:"Ответы почти на любой вопрос по коду", en:"Answers to almost any coding question"}, cons:{ru:"Строгие правила для новичков", en:"Strict rules for newcomers"}, alts:["GitHub", "Reddit"], submittedBy:'admin', link:"https://stackoverflow.com", tags:["#community", "#free"], comments:[]},
  {id:112, name:"Habr", category:"community", desc:{ru:"Российское сообщество IT-специалистов: статьи, новости и обсуждения.", en:"Russian IT community with articles, news and discussions."}, votes:0, pros:{ru:"Качественные технические статьи", en:"High-quality technical articles"}, cons:{ru:"Порог входа для авторов", en:"Barrier for new authors"}, alts:["Stack Overflow", "Medium"], submittedBy:'admin', link:"https://habr.com", tags:["#community", "#free"], comments:[]},
  {id:113, name:"Medium", category:"community", desc:{ru:"Платформа для чтения и публикации статей на любые темы.", en:"Platform for reading and publishing articles on any topic."}, votes:0, pros:{ru:"Много авторских статей", en:"Lots of quality writing"}, cons:{ru:"Часть статей за пейволом", en:"Some articles are paywalled"}, alts:["Habr", "Reddit"], submittedBy:'admin', link:"https://medium.com", tags:["#community", "#discovery"], comments:[]},
];

/* ============================================================
   HELPERS
   ============================================================ */
function tx(k){ return T[lang][k] || k; }
function escHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function el(id){ return document.getElementById(id); }
function prosConsText(v){ if(v && typeof v==='object') return v[lang]||v.ru||v.en||''; return v||''; }
function getApp(id){ return apps.find(a=>a.id===id); }
function showToast(msg,duration=2800){
  el('toast-text').textContent=msg;
  el('toast').classList.remove('hidden');
  setTimeout(()=>el('toast').classList.add('hidden'),duration);
}

/* ============================================================
   THEME
   ============================================================ */
function applyTheme(){
  const pref = theme==='system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;
  document.body.classList.toggle('dark', pref==='dark');
  const themeIcon = pref==='dark' ? '☀️' : '🌙';
  const tbtn = el('theme-btn'); if(tbtn) tbtn.textContent = themeIcon;
  ['ep-theme-light','ep-theme-dark','ep-theme-sys'].forEach(id=>{
    const b=el(id); if(b) b.classList.remove('active');
  });
  const map={'light':'ep-theme-light','dark':'ep-theme-dark','system':'ep-theme-sys'};
  if(el(map[theme])) el(map[theme]).classList.add('active');
}
function toggleTheme(){ theme = document.body.classList.contains('dark') ? 'light' : 'dark'; applyTheme(); saveUserSettings(); }
function setTheme(t){ theme=t; applyTheme(); saveUserSettings(); }

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ()=>{ if(theme==='system') applyTheme(); });

/* ============================================================
   SERVER API — все запросы к api.php
   ============================================================ */
async function api(action, data={}){
  try{
    const res = await fetch('api.php?action='+action, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({action,...data}),
      credentials:'include',
    });
    return await res.json();
  }catch(e){ return {ok:false, error:'Нет связи с сервером'}; }
}

/* ============================================================
   USER STATE — хранится в памяти, берётся с сервера
   ============================================================ */
let userProfile = {};   // полный профиль текущего пользователя

function getUserProfile(username){
  // Для текущего юзера возвращаем свежий профиль, для остальных — заглушка
  if(username === currentUser) return userProfile;
  return {displayName: username, avatarColor: AVATAR_COLORS[Math.abs([...username].reduce((a,c)=>a+c.charCodeAt(0),0)) % AVATAR_COLORS.length]};
}
function getAvatarColor(username){
  return getUserProfile(username).avatarColor ||
    AVATAR_COLORS[Math.abs([...username].reduce((a,c)=>a+c.charCodeAt(0),0)) % AVATAR_COLORS.length];
}
// Рендер аватара: фото или цветная буква
function renderAvatar(cls, username, extraStyle=''){
  const p = getUserProfile(username);
  if(username===currentUser && userProfile.avatarUrl){
    return `<div class="${cls}" style="${extraStyle};background:#ddd;padding:0;overflow:hidden"><img src="${userProfile.avatarUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></div>`;
  }
  const color = getAvatarColor(username);
  const letter = (p.displayName||username)[0].toUpperCase();
  return `<div class="${cls}" style="background:${color};${extraStyle}">${letter}</div>`;
}

function applyUserProfile(profile){
  userProfile = profile;
  currentUser = profile.username;
  userRole    = profile.role        || 'user';
  votedIds    = profile.votedIds    || [];
  collections = profile.collections || [];
  viewHistory = profile.history     || [];
  theme       = profile.theme       || 'system';
  if(profile.avatarUrl) userProfile.avatarUrl = profile.avatarUrl;
}
function isModerator(){ return userRole==='moderator' || userRole==='admin'; }

function saveUserSettings(){
  localStorage.setItem('edukit_theme', theme); // для гостей
  api('save_theme', {theme});                   // для залогиненных
}

// Подгружает комментарии всех приложений с сервера одним запросом
// и раскладывает их по apps[i].comments (совместимо со старым форматом).
async function loadAllComments(){
  const r = await api('get_all_comments');
  if(!r.ok) return;
  const byApp = r.byApp || {};
  apps.forEach(a=>{ a.comments = byApp[a.id] || []; });
  renderApps(); renderDiscussions();
  if(selectedAppId){ const a=getApp(selectedAppId); if(a) renderModalComments(a); }
}

// Подгружает одобренные модератором пользовательские приложения с сервера
// и добавляет их в общий каталог apps[] (доступно всем, без перезагрузки).
// Также скрывает встроенные карточки, которые модератор удалил из каталога —
// список их id хранится на сервере, поэтому удаление видно всем посетителям.
async function loadApprovedApps(){
  const r = await api('get_approved_apps');
  if(!r.ok) return;

  if(r.hiddenSeedIds && r.hiddenSeedIds.length){
    const hidden = new Set(r.hiddenSeedIds);
    apps = apps.filter(a => !hidden.has(a.id));
  }

  const existingIds = new Set(apps.map(a=>a.id));
  (r.apps || []).forEach(a=>{
    const id = SERVER_APP_ID_OFFSET + a.id;
    if(existingIds.has(id)) return; // уже добавлено при повторном вызове
    apps.push({
      id, name:a.name, category:a.category,
      desc:a.desc, votes:0,
      pros:a.pros, cons:a.cons, alts:a.alts || [],
      submittedBy:a.submittedBy, link:a.link || '#',
      tags:a.tags || [], comments:[],
    });
  });

  // Правки модератора для встроенных карточек (хранятся в БД) — применяем поверх статики.
  const ov = r.seedOverrides || {};
  apps.forEach(a=>{
    const o = ov[a.id];
    if(!o) return;
    a.name=o.name; a.category=o.category; a.desc=o.desc; a.pros=o.pros; a.cons=o.cons;
    a.alts=o.alts||[]; a.link=o.link||'#'; a.tags=o.tags||[];
  });

  // Голоса берём из БД (а не из памяти браузера), поэтому они не сбрасываются.
  const vc = r.voteCounts || {};
  apps.forEach(a=>{ a.votes = vc[a.id] || 0; });
}

async function loadState(){
  const th = localStorage.getItem('edukit_theme');
  if(th){ theme=th; }
  applyTheme();
  // Проверяем сессию на сервере
  const r = await api('me');
  if(r.ok && r.loggedIn){
    applyUserProfile(r.profile);
    applyTheme();
  }
  await loadApprovedApps();
  await loadAllComments();
  // Всегда рендерим после загрузки
  updateSuggestCatOptions();
  renderCats();
  renderTagFilter();
  renderApps();
  renderRecentlyViewed();
  renderDiscussions();
  renderRankings();
  renderCollections();
  updateNavUser();
}

/* ============================================================
   LANGUAGE
   ============================================================ */
function toggleLang(){ setLang(lang==='ru'?'en':'ru'); }

function setLang(l){
  lang=l;
  const btnLang=el('btn-lang'); if(btnLang) btnLang.textContent=l==='ru'?'🇷🇺 RU':'🇬🇧 EN';
  const tabLang=el('tx-tab-lang'); if(tabLang) tabLang.textContent=l==='ru'?'RU':'EN';
  const map={
    'tx-catalog':'catalog','tx-disc':'disc','tx-rat':'rat','tx-coll':'coll',
    'tx-tab-catalog':'catalog','tx-tab-disc':'disc','tx-tab-rat':'rat','tx-tab-coll':'coll','tx-tab-profile':'profile',
    'tx-heroTitle':'heroTitle','tx-heroSub':'heroSub','tx-searchBtn':'searchBtn',
    'tx-suggestBtn':'suggestBtn','tx-discTitle':'discTitle','tx-discSub':'discSub',
    'tx-ratTitle':'ratTitle','tx-ratSub':'ratSub','tx-collTitle':'collTitle','tx-collSub':'collSub',
    'tx-newColl':'newColl','tx-sendMod':'sendMod','tx-cancel':'cancel','tx-close':'close',
    'tx-suggestTitle':'suggestTitle',
  };
  Object.entries(map).forEach(([id,k])=>{ const e=el(id); if(e) e.textContent=tx(k); });
  document.querySelectorAll('[data-tx]').forEach(e=>{ e.textContent=tx(e.dataset.tx); });
  document.querySelectorAll('[data-tx-ph]').forEach(e=>{ e.placeholder=tx(e.dataset.txPh); });
  document.querySelectorAll('[data-tx-title]').forEach(e=>{ e.title=tx(e.dataset.txTitle); });
  document.querySelectorAll('[data-tx-aria]').forEach(e=>{ e.setAttribute('aria-label', tx(e.dataset.txAria)); });
  const si=el('search-input'); if(si) si.placeholder=tx('searchPH');
  updateSuggestCatOptions();
  updateEditCatOptions();
  updateNavUser();
  renderCats();
  renderApps();
  renderDiscussions();
  renderRankings();
  renderCollections();
  renderProfilePage();
  renderRecentlyViewed();
  if(currentPage==='moderation') renderModerationPage();
  refreshOpenAppModalLang();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function showPage(p){
  currentPage=p;
  const pages=['catalog','discussions','ratings','collections','profile','moderation'];
  pages.forEach(id=>{
    const pe=el('page-'+id); if(pe) pe.classList.toggle('hidden',id!==p);
    const nb=el('btn-'+id);  if(nb) nb.classList.toggle('active',id===p);
    const tb=el('tab-'+id);  if(tb) tb.classList.toggle('active',id===p);
  });
  el('tab-profile').classList.toggle('active', p==='profile');
  if(p==='discussions') renderDiscussions();
  if(p==='ratings')     renderRankings();
  if(p==='collections') renderCollections();
  if(p==='profile')     renderProfilePage();
  if(p==='moderation')  renderModerationPage();
}

function handleMobileProfile(){
  if(currentUser) showPage('profile');
  else openAuthModal('login');
}

/* ============================================================
   NAV USER
   ============================================================ */
function updateNavUser(){
  const badge=el('nav-badge'), uname=el('nav-username'), btn=el('nav-auth-btn');
  const modBtn=el('btn-moderation');
  if(modBtn) modBtn.classList.toggle('hidden', !isModerator());
  const modTab=el('tab-moderation');
  if(modTab) modTab.classList.toggle('hidden', !isModerator());
  if(currentUser){
    if(userProfile.avatarUrl){
      badge.innerHTML=`<img src="${userProfile.avatarUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
      badge.style.background='#ddd';
    } else {
      badge.textContent=currentUser[0].toUpperCase();
      badge.style.background=getAvatarColor(currentUser);
    }
    badge.classList.remove('guest');
    badge.onclick=()=>showPage('profile');
    uname.textContent=getUserProfile(currentUser).displayName||currentUser;
    uname.onclick=()=>showPage('profile');
    btn.textContent='🚪 '+tx('logout');
  } else {
    badge.textContent=tx('guestLetter');
    badge.style.background='';
    badge.classList.add('guest');
    badge.onclick=()=>openAuthModal('login');
    uname.textContent=tx('guest');
    uname.onclick=()=>openAuthModal('login');
    btn.textContent='🔑 '+tx('login');
  }
}
function handleNavAuth(){
  if(currentUser){ doLogout(); }
  else openAuthModal('login');
}
async function doLogout(){
  await api('logout');
  currentUser=null; userProfile={}; votedIds=[]; collections=[]; viewHistory=[]; userRole='user';
  theme = localStorage.getItem('edukit_theme') || 'system';
  updateNavUser(); renderApps(); renderCollections(); renderProfilePage();
  loadAllComments(); // скрываем то, что было видно только модератору
  showToast(tx('toastBye'));
}

/* ============================================================
   AUTH MODAL
   ============================================================ */
function openAuthModal(tab='login'){
  el('auth-modal').classList.remove('hidden');
  switchAuthTab(tab);
}
function closeAuthModal(){ el('auth-modal').classList.add('hidden'); }
function closeAuthOverlay(e){ if(e.target===el('auth-modal')) closeAuthModal(); }

// Переключатель "показать/скрыть пароль" (иконка-глазик в полях пароля)
function togglePasswordVisibility(inputId, btn){
  const input = el(inputId);
  const showing = input.type === 'password';
  input.type = showing ? 'text' : 'password';
  btn.classList.toggle('shown', showing);
  btn.setAttribute('aria-label', showing ? tx('hidePassword') : tx('showPassword'));
}

function switchAuthTab(tab){
  el('tab-login-btn').classList.toggle('active', tab==='login');
  el('tab-register-btn').classList.toggle('active', tab==='register');
  el('auth-login-panel').classList.toggle('hidden', tab!=='login');
  el('auth-register-panel').classList.toggle('hidden', tab!=='register');
  el('auth-forgot-panel').classList.toggle('hidden', tab!=='forgot');
  el('auth-reset-panel').classList.toggle('hidden', tab!=='reset');
  // Вкладки "Вход"/"Регистрация" наверху имеют смысл только для этих двух режимов
  const tabsVisible = (tab==='login' || tab==='register');
  el('tab-login-btn').parentElement.style.display = tabsVisible ? '' : 'none';
}

async function doRequestPasswordReset(){
  const email = el('forgot-email').value.trim();
  const err = el('forgot-err');
  const ok  = el('forgot-ok');
  err.classList.add('hidden');
  ok.classList.add('hidden');
  if(!email || !email.includes('@')){ err.textContent=tx('toastEmailInvalid'); err.classList.remove('hidden'); return; }
  const btn = el('forgot-submit-btn');
  btn.disabled = true; btn.textContent = tx('toastSending');
  const r = await api('request_password_reset', {email});
  btn.disabled = false; btn.textContent = tx('sendLinkBtn');
  if(!r.ok){
    err.textContent = r.error || tx('toastEmailSendErr');
    err.classList.remove('hidden');
    return;
  }
  ok.textContent = tx('forgotSuccessMsg');
  ok.classList.remove('hidden');
  el('forgot-email').value = '';
}

async function doResetPassword(){
  const pass  = el('reset-pass').value;
  const pass2 = el('reset-pass2').value;
  const err = el('reset-err');
  err.classList.add('hidden');
  if(pass.length < 6){ err.textContent=tx('errPasswordMin6'); err.classList.remove('hidden'); return; }
  if(pass !== pass2){ err.textContent=tx('errPasswordMismatch'); err.classList.remove('hidden'); return; }
  const token = sessionStorage.getItem('pw_reset_token') || '';
  if(!token){ err.textContent=tx('errInvalidLink'); err.classList.remove('hidden'); return; }
  const btn = el('reset-submit-btn');
  btn.disabled = true; btn.textContent = tx('toastSavingPassword');
  const r = await api('reset_password', {token, password:pass});
  btn.disabled = false; btn.textContent = tx('saveNewPasswordBtn');
  if(!r.ok){
    err.textContent = r.error || tx('errSavePasswordFailed');
    err.classList.remove('hidden');
    return;
  }
  sessionStorage.removeItem('pw_reset_token');
  loginAs(r.profile);
  closeAuthModal();
}

// Если пользователь перешёл по ссылке восстановления пароля из письма
function checkPasswordResetLink(){
  const params = new URLSearchParams(window.location.search);
  const token = params.get('reset_token');
  if(!token) return;
  sessionStorage.setItem('pw_reset_token', token);
  openAuthModal('reset');
  // Убираем токен из адресной строки, чтобы он не "утёк" (история, логи, шаринг)
  params.delete('reset_token');
  const newUrl = window.location.pathname + (params.toString() ? '?'+params.toString() : '') + window.location.hash;
  window.history.replaceState({}, '', newUrl);
}

async function doLogin(){
  const u=el('login-user').value.trim();
  const p=el('login-pass').value;
  const err=el('login-err');
  if(!u){ err.textContent=tx('errEnterUsername'); err.classList.remove('hidden'); return; }
  const btn = el('auth-login-panel').querySelector('.primary-btn');
  if(btn){ btn.disabled=true; btn.textContent=tx('toastLoggingIn'); }
  const r = await api('login', {username:u, password:p});
  if(btn){ btn.disabled=false; btn.textContent=tx('loginBtn'); }
  if(!r.ok){
    err.textContent = r.error || tx('errLoginFailed');
    err.classList.remove('hidden'); return;
  }
  loginAs(r.profile);
}

async function doRegister(){
  const username=el('reg-username').value.trim();
  const email   =el('reg-email').value.trim();
  const pass    =el('reg-pass').value;
  const pass2   =el('reg-pass2').value;
  const err=el('reg-err');
  if(!username){ err.textContent=tx('errEnterUsername'); err.classList.remove('hidden'); return; }
  if(!/^[a-zA-Z0-9_]{3,30}$/.test(username)){ err.textContent=tx('errUsernameFormat'); err.classList.remove('hidden'); return; }
  if(!email || !email.includes('@')){ err.textContent=tx('toastEmailInvalid'); err.classList.remove('hidden'); return; }
  if(pass.length < 6){ err.textContent=tx('errPasswordMin6'); err.classList.remove('hidden'); return; }
  if(pass !== pass2){ err.textContent=tx('errPasswordMismatch'); err.classList.remove('hidden'); return; }
  const btn = el('auth-register-panel').querySelector('.primary-btn');
  if(btn){ btn.disabled=true; btn.textContent=tx('toastRegistering'); }
  const r = await api('register', {
    username, email, password:pass,
    university: el('reg-university').value.trim(),
    faculty:    el('reg-faculty').value.trim(),
    course:     el('reg-course').value.trim(),
    city:       el('reg-city').value.trim(),
  });
  if(btn){ btn.disabled=false; btn.textContent=tx('registerBtn'); }
  if(!r.ok){
    err.textContent = r.error || tx('errRegisterFailed');
    err.classList.remove('hidden'); return;
  }
  loginAs(r.profile);
}

function oauthLogin(provider){
  // Сохраняем текущую страницу для возврата после OAuth
  sessionStorage.setItem('oauth_return_page', currentPage);
  // Redirect-метод: работает на мобильных и десктопе без всплывающих окон
  window.location.href = `api.php?oauth=${provider}&start=1`;
}

// Проверяем OAuth-результат при загрузке страницы (после redirect)
async function checkOAuthRedirectResult(){
  const params = new URLSearchParams(window.location.search);
  const oauthResult = params.get('oauth_result');
  if(!oauthResult) return;
  // Убираем параметр из URL
  const cleanUrl = window.location.pathname;
  window.history.replaceState({}, '', cleanUrl);
  try {
    const result = JSON.parse(decodeURIComponent(oauthResult));
    if(!result.ok){
      showToast('❌ ' + (result.error || tx('toastOauthErr')));
    } else {
      loginAs(result.profile);
      const returnPage = sessionStorage.getItem('oauth_return_page');
      if(returnPage){ sessionStorage.removeItem('oauth_return_page'); showPage(returnPage); }
    }
  } catch(e){ showToast('❌ ' + tx('toastAuthErr')); }
}

function loginAs(profile){
  applyUserProfile(profile);
  closeAuthModal();
  ['login-user','login-pass'].forEach(id=>{ const e=el(id); if(e) e.value=''; });
  ['reg-username','reg-email','reg-pass','reg-pass2','reg-university','reg-faculty','reg-course','reg-city'].forEach(id=>{ const e=el(id); if(e) e.value=''; });
  ['login-err','reg-err'].forEach(id=>{ const e=el(id); if(e) e.classList.add('hidden'); });
  applyTheme();
  updateNavUser();
  renderApps();
  loadAllComments(); // роль могла измениться — перезагружаем видимость комментариев
  showToast(tx('toastWelcome').replace('{name}', profile.displayName || profile.username));
}

/* ============================================================
   PROFILE PAGE
   ============================================================ */
function renderProfilePage(){
  const div=el('profile-page-content');
  if(!div) return;
  if(!currentUser){
    div.innerHTML=`
      <div style="text-align:center;padding:40px 20px">
        <div style="font-size:48px;margin-bottom:16px">👤</div>
        <div style="font-weight:800;font-size:20px;color:var(--textD);margin-bottom:8px">${tx('loginToAccount')}</div>
        <div style="color:var(--textM);font-size:14px;margin-bottom:20px">${tx('loginToAccountSub')}</div>
        <button class="primary-btn" onclick="openAuthModal('login')" style="max-width:280px;margin:0 auto">${tx('loginOrRegisterBtn')}</button>
      </div>`;
    return;
  }
  const p=getUserProfile(currentUser);
  const voted=votedIds.length;
  const numColls=collections.length;
  div.innerHTML=`
    <div class="profile-header">
      ${renderAvatar('avatar-lg', currentUser)}
      <div class="profile-info">
        <div class="profile-name">${escHtml(p.displayName||currentUser)}</div>
        <div class="profile-handle">@${escHtml(currentUser)}</div>
        ${p.bio?`<div class="profile-bio">${escHtml(p.bio)}</div>`:''}
        <div class="profile-meta-row">
          ${p.university?`<span class="profile-meta-item">🏛 ${escHtml(p.university)}</span>`:''}
          ${p.faculty?`<span class="profile-meta-item">📖 ${escHtml(p.faculty)}</span>`:''}
          ${p.specialty?`<span class="profile-meta-item">🎓 ${escHtml(p.specialty)}</span>`:''}
          ${p.course?`<span class="profile-meta-item">📅 ${p.course} ${tx('courseWord')}</span>`:''}
          ${p.city?`<span class="profile-meta-item">📍 ${escHtml(p.city)}</span>`:''}
          ${p.tg?`<span class="profile-meta-item">✈️ ${escHtml(p.tg)}</span>`:''}
          ${p.vk?`<span class="profile-meta-item">💙 ${escHtml(p.vk)}</span>`:''}
        </div>
        <div class="profile-stats-row">
          <div class="profile-stat"><div class="profile-stat-num">${voted}</div><div class="profile-stat-lbl">${tx('statVotes')}</div></div>
          <div class="profile-stat"><div class="profile-stat-num">${numColls}</div><div class="profile-stat-lbl">${tx('statColls')}</div></div>
          <div class="profile-stat"><div class="profile-stat-num">${viewHistory.length}</div><div class="profile-stat-lbl">${tx('statViewed')}</div></div>
        </div>
        <button class="edit-profile-btn" onclick="openEditProfile()">${tx('editProfileBtn')}</button>
      </div>
    </div>
    ${viewHistory.length?`
    <div class="profile-section">
      <div class="profile-section-title">${tx('viewHistoryTitle')}</div>
      <div class="rv-scroll">
        ${viewHistory.slice().reverse().map(id=>{const a=getApp(id);return a?`<div class="rv-chip" onclick="openApp(${id})">${escHtml(a.name)}</div>`:''}).join('')}
      </div>
      <button onclick="clearHistory()" style="margin-top:8px;padding:6px 14px;border-radius:8px;border:1px solid var(--lightG);background:var(--offW);cursor:pointer;font-size:12px;font-weight:700;color:var(--textM);font-family:inherit">${tx('clearHistoryBtn')}</button>
    </div>`:''}
    ${numColls?`
    <div class="profile-section">
      <div class="profile-section-title">${tx('myCollectionsTitle')}</div>
      ${collections.map((c,i)=>`
        <div class="coll-card" style="margin-top:10px">
          <div class="coll-name">${escHtml(c.name)}</div>
          ${c.desc?`<div class="coll-desc">${escHtml(c.desc)}</div>`:''}
          <div class="coll-meta">
            <span>${c.apps.length} ${tx('appsWord')}</span>
            <span class="coll-badge ${c.public?'public':'private'}">${c.public?tx('publicBadge'):tx('privateBadge')}</span>
          </div>
        </div>`).join('')}
    </div>`:''}
    <div class="profile-section">
      <div class="profile-section-title">${tx('settingsSection')}</div>
      <div style="font-size:13px;font-weight:800;color:var(--textM);margin-bottom:8px">🎨 ${tx('themeTitle')}</div>
      <div style="display:flex;gap:8px;margin-bottom:14px">
        <button class="theme-opt-btn${theme==='light'?' active':''}" onclick="setTheme('light')">${tx('themeLight')}</button>
        <button class="theme-opt-btn${theme==='dark'?' active':''}"  onclick="setTheme('dark')">${tx('themeDark')}</button>
        <button class="theme-opt-btn${theme==='system'?' active':''}" onclick="setTheme('system')">${tx('themeAuto')}</button>
      </div>
      <button class="primary-btn secondary" onclick="doLogout()" style="max-width:280px">${tx('logoutBtn')}</button>
    </div>`;
}

function clearHistory(){
  viewHistory=[];
  api('save_history', {history:[]});
  renderProfilePage();
  renderRecentlyViewed();
}

function addToHistory(appId){
  if(!currentUser) return;
  viewHistory = [appId, ...viewHistory.filter(id=>id!==appId)].slice(0,20);
  api('save_history', {history:viewHistory});
  renderRecentlyViewed();
}


/* ============================================================
   AVATAR UPLOAD
   ============================================================ */
function triggerAvatarUpload(){
  el('avatar-file-input').click();
}

async function handleAvatarFile(input){
  const file = input.files[0];
  if(!file) return;
  if(!file.type.startsWith('image/')) { showToast(tx('toastSelectImage')); return; }
  if(file.size > 3*1024*1024) { showToast(tx('toastFileTooBig')); return; }

  // Кропаем в квадрат и сжимаем через canvas
  const img = new Image();
  const url = URL.createObjectURL(file);
  img.onload = async () => {
    const canvas = document.createElement('canvas');
    const SIZE = 256;
    canvas.width = canvas.height = SIZE;
    const ctx = canvas.getContext('2d');
    // Квадратный кроп по центру
    const side = Math.min(img.width, img.height);
    const sx = (img.width - side) / 2;
    const sy = (img.height - side) / 2;
    ctx.drawImage(img, sx, sy, side, side, 0, 0, SIZE, SIZE);
    URL.revokeObjectURL(url);

    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    showToast(tx('toastUploadingPhoto'));

    const r = await api('upload_avatar', {dataUrl});
    if(!r.ok){ showToast(tx('toastUploadErr') + (r.error?(': '+r.error):'')); return; }

    userProfile.avatarUrl = r.avatarUrl;

    // Обновляем превью в модале
    const prev = el('edit-avatar-preview');
    if(prev){
      prev.innerHTML=`<img src="${r.avatarUrl}?t=${Date.now()}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
      prev.style.background='#ddd'; prev.style.padding='0'; prev.style.overflow='hidden';
    }
    updateNavUser();
    renderProfilePage();
    showToast(tx('toastPhotoUpdated'));
  };
  img.src = url;
}

/* ============================================================
   EDIT PROFILE MODAL
   ============================================================ */
function openEditProfile(){
  if(!currentUser) return;
  const p=getUserProfile(currentUser);
  el('ep-displayname').value = p.displayName||currentUser;
  el('ep-bio').value         = p.bio||'';
  el('ep-university').value  = p.university||'';
  el('ep-faculty').value     = p.faculty||'';
  el('ep-specialty').value   = p.specialty||'';
  el('ep-course').value      = p.course||'';
  el('ep-city').value        = p.city||'';
  el('ep-tg').value          = p.tg||'';
  el('ep-vk').value          = p.vk||'';
  // Avatar color picker
  const row=el('avatar-color-row');
  row.innerHTML=AVATAR_COLORS.map(c=>`
    <div class="avatar-color-swatch${p.avatarColor===c?' selected':''}"
      style="background:${c}"
      onclick="selectAvatarColor('${c}')"></div>`).join('');
  // Avatar preview
  const prev=el('edit-avatar-preview');
  if(userProfile.avatarUrl){
    prev.innerHTML=`<img src="${userProfile.avatarUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
    prev.style.background='#ddd';
    prev.style.padding='0';
    prev.style.overflow='hidden';
    prev.textContent='';
  } else {
    prev.textContent=(p.displayName||currentUser)[0].toUpperCase();
    prev.style.background=p.avatarColor||getAvatarColor(currentUser);
    prev.innerHTML='';
  }
  // Theme opts
  ['ep-theme-light','ep-theme-dark','ep-theme-sys'].forEach(id=>el(id)&&el(id).classList.remove('active'));
  const tmap={'light':'ep-theme-light','dark':'ep-theme-dark','system':'ep-theme-sys'};
  if(el(tmap[theme])) el(tmap[theme]).classList.add('active');
  el('edit-profile-modal').classList.remove('hidden');
}
function closeEditProfileOverlay(e){ if(e.target===el('edit-profile-modal')) el('edit-profile-modal').classList.add('hidden'); }

function selectAvatarColor(color){
  document.querySelectorAll('.avatar-color-swatch').forEach(s=>s.classList.remove('selected'));
  event.target.classList.add('selected');
  el('edit-avatar-preview').style.background=color;
}

async function saveProfile(){
  if(!currentUser) return;
  const selectedSwatch=document.querySelector('.avatar-color-swatch.selected');
  const data = {
    displayName: el('ep-displayname').value.trim()||currentUser,
    avatarUrl: userProfile.avatarUrl||'',
    bio:        el('ep-bio').value.trim(),
    university: el('ep-university').value.trim(),
    faculty:    el('ep-faculty').value.trim(),
    specialty:  el('ep-specialty').value.trim(),
    course:     el('ep-course').value.trim(),
    city:       el('ep-city').value.trim(),
    tg:         el('ep-tg').value.trim(),
    vk:         el('ep-vk').value.trim(),
    avatarColor: selectedSwatch ? selectedSwatch.style.background : getAvatarColor(currentUser),
    theme,
  };
  const r = await api('save_profile', data);
  if(!r.ok){ showToast(tx('toastSaveErr')); return; }
  Object.assign(userProfile, data);
  el('edit-profile-modal').classList.add('hidden');
  updateNavUser();
  renderProfilePage();
  showToast(tx('toastProfileSaved'));
}

/* ============================================================
   CATALOG
   ============================================================ */
function updateSuggestCatOptions(){
  const sel=el('sug-cat'); if(!sel) return;
  const cats=tx('cats').slice(1), vals=tx('catVals').slice(1);
  sel.innerHTML=cats.map((c,i)=>`<option value="${vals[i]}">${escHtml(c)}</option>`).join('');
}

function renderCats(){
  const row=el('cat-row'); if(!row) return;
  const cats=tx('cats'), vals=tx('catVals');
  const usedCats=new Set(apps.map(a=>a.category));
  row.innerHTML=cats.map((c,i)=>{
    if(i>0 && !usedCats.has(vals[i])) return '';
    return `<button class="cat-btn${activeCategory===vals[i]?' active':''}" onclick="setCat('${vals[i]}')">${escHtml(c)}</button>`;
  }).join('');
}
function setCat(val){ activeCategory=val; renderCats(); renderApps(); }

function renderTagFilter(){
  const row=el('tag-filter-row'); if(!row) return;
  const allTags=[...new Set(apps.flatMap(a=>a.tags||[]))].sort();
  row.innerHTML=allTags.map(t=>
    `<button class="tag-pill${activeTag===t?' active':''}" onclick="setActiveTag('${t}')">${escHtml(t)}</button>`
  ).join('');
}
function setActiveTag(t){ activeTag=activeTag===t?null:t; renderTagFilter(); renderApps(); }

function renderRecentlyViewed(){
  const block=el('recently-viewed-block'); if(!block) return;
  if(!viewHistory.length){ block.innerHTML=''; return; }
  block.innerHTML=`
    <div class="recently-viewed">
      <div class="recently-viewed-title">${tx('recentlyViewed')}</div>
      <div class="rv-scroll">
        ${viewHistory.slice(0,10).map(id=>{const a=getApp(id);return a?`<div class="rv-chip" onclick="openApp(${id})">${escHtml(a.name)}</div>`:''}).join('')}
      </div>
    </div>`;
}

function renderApps(){
  const search=(el('search-input')||{}).value ? el('search-input').value.toLowerCase() : '';
  const sortVal=(el('sort-select')||{}).value || 'votes';
  let filtered=apps.filter(a=>{
    const catOk = activeCategory==='all' || a.category===activeCategory;
    const tagOk = !activeTag || (a.tags && a.tags.includes(activeTag));
    const srchOk= !search || a.name.toLowerCase().includes(search) || (a.desc&&(a.desc[lang]||a.desc.en||'')).toLowerCase().includes(search);
    return catOk && tagOk && srchOk;
  });
  if(sortVal==='votes') filtered=[...filtered].sort((a,b)=>b.votes-a.votes);
  else if(sortVal==='new') filtered=[...filtered].sort((a,b)=>b.id-a.id);
  else if(sortVal==='alpha') filtered=[...filtered].sort((a,b)=>a.name.localeCompare(b.name));
  const list=el('apps-list'); if(!list) return;
  if(!filtered.length){ list.innerHTML=`<p class="empty-msg">${tx('noAppsFound')}</p>`; return; }
  list.innerHTML=filtered.map(a=>{
    const voted=votedIds.includes(a.id);
    const firstC=a.comments.find(c=>c.status==='active');
    const tagsHtml=(a.tags&&a.tags.length)?`<div class="app-tags">${a.tags.map(t=>`<span class="app-tag-chip">${escHtml(t)}</span>`).join('')}</div>`:'';
    const altsHtml=a.alts.length?`<div class="alt-row">🔗 ${tx('alts')}${a.alts.map(t=>`<span class="alt-link">${escHtml(t)}</span>`).join('')}</div>`:'';
    const comHtml=firstC?`<div class="comment-preview"><b>${escHtml(firstC.user)}:</b> ${escHtml(firstC.text)}</div>`:'';
    const guestLock=!currentUser?`<div class="app-card-guest-lock" onclick="event.stopPropagation();openAuthModal('login')">${tx('guestLockText')}</div>`:'';
    const modDelBtn=isModerator()?`<button class="app-card-del-btn" onclick="event.stopPropagation();deleteAppCard(${a.id})" title="${tx('deleteAppTooltip')}">🗑</button>`:'';
    const modEditBtn=isModerator()?`<button class="app-card-edit-btn" onclick="event.stopPropagation();openEditAppModal(getApp(${a.id}))" title="${tx('editAppTooltip')}">✏️</button>`:'';
    return `
    <div class="app-card${!currentUser?' app-card-locked':''}${isModerator()?' app-card-modbtns':''}" onclick="openApp(${a.id})">
      ${guestLock}
      ${modDelBtn}
      ${modEditBtn}
      <div class="app-header">
        <div class="app-name">${escHtml(a.name)}</div>
        <span class="cat-tag">${escHtml(a.category)}</span>
      </div>
      <div class="app-desc">${escHtml(a.desc ? (a.desc[lang]||a.desc.en||'') : (a.description||''))}</div>
      ${tagsHtml}
      <div class="vote-row" onclick="event.stopPropagation()">
        <button class="vote-btn${voted?' voted':''}" onclick="doVote(${a.id})">🔥 ${voted?tx('voted'):tx('vote')}</button>
        <span class="vote-count" id="vc-${a.id}">${a.votes} ${tx('votes')}</span>
      </div>
      ${altsHtml}${comHtml}
    </div>`;
  }).join('');
}

// ── Удаление карточки из каталога (только для модератора/админа) ──
// Кнопка видна только модераторам, но реальная проверка прав происходит
// на сервере (requireModerator в api.php) — подделать роль на клиенте нельзя.
async function deleteAppCard(id){
  if(!isModerator()) return;
  if(!confirm(tx('confirmDeleteApp'))) return;
  const r = await api('delete_app', {appId:id});
  if(!r.ok){ showToast('❌ ' + (r.error||tx('toastGenericErr'))); return; }
  apps = apps.filter(a=>a.id!==id);
  if(selectedAppId===id){ el('app-modal').classList.add('hidden'); selectedAppId=null; }
  renderApps(); renderRankings(); renderTagFilter(); renderDiscussions();
  showToast(tx('toastAppDeleted'));
}

// ── Редактирование карточки каталога (только для модератора/админа) ──
// Работает как для карточек, уже показанных в каталоге (встроенных или
// одобренных пользовательских — `app` в этом случае берётся прямо из apps[]
// со сложившимся id-конвенцией смещения), так и для заявок из очереди
// модерации (fromQueue=true — тогда id смещается здесь же перед отправкой).
function openEditAppModal(app, fromQueue=false){
  if(!isModerator() || !app) return;
  editAppContext = { clientId: fromQueue ? (SERVER_APP_ID_OFFSET + app.id) : app.id, fromQueue };
  el('edit-app-name').value = app.name || '';
  updateEditCatOptions();
  el('edit-app-cat').value = app.category || '';
  el('edit-app-desc-ru').value = (app.desc && app.desc.ru) || '';
  el('edit-app-desc-en').value = (app.desc && app.desc.en) || '';
  el('edit-app-pros-ru').value = (app.pros && app.pros.ru) || '';
  el('edit-app-pros-en').value = (app.pros && app.pros.en) || '';
  el('edit-app-cons-ru').value = (app.cons && app.cons.ru) || '';
  el('edit-app-cons-en').value = (app.cons && app.cons.en) || '';
  el('edit-app-link').value = app.link || '';
  el('edit-app-alts').value = (app.alts || []).join(', ');
  el('edit-app-tags').value = (app.tags || []).join(' ');
  el('edit-app-modal').classList.remove('hidden');
}
function closeEditAppOverlay(e){ if(e.target===el('edit-app-modal')) el('edit-app-modal').classList.add('hidden'); }
function updateEditCatOptions(){
  const sel=el('edit-app-cat'); if(!sel) return;
  const cur=sel.value;
  const cats=tx('cats').slice(1), vals=tx('catVals').slice(1);
  sel.innerHTML=cats.map((c,i)=>`<option value="${vals[i]}">${escHtml(c)}</option>`).join('');
  if(cur) sel.value=cur;
}

async function submitEditApp(){
  if(!editAppContext) return;
  const name=el('edit-app-name').value.trim();
  if(!name) return;
  const rawTags=el('edit-app-tags').value.trim();
  const tags=rawTags?rawTags.split(/\s+/).filter(t=>t.startsWith('#')):[];
  const alts=el('edit-app-alts').value.split(',').map(s=>s.trim()).filter(Boolean);

  const r = await api('edit_app', {
    appId: editAppContext.clientId,
    name, category: el('edit-app-cat').value,
    descRu: el('edit-app-desc-ru').value.trim(), descEn: el('edit-app-desc-en').value.trim(),
    prosRu: el('edit-app-pros-ru').value.trim(), prosEn: el('edit-app-pros-en').value.trim(),
    consRu: el('edit-app-cons-ru').value.trim(), consEn: el('edit-app-cons-en').value.trim(),
    link: el('edit-app-link').value.trim(), alts, tags,
  });
  if(!r.ok){ showToast('❌ ' + (r.error||tx('toastGenericErr'))); return; }

  const wasQueue = editAppContext.fromQueue;
  el('edit-app-modal').classList.add('hidden');
  editAppContext = null;
  showToast(tx('toastAppEdited'));

  if(wasQueue){
    // Заявка ещё на модерации — карточки в общем apps[] нет, просто
    // перезагружаем очередь, чтобы увидеть обновлённые данные.
    renderModerationPage();
    return;
  }

  // Карточка уже в каталоге (встроенная или одобренная) — обновляем на месте.
  const updated = r.app
    ? { id: SERVER_APP_ID_OFFSET + r.app.id, name:r.app.name, category:r.app.category,
        desc:r.app.desc, pros:r.app.pros, cons:r.app.cons, alts:r.app.alts||[], link:r.app.link||'#', tags:r.app.tags||[] }
    : { id: r.seedOverride.id, name:r.seedOverride.name, category:r.seedOverride.category,
        desc:r.seedOverride.desc, pros:r.seedOverride.pros, cons:r.seedOverride.cons,
        alts:r.seedOverride.alts||[], link:r.seedOverride.link||'#', tags:r.seedOverride.tags||[] };

  const idx = apps.findIndex(x=>x.id===updated.id);
  if(idx!==-1) apps[idx] = {...apps[idx], ...updated};
  renderApps(); renderRankings(); renderTagFilter(); renderDiscussions();
  if(selectedAppId===updated.id) refreshOpenAppModalLang();
}

async function doVote(id){
  if(!currentUser){ openAuthModal('login'); return; }
  // Повторное нажатие на "Голосовать" снимает ранее поставленный голос —
  // сервер сам решает, добавить или убрать appId из votedIds (action=vote),
  // и сообщает итоговое состояние в r.voted.
  const r = await api('vote', {appId:id});
  if(!r.ok){ showToast('❌ ' + (r.error||tx('toastGenericErr'))); return; }
  votedIds = r.votedIds || [];
  const app=getApp(id);
  if(app) app.votes = (typeof r.count==='number') ? r.count : app.votes + (r.voted ? 1 : -1);
  renderApps(); renderRankings();
  if(selectedAppId===id){ const mv=el('modal-votes'); if(mv) mv.textContent=app.votes; }
}

/* ============================================================
   APP MODAL
   ============================================================ */
function renderAppModalTexts(app){
  el('modal-appname').textContent=app.name;
  el('modal-link').href=app.link;
  el('modal-link').textContent=tx('official');
  el('tx-links').textContent=tx('links');
  el('tx-cat').textContent=tx('cat')+' '; el('modal-category').textContent=app.category;
  el('tx-desc').textContent=tx('desc')+' '; el('modal-desc').textContent=app.desc ? (app.desc[lang]||app.desc.en||'') : (app.description||'');
  el('tx-pc').textContent=tx('pc')+' ';
  el('modal-proscons').innerHTML=`✅ ${escHtml(prosConsText(app.pros))} | ❌ ${escHtml(prosConsText(app.cons))}`;
  el('tx-alts2').textContent=tx('alts2')+' '; el('modal-alts').textContent=app.alts.join(', ');
  el('tx-sub2').textContent=tx('sub2')+' '; el('modal-submittedby').textContent=app.submittedBy;
  el('tx-votesLabel').textContent=tx('votesLabel'); el('modal-votes').textContent=app.votes;
  el('tx-commentsLabel').textContent=tx('commentsLabel'); el('tx-close').textContent=tx('close');
  const tr=el('modal-tags-row');
  tr.innerHTML=(app.tags&&app.tags.length)?`<div class="app-tags">${app.tags.map(t=>`<span class="app-tag-chip">${escHtml(t)}</span>`).join('')}</div>`:'';
  const delBtn=el('modal-mod-delete-btn');
  if(delBtn) delBtn.classList.toggle('hidden', !isModerator());
  const editBtn=el('modal-mod-edit-btn');
  if(editBtn) editBtn.classList.toggle('hidden', !isModerator());
}

function openApp(id){
  if(!currentUser){ openAuthModal('login'); showToast(tx('toastLoginToOpen')); return; }
  const app=getApp(id); if(!app) return;
  selectedAppId=id;
  addToHistory(id);
  renderAppModalTexts(app);
  renderModalComments(app);
  el('app-modal').classList.remove('hidden');
}

function refreshOpenAppModalLang(){
  const modal=el('app-modal');
  if(!modal || modal.classList.contains('hidden') || !selectedAppId) return;
  const app=getApp(selectedAppId); if(!app) return;
  renderAppModalTexts(app);
  renderModalComments(app);
}

function renderModalComments(app){
  const sortVal=(el('comment-sort')||{}).value||'new';
  let comments=[...app.comments];
  if(sortVal==='old') comments.reverse();
  else if(sortVal==='likes') comments=[...comments].sort((a,b)=>b.likes-a.likes);
  const modView=isModerator();

  el('modal-comments').innerHTML=comments.map((c)=>{
    const pending = c.status==='pending_review';
    const blocked = c.status==='blocked';
    const itemCls = pending ? 'comment-item comment-item-pending'
                   : blocked ? 'comment-item comment-item-blocked' : 'comment-item';
    const badge = pending ? `<span class="comment-status-badge badge-pending">${tx('pendingReview')}</span>`
                : blocked ? `<span class="comment-status-badge badge-blocked">${tx('blockedBadge')}</span>` : '';
    const ownNotice = (c.mine && pending && !modView) ? `<div class="comment-own-notice">${tx('hiddenUntilReview')}</div>` : '';

    let modBtns = '';
    if(modView){
      if(pending){
        modBtns = `<button class="mod-btn mod-btn-approve" onclick="moderateComment(${c.id},'approve')">${tx('approveBtn')}</button>
                   <button class="mod-btn mod-btn-block" onclick="moderateComment(${c.id},'block')">${tx('blockBtn')}</button>`;
      } else if(blocked){
        modBtns = `<button class="mod-btn mod-btn-approve" onclick="moderateComment(${c.id},'restore')">${tx('restoreBtn')}</button>
                   <button class="mod-btn mod-btn-delete" onclick="moderateComment(${c.id},'delete')">${tx('deleteBtn')}</button>`;
      } else {
        modBtns = `<button class="mod-btn mod-btn-block" onclick="moderateComment(${c.id},'block')">${tx('blockBtn')}</button>
                   <button class="mod-btn mod-btn-delete" onclick="moderateComment(${c.id},'delete')">${tx('deleteBtn')}</button>`;
      }
    } else if(c.mine){
      // Автор комментария (не модератор) может редактировать и удалять только свой комментарий.
      modBtns = `<button class="mod-btn mod-btn-edit" onclick="startEditComment(${c.id})">${tx('editBtn')}</button>
                 <button class="mod-btn mod-btn-delete" onclick="deleteOwnComment(${c.id})">${tx('deleteBtn')}</button>`;
    }

    if(editingCommentId === c.id){
      return `
      <div class="${itemCls}">
        <div class="comment-edit-row">
          <textarea class="f-textarea comment-edit-field" id="edit-comment-${c.id}" style="margin-bottom:6px">${escHtml(c.text)}</textarea>
          <div class="comment-meta">
            <button class="mod-btn mod-btn-approve" onclick="saveEditComment(${c.id})">${tx('saveBtn')}</button>
            <button class="mod-btn mod-btn-block" onclick="cancelEditComment()">${tx('cancel')}</button>
          </div>
        </div>
      </div>`;
    }

    return `
    <div class="${itemCls}">
      <div class="comment-text">${escHtml(c.text)}${badge}</div>
      <div class="comment-meta">
        <span class="comment-author">@${escHtml(c.user)}</span>
        <span class="comment-date">${c.date||''}</span>
        <button class="like-btn" onclick="likeComment(${c.id})">👍 ${c.likes||0}</button>
        <button class="dislike-btn" onclick="dislikeComment(${c.id})">👎 ${c.dislikes||0}</button>
        ${modBtns}
      </div>
      ${ownNotice}
    </div>`;
  }).join('');

  const ia=el('comment-input-area');
  if(currentUser){
    ia.innerHTML=`<div class="comment-input-row">
      <input class="comment-field" id="comment-text" placeholder="${escHtml(tx('writeComment'))}" onkeydown="if(event.key==='Enter')submitComment()">
      <button class="send-btn" onclick="submitComment()">${tx('send')}</button>
    </div>`;
  } else {
    ia.innerHTML=`<div style="font-size:12px;color:var(--textL);margin-top:6px">${tx('loginToComment')}</div>`;
  }
}

function resortComments(){ if(selectedAppId){ const a=getApp(selectedAppId); if(a) renderModalComments(a); } }

async function likeComment(commentId){ await reactComment(commentId,'like'); }
async function dislikeComment(commentId){ await reactComment(commentId,'dislike'); }

async function reactComment(commentId, reaction){
  if(!currentUser){ openAuthModal('login'); return; }
  const r = await api('react_comment', {commentId, reaction});
  if(!r.ok){ showToast('❌ ' + (r.error||tx('toastGenericErr'))); return; }
  // Обновляем локально, не перезапрашивая весь список
  apps.forEach(a=>{
    const c = a.comments.find(x=>x.id===commentId);
    if(c){ c.likes = r.comment.likes; c.dislikes = r.comment.dislikes; }
  });
  if(selectedAppId){ const a=getApp(selectedAppId); if(a) renderModalComments(a); }
}

async function submitComment(){
  if(!currentUser||!selectedAppId) return;
  const input=el('comment-text'); if(!input) return;
  const text=input.value.trim(); if(!text) return;
  input.value='';

  const r = await api('add_comment', {appId:selectedAppId, text});
  if(!r.ok){ showToast('❌ ' + (r.error||tx('toastGenericErr'))); return; }

  if(r.flagged){
    showToast(tx('toastCommentPending'));
  }
  await loadAllComments();
}

// ── Автор редактирует собственный комментарий ──────────────────────────
function startEditComment(commentId){
  if(!currentUser) return;
  editingCommentId = commentId;
  if(selectedAppId){ const a=getApp(selectedAppId); if(a) renderModalComments(a); }
}
function cancelEditComment(){
  editingCommentId = null;
  if(selectedAppId){ const a=getApp(selectedAppId); if(a) renderModalComments(a); }
}
async function saveEditComment(commentId){
  const ta = el('edit-comment-'+commentId); if(!ta) return;
  const text = ta.value.trim();
  if(!text) return;
  const r = await api('edit_comment', {commentId, text});
  if(!r.ok){ showToast('❌ ' + (r.error||tx('toastGenericErr'))); return; }
  editingCommentId = null;
  showToast(r.status==='pending_review' ? tx('toastCommentPending') : tx('toastCommentEdited'));
  await loadAllComments();
}

// ── Автор удаляет собственный комментарий ─────────────────────────────
async function deleteOwnComment(commentId){
  if(!currentUser) return;
  if(!confirm(tx('confirmDeleteComment'))) return;
  const r = await api('delete_comment', {commentId});
  if(!r.ok){ showToast('❌ ' + (r.error||tx('toastGenericErr'))); return; }
  showToast(tx('toastCommentDeleted'));
  await loadAllComments(); // комментарий пропадёт из карточки и из "Обсуждений"
}

// ── Модерация: применить действие к комментарию ─────────────────────
async function moderateComment(commentId, action){
  if(!isModerator()) return;
  const r = await api('moderate_comment', {commentId, moderationAction:action});
  if(!r.ok){ showToast('❌ ' + (r.error||tx('toastGenericErr'))); return; }
  const labels = {approve:tx('modLabelApproved'), block:tx('modLabelBlocked'), delete:tx('modLabelDeleted'), restore:tx('modLabelRestored')};
  showToast(labels[action] || tx('toastDone'));
  await loadAllComments();
}
function closeModal(){ el('app-modal').classList.add('hidden'); selectedAppId=null; }
function closeAppModalOverlay(e){ if(e.target===el('app-modal')) closeModal(); }

/* ============================================================
   SUGGEST
   ============================================================ */
function openSuggest(){ if(!currentUser){ openAuthModal('login'); return; } el('suggest-modal').classList.remove('hidden'); }
function closeSuggestOverlay(e){ if(e.target===el('suggest-modal')) el('suggest-modal').classList.add('hidden'); }
async function submitSuggest(){
  const name=el('sug-name').value.trim(), desc=el('sug-desc').value.trim();
  if(!name||!desc) return;
  const rawTags=el('sug-tags').value.trim();
  const tags=rawTags?rawTags.split(/\s+/).filter(t=>t.startsWith('#')):[];
  const alts=el('sug-alts').value.split(',').map(s=>s.trim()).filter(Boolean);

  // Заявка уходит на сервер в очередь модерации — в каталог она попадёт
  // только после того, как модератор её одобрит. Перевод на второй язык
  // сервер сделает автоматически, вводить его вручную не нужно.
  const r = await api('suggest_app', {
    name, category:el('sug-cat').value, desc,
    pros:el('sug-pros').value.trim(), cons:el('sug-cons').value.trim(),
    alts, link:el('sug-link').value.trim(), tags,
  });
  if(!r.ok){ showToast(r.error || tx('toastGenericErr')); return; }

  el('suggest-modal').classList.add('hidden');
  ['sug-name','sug-desc','sug-alts','sug-pros','sug-cons','sug-link','sug-tags'].forEach(id=>{ const e=el(id); if(e) e.value=''; });
  showToast(tx('toastAppSubmitted'));
}

/* ============================================================
   DISCUSSIONS
   ============================================================ */
function renderDiscussions(){
  const list=el('discussions-list'); if(!list) return;
  const all=apps.flatMap(a=>a.comments.filter(c=>c.status==='active').map(c=>({...c,appName:a.name,date:c.date||'09.04.2026'})));
  if(!all.length){ list.innerHTML=`<p class="empty-msg">${tx('noDiscussions')}</p>`; return; }
  list.innerHTML=all.map(d=>`
    <div class="discuss-card">
      <div class="discuss-user"><span style="color:var(--textM)">${escHtml(d.user)}</span> <span class="in">${tx('inWord')}</span> <span class="app-link">${escHtml(d.appName)}</span></div>
      <div class="discuss-text">${escHtml(d.text)}</div>
      <div class="discuss-date">${d.date}</div>
    </div>`).join('');
}

/* ============================================================
   MODERATION QUEUE PAGE (admin / moderator only)
   ============================================================ */
async function renderModerationPage(){
  const list=el('moderation-list'); if(!list) return;
  if(!isModerator()){ list.innerHTML=`<p class="empty-msg">${tx('modAccessDenied')}</p>`; return; }

  list.innerHTML=`<p class="empty-msg">${tx('loadingText')}</p>`;
  const [appsRes, commentsRes] = await Promise.all([
    api('app_moderation_queue'),
    api('moderation_queue'),
  ]);

  if(!appsRes.ok && !commentsRes.ok){ list.innerHTML=`<p class="empty-msg">${tx('loadError')}</p>`; return; }

  const appItems     = appsRes.ok     ? (appsRes.apps || [])         : [];
  const commentItems = commentsRes.ok ? (commentsRes.comments || []) : [];
  moderationQueueApps = appItems; // сохраняем для кнопки "Редактировать" (openEditAppFromQueue)

  const appsHtml = `
    <div class="section-box-title" style="margin-top:4px">🧩 ${tx('appQueueTitle')}</div>
    ${appItems.length ? appItems.map(a=>`
      <div class="discuss-card">
        <div class="discuss-user">
          <span style="color:var(--textM)">${escHtml(a.name)}</span>
          <span class="in">${tx('inWord')}</span>
          <span class="app-link">${escHtml(a.category)}</span>
        </div>
        <div class="discuss-text">${escHtml(a.desc[lang]||a.desc.ru||'')}</div>
        <div class="discuss-date">${tx('sub2')}: @${escHtml(a.submittedBy)} · ${a.createdAt}</div>
        <div style="margin-top:8px;display:flex;gap:8px">
          <button class="mod-btn mod-btn-approve" onclick="moderateAppFromQueue(${a.id},'approve')">${tx('approveBtn')}</button>
          <button class="mod-btn mod-btn-edit" onclick="openEditAppFromQueue(${a.id})">${tx('editBtn')}</button>
          <button class="mod-btn mod-btn-delete" onclick="moderateAppFromQueue(${a.id},'reject')">${tx('rejectBtn')}</button>
        </div>
      </div>`).join('') : `<p class="empty-msg">${tx('noPendingApps')}</p>`}
  `;

  const appNameById = Object.fromEntries(apps.map(a=>[a.id,a.name]));
  const commentsHtml = `
    <div class="section-box-title" style="margin-top:22px">💬 ${tx('commentQueueTitle')}</div>
    ${commentItems.length ? commentItems.map(c=>`
      <div class="discuss-card">
        <div class="discuss-user">
          <span style="color:var(--textM)">@${escHtml(c.user)}</span>
          <span class="in">${tx('inWord')}</span>
          <span class="app-link">${escHtml(appNameById[c.appId]||('#'+c.appId))}</span>
          <span class="comment-status-badge badge-pending">${tx('autofilterBadge')}</span>
        </div>
        <div class="discuss-text">${escHtml(c.text)}</div>
        <div class="discuss-date">${c.date}</div>
        <div style="margin-top:8px;display:flex;gap:8px">
          <button class="mod-btn mod-btn-approve" onclick="moderateFromQueue(${c.id},'approve')">${tx('approveBtn')}</button>
          <button class="mod-btn mod-btn-block" onclick="moderateFromQueue(${c.id},'block')">${tx('blockBtn')}</button>
        </div>
      </div>`).join('') : `<p class="empty-msg">${tx('noPendingComments')}</p>`}
  `;

  list.innerHTML = appsHtml + commentsHtml;
}

async function moderateFromQueue(commentId, action){
  await moderateComment(commentId, action);
  renderModerationPage();
}

// ── Открыть заявку из очереди модерации в модалке редактирования ────────
function openEditAppFromQueue(appId){
  const item = moderationQueueApps.find(x=>x.id===appId);
  if(item) openEditAppModal(item, true);
}

// ── Решение по заявке на приложение: approve (в каталог) | reject (удалить) ──
async function moderateAppFromQueue(appId, action){
  if(!isModerator()) return;
  const r = await api('moderate_app', {appId, moderationAction:action});
  if(!r.ok){ showToast(r.error || tx('toastGenericErr')); return; }

  if(action === 'approve' && r.app){
    const a = r.app;
    apps.push({
      id: SERVER_APP_ID_OFFSET + a.id, name:a.name, category:a.category,
      desc:a.desc, votes:0,
      pros:a.pros, cons:a.cons, alts:a.alts || [],
      submittedBy:a.submittedBy, link:a.link || '#',
      tags:a.tags || [], comments:[],
    });
    renderApps(); renderRankings(); renderTagFilter();
    showToast(tx('toastAppApproved'));
  } else {
    showToast(tx('toastAppRejected'));
  }
  renderModerationPage();
}

/* ============================================================
   RANKINGS
   ============================================================ */
function renderRankings(){
  const el2=el('rank-list'); if(!el2) return;
  el2.innerHTML=[...apps].sort((a,b)=>b.votes-a.votes).map((a,i)=>`
    <div class="rank-row">
      <div><div class="rank-name">${i+1}. ${escHtml(a.name)}</div><div class="rank-cat">${escHtml(a.category)}</div></div>
      <div class="rank-votes">🔥 ${a.votes}</div>
    </div>`).join('');
}

/* ============================================================
   COLLECTIONS
   ============================================================ */
async function renderCollections(){
  const list=el('collections-list'); if(!list) return;
  list.innerHTML=`<p class="empty-msg">${tx('dataLoading')}</p>`;
  const r = await api('public_collections');
  const all = r.ok ? r.collections : [];
  // Добавим приватные текущего пользователя, которых нет в публичных
  if(currentUser){
    collections.filter(c=>!c.public).forEach(c=>{ all.push({...c, owner:currentUser}); });
  }
  if(!all.length){ list.innerHTML=`<p class="empty-msg">${tx('noCollectionsYet')}</p>`; return; }
  list.innerHTML=all.map(c=>{
    const isOwn = currentUser && c.owner===currentUser;
    return `
    <div class="coll-card">
      <div class="app-header"><div class="coll-name">${escHtml(c.name)}</div><span class="coll-badge ${c.public?'public':'private'}">${c.public?'🌐':'🔒'}</span></div>
      ${c.desc?`<div class="coll-desc">${escHtml(c.desc)}</div>`:''}
      <div class="coll-meta"><span>@${escHtml(c.owner)}</span><span>${c.apps.length} ${tx('appsWord')}</span></div>
      ${isOwn?`<button class="mod-btn mod-btn-delete" style="margin-top:10px" onclick="event.stopPropagation();deleteCollection(${c.id})">${tx('deleteCollBtn')}</button>`:''}
    </div>`;
  }).join('');
}
async function deleteCollection(id){
  if(!confirm(tx('confirmDeleteColl'))) return;
  collections = collections.filter(c=>c.id!==id);
  await api('save_collections', {collections});
  renderCollections();
  renderProfilePage();
  showToast(tx('toastCollDeleted'));
}
function openCreateCollection(){ if(!currentUser){ openAuthModal('login'); return; } el('create-coll-modal').classList.remove('hidden'); }
function closeCreateCollOverlay(e){ if(e.target===el('create-coll-modal')) el('create-coll-modal').classList.add('hidden'); }
async function submitCreateCollection(){
  const name=el('coll-name').value.trim(); if(!name) return;
  const newC={id:Date.now(),name,desc:el('coll-desc').value.trim(),public:el('coll-public').checked,apps:[]};
  collections.push(newC);
  await api('save_collections', {collections});
  el('create-coll-modal').classList.add('hidden');
  ['coll-name','coll-desc'].forEach(id=>{ const e=el(id); if(e) e.value=''; });
  renderCollections();
  showToast(tx('toastCollCreated'));
}
function openAddToCollection(){
  if(!currentUser){ openAuthModal('login'); return; }
  const div=el('add-coll-list');
  if(!collections.length){ div.innerHTML=`<p class="empty-msg" style="margin:0">${tx('noAccessColl')} <a href="#" onclick="openCreateCollection()" style="color:var(--blue)">${tx('createBtn')}</a></p>`; }
  else { div.innerHTML=collections.map((c,i)=>`
    <div class="coll-card" style="margin-top:8px" onclick="addAppToCollection(${i})">
      <div class="coll-name">${escHtml(c.name)}</div>
      <div class="coll-meta">${c.apps.length} ${tx('appsWord')}</div>
    </div>`).join(''); }
  el('add-coll-modal').classList.remove('hidden');
}
function closeAddCollOverlay(e){ if(e.target===el('add-coll-modal')) el('add-coll-modal').classList.add('hidden'); }
async function addAppToCollection(idx){
  if(selectedAppId===null) return;
  if(!collections[idx].apps.includes(selectedAppId)) collections[idx].apps.push(selectedAppId);
  await api('save_collections', {collections});
  el('add-coll-modal').classList.add('hidden');
  showToast(tx('toastAddedToColl'));
}

/* ============================================================
   INIT
   ============================================================ */
applyTheme();
loadState().then(() => {
  checkOAuthRedirectResult(); // проверяем OAuth redirect после инициализации
  checkPasswordResetLink();   // проверяем переход по ссылке восстановления пароля
});
