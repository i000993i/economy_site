const COMMANDS_DATA=[
{cmd:"/balance",aliases:"/bal",desc:"Показать баланс",category:"Экономика"},
{cmd:"/work",aliases:"/job",desc:"Работать и заработать",category:"Экономика"},
{cmd:"/shop",aliases:"/store",desc:"Магазин предметов",category:"Бизнес"},
{cmd:"/buy",aliases:"/purchase",desc:"Купить предмет",category:"Бизнес"},
{cmd:"/sell",aliases:"/trade",desc:"Продать предмет",category:"Бизнес"},
{cmd:"/mine",aliases:"/dig",desc:"Добыча ресурсов",category:"Добыча"},
{cmd:"/craft",aliases:"/make",desc:"Создать предмет",category:"Добыча"},
{cmd:"/bank",aliases:"/deposit",desc:"Банковские операции",category:"Банк"},
{cmd:"/loan",aliases:"/credit",desc:"Взять кредит",category:"Банк"},
{cmd:"/house",aliases:"/home",desc:"Управление недвижимостью",category:"Недвижимость"},
{cmd:"/farm",aliases:"/garden",desc:"Фермерство",category:"Ферма"},
{cmd:"/casino",aliases:"/bet",desc:"Азартные игры",category:"Игры"},
{cmd:"/top",aliases:"/leaderboard",desc:"Рейтинг игроков",category:"Топ"},
{cmd:"/profile",aliases:"/me",desc:"Профиль игрока",category:"Профиль"},
{cmd:"/daily",aliases:"/bonus",desc:"Ежедневный бонус",category:"Бонусы"},
{cmd:"/giveaway",aliases:"/raffle",desc:"Розыгрыши",category:"Розыгрыши"},
{cmd:"/help",aliases:"/commands",desc:"Список команд",category:"Другое"}
];
const CATEGORY_CLASS_MAP={"Экономика":"category-economy","Бизнес":"category-business","Добыча":"category-mining","Банк":"category-bank","Недвижимость":"category-realty","Ферма":"category-farm","Игры":"category-games","Топ":"category-top","Профиль":"category-profile","Бонусы":"category-bonus","Розыгрыши":"category-giveaway","Другое":"category-other"};