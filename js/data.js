// Контент сайта. Каждое текстовое поле — { ru, kz, en }.
// Тексты услуг и номера взяты с действующего keremet.kaznu.kz.

window.KEREMET = {
  phone: { display: '+7 (727) 377-33-33', tel: '+77273773333' },
  directorPhones: ['+7 (727) 221-14-10', '+7 (727) 221-14-11'],
  email: 'keremet@mail.kz',
  address: {
    ru: 'Алматы, пр. аль-Фараби, 71/21',
    kz: 'Алматы, әл-Фараби даңғылы, 71/21',
    en: '71/21 al-Farabi Ave, Almaty'
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=%D0%9A%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D1%82+%D0%9A%D0%B0%D0%B7%D0%9D%D0%A3+%D0%B0%D0%BB%D1%8C-%D0%A4%D0%B0%D1%80%D0%B0%D0%B1%D0%B8+71',
  oldSite: 'https://keremet.kaznu.kz',
  // Онлайн-заявки подаются в личном кабинете студента.
  portal: 'https://univer.kaznu.kz/',

  categories: [
    {
      id: 'study',
      icon: 'book',
      title: { ru: 'Учебный процесс', kz: 'Оқу үдерісі', en: 'Academic affairs' },
      summary: {
        ru: 'Регистрация на дисциплины, транскрипты, справки, переводы, стипендия, воинский учёт.',
        kz: 'Пәндерге тіркелу, транскрипттер, анықтамалар, ауысу, стипендия, әскери есеп.',
        en: 'Course registration, transcripts, certificates, transfers, scholarships, military registration.'
      },
      offices: [
        {
          name: { ru: 'Офис-регистратор', kz: 'Офис-тіркеуші', en: 'Registrar’s Office' },
          about: {
            ru: 'Ведёт историю учебных достижений, организует контроль знаний и считает академический рейтинг.',
            kz: 'Оқу жетістіктерінің тарихын жүргізеді, білімді бақылауды ұйымдастырады және академиялық рейтингті есептейді.',
            en: 'Keeps your full academic record, runs assessments and calculates your academic rating.'
          },
          services: {
            ru: ['Регистрация и перерегистрация на дисциплины', 'Восстановление и выдача транскриптов', 'Перезачёт дисциплин и кредитов', 'Повышение GPA', 'Ликвидация академической задолженности', 'Дополнительное обучение'],
            kz: ['Пәндерге тіркелу және қайта тіркелу', 'Транскриптті қалпына келтіру және беру', 'Пәндер мен кредиттерді қайта есепке алу', 'GPA көтеру', 'Академиялық берешекті жою', 'Қосымша оқу'],
            en: ['Course registration and re-registration', 'Transcript issue and recovery', 'Credit transfer', 'GPA improvement', 'Retaking failed courses', 'Additional study']
          },
          ext: ['14-30'],
          keywords: 'транскрипт gpa рейтинг задолженность пересдача регистрация дисциплины кредит transcript retake grades тіркеуші берешек қайта тапсыру'
        },
        {
          name: { ru: 'Офис студента', kz: 'Студент офисі', en: 'Student Office' },
          about: {
            ru: 'Учёт и движение контингента: переводы, восстановление, архивные справки, приказы.',
            kz: 'Білім алушылар контингентінің есебі мен қозғалысы: ауысу, қайта қабылдау, мұрағаттық анықтамалар, бұйрықтар.',
            en: 'Student records: transfers, reinstatement, archive certificates and university orders.'
          },
          services: {
            ru: ['Перевод и восстановление', 'Архивные справки', 'Дубликаты дипломов', 'Академический отпуск: уход, продление, возврат', 'Выдача оригиналов и копий документов', 'Отчисление по собственному желанию'],
            kz: ['Ауысу және қайта қабылдау', 'Мұрағаттық анықтамалар', 'Диплом телнұсқаларын беру', 'Академиялық демалыс: шығу, ұзарту, оралу', 'Құжаттардың түпнұсқасы мен көшірмесін беру', 'Өз еркімен оқудан шығу'],
            en: ['Transfers and reinstatement', 'Archive certificates', 'Duplicate diplomas', 'Academic leave: start, extend, return', 'Originals and copies of documents', 'Voluntary withdrawal']
          },
          ext: ['14-40', '14-41', '14-42', '16-24', '18-34'],
          keywords: 'академический отпуск академ справка перевод восстановление отчисление диплом дубликат документы оригинал leave transfer withdrawal демалыс ауысу анықтама құжат'
        },
        {
          name: { ru: 'Паспортный стол', kz: 'Паспорт үстелі', en: 'Residence Registration Desk' },
          about: {
            ru: 'Временная регистрация студентов по месту жительства.',
            kz: 'Студенттерді тұрғылықты жері бойынша уақытша тіркеу.',
            en: 'Temporary residence registration for students.'
          },
          services: {
            ru: ['Временная регистрация по месту жительства', 'Снятие с временной регистрации'],
            kz: ['Тұрғылықты жері бойынша уақытша тіркеу', 'Уақытша тіркеуден шығару'],
            en: ['Temporary residence registration', 'Deregistration']
          },
          ext: ['14-43'],
          keywords: 'прописка регистрация общежитие паспорт registration dorm dormitory residence жатақхана тіркеу'
        },
        {
          name: { ru: 'Международная служба', kz: 'Халықаралық қызмет', en: 'International Office' },
          about: {
            ru: 'Международные гранты и программы, визовая и миграционная поддержка.',
            kz: 'Халықаралық гранттар мен бағдарламалар, визалық және көші-қон қолдауы.',
            en: 'International grants and programs, visa and migration support.'
          },
          services: {
            ru: ['Консультации по Erasmus+, Newton–al-Farabi, Fulbright, DAAD', 'Документы иностранных студентов по академической мобильности', 'Визовая поддержка и регистрация иностранцев'],
            kz: ['Erasmus+, Newton–al-Farabi, Fulbright, DAAD бойынша кеңес беру', 'Академиялық ұтқырлық бойынша шетелдік студенттердің құжаттары', 'Визалық қолдау және шетелдіктерді тіркеу'],
            en: ['Advice on Erasmus+, Newton–al-Farabi, Fulbright, DAAD', 'Paperwork for incoming exchange students', 'Visa support and registration of foreign guests']
          },
          ext: ['14-48'],
          keywords: 'виза erasmus мобильность обмен за рубежом иностранец visa exchange abroad mobility шетел ұтқырлық алмасу'
        },
        {
          name: { ru: 'Бухгалтерия', kz: 'Бухгалтерия', en: 'Accounting' },
          about: {
            ru: 'Оплата за обучение и общежитие, стипендии, командировочные.',
            kz: 'Оқу және жатақхана ақысы, стипендия, іссапар шығындары.',
            en: 'Tuition and dorm payments, scholarships, travel allowances.'
          },
          services: {
            ru: ['Назначение и выплата стипендий и пособий', 'Оплата и возврат оплаты за обучение', 'Оплата и возврат оплаты за общежитие', 'Командировочные и авансовые отчёты', 'Справки о доходах'],
            kz: ['Стипендия мен жәрдемақы тағайындау және төлеу', 'Оқу ақысын төлеу және қайтару', 'Жатақхана ақысын төлеу және қайтару', 'Іссапар шығындары және аванстық есептер', 'Табыс туралы анықтама'],
            en: ['Scholarships and allowances', 'Tuition payments and refunds', 'Dorm payments and refunds', 'Travel allowances and expense reports', 'Income certificates']
          },
          ext: ['16-52', '14-47', '14-54', '14-46'],
          keywords: 'оплата деньги возврат командировка payment tuition fee refund money төлем ақша'
        },
        {
          name: { ru: 'Военно-мобилизационный отдел', kz: 'Әскери-жұмылдыру бөлімі', en: 'Military Registration Office' },
          about: {
            ru: 'Постановка на временный воинский учёт университета.',
            kz: 'Университеттің уақытша әскери есебіне қою.',
            en: 'Temporary military registration at the university.'
          },
          services: {
            ru: ['Постановка на воинский учёт', 'Снятие с воинского учёта', 'Справка-приложение № 3'],
            kz: ['Әскери есепке қою', 'Әскери есептен шығару', '№ 3 анықтама-қосымша'],
            en: ['Military registration', 'Deregistration', 'Military registration certificate (Appendix 3)']
          },
          ext: ['11-28'],
          keywords: 'военкомат воинский учет армия приписное military army әскери есеп әскерге'
        },
        {
          name: { ru: 'Офис профессионального развития и карьеры', kz: 'Кәсіби даму және мансап офисі', en: 'Professional Development and Career Office' },
          about: {
            ru: 'Помогает студентам и выпускникам найти практику, стажировку и работу.',
            kz: 'Студенттер мен түлектерге практика, тағылымдама және жұмыс табуға көмектеседі.',
            en: 'Helps students and graduates find internships, placements and jobs.'
          },
          services: {
            ru: ['Карьерные консультации', 'Стажировки, вакансии и базы практик', 'Ярмарки вакансий и встречи с работодателями', 'Отработка по государственному гранту'],
            kz: ['Мансаптық кеңес', 'Тағылымдамалар, бос жұмыс орындары және практика базалары', 'Бос жұмыс орындарының жәрмеңкесі және жұмыс берушілермен кездесу', 'Мемлекеттік грант бойынша жұмыспен өтеу'],
            en: ['Career counseling', 'Internships, vacancies and placements', 'Job fairs and employer meetings', 'Work obligation for state grant graduates']
          },
          ext: ['11-27', '12-76', '11-51'],
          keywords: 'работа практика стажировка вакансия карьера отработка грант job internship career work жұмыс практика мансап'
        },
        {
          name: { ru: 'Офис по приёму на обучение', kz: 'Оқуға қабылдау офисі', en: 'Admissions Office' },
          about: {
            ru: 'Приём абитуриентов на все уровни обучения и профориентация школьников.',
            kz: 'Талапкерлерді барлық деңгейдегі оқуға қабылдау және мектеп оқушыларына кәсіптік бағдар беру.',
            en: 'Admissions for all degree levels and career guidance for school students.'
          },
          services: {
            ru: ['Консультации по условиям приёма и обучения', 'Приём абитуриентов: бакалавриат, магистратура, докторантура', 'Профориентация для школьников'],
            kz: ['Қабылдау және оқу шарттары бойынша кеңес беру', 'Талапкерлерді қабылдау: бакалавриат, магистратура, докторантура', 'Мектеп оқушыларына кәсіптік бағдар беру'],
            en: ['Advice on admission and study conditions', 'Admissions: bachelor’s, master’s, doctoral', 'Career guidance for school students']
          },
          ext: [],
          keywords: 'поступление абитуриент приемная комиссия магистратура admission applicant apply түсу талапкер'
        },
        {
          name: { ru: 'Офис интернационализации и рекрутинга', kz: 'Интернационалдандыру және рекрутинг офисі', en: 'Internationalization and Recruitment Office' },
          about: {
            ru: 'Приём иностранных абитуриентов и консультации по условиям обучения.',
            kz: 'Шетелдік талапкерлерді қабылдау және оқу шарттары бойынша кеңес беру.',
            en: 'Admissions and advice for international applicants.'
          },
          services: {
            ru: ['Приём иностранных абитуриентов', 'Консультации по условиям приёма и обучения'],
            kz: ['Шетелдік талапкерлерді қабылдау', 'Қабылдау және оқу шарттары бойынша кеңес беру'],
            en: ['International admissions', 'Advice on admission and study conditions']
          },
          ext: ['16-50', '16-56'],
          keywords: 'иностранный абитуриент поступление international applicant admission шетелдік талапкер'
        }
      ]
    },
    {
      id: 'med',
      icon: 'cross',
      title: { ru: 'Медицина', kz: 'Медицина', en: 'Healthcare' },
      summary: {
        ru: 'Международный диагностический центр: приём врачей, скрининг, аптека.',
        kz: 'Халықаралық диагностикалық орталық: дәрігер қабылдауы, скрининг, дәріхана.',
        en: 'International diagnostic center: doctors, screening and a pharmacy.'
      },
      link: { url: 'https://smarthealth.kz/', label: { ru: 'Записаться на smarthealth.kz', kz: 'smarthealth.kz сайтында жазылу', en: 'Book on smarthealth.kz' } },
      offices: [
        {
          name: { ru: 'Диагностический центр', kz: 'Диагностикалық орталық', en: 'Diagnostic Center' },
          about: {
            ru: 'Полный спектр скрининг-обследований для студентов и преподавателей на современном оборудовании. Ежедневно, 09:00–18:00.',
            kz: 'Студенттер мен оқытушыларға заманауи жабдықпен скрининг-тексерудің толық кешені. Күн сайын, 09:00–18:00.',
            en: 'Full health screening for students and staff on modern equipment. Open daily, 9:00–18:00.'
          },
          services: {
            ru: ['Терапевт, педиатр, врач общей практики', 'Хирург, травматолог-ортопед', 'ЛОР, офтальмолог, невропатолог', 'Уролог, акушер-гинеколог', 'Гастроэнтеролог, кардиолог', 'Аптека'],
            kz: ['Терапевт, педиатр, жалпы тәжірибелік дәрігер', 'Хирург, травматолог-ортопед', 'ЛОР, офтальмолог, невропатолог', 'Уролог, акушер-гинеколог', 'Гастроэнтеролог, кардиолог', 'Дәріхана'],
            en: ['General practitioner, internist, pediatrician', 'Surgeon, orthopedic and trauma surgeon', 'ENT, ophthalmologist, neurologist', 'Urologist, obstetrician-gynecologist', 'Gastroenterologist, cardiologist', 'Pharmacy']
          },
          directPhone: '+7 (727) 221-14-44',
          ext: ['31-28', '14-14'],
          keywords: 'врач доктор больница поликлиника медсправка 086 справка здоровье аптека скрининг doctor clinic medical medicine health дәрігер емхана денсаулық'
        }
      ]
    },
    {
      id: 'psy',
      icon: 'heart',
      title: { ru: 'Психологическая поддержка и инклюзия', kz: 'Психологиялық қолдау және инклюзия', en: 'Counseling and inclusion' },
      summary: {
        ru: 'Помощь психолога и равные возможности для каждого студента.',
        kz: 'Психолог көмегі және әр студентке тең мүмкіндік.',
        en: 'Counseling and equal opportunities for every student.'
      },
      offices: [
        {
          name: { ru: 'Психологическая поддержка и инклюзия', kz: 'Психологиялық қолдау және инклюзия', en: 'Counseling and inclusion' },
          about: {
            ru: 'Психологическая поддержка и Офис равенства, разнообразия и инклюзивности: сопровождение студентов с особыми образовательными потребностями.',
            kz: 'Психологиялық қолдау және Теңдік, әртүрлілік және инклюзивтілік офисі: ерекше білім беру қажеттіліктері бар студенттерді сүйемелдеу.',
            en: 'Counseling and the Equality, Diversity and Inclusion Office: support for students with special educational needs.'
          },
          services: {
            ru: ['Консультация психолога', 'Сопровождение студентов с инвалидностью', 'Помощь в адаптации первокурсникам'],
            kz: ['Психолог кеңесі', 'Мүгедектігі бар студенттерді сүйемелдеу', 'Бірінші курс студенттерінің бейімделуіне көмек'],
            en: ['Counseling sessions', 'Support for students with disabilities', 'Help settling in for first-year students']
          },
          ext: [],
          keywords: 'психолог стресс тревога инклюзия инвалидность поддержка равенство psychologist stress anxiety disability counselor психолог қолдау'
        }
      ]
    },
    {
      id: 'youth',
      icon: 'people',
      title: { ru: 'Центр молодёжи', kz: 'Жастар орталығы', en: 'Youth center' },
      summary: {
        ru: 'Студенческие организации, материальная поддержка, мероприятия.',
        kz: 'Студенттік ұйымдар, материалдық қолдау, іс-шаралар.',
        en: 'Student organizations, financial support and events.'
      },
      offices: [
        {
          name: { ru: 'Студенческие организации', kz: 'Студенттік ұйымдар', en: 'Student organizations' },
          about: {
            ru: 'Здесь можно получить материальную поддержку, найти ответы по академической политике и участвовать в организации мероприятий.',
            kz: 'Мұнда материалдық қолдау алуға, академиялық саясат бойынша жауап табуға және іс-шараларды ұйымдастыруға қатысуға болады.',
            en: 'Get financial support, answers on academic policy, and help organize student events.'
          },
          services: {
            ru: ['Студенческий профсоюз «Сұңқар»', 'Сенат студентов', 'Высший студенческий совет общежитий', 'Научное студенческое общество', 'Студенческое бюро по Болонскому процессу', '«Жас ұрпақ»', '«Адал студент»'],
            kz: ['«Сұңқар» студенттік кәсіподағы', 'Студенттер сенаты', 'Жатақханалардың жоғары студенттік кеңесі', 'Студенттік ғылыми қоғам', 'Болон үдерісі бойынша студенттік бюро', '«Жас ұрпақ»', '«Адал студент»'],
            en: ['“Sunkar” student union', 'Student Senate', 'Dormitory Student Council', 'Student Research Society', 'Student Bologna Process Bureau', '“Zhas Urpak”', '“Adal Student”']
          },
          ext: ['14-51', '13-58'],
          keywords: 'профсоюз сенат мероприятия волонтер клуб материальная помощь union events volunteer club кәсіподақ іс-шара'
        }
      ]
    },
    {
      id: 'daily',
      icon: 'bag',
      title: { ru: 'Быт и сервисы', kz: 'Тұрмыстық қызметтер', en: 'Everyday services' },
      summary: {
        ru: 'Банк, супермаркет, прачечная, фотостудия, почтомат и ещё десяток сервисов в одном здании.',
        kz: 'Банк, супермаркет, кір жуу орны, фотостудия, пошта автоматы және тағы он шақты қызмет бір ғимаратта.',
        en: 'A bank, supermarket, laundry, photo studio, parcel locker and more in one building.'
      },
      offices: [
        {
          name: { ru: 'Сервисы в здании «Керемет»', kz: '«Керемет» ғимаратындағы қызметтер', en: 'Inside the Keremet building' },
          about: {
            ru: 'Всё, что нужно между парами, не выходя из центра.',
            kz: 'Сабақ арасында керектің бәрін орталықтан шықпай-ақ табасыз.',
            en: 'Everything you need between classes without leaving the building.'
          },
          services: {
            ru: ['Банк', 'Аптека', 'Супермаркет', 'Прачечная', 'Ателье', 'Фотостудия', 'Книжный магазин и канцтовары', 'Салон красоты', 'Почтомат «Казпочты»', 'Магазин «Көмек»', 'Магазин честности', 'Мерч KazNU PRO', 'Фастфуд'],
            kz: ['Банк', 'Дәріхана', 'Супермаркет', 'Кір жуу орны', 'Тігін ательесі', 'Фотостудия', 'Кітап және кеңсе тауарлары дүкені', 'Сұлулық салоны', '«Қазпошта» пошта автоматы', '«Көмек» дүкені', 'Адалдық дүкені', 'KazNU PRO брендтік өнімдері', 'Фастфуд'],
            en: ['Bank', 'Pharmacy', 'Supermarket', 'Laundry', 'Tailor', 'Photo studio', 'Bookshop and stationery', 'Beauty salon', 'Kazpost parcel locker', '“Komek” shop', 'Honesty shop', 'KazNU PRO merch', 'Fast food']
          },
          ext: [],
          keywords: 'банкомат магазин еда стирка фото на документы почта посылка ксерокс atm shop food photo post parcel дүкен тамақ пошта'
        }
      ]
    },
    {
      id: 'leisure',
      icon: 'film',
      title: { ru: 'Досуг', kz: 'Бос уақыт', en: 'Leisure' },
      summary: {
        ru: 'Студенческое кафе и кинотеатр.',
        kz: 'Студенттік кафе және кинотеатр.',
        en: 'Student café and cinema.'
      },
      offices: [
        {
          name: { ru: 'Кафе и кинотеатр', kz: 'Кафе және кинотеатр', en: 'Café and cinema' },
          about: {
            ru: 'Место, где можно перекусить, встретиться с друзьями и посмотреть фильм.',
            kz: 'Тамақтанып, достармен кездесіп, фильм көруге болатын орын.',
            en: 'Grab a bite, meet friends and catch a film.'
          },
          services: {
            ru: ['Студенческое кафе', 'Кинотеатр'],
            kz: ['Студенттік кафе', 'Кинотеатр'],
            en: ['Student café', 'Cinema']
          },
          ext: [],
          keywords: 'кафе кино фильм обед cafe cinema movie lunch тамақ'
        }
      ]
    }
  ],

  // Онлайн-заявки (как на keremet.kaznu.kz, подаются через univer.kaznu.kz).
  online: [
    {
      id: 'study',
      title: { ru: 'Учебный процесс', kz: 'Оқу үдерісі', en: 'Academic affairs' },
      items: {
        ru: ['Транскрипт для предъявления вне вуза', 'Транскрипт для внутреннего пользования', 'Ликвидация академической задолженности', 'Изменение персональных данных'],
        kz: ['ЖОО-дан тыс жерге ұсынуға арналған транскрипт', 'Ішкі пайдалануға арналған транскрипт', 'Академиялық берешекті жою', 'Жеке деректерді өзгерту'],
        en: ['Transcript for external use', 'Transcript for internal use', 'Retaking failed courses', 'Updating personal details']
      }
    },
    {
      id: 'move',
      title: { ru: 'Движение студентов', kz: 'Студенттер қозғалысы', en: 'Enrollment changes' },
      items: {
        ru: ['Уход в академический отпуск', 'Продление академического отпуска', 'Возврат из академического отпуска', 'Выдача оригинала или копий документов', 'Обходной лист выпускника', 'Обходной лист для отчисляемых и переводящихся', 'Отчисление', 'Перевод внутри вуза', 'Возврат после академической мобильности', 'Оригинал документов для нострификации (грант)', 'Оригинал документов для нострификации (платное обучение)', 'Воинский учёт призывников и военнообязанных', 'Временная регистрация по месту жительства'],
        kz: ['Академиялық демалысқа шығу', 'Академиялық демалысты ұзарту', 'Академиялық демалыстан оралу', 'Құжаттардың түпнұсқасын немесе көшірмесін беру', 'Түлектің айналма парағы', 'Оқудан шығатындар мен ауысатындарға арналған айналма парақ', 'Оқудан шығу', 'ЖОО ішінде ауысу', 'Академиялық ұтқырлықтан оралу', 'Нострификация үшін құжат түпнұсқасы (грант)', 'Нострификация үшін құжат түпнұсқасы (ақылы оқу)', 'Әскерге шақырылушылар мен әскери міндеттілерді есепке алу', 'Тұрғылықты жері бойынша уақытша тіркеу'],
        en: ['Taking academic leave', 'Extending academic leave', 'Returning from academic leave', 'Originals or copies of documents', 'Graduate clearance form', 'Clearance form for withdrawal or transfer', 'Withdrawal', 'Internal transfer', 'Return after academic mobility', 'Original documents for nostrification (state grant)', 'Original documents for nostrification (fee-paying)', 'Military registration', 'Temporary residence registration']
      }
    },
    {
      id: 'mobility',
      title: { ru: 'Академическая мобильность', kz: 'Академиялық ұтқырлық', en: 'Academic mobility' },
      items: {
        ru: ['Внешняя академическая мобильность', 'Краткосрочная внешняя мобильность'],
        kz: ['Сыртқы академиялық ұтқырлық', 'Қысқа мерзімді сыртқы ұтқырлық'],
        en: ['Outgoing exchange', 'Short-term outgoing exchange']
      }
    },
    {
      id: 'social',
      title: { ru: 'Справки и общежитие', kz: 'Анықтамалар және жатақхана', en: 'Certificates and housing' },
      items: {
        ru: ['Справка для ГЦВП, приложение 4', 'Справка для ГЦВП, приложение 6', 'Справка для ГЦВП, приложение 29', 'Справка для ГЦВП, приложение 31', 'Справка с места учёбы, приложение 2‑1', 'Заявка на место в Доме студентов'],
        kz: ['ЗТМО үшін анықтама, 4‑қосымша', 'ЗТМО үшін анықтама, 6‑қосымша', 'ЗТМО үшін анықтама, 29‑қосымша', 'ЗТМО үшін анықтама, 31‑қосымша', 'Оқу орнынан анықтама, 2‑1‑қосымша', 'Студенттер үйіне орналасуға өтінім'],
        en: ['State benefits certificate, appendix 4', 'State benefits certificate, appendix 6', 'State benefits certificate, appendix 29', 'State benefits certificate, appendix 31', 'Proof of enrollment, appendix 2-1', 'Dormitory application']
      },
      keywords: 'гцвп справка ztmo зтмо анықтама certificate общежитие dorm dormitory жатақхана'
    }
  ],

  // Внутренние номера офиса-регистратора по факультетам.
  faculties: [
    { ext: '14-31', name: { ru: 'Факультет биологии и биотехнологии', kz: 'Биология және биотехнология факультеті', en: 'Faculty of Biology and Biotechnology' } },
    { ext: '14-28', name: { ru: 'Факультет востоковедения', kz: 'Шығыстану факультеті', en: 'Faculty of Oriental Studies' } },
    { ext: '14-27', name: { ru: 'Факультет географии и природопользования', kz: 'География және табиғатты пайдалану факультеті', en: 'Faculty of Geography and Environmental Sciences' } },
    { ext: '14-26', name: { ru: 'Факультет истории, археологии и этнологии', kz: 'Тарих, археология және этнология факультеті', en: 'Faculty of History, Archaeology and Ethnology' } },
    { ext: '14-28', name: { ru: 'Факультет международных отношений', kz: 'Халықаралық қатынастар факультеті', en: 'Faculty of International Relations' } },
    { ext: '14-29', name: { ru: 'Факультет журналистики', kz: 'Журналистика факультеті', en: 'Faculty of Journalism' } },
    { ext: '14-25', name: { ru: 'Механико-математический факультет', kz: 'Механика-математика факультеті', en: 'Faculty of Mechanics and Mathematics' } },
    { ext: '14-24', name: { ru: 'Физико-технический факультет', kz: 'Физика-техникалық факультет', en: 'Faculty of Physics and Technology' } },
    { ext: '14-22', name: { ru: 'Факультет филологии, литературоведения и мировых языков', kz: 'Филология, әдебиеттану және әлем тілдері факультеті', en: 'Faculty of Philology, Literary Studies and World Languages' } },
    { ext: '14-37, 14-20', name: { ru: 'Факультет медицины и здравоохранения', kz: 'Медицина және денсаулық сақтау факультеті', en: 'Faculty of Medicine and Health Care' } },
    { ext: '14-35', name: { ru: 'Факультет философии и политологии', kz: 'Философия және саясаттану факультеті', en: 'Faculty of Philosophy and Political Science' } },
    { ext: '14-21', name: { ru: 'Юридический факультет', kz: 'Заң факультеті', en: 'Faculty of Law' } },
    { ext: '14-32', name: { ru: 'Факультет химии и химической технологии', kz: 'Химия және химиялық технология факультеті', en: 'Faculty of Chemistry and Chemical Technology' } },
    { ext: '14-38', name: { ru: 'Высшая школа экономики и бизнеса', kz: 'Экономика және бизнес жоғары мектебі', en: 'Higher School of Economics and Business' } },
    { ext: '14-36', name: { ru: 'Факультет информационных технологий', kz: 'Ақпараттық технологиялар факультеті', en: 'Faculty of Information Technology' } }
  ],

  campus: [
    { img: 'cafe', title: { ru: 'Студенческое кафе', kz: 'Студенттік кафе', en: 'Student café' } },
    { img: 'cowork', title: { ru: 'Зона отдыха', kz: 'Демалыс аймағы', en: 'Lounge' } },
    { img: 'laundry', title: { ru: 'Прачечная', kz: 'Кір жуу орны', en: 'Laundry' } },
    { img: 'books', title: { ru: 'Книжный магазин', kz: 'Кітап дүкені', en: 'Bookshop' } },
    { img: 'market', title: { ru: 'Супермаркет', kz: 'Супермаркет', en: 'Supermarket' } },
    { img: 'beauty', title: { ru: 'Салон красоты', kz: 'Сұлулық салоны', en: 'Beauty salon' } }
  ],

  campusLinks: [
    { url: 'https://3dtour.kaznu.kz/', label: { ru: '3D-тур по кампусу', kz: 'Кампус бойынша 3D-тур', en: '3D campus tour' } },
    { url: 'MAP', label: { ru: 'Как добраться', kz: 'Қалай жетуге болады', en: 'How to get here' } },
    { url: 'https://lib.kaznu.kz/', label: { ru: 'Научная библиотека', kz: 'Ғылыми кітапхана', en: 'Library' } }
  ],

  links: [
    { url: 'https://univer.kaznu.kz/', label: 'univer.kaznu.kz' },
    // У https://www.kaznu.kz истёк сертификат, поэтому пока http.
    { url: 'http://www.kaznu.kz/', label: { ru: 'Сайт КазНУ', kz: 'ҚазҰУ сайты', en: 'KazNU website' } },
    { url: 'https://lib.kaznu.kz/', label: { ru: 'Библиотека', kz: 'Кітапхана', en: 'Library' } },
    { url: 'https://av.kaznu.kz/', label: { ru: 'Ассоциация выпускников', kz: 'Түлектер қауымдастығы', en: 'Alumni association' } },
    { url: 'https://keremet.kaznu.kz/', label: { ru: 'Действующий сайт ЦОС', kz: 'Орталықтың қолданыстағы сайты', en: 'Current center website' } }
  ]
};
