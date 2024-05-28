const products = [
    {
        type: "Электрогитары",
        name: "IBANEZ GRG121DX-BKF",
        image: "/products/product-500h.jpg",
        manufacturer: "IBANEZ",
        description: "Электрогитара, инструмент в корпусе черного матового цвета. Выполнен из тополя, гриф из клена и амаранта. Модель имеет 24 лада, 5-позиционный переключатель, два звукоснимателя. Отличный выбор для начинающих гитаристов и тех, кто ищет доступный вариант с высоким качеством звука и функциональностью.",
        guarantee: "1 год",
        price: "26800",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "IBANEZ"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "HH"
            },
            {
                characteristicCategory: "Форма корпуса",
                value: "Superstrat"
            }
        ]
    },
    {
        type: "Электрогитары",
        name: "EART EGLP-610 Gunmetal Black",
        image: "/products/EART.jpg",
        manufacturer: "EART",
        description: "Электрогитара, цвет серый металлик, корпус - красное дерево, гриф - красное дерево, накладка грифа - палисандр, порожек - кость, профиль грифа - переменный U-C, лады - 22 Medium Jumbo (сталь), мензура 24.75. EART это молодой гитарный бренд из Китая, который активно набирает популярность у гитаристов всего мира из-за своего уникального подхода к проектированию инструментов.",
        guarantee: "1 год",
        price: "55000",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "EART"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "HH"
            },
            {
                characteristicCategory: "Форма корпуса",
                value: "Les paul"
            }
        ]
    },
    {
        type: "Электрогитары",
        name: "ROCKDALE Stars Black Limited Edition HSS BK",
        image: "/products/ROCKDALE Stars Black Limited Edition HSS BK.jpg",
        manufacturer: "ROCKDALE",
        description: "ROCKDALE Stars все модели серии Stars созданы на базе легендарных и прошедших проверку временем инструментов. Классическая для электрогитары форма корпуса Strat, удобный гриф, оптимальная конфигурация звукоснимателей, позволяющая исполнять музыку в любом стиле, это важные составляющие правильного выбора первого инструмента.",
        guarantee: "1 год",
        price: "11900",
        oldPrice: "13300",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "ROCKDALE"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "HSS"
            },
            {
                characteristicCategory: "Форма корпуса",
                value: "Stratocaster"
            }
        ]
    },
    {
        type: "Электрогитары",
        name: "IBANEZ RGIXL7-BKF",
        image: "/products/IBANEZ RGIXL7-BKF.jpg",
        manufacturer: "IBANEZ",
        description: "IBANEZ RGIXL7-BKF - семиструнная электрогитара из линейки RG IronLabel 2020 года. Это инструмент для настоящего металла, мощный, тяжелый, агрессивный. Корпус гитары выполнен из ньятона. Гриф Nitro Wizard-7 XL из трех кусков, сочетания клена и терминалии (purpleheart).",
        guarantee: "1 год",
        price: "110000",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "IBANEZ"
            },
            {
                characteristicCategory: "Количество струн",
                value: "7"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "HH"
            },
            {
                characteristicCategory: "Форма корпуса",
                value: "Superstrat"
            }
        ]
    },
    {
        type: "Электрогитары",
        name: "ROCKDALE Stars HSS WH",
        image: "/products/ROCKDALE Stars HSS WH.jpg",
        manufacturer: "ROCKDALE",
        description: "ROCKDALE Stars все модели серии Stars созданы на базе легендарных и прошедших проверку временем инструментов. Классическая для электрогитары форма корпуса Strat, удобный гриф, оптимальная конфигурация звукоснимателей, позволяющая исполнять музыку в любом стиле, это важные составляющие правильного выбора первого инструмента.",
        guarantee: "1 год",
        price: "10900",
        oldPrice: "12200",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "ROCKDALE"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "HSS"
            },
            {
                characteristicCategory: "Форма корпуса",
                value: "Stratocaster"
            }
        ]
    },
    {
        type: "Электрогитары",
        name: "EART YMS-SG3 Trans Red",
        image: "/products/EART YMS-SG3 Trans Red.jpg",
        manufacturer: "EART",
        description: "EART YMS-SG3 это традиционный винтажный SSS-стратокастер который удачно сочетает в себе классический стиль и современные ноу-хау. Высочайшее качество древесины, эргономичный гриф с переменным винтажным радиусом и адаптивным профилем, сбалансированные звукосниматели на керамических магнитах и корейская фурнитура экстра-класса.",
        guarantee: "1 год",
        price: "34000",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "EART"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "SSS"
            },
            {
                characteristicCategory: "Форма корпуса",
                value: "Stratocaster"
            }
        ]
    },
    {
        type: "Электрогитары",
        name: "FARIDA Marina F-3030 Black",
        image: "/products/FARIDA Marina F-3030 Black.jpg",
        manufacturer: "FARIDA",
        description: "Farida Marina F-3030 Black это отличный классический HSS-страт (фэт-страт) из самой доступной серии Farida Marina. Классическая формула стратокастера дополнена максимально универсальной конфигурацией звукоснимателей с хамбакером в бридже и синглами в миде и нэке.",
        guarantee: "1 год",
        price: "21505",
        oldPrice: "25300",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "FARIDA"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "HSS"
            },
            {
                characteristicCategory: "Форма корпуса",
                value: "Fat Strat"
            }
        ]
    },
    {
        type: "Электрогитары",
        name: "GIBSON 2019 SG TRIBUTE VINTAGE CHERRY SATIN",
        image: "/products/GIBSON 2019 SG TRIBUTE VINTAGE CHERRY SATIN.jpg",
        manufacturer: "GIBSON",
        description: "GIBSON 2019 SG TRIBUTE VINTAGE CHERRY SATIN - это шестиструнная электрогитара популярной линейки SG. Эта гитара имеет не только несколько облегченную деку, но и стильный, классический дизайн. Этот инструмент обладает шикарным стилем и премиальным, классическим звучанием.",
        guarantee: "1 год",
        price: "244000",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "GIBSON"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "HH"
            },
            {
                characteristicCategory: "Форма корпуса",
                value: "Sg"
            }
        ]
    },
    {
        type: "Электрогитары",
        name: "FARIDA F-5050 2-Tone Sunburst",
        image: "/products/FARIDA F-5050 2-Tone Sunburst.jpg",
        manufacturer: "FARIDA",
        description: "FARIDA F-5050 - это электрогитара в классическом корпусе страт, которая обладает потрясающим звуком и стильным дизайном. Она идеально подходит для музыкантов всех уровней и стилей игры. Гитара имеет корпус из ольхи, который обеспечивает отличную резонансность и сбалансированный звук.",
        guarantee: "1 год",
        price: "39950",
        oldPrice: "47000",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "FARIDA"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "SSS"
            },
            {
                characteristicCategory: "Форма корпуса",
                value: "Stratocaster"
            }
        ]
    },
    {
        type: "Электрогитары",
        name: "IBANEZ GSA60-WNF",
        image: "/products/IBANEZ GSA60-WNF.jpg",
        manufacturer: "IBANEZ",
        description: "IBANEZ GIO GSA60-WNF WALNUT FLAT это серьезный, универсальный инструмент, выглядящий оригинально и стильно. Эта электрогитара - лучший выбор, когда вам нужно универсальное решение для воспроизведения многих музыкальных жанров, использования широкого тонального спектра для различных стилей игры.",
        guarantee: "1 год",
        price: "28500",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "IBANEZ"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "HSS"
            },
            {
                characteristicCategory: "Форма корпуса",
                value: "Stratocaster"
            }
        ]
    },
    {
        type: "Классические гитары",
        name: "ROCKDALE Classic C1",
        image: "/products/ROCKDALE Classic C1.jpg",
        manufacturer: "ROCKDALE",
        description: "Инструменты серии ROCKDALE Classic идеально подойдут для обучения ребенка в музыкальной школе. Благодаря сотрудничеству с музыкантами и преподавателями нам удалось создать для вас инструмент, идеально соответствующий задачам обучения.",
        guarantee: "1 год",
        price: "7900",
        oldPrice: "9900",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "ROCKDALE"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Махагони"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Ель"
            }
        ]
    },
    {
        type: "Классические гитары",
        name: "VESTON C-45A",
        image: "/products/VESTON C-45A.jpg",
        manufacturer: "VESTON",
        description: "VESTON C-45A полноразмерная классическая акустическая гитара отличного качества, доступная по демократичной цене. Такая гитара будет отличным выбором для начинающих музыкантов и обучающихся игре на инструменте.",
        guarantee: "1 год",
        price: "8210",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "VESTON"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Клён"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Агатис"
            }
        ]
    },
    {
        type: "Классические гитары",
        name: "FENDER ESC-110 CLASSIC",
        image: "/products/FENDER ESC-110 CLASSIC.jpg",
        manufacturer: "VESTON",
        description: "FENDER ESC-110 CLASSICAL WIDE NECK - это шестиструнная классическая гитара начального уровня. Этот инструмент станет хорошим приобретением для учеников музыкальных школ и тех, кто уже начал освоение гитары, хочет приобрести неплохой инструмент именитого бренда по приемлемой цене.",
        guarantee: "1 год",
        price: "21900",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "FENDER"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Нато"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Палисандр"
            }
        ]
    },
    {
        type: "Классические гитары",
        name: "ROCKDALE Classic C3 Dark Natural",
        image: "/products/ROCKDALE Classic C3 Dark Natural.jpg",
        manufacturer: "ROCKDALE",
        description: "Инструменты серии ROCKDALE Classic идеально подойдут для обучения ребенка в музыкальной школе. Благодаря сотрудничеству с музыкантами и преподавателями нам удалось создать для вас инструмент, идеально соответствующий задачам обучения.",
        guarantee: "1 год",
        price: "13900",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "ROCKDALE"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Махагони"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Ель"
            }
        ]
    },
    {
        type: "Акустические гитары",
        name: "FENDER SQUIER SA-150",
        image: "/products/FENDER SQUIER SA-150.jpg",
        manufacturer: "ROCKDALE",
        description: "Squier SA-150 - полноразмерная акустическая гитара со стальными струнами, которая предлагает насыщенный, взрослый звук по достаточно невысокой цене. Гитара отлично подходит для ежедневных интенсивных занятий.",
        guarantee: "1 год",
        price: "12500",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "FENDER"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Красное дерево"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Красное дерево"
            }
        ]
    },
    {
        type: "Акустические гитары",
        name: "FENDER CD-60 Natural",
        image: "/products/FENDER CD-60 Natural.jpg",
        manufacturer: "FENDER",
        description: "FENDER CD-60 DREAD V3 DS идеальный инструмент для начинающих музыкантов. Это настоящий Фендер, при этом цена модели весьма невысока. Если Вы молодой музыкант, лучшая гитара, которую Вы можете выбрать, это инструмент, звук и удобство которого вдохновят Вас играть больше и больше.",
        guarantee: "1 год",
        price: "12500",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "FENDER"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Ель"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Красное дерево"
            }
        ]
    },
    {
        type: "Акустические гитары",
        name: "IBANEZ PF15ECE-NT",
        image: "/products/IBANEZ PF15ECE-NT.jpg",
        manufacturer: "IBANEZ",
        description: "Электроакустическая гитара IBANEZ PF15ECE-NT - это инструмент высокого качества, который обладает богатым и насыщенным звучанием. Эта гитара идеально подходит для исполнения различных музыкальных стилей, включая фолк, кантри, блюз и рок.",
        guarantee: "1 год",
        price: "31000",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "IBANEZ"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Красное дерево"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Красное дерево"
            }
        ]
    },
    {
        type: "Акустические гитары",
        name: "CRAFTER DE-7 /NC",
        image: "/products/CRAFTER DE-7 NC.jpg",
        manufacturer: "CRAFTER",
        description: "Гитара CRAFTER DE 7/NC электроакустическая версия популярной модели D 7/NC, доступного по цене инструмента с верхней декой из массива красного кедра.",
        guarantee: "3 года",
        price: "50300",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "CRAFTER"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Красное дерево"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Красное дерево"
            }
        ]
    },
    {
        type: "Акустические бас-гитары",
        name: "IBANEZ AEB8E-BK",
        image: "/products/IBANEZ AEB8E-BK.jpg",
        manufacturer: "IBANEZ",
        description: "",
        guarantee: "1 год",
        price: "37000",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "IBANEZ"
            },
            {
                characteristicCategory: "Количество струн",
                value: "4"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Окуме"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Сапеле"
            }
        ]
    },
    {
        type: "Акустические бас-гитары",
        name: "Ortega KT-WALKER-V2 Signature Series",
        image: "/products/Ortega KT-WALKER-V2 Signature Series.jpg",
        manufacturer: "Ortega",
        description: "KT-WALKER-V2 Signature Series Электро-акустическая бас-гитара. Ortega объединились с легендарным музыкантом для тура MTV Unplugged, и в результате сотрудничества были созданы 3 исключительных инструмента.",
        guarantee: "1 год",
        price: "79620",
        oldPrice: "93670",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Ortega"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество струн",
                value: "4"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Красное дерево"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Красное дерево"
            }
        ]
    },
    {
        type: "Бас-гитары",
        name: "IBANEZ GSR200B-WNF",
        image: "/products/IBANEZ GSR200B-WNF.jpg",
        manufacturer: "IBANEZ",
        description: "Бас-гитара IBANEZ GSR200B-WNF - это отличный выбор для начинающих и опытных бас-гитаристов, которые ищут доступный инструмент высокого качества.",
        guarantee: "1 год",
        price: "29400",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "IBANEZ"
            },
            {
                characteristicCategory: "Количество струн",
                value: "4"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "JP"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Клён"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Махагони"
            }
        ]
    },
    {
        type: "Бас-гитары",
        name: "Fernandes RPB360 SW",
        image: "/products/Fernandes RPB360 SW.jpg",
        manufacturer: "Fernandes",
        description: "Бас-гитара Fernandes RPB360 – недорогой Precision Bass, пожалуй, самый качественный в своей ценовой категории из всех представленных на рынке.",
        guarantee: "1 год",
        price: "38990",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Fernandes"
            },
            {
                characteristicCategory: "Количество струн",
                value: "4"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "S"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Клён"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Ольха"
            }
        ]
    },
    {
        type: "Бас-гитары",
        name: "FARIDA F-5222 OWT",
        image: "/products/FARIDA F-5222 OWT.jpg",
        manufacturer: "FARIDA",
        description: "FARIDA F-5222 - это бас-гитара, которая предлагает высокое качество звучания и комфортную игру. Она идеально подходит для басистов всех уровней и стилей музыки.",
        guarantee: "1 год",
        price: "54000",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "FARIDA"
            },
            {
                characteristicCategory: "Количество струн",
                value: "4"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "SS"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Клён"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Ольха"
            }
        ]
    },
    {
        type: "Бас-гитары",
        name: "Schecter SGR C-4 BASS BLK",
        image: "/products/Schecter SGR C-4 BASS BLK.jpg",
        manufacturer: "Schecter",
        description: "Серия гитар SGR by Schecter сочетает в себе самый популярный стиль корпуса по чрезвычайно доступной цене. Характеризуясь корпусом из липы, палисандровой накладкой, SGR by Schecter Diamond Bass хамбакерами и простым гладким дизайном, SGR by Schecter опять устанавливает новые стандарты.",
        guarantee: "6 месяцев",
        price: "33088",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Schecter"
            },
            {
                characteristicCategory: "Количество струн",
                value: "4"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "SS"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Клён"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Липа"
            }
        ]
    },
    {
        type: "Бас-гитары",
        name: "CORT GB64JJ-NAT GB Series",
        image: "/products/Cort GB64JJ-NAT GB Series.jpg",
        manufacturer: "CORT",
        description: "GB64JJ - это современный взгляд Cort на линейку GB для любителей J-bass, вдохновленный 70-ми годами. Обновленная активная электроника и звукосниматели Duncan Designed позволят басистам исследовать более широкий диапазон звукового спектра, сохраняя при этом эстетику как можно более традиционной.",
        guarantee: "6 месяцев",
        price: "49540",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "CORT"
            },
            {
                characteristicCategory: "Количество струн",
                value: "4"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "SS"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Клён"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Клён"
            }
        ]
    },
    {
        type: "Бас-гитары",
        name: "CORT NJS5-BK Elrick NJS Series",
        image: "/products/CORT NJS5-BK Elrick NJS Series.jpg",
        manufacturer: "CORT",
        description: "NJS (сокращенно от New Jazz Standard) представляют собой современные бас-гитары в стиле j-bass с уникальными особенностями, такими как наклонная головка грифа, 24 лада с нулевым ладом, дизайн корпуса без пятки с расширенным доступом к высоким частотам и звукоснимателями Voiced Tone VTB-ST с предусилителем Bartolini.",
        guarantee: "6 месяцев",
        price: "109950",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "CORT"
            },
            {
                characteristicCategory: "Количество струн",
                value: "5"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "SS"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Клён"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Ольха"
            }
        ]
    },
    {
        type: "Полуакустические гитары",
        name: "Aria Pro II FA-77 Natural",
        image: "/products/Aria Pro II FA-77 Natural.png",
        manufacturer: "Aria",
        description: "",
        guarantee: "1 год",
        price: "95190",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Aria"
            },
            {
                characteristicCategory: "Количество струн",
                value: "6"
            },
            {
                characteristicCategory: "Конфигурация звукоснимателей",
                value: "H"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Клён"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Ель"
            }
        ]
    },
    {
        type: "Синтезаторы",
        name: "ROCKDALE Premiere 2",
        image: "/products/ROCKDALE Premiere 2.jpg",
        manufacturer: "ROCKDALE",
        description: "ROCKDALE Premiere 2 - хороший выбор для начинающих музыкантов и любителей, сочетает в себе бюджетность инструмента начального уровня с функционалом устройств более высокого класса.",
        guarantee: "1 год",
        price: "19990",
        oldPrice: "20999",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "ROCKDALE"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество клавиш",
                value: "61"
            },
            {
                characteristicCategory: "Количество тембров",
                value: "585"
            },
            {
                characteristicCategory: "Полифония",
                value: "64 голоса"
            },
        ]
    },
    {
        type: "Синтезаторы",
        name: "YAMAHA PSR-E373",
        image: "/products/YAMAHA PSR-E373.jpg",
        manufacturer: "YAMAHA",
        description: "PSR-E373 является новым портативным синтезатором от компании Yamaha, оснащенным качественной активной (чувствительной к нажатию) клавиатурой и новейшей разработкой инженеров компании- тон-генератором LSI, который подарит Вам потрясающий набор высококачественных реалистичных тембров!",
        guarantee: "1 год",
        price: "34990",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "YAMAHA"
            },
            {
                characteristicCategory: "Количество клавиш",
                value: "61"
            },
            {
                characteristicCategory: "Количество тембров",
                value: "622"
            },
            {
                characteristicCategory: "Полифония",
                value: "48 голосов"
            },
        ]
    },
    {
        type: "Синтезаторы",
        name: "Yamaha PSR-E473",
        image: "/products/Yamaha PSR-E473.jpg",
        manufacturer: "YAMAHA",
        description: "Yamaha PSR-E473 - портативный цифровой синтезатор-аранжировщик на 61 клавишу со встроенными динамиками и функциями Quick Sampling, Groove Creator и USB Audio Recorder.",
        guarantee: "2 года",
        price: "59990",
        oldPrice: "62990",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "YAMAHA"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество клавиш",
                value: "61"
            },
            {
                characteristicCategory: "Количество тембров",
                value: "820"
            },
            {
                characteristicCategory: "Полифония",
                value: "64 голоса"
            },
        ]
    },
    {
        type: "Студийные синтезаторы",
        name: "KORG Pa600",
        image: "/products/KORG Pa600.jpg",
        manufacturer: "KORG",
        description: "Ра600 новейший клавишный инструмент в серии Korg PA, получившей международную известность в качестве самой продаваемой серии аранжировочных клавишных инструментов.",
        guarantee: "3 года",
        price: "118000",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "KORG"
            },
            {
                characteristicCategory: "Количество клавиш",
                value: "61"
            },
            {
                characteristicCategory: "Количество тембров",
                value: "950"
            },
            {
                characteristicCategory: "Полифония",
                value: "128 голосов"
            },
        ]
    },
    {
        type: "Студийные синтезаторы",
        name: "KORG Pa600",
        image: "/products/KORG Pa600.jpg",
        manufacturer: "KORG",
        description: "KORG Pa700 - это профессиональная аранжировочная станция, оснащенная 61 клавишей. Клавиатура синтезатора динамического типа.",
        guarantee: "3 года",
        price: "186000",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "KORG"
            },
            {
                characteristicCategory: "Количество клавиш",
                value: "61"
            },
            {
                characteristicCategory: "Количество тембров",
                value: "1700"
            },
            {
                characteristicCategory: "Полифония",
                value: "128 голосов"
            },
        ]
    },
    {
        type: "Цифровые пианино",
        name: "ROLAND GO-61P",
        image: "/products/ROLAND GO-61P.jpg",
        manufacturer: "ROLAND",
        description: "",
        guarantee: "1 год",
        price: "39990",
        oldPrice: "47990",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "ROLAND"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество клавиш",
                value: "61"
            },
            {
                characteristicCategory: "Количество тембров",
                value: "40"
            },
            {
                characteristicCategory: "Полифония",
                value: "128 голосов"
            },
        ]
    },
    {
        type: "Цифровые пианино",
        name: "ROLAND FP-30X-BK",
        image: "/products/ROLAND FP-30X-BK.jpg",
        manufacturer: "ROLAND",
        description: "ROLAND FP-30X-BK - это высококачественное цифровое пианино, которое обладает отличным звуком и рядом функций, делающих его идеальным для игры на любом уровне.",
        guarantee: "1 год",
        price: "82990",
        oldPrice: "96160",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "ROLAND"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество клавиш",
                value: "88"
            },
            {
                characteristicCategory: "Количество тембров",
                value: "56"
            },
            {
                characteristicCategory: "Полифония",
                value: "256 голосов"
            },
        ]
    },
    {
        type: "Цифровые пианино",
        name: "KORG LP-380 WH U",
        image: "/products/KORG LP-380 WH U.jpg",
        manufacturer: "KORG",
        description: "Цифровое пианино KORG LP-380 WH U - это отличный выбор для тех, кто ищет высококачественный инструмент с богатым звуком и удобством игры.",
        guarantee: "3 года",
        price: "110500",
        oldPrice: "130000",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "KORG"
            },
            {
                characteristicCategory: "Цена",
                value: "Действие акции"
            },
            {
                characteristicCategory: "Количество клавиш",
                value: "88"
            },
            {
                characteristicCategory: "Количество тембров",
                value: "30"
            },
            {
                characteristicCategory: "Полифония",
                value: "120 голосов"
            },
        ]
    },
    {
        type: "Акустические пианино",
        name: "KAWAI K-200 WH-P",
        image: "/products/KAWAI K-200 WH-P.jpg",
        manufacturer: "KAWAI",
        description: "Выдающийся тон и качество исполнения делает пианино Kawai K200 идеальным инструментом, который музыканту надежность и характер и подойдет, как новичку, так и профессионалу.",
        guarantee: "3 года",
        price: "949990",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "KAWAI"
            },
            {
                characteristicCategory: "Количество клавиш",
                value: "88"
            },
        ]
    },
    {
        type: "Акустические барабаны",
        name: "Pearl RSJ465C-C31",
        image: "/products/Pearl RSJ465C-C31.jpg",
        manufacturer: "Pearl",
        description: "Серия Roadshow компании Pearl разработана специально для детей в возрасте до 10 лет. В ней есть всё необходимое для того, чтобы раскрыть потенциал и талант молодых, полных энтузиазма начинающих барабанщиков, став их первой ударной установкой.",
        guarantee: "1 год",
        price: "54990",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Pearl"
            },
            {
                characteristicCategory: "Количество барабанов",
                value: "5"
            },
            {
                characteristicCategory: "Количество тарелок",
                value: "2"
            },
        ]
    },
    {
        type: "Акустические барабаны",
        name: "TAMA ST52H6-BNS STAGESTAR",
        image: "/products/TAMA ST52H6-BNS STAGESTAR.jpg",
        manufacturer: "TAMA",
        description: "Ударные установки Stagestar это отличное сочетание качества и цены, что делает их идеальным выбором для начинающих музыкантов, которые хотят получить хороший инструмент за небольшие деньги.",
        guarantee: "1 год",
        price: "101000",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "TAMA"
            },
            {
                characteristicCategory: "Количество барабанов",
                value: "5"
            },
            {
                characteristicCategory: "Количество тарелок",
                value: "3"
            },
        ]
    },
    {
        type: "Электронные барабаны",
        name: "ROCKDALE Tempest Mesh 2",
        image: "/products/ROCKDALE Tempest Mesh 2.jpg",
        manufacturer: "ROCKDALE",
        description: "ROCKDALE Tempest Mesh 2 электронная ударная установка с 2-х слойными сетчатыми пэдами, является отличным выбором для тех, кто хотел бы иметь дома полноценную ударную установку, но при этом не желает доставлять неудобства своим близким.",
        guarantee: "1 год",
        price: "48900",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "ROCKDALE"
            },
            {
                characteristicCategory: "Количество барабанов",
                value: "5"
            },
            {
                characteristicCategory: "Количество тарелок",
                value: "3"
            },
        ]
    },
    {
        type: "Электронные барабаны",
        name: "ROCKDALE Thunder Mesh PRO 2",
        image: "/products/ROCKDALE Thunder Mesh PRO 2.jpg",
        manufacturer: "ROCKDALE",
        description: "ROCKDALE Thunder Mesh PRO 2 электронная ударная установка с 3-х слойными сетчатыми пэдами, является отличным выбором для тех, кто хотел бы иметь дома полноценную ударную установку, но при этом не желает доставлять неудобства своим близким.",
        guarantee: "1 год",
        price: "105000",
        oldPrice: "126000",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "ROCKDALE"
            },
            {
                characteristicCategory: "Количество барабанов",
                value: "5"
            },
            {
                characteristicCategory: "Количество тарелок",
                value: "4"
            },
        ]
    },
    {
        type: "Перкуссия",
        name: "YUKA DJWD06-12",
        image: "/products/YUKA DJWD06-12.jpg",
        manufacturer: "YUKA",
        description: "YUKA DJWD06-12 представляет собой африканский барабан джембе. Джембе - это западноафриканский барабан, выполненный в форме кубка.",
        guarantee: "6 месяцев",
        price: "6050",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "YUKA"
            },
            {
                characteristicCategory: "Материал",
                value: "Дерево"
            },
        ]
    },
    {
        type: "Флейты",
        name: "Pearl Quantz PF-F505RE",
        image: "/products/Pearl Quantz PF-F505RE.jpg",
        manufacturer: "Pearl",
        description: "Ученическая модель с головкой Forza не в линию с ми-механикой и открытыми клапанами. Посеребреный корпус, головка и колено.",
        guarantee: "1 год",
        price: "73700",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Pearl"
            },
        ]
    },
    {
        type: "Кларнеты",
        name: "Artemis RCL-3206N",
        image: "/products/Artemis RCL-3206N.jpg",
        manufacturer: "Artemis",
        description: "Корпус из твердой резины. Никелированная механика из медно-никелевого сплава. Французская система (система Бема).",
        guarantee: "1 год",
        price: "50680",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Artemis"
            },
            {
                characteristicCategory: "Количество клапанов",
                value: "17"
            },
        ]
    },
    {
        type: "Саксофоны",
        name: "ROY BENSON SG-302",
        image: "/products/ROY BENSON SG-302.jpg",
        manufacturer: "ROY BENSON",
        description: "ROY BENSON SG-302 саксофон сопрано тональности си бемоль (Bb), студенческая модель от немецкого производителя Roy Benson. Это великолепный инструмент с красивым, богатым, насыщенным звуком и эффектным внешним видом.",
        guarantee: "1 год",
        price: "89940",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "ROY BENSON"
            },
        ]
    },
    {
        type: "Скрипки",
        name: "FLIGHT FV-144 ST",
        image: "/products/FLIGHT FV-144 ST.jpg",
        manufacturer: "FLIGHT",
        description: "FLIGHT FV-144 ST лёгкая и удобная полноразмерная (размер 4/4) скрипка начального уровня. Такая ученическая скрипка прекрасно подойдет для занятий в музыкальной школе, на ней могут играть дети в возрасте от 11 лет и подростки.",
        guarantee: "1 год",
        price: "8440",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "FLIGHT"
            },
            {
                characteristicCategory: "Размер",
                value: "4/4"
            },
        ]
    },
    {
        type: "Скрипки",
        name: "Prima P-200 3/4",
        image: "/products/Prima P-200 3-4.jpg",
        manufacturer: "Prima",
        description: "Скрипки Prima P-200 3/4 отвечают всем стандартам, размерам и спецификациям, комплектующие жестким футляром с нейлоновой обивкой и высококачественным граненым смычком.",
        guarantee: "1 год",
        price: "16723",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Prima"
            },
            {
                characteristicCategory: "Размер",
                value: "3/4"
            },
        ]
    },
    {
        type: "Виолончели",
        name: "Gliga Genial2 B-C012-L",
        image: "/products/Gliga Genial2 B-C012-L.jpg",
        manufacturer: "Gliga",
        description: "Ученическая виолончель с верхней декой из массива ели и корпусом из ламинированного клена. Покрытие нитролаком. Выполнена по модели Страдивари.",
        guarantee: "1 год",
        price: "110900",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Gliga"
            },
            {
                characteristicCategory: "Размер",
                value: "1/2"
            },
        ]
    },
    {
        type: "Баяны",
        name: "Тульская гармонь BN-37-RD",
        image: "/products/Тульская гармонь BN-37-RD.jpg",
        manufacturer: "Тульская гармонь",
        description: "Ученическая виолончель с верхней декой из массива ели и корпусом из ламинированного клена. Покрытие нитролаком. Выполнена по модели Страдивари.",
        guarantee: "6 месяцев",
        price: "101660",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Тульская гармонь"
            },
            {
                characteristicCategory: "Правая клавиатура",
                value: "2 голоса"
            },
            {
                characteristicCategory: "Левая клавиатура/выборный бас",
                value: "4 голоса"
            },
        ]
    },
    {
        type: "Балалайки",
        name: "БалалайкерЪ BS-JS",
        image: "/products/БалалайкерЪ BS-JS.jpg",
        manufacturer: "БалалайкерЪ",
        description: "Балалайка-прима академическая школьная продвинутая размер 3/4 (юниор). Уменьшенный и продвинутый вариант школьной балалайки для успешного освоения программы музыкального обучения.",
        guarantee: "6 месяцев",
        price: "29630",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "БалалайкерЪ"
            },
            {
                characteristicCategory: "Материал грифа",
                value: "Махагон"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Клён"
            },
            {
                characteristicCategory: "Размер",
                value: "3/4"
            },
        ]
    },
    {
        type: "Арфы",
        name: "Capris MLH0014",
        image: "/products/Capris MLH0014.png",
        manufacturer: "Capris",
        description: "Балалайка-прима академическая школьная продвинутая размер 3/4 (юниор). Уменьшенный и продвинутый вариант школьной балалайки для успешного освоения программы музыкального обучения.",
        guarantee: "1 год",
        price: "55320",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Capris"
            },
            {
                characteristicCategory: "Количество струн",
                value: "21"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Махагони"
            },
        ]
    },
    {
        type: "Лиры",
        name: "Гусельник GU-20.63.07.11100",
        image: "/products/Гусельник GU-20.63.07.11100.jpg",
        manufacturer: "Гусельник",
        description: "Лира долблёная с двух сторон из массива клёна, бука, дуба, одьхи и других твёрдых пород древесины. В результате долбления формируется тонкая внутренняя дека инструмента.",
        guarantee: "1 год",
        price: "14980",
        oldPrice: "",
        filters: [
            {
                characteristicCategory: "Производитель",
                value: "Гусельник"
            },
            {
                characteristicCategory: "Количество струн",
                value: "7"
            },
            {
                characteristicCategory: "Материал корпуса",
                value: "Дерево"
            },
        ]
    },
];

module.exports = products;