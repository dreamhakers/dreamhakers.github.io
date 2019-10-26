let image, curarea, frame, text, modal, blend, mylatesttap, map, containerImg;

var areasObject = {
    areasWorld: [
        { shape: "poly", coords: "3 3,1418 3,1418 950,1380 1410,1330 1280,1300 1110,1250 1160,1150 1150,1000 1000,770 950,560 960,540 1040,420 1000,230 1050,230 1050,210 1170,40 1410,3 1100", alt: "upper-world.gif", title: "Верхний Мир. Мир Светлых",class:"polygon", href: "" },
        // { shape: "poly", coords: "3,3,1406,3,1406,1350,1000,1000,200,1000,3,1350", alt: "upper-world.gif", title: "Верхний Мир. Мир Светлых", href: "" },
        { shape: "rect", coords: "2,997,1416,1572", alt: "middle-world.gif", title: "Срединный Мир - Мир Подобный Миру", href: "" },
        { shape: "rect", coords: "2,1586,1416,2560", alt: "underworld.gif", title: "Нижний Мир. Демонические", href: "" },

    ],
    areas: [
        { shape: "rect", coords: "661,138,774,219", alt: "observer.gif", title: "Наблюдатель", description:"Сюжеты сновидений когда вы осознавались как  Наблюдатель (Свидетель).", href: "http://postnagualism.com/Bruja/index.php?topic=76388.0" },
        { shape: "rect", coords: "514,207,912,281", alt: "sun.gif", title: "Сознание", description:"Сознание и сны, об осознании. Свечение сознания... Осознавание через сновидение... Сны в сияющем пространстве...", href: "http://postnagualism.com/Bruja/index.php?topic=76387.0" },
        { shape: "rect", coords: "365,276,1065,411", alt: "parents.gif", title: "Духовные Родители", href: "http://postnagualism.com/Bruja/index.php?topic=76385.0" },
        { shape: "rect", coords: "684,335,758,499", alt: "personal-deity.gif", title: "Личное Божество",description:"Сверх Я, Божественная форма себя и т.д.", href: "http://postnagualism.com/Bruja/index.php?topic=76386.0" },
        { shape: "rect", coords: "1138,157,1389,776", alt: "comet.gif", title: "Комета. Рождение", href: "http://postnagualism.com/Bruja/index.php?topic=76384.0" },
        { shape: "rect", coords: "221,491,406,685", alt: "nature.gif", title: "Природа.", description:"Духи Местности", href: "http://postnagualism.com/Bruja/index.php?topic=76383.0" },
        { shape: "rect", coords: "132,662,310,811", alt: "wind.gif", title: "Ветер.", description:"Духи Воздуха", href: "http://postnagualism.com/Bruja/index.php?topic=76261.0" },
        { shape: "rect", coords: "830,670,970,744", alt: "ancestors.gif", title: "Умершие", description:"Духи Великих Предков, Встречи с умершими", href: "http://postnagualism.com/Bruja/index.php?topic=76382.0" },
        { shape: "rect", coords: "323,606,585,800", alt: "clouds.gif", title: "Облака", description:"Облачный мир. Облачная страна. Разумные облака.", href: "http://postnagualism.com/Bruja/index.php?topic=76295.0" },
        { shape: "rect", coords: "574,440,678,751", alt: "highest-temple.gif", title: "Небесный Храм", description:"Высший Духовный Храм, Храм в себе.", href: "http://postnagualism.com/Bruja/index.php?topic=76381.0" },
        { shape: "rect", coords: "673,491,798,717", alt: "buddha.gif", title: "Будда", description:"Медитирующий. Йогин.", href: "http://postnagualism.com/Bruja/index.php?topic=76380.0" },
        { shape: "rect", coords: "636,722,800,844", alt: "trinity.gif", title: "Троица", description:"Белый старец - ум-разум. Красная Женщина - чувства-эмоции. Черный Человек - воля-действие.", href: "http://postnagualism.com/Bruja/index.php?topic=76287.0" },
        { shape: "rect", coords: "784,442,1016,671", alt: "mahatmas.gif", title: "Махатмы, Учителя", description:"Дважды рожденные, Великие Духовные Учителя, Астральные учителя.", href: "http://postnagualism.com/Bruja/index.php?topic=76259.0" },
        { shape: "rect", coords: "1013,475,1182,756", alt: "saint.gif", title: "Божества. Святые", href: "http://postnagualism.com/Bruja/index.php?topic=76379.0" },
        { shape: "rect", coords: "1086,786,1307,1091", alt: "ideas.gif", title: "Хроники Акаши. Библиотека", description:"Миры Идей, Концепций, Смыслов,Библиотека Знаний, Конструктор Ума", href: "http://postnagualism.com/Bruja/index.php?topic=76378.0" },
        { shape: "rect", coords: "803,738,1090,1024", alt: "doctrines.gif", title: "Конфессии и Учения", description:"Духовные Пути - их отражения в Верхнем Мире", href: "http://postnagualism.com/Bruja/index.php?topic=76377.0" },
        { shape: "rect", coords: "707,846,829,988", alt: "bardo.gif", title: "Бардо", description:"Вход в Верхний Мир. Порог. Бардо", href: "http://postnagualism.com/Bruja/index.php?topic=76290.0" },
        { shape: "rect", coords: "499,823,702,979", alt: "garden.gif", title: "Мир Цветов", description:"", href: "http://postnagualism.com/Bruja/index.php?topic=76376.0" },
        { shape: "rect", coords: "221,821,453,977", alt: "bird.gif", title: "Птичий Мир", href: "http://postnagualism.com/Bruja/index.php?topic=76375.0" },
        { shape: "rect", coords: "46,823,217,1032", alt: "animal.gif", title: "Мир Животных", href: "http://postnagualism.com/Bruja/index.php?topic=76374.0" },
        { shape: "rect", coords: "43,1033,242,1219", alt: "insect.gif", title: "Мир Насекомых", description:"или превращение в насекомое... все связанное с насекомыми", href: "http://postnagualism.com/Bruja/index.php?topic=76373.0" },
        { shape: "rect", coords: "224,950,362,1387", alt: "tree.gif", title: "Великое Дерево", href: "http://postnagualism.com/Bruja/index.php?topic=76288.0" },
        { shape: "rect", coords: "368,1158,554,1273", alt: "heaven.gif", title: "Лестница в Небеса", href: "http://postnagualism.com/Bruja/index.php?topic=76262.0" },
        { shape: "rect", coords: "350,1090,484,1188", alt: "ufo.gif", title: "НЛО", description:"Инопланетное вторжение, Контакт с существами из других миров и из иных планет и звездных систем", href: "http://postnagualism.com/Bruja/index.php?topic=76372.0" },
        { shape: "rect", coords: "448,1027,568,1119", alt: "spaceships.gif", title: "Космопорт", href: "http://postnagualism.com/Bruja/index.php?topic=76371.0" },
        { shape: "rect", coords: "574,988,704,1110", alt: "hermits.gif", title: "Отшельники", href: "http://postnagualism.com/Bruja/index.php?topic=76277.0" },
        { shape: "rect", coords: "613,1108,712,1232", alt: "mine.gif", title: "Канатная дорога. Шахты", href: "http://postnagualism.com/Bruja/index.php?topic=76370.0" },
        { shape: "rect", coords: "713,1055,842,1186", alt: "observatory.gif", title: "Обсерватория", href: "http://postnagualism.com/Bruja/index.php?topic=76369.0" },
        { shape: "rect", coords: "850,993,954,1182", alt: "ice-desert.gif", title: "Холодные Земли", href: "http://postnagualism.com/Bruja/index.php?topic=76368.0" },
        { shape: "rect", coords: "938,1075,1004,1248", alt: "lighthouse.gif", title: "Маяк", href: "http://postnagualism.com/Bruja/index.php?topic=76367.0" },
        { shape: "rect", coords: "1002,1153,1085,1302", alt: "mystical-city.gif", title: "Мистический Город", href: "http://postnagualism.com/Bruja/index.php?topic=76278.0" },
        { shape: "rect", coords: "530,1178,658,1321", alt: "giants.gif", title: "Гиганты", href: "http://postnagualism.com/Bruja/index.php?topic=76283.0" },
        { shape: "rect", coords: "707,1163,755,1314", alt: "tower.gif", title: "Башня", href: "http://postnagualism.com/Bruja/index.php?topic=76366.0" },
        { shape: "rect", coords: "1058,1056,1154,1268", alt: "tornado.gif", title: "Ураган", href: "http://postnagualism.com/Bruja/index.php?topic=76257.0" },
        { shape: "rect", coords: "1295,1016,1412,1309", alt: "deluge.gif", title: "Потоп", href: "http://postnagualism.com/Bruja/index.php?topic=76365.0" },
        { shape: "rect", coords: "1129,1236,1338,1364", alt: "tsunami.gif", title: "Цунами. Волна", href: "http://postnagualism.com/Bruja/index.php?topic=76364.0" },
        { shape: "rect", coords: "1173,1340,1267,1464", alt: "volcano.gif", title: "Вулкан", href: "http://postnagualism.com/Bruja/index.php?topic=76363.0" },
        { shape: "rect", coords: "1195,1450,1354,1516", alt: "whale.gif", title: "Кит", href: "http://postnagualism.com/Bruja/index.php?topic=76362.0" },
        { shape: "rect", coords: "1070,1412,1120,1476", alt: "seaport.gif", title: "Порт", href: "http://postnagualism.com/Bruja/index.php?topic=76276.0" },
        { shape: "rect", coords: "1097,1505,1141,1532", alt: "sea-temple.gif", title: "Морской Храм", href: "http://postnagualism.com/Bruja/index.php?topic=76361.0" },
        { shape: "rect", coords: "1138,1539,1219,1601", alt: "end.gif", title: "Край Мира", href: "http://postnagualism.com/Bruja/index.php?topic=76360.0" },
        { shape: "rect", coords: "1060,1537,1132,1580", alt: "ziggurat.gif", title: "Зиккурат", href: "http://postnagualism.com/Bruja/index.php?topic=76268.0" },
        { shape: "rect", coords: "984,1563,1052,1599", alt: "oasis.gif", title: "Оазис", href: "http://postnagualism.com/Bruja/index.php?topic=76359.0" },
        { shape: "rect", coords: "996,1518,1023,1576", alt: "columns.gif", title: "Колонны", href: "http://postnagualism.com/Bruja/index.php?topic=76267.0" },
        { shape: "rect", coords: "932,1541,981,1576", alt: "pyramids.gif", title: "Пирамиды", href: "http://postnagualism.com/Bruja/index.php?topic=76358.0" },
        { shape: "rect", coords: "961,1481,1003,1527", alt: "bridge.gif", title: "Мост", href: "http://postnagualism.com/Bruja/index.php?topic=76357.0" },
        { shape: "rect", coords: "997,1425,1058,1481", alt: "seaside-town.gif", title: "Городок", href: "http://postnagualism.com/Bruja/index.php?topic=76356.0" },
        { shape: "rect", coords: "744,1514,791,1584", alt: "apocalypse.gif", title: "Апокалипсис", href: "http://postnagualism.com/Bruja/index.php?topic=76354.0" },
        { shape: "rect", coords: "621,1531,740,1593", alt: "post-apocalyptic.gif", title: "Руины, Пост-апокалипсис", href: "http://postnagualism.com/Bruja/index.php?topic=76269.0" },
        { shape: "rect", coords: "949,1243,1000,1294", alt: "shelter.gif", title: "Грот", href: "http://postnagualism.com/Bruja/index.php?topic=76355.0" },
        { shape: "rect", coords: "833,1471,918,1528", alt: "tunnel.gif", title: "Тунель", href: "http://postnagualism.com/Bruja/index.php?topic=76353.0" },
        { shape: "rect", coords: "704,1465,760,1497", alt: "stop.gif", title: "Ожидание", href: "http://postnagualism.com/Bruja/index.php?topic=76352.0" },
        { shape: "rect", coords: "561,1435,688,1508", alt: "transport.gif", title: "Транспорт", href: "http://postnagualism.com/Bruja/index.php?topic=76351.0" },
        { shape: "rect", coords: "511,1477,568,1514", alt: "crypts.gif", title: "Склепы", href: "http://postnagualism.com/Bruja/index.php?topic=76350.0" },
        { shape: "rect", coords: "461,1513,591,1581", alt: "cemetery.gif", title: "Кладбище", href: "http://postnagualism.com/Bruja/index.php?topic=76349.0" },
        { shape: "rect", coords: "459,1477,503,1510", alt: "boat.gif", title: "Лодка, Причал", href: "http://postnagualism.com/Bruja/index.php?topic=76348.0" },
        { shape: "rect", coords: "334,1479,450,1575", alt: "lake.gif", title: "Озеро", href: "http://postnagualism.com/Bruja/index.php?topic=76347.0" },
        { shape: "rect", coords: "339,1575,434,1662", alt: "gnomes.gif", title: "Жители подземных туннелей", href: "http://postnagualism.com/Bruja/index.php?topic=76273.0" },
        { shape: "rect", coords: "454,1429,549,1474", alt: "well.gif", title: "Колодец", href: "http://postnagualism.com/Bruja/index.php?topic=76285.0" },
        { shape: "rect", coords: "460,1368,575,1432", alt: "village.gif", title: "Деревня", href: "http://postnagualism.com/Bruja/index.php?topic=76346.0" },
        { shape: "rect", coords: "327,1375,448,1462", alt: "forest.gif", title: "Лес. Сказочные существа и животные", href: "http://postnagualism.com/Bruja/index.php?topic=76345.0" },
        { shape: "rect", coords: "565,1343,646,1411", alt: "market.gif", title: "Рынок, Базар, Ярмарка", href: "http://postnagualism.com/Bruja/index.php?topic=76344.0" },
        { shape: "rect", coords: "649,1300,697,1393", alt: "college.gif", title: "Музей, Театр, Колледж и т.д.", href: "http://postnagualism.com/Bruja/index.php?topic=76343.0" },
        { shape: "rect", coords: "693,1412,752,1446", alt: "house.gif", title: "Дом Сновидящего", href: "http://postnagualism.com/Bruja/index.php?topic=76342.0" },
        { shape: "rect", coords: "699,1379,748,1409", alt: "room.gif", title: "Спальня", href: "http://postnagualism.com/Bruja/index.php?topic=76341.0" },
        { shape: "rect", coords: "695,1308,751,1378", alt: "neighbors.gif", title: "Соседи. Крыши", href: "http://postnagualism.com/Bruja/index.php?topic=76340.0" },
        { shape: "rect", coords: "750,1355,797,1450", alt: "streets.gif", title: "Переулки, Улицы", href: "http://postnagualism.com/Bruja/index.php?topic=76339.0" },
        { shape: "rect", coords: "750,1272,801,1368", alt: "megapolis.gif", title: "Мегаполис", href: "http://postnagualism.com/Bruja/index.php?topic=76338.0" },
        { shape: "rect", coords: "799,1297,833,1360", alt: "church.gif", title: "Храм. Конфессии", href: "http://postnagualism.com/Bruja/index.php?topic=76274.0" },
        { shape: "rect", coords: "843,1329,918,1425", alt: "town-hall.gif", title: "Ратуша. Площадь", href: "http://postnagualism.com/Bruja/index.php?topic=76337.0" },
        { shape: "rect", coords: "924,1291,972,1343", alt: "factory.gif", title: "Завод", href: "http://postnagualism.com/Bruja/index.php?topic=76336.0" },
        { shape: "rect", coords: "975,1307,1018,1333", alt: "garbage-dump.gif", title: "Свалка. Забор", href: "http://postnagualism.com/Bruja/index.php?topic=76286.0" },
        { shape: "rect", coords: "935,1348,1029,1378", alt: "park.gif", title: "Парк, Детская Площадка", href: "http://postnagualism.com/Bruja/index.php?topic=76279.0" },
        { shape: "rect", coords: "933,1377,1070,1429", alt: "circus.gif", title: "Цирк, Аквапарк", href: "http://postnagualism.com/Bruja/index.php?topic=76335.0" },
        { shape: "rect", coords: "410,1276,553,1358", alt: "tribes.gif", title: "Племена Кочевников. Шаман", href: "http://postnagualism.com/Bruja/index.php?topic=76282.0" },
        { shape: "rect", coords: "134,1465,299,1572", alt: "swamps.gif", title: "Болота", href: "http://postnagualism.com/Bruja/index.php?topic=76281.0" },
        { shape: "rect", coords: "206,1380,299,1458", alt: "settlement-on-the-swamp.gif", title: "Поселение на Болоте", href: "http://postnagualism.com/Bruja/index.php?topic=76280.0" },
        { shape: "rect", coords: "39,1367,167,1510", alt: "swamp-warlock.gif", title: "Болотный Колдун", href: "http://postnagualism.com/Bruja/index.php?topic=76334.0" },
        { shape: "rect", coords: "85,1263,237,1370", alt: "enchanted-forest.gif", title: "Зачарованный Лес", href: "http://postnagualism.com/Bruja/index.php?topic=76265.0" },
        { shape: "rect", coords: "58,1577,326,1796", alt: "naga.gif", title: "Мир Змеелюдей-Нагов", href: "http://postnagualism.com/Bruja/index.php?topic=76333.0" },
        { shape: "rect", coords: "351,1666,433,1786", alt: "labyrinth.gif", title: "Лабиринт", href: "http://postnagualism.com/Bruja/index.php?topic=76332.0" },
        { shape: "rect", coords: "437,1584,576,1694", alt: "tombs.gif", title: "Подземные захоронения, Курганы", href: "http://postnagualism.com/Bruja/index.php?topic=76331.0" },
        { shape: "rect", coords: "629,1601,750,1682", alt: "prisons.gif", title: "Казематы, Темницы, Тюрьмы", href: "http://postnagualism.com/Bruja/index.php?topic=76330.0" },
        { shape: "rect", coords: "752,1646,880,1747", alt: "slums.gif", title: "Трущобы, Квартал Нищих", href: "http://postnagualism.com/Bruja/index.php?topic=76329.0" },
        { shape: "rect", coords: "868,1627,965,1768", alt: "guardian.gif", title: "Страж Порога, Сфинкс, Гаргулья", href: "http://postnagualism.com/Bruja/index.php?topic=76328.0" },
        { shape: "rect", coords: "799,1754,883,1842", alt: "descent.gif", title: "Спуск в НижнийМир, Лестница Вниз", href: "http://postnagualism.com/Bruja/index.php?topic=76327.0" },
        { shape: "rect", coords: "697,1749,780,1854", alt: "heresy.gif", title: "Перевернутые Смыслы, Ересь", href: "http://postnagualism.com/Bruja/index.php?topic=76326.0" },
        { shape: "rect", coords: "586,1691,688,1756", alt: "ritual.gif", title: "Ритуал", href: "http://postnagualism.com/Bruja/index.php?topic=76325.0" },
        { shape: "rect", coords: "594,1761,693,1880", alt: "dedication.gif", title: "Посвящение", href: "http://postnagualism.com/Bruja/index.php?topic=76324.0" },
        { shape: "rect", coords: "515,1703,581,1766", alt: "well-of-darkness.gif", title: "Подземный Колодец Тьмы. Призывающий", href: "http://postnagualism.com/Bruja/index.php?topic=76258.0" },
        { shape: "rect", coords: "470,1767,523,1831", alt: "book.gif", title: "Книга Бытия. Книга Жизни", href: "http://postnagualism.com/Bruja/index.php?topic=76284.0" },
        { shape: "rect", coords: "532,1784,557,1884", alt: "blood.gif", title: "Подземные Звезды", href: "http://postnagualism.com/Bruja/index.php?topic=76323.0" },
        { shape: "rect", coords: "573,1882,697,1974", alt: "dark-energy.gif", title: "Темная Энергия,Темная Материя", href: "http://postnagualism.com/Bruja/index.php?topic=76271.0" },
        { shape: "rect", coords: "704,1863,801,1986", alt: "deep.gif", title: "Пропасть, Провал, Бездна", href: "http://postnagualism.com/Bruja/index.php?topic=76322.0" },
        { shape: "rect", coords: "144,1835,270,2026", alt: "beast.gif", title: "Зверо-люди, Иная эволюция", href: "http://postnagualism.com/Bruja/index.php?topic=76321.0" },
        { shape: "rect", coords: "1006,1766,1050,1820", alt: "spirits-of-water.gif", title: "Духи Воды", href: "http://postnagualism.com/Bruja/index.php?topic=76320.0" },
        { shape: "rect", coords: "972,1619,1084,1765", alt: "execution.gif", title: "Палач, Казнь, Наказание", href: "http://postnagualism.com/Bruja/index.php?topic=76319.0" },
        { shape: "rect", coords: "1089,1618,1227,1724", alt: "underwater.gif", title: "Подводный Мир и его обитатели", href: "http://postnagualism.com/Bruja/index.php?topic=76318.0" },
        { shape: "rect", coords: "1225,1528,1385,1885", alt: "dagon.gif", title: "Великий Змей, Глубоководное Чудовище, Дагон", href: "http://postnagualism.com/Bruja/index.php?topic=76317.0" },
        { shape: "rect", coords: "1095,1795,1235,1977", alt: "tentacles.gif", title: "Великий Темный Жрец, Щупальца, Ктулху", href: "http://postnagualism.com/Bruja/index.php?topic=76316.0" },
        { shape: "rect", coords: "988,1895,1098,2010", alt: "fire-spirits.gif", title: "Духи Огня", href: "http://postnagualism.com/Bruja/index.php?topic=76294.0" },
        { shape: "rect", coords: "908,1894,978,2018", alt: "crystals.gif", title: "Духи Земли, Пещеры с Кристаллами", href: "http://postnagualism.com/Bruja/index.php?topic=76293.0" },
        { shape: "rect", coords: "807,1916,902,2075", alt: "black-world.gif", title: "Темный Предел, Черный Мир", href: "http://postnagualism.com/Bruja/index.php?topic=76272.0" },
        { shape: "rect", coords: "910,2022,1140,2157", alt: "burning.gif", title: "Земли Огня,Горящие Земли,Огненный Ад", href: "http://postnagualism.com/Bruja/index.php?topic=76291.0" },
        { shape: "rect", coords: "1108,1994,1406,2389", alt: "moon.gif", title: "Луна. Психическая Энергия. Тайны", href: "http://postnagualism.com/Bruja/index.php?topic=76260.0" },
        { shape: "rect", coords: "491,1838,588,2097", alt: "collapse.gif", title: "Великий Дракон. Мать Дракон Пьющая Звезды Жизни", href: "http://postnagualism.com/Bruja/index.php?topic=76315.0" },
        { shape: "rect", coords: "604,1973,807,2152", alt: "creation.gif", title: "Область Сотворения. Проявление из Небытия", href: "http://postnagualism.com/Bruja/index.php?topic=76314.0" },
        { shape: "rect", coords: "299,1965,554,2157", alt: "lizards.gif", title: "Ящеры, Динозавры, Дети Великого Дракона", href: "http://postnagualism.com/Bruja/index.php?topic=76313.0" },
        { shape: "rect", coords: "280,1804,372,1971", alt: "reptilians.gif", title: "Люди-Ящеры, Миры Рептилоидов", href: "http://postnagualism.com/Bruja/index.php?topic=76312.0" },
        { shape: "rect", coords: "379,1789,461,1903", alt: "pipes.gif", title: "Трубы, Подземные тоннели", href: "http://postnagualism.com/Bruja/index.php?topic=76307.0" },
        { shape: "rect", coords: "11,2086,419,2529", alt: "saturn.gif", title: "Сатурн. Миры Измененного Времени, Время", href: "http://postnagualism.com/Bruja/index.php?topic=76275.0" },
        { shape: "rect", coords: "448,2346,653,2538", alt: "planet.gif", title: "Планета", href: "http://postnagualism.com/Bruja/index.php?topic=76306.0" },
        { shape: "rect", coords: "905,2280,1119,2488", alt: "mars.gif", title: "Марс. Мужественность. Агрессия", href: "http://postnagualism.com/Bruja/index.php?topic=76305.0" },
        { shape: "rect", coords: "1131,2368,1273,2519", alt: "venus.gif", title: "Венера. Женственность. Чувственность", href: "http://postnagualism.com/Bruja/index.php?topic=76304.0" },
        { shape: "rect", coords: "519,2160,922,2325", alt: "demon.gif", title: "Черный Человек. ЛичныйДемон. ЧерныйМонах", href: "http://postnagualism.com/Bruja/index.php?topic=76263.0" },
        { shape: "rect", coords: "9,66,276,647", alt: "space.gif", title: "Космос. Космические путешествия", href: "http://postnagualism.com/Bruja/index.php?topic=76303.0" },
        { shape: "rect", coords: "775,1227,871,1299", alt: "airport.gif", title: "Аэропорт. Самолет. Перелет", href: "http://postnagualism.com/Bruja/index.php?topic=76296.0" },
        { shape: "rect", coords: "763,1465,828,1519", alt: "railway.gif", title: "Железная Дорога", href: "http://postnagualism.com/Bruja/index.php?topic=76302.0" },
        { shape: "rect", coords: "1013,1483,1074,1519", alt: "river.gif", title: "Река", href: "http://postnagualism.com/Bruja/index.php?topic=76301.0" },
        { shape: "rect", coords: "910,1515,990,1543", alt: "desert.gif", title: "Пустыня", href: "http://postnagualism.com/Bruja/index.php?topic=76300.0" },
        { shape: "rect", coords: "1129,1436,1189,1492", alt: "sea.gif", title: "Море", href: "http://postnagualism.com/Bruja/index.php?topic=76289.0" },
        { shape: "rect", coords: "797,1373,856,1466", alt: "city.gif", title: "Город", href: "http://postnagualism.com/Bruja/index.php?topic=76299.0" },
        { shape: "rect", coords: "716,992,864,1064", alt: "mountain.gif", title: "Горы", href: "http://postnagualism.com/Bruja/index.php?topic=76298.0" },
        { shape: "rect", coords: "800,1543,883,1630", alt: "war.gif", title: "Война", href: "http://postnagualism.com/Bruja/index.php?topic=76297.0" },
    ]
}

function clearHTML(nameBlock) {
    nameBlock.innerHTML = '';
}

function reload() {
    location.href = location.pathname;
}

function start() {
    image = document.getElementById("image");
    frame = document.getElementById("frame");
    text = document.getElementById("text");
    modal = document.getElementById("modal");
    map = document.getElementById('map');
    blend = document.getElementById("blend");
    containerImg = document.getElementById('containerImg');
    clearHTML(map);
    createAttributeMapArea(areasObject.areas);
    calcAreaCoords();
}

function createAttributeMapArea(nameObjectAreas) {
    let areasArray = nameObjectAreas;
    areasArray.forEach(function (area) {
        mapArea = document.createElement('area');
        mapArea.setAttribute("shape", area.shape);
        mapArea.setAttribute("coords", area.coords);
        mapArea.setAttribute("alt", area.alt);
        mapArea.setAttribute("class", area.class);
        mapArea.setAttribute("title", area.title);
        mapArea.setAttribute("data-title", area.description);
        mapArea.setAttribute("href", area.href);
        mapArea.onmouseover = function () {
            showImg(this)
        }
        map.appendChild(mapArea);
    });
}

function calcAreaCoords() {
    let w = image.naturalWidth;
    let h = image.naturalHeight;
    let width = image.clientWidth;
    let height = image.clientHeight;
    let areas = map.areas;
    for (let i = 0; i < areas.length; i++) {
        let area = areas[i];
        let coord = area.coords.split(",");
        let crd2 =  [];
        if(coord.length > 4){
            area.coords = "";
            for(let i = 0; i < coord.length; i++){
                let ar = coord[i];
                let crd = ar.split(" ");
                let first = crd[0] * width / w;
                let second = crd[1] * height / h;
                
                area.coords +=`${first} ${second},`

                crd2.push(first + " " + second);
            }
        } else {
            let left = parseInt(coord[0] * width / w);
            let top = parseInt(coord[1] * height / h);
            let right = parseInt(coord[2] * width / w);
            let bottom = parseInt(coord[3] * height / h);
            area.coords = left + "," + top + "," + right + "," + bottom;
        }
       
    }

    var fontSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
    var size = parseInt(fontSize) * width / w;
    var size = parseInt(size + 0.5);
    // if (size < 8) size = 8;
    // text.style.fontSize = size + 'px';
}

function showImg(obj) {
    curarea = obj;
    let style = frame.style;
    let coord = obj.coords.split(",");
    if(coord.length !== 4){
        console.log('poly');
    }
    //
    blend.style.left = style.left = parseInt(coord[0]) + image.offsetLeft;
    blend.style.top = style.top = coord[1];
    blend.style.width = style.width = coord[2] - coord[0];
    blend.style.height = style.height = coord[3] - coord[1];
    blend.style.visibility = style.visibility = "visible";
     //
    clearHTML(text);
    let textBlock = document.createElement('div');
    textBlock.className = 'text-block';
    textBlock.innerHTML = obj.title;
    text.appendChild(textBlock);

    let descriptionBlock = document.createElement('div');
    descriptionBlock.className = 'text-block-description';
    let areaDescripton = obj.dataset.title;
    if( areaDescripton !== "undefined" ) { 
       descriptionBlock.innerHTML = areaDescripton;
    }else{
       descriptionBlock.innerHTML = ''; 
    }
   
    text.appendChild(descriptionBlock);

    // textLink = document.createElement('a');
    // textLink.className = 'text-link';
    // textLink.setAttribute('href', obj.href);
    // textLink.innerHTML = 'Читать в источнике';
    // text.appendChild(textLink);


    // text.alt = obj.title;

    // text.style.left = parseInt(style.left);
    // text.style.top = parseInt(coord[3]) ;
    // text.style.width = parseInt(style.width);
    text.style.visibility = style.visibility = "visible";
    modal.style.display = style.display = "flex";

    let file = 'images/' + obj.alt;
    frame.style.backgroundImage = "url(" + file + ")";
}

function mouseOut() {
    frame.style.visibility = "hidden";
    blend.style.visibility = "hidden";
    text.style.visibility = "hidden";
    modal.style.display = "none";
}

function clickOnImg() {
    if ('ontouchstart' in window)  // if touchpad
    {
        let now = new Date().getTime();
        let timesince = now - mylatesttap;
        mylatesttap = now;
        if (timesince < 1000 && timesince > 0)  // dblclick
        {
            fdblclick();
        }
        return;
    }
    fdblclick();
}

function fdblclick() {
    if (curarea) location.href = curarea.href;
}


function showAllImg() {
    start();
    let areas = document.getElementById("map").areas;
    for (let i = 0; i < areas.length; i++) {
        let area = areas[i];
        let coord = area.coords.split(",");
        let file = 'images/' + area.alt;
        let containerImgBlock;
        let containerFrameBlock;
        createBlock(i, containerImgBlock, 'blend', coord);
        createBlock(i, containerFrameBlock, 'frame', coord, file);
    }
}

function createBlock(i, nameBlock, className, coord, file) {
    let style = frame.style;
    nameBlock = document.createElement('div');
    nameBlock.className = className;
    //
    nameBlock.style.left = style.left = parseInt(coord[0]) + image.offsetLeft;
    nameBlock.style.top = style.top = coord[1];
    nameBlock.style.width = style.width = coord[2] - coord[0];
    nameBlock.style.height = style.height = coord[3] - coord[1];
    nameBlock.style.visibility = style.visibility = "visible";
    //
    nameBlock.style.zIndex = style.zIndex = i;
    if (file) { nameBlock.style.backgroundImage = "url(" + file + ")"; }
    containerImg.appendChild(nameBlock);
}

function hidewAllImg() {
    clearHTML(containerImg);
}

function showThreeWorld() {
    clearHTML(map);
    clearHTML(containerImg);
    createAttributeMapArea(areasObject.areasWorld);
    calcAreaCoords();
}
function hideThreeWorld() {
    clearHTML(map);
    start();
}








