
let hero = {
    health: 30,
    damage: 15,
    money: 0
};

let maxim = {
    health: 20,
    damage: 10,
    money: 20

};

let zina = {
    health: 40,
    damage: 20,
    money: 40

};

let sofia = {
    health: 70,
    damage: 25,
    money: 60

};

let vasiliy = {
    health: 85,
    damage: 30,
    money: 80

};

let boss = {
    health: 100,
    damage: 40,
    money: 1000
};


let items = ["1.Грязная картошина", "2.Чёрствая булочка", "3.Огромный огурец", "4.Клетчатая сумка"];
let itemsPrice = [10, 25, 50, 100];

let tellStory = function () {
    alert("На Дарницком рынке происходит полнейший беспредел: четверо продавцов во главе с начальником рынка разделили между собой самые лакомые торговые точки и прижимают других честных продавцов, таких как Вы. Эта несправедливость просто не может остаться незамеченной! Победите начальника, чтобы вернуть рынку былой порядок.");
}

let openShop = function () {
    let product = +prompt(`В наличии предмет "${items[0]}" по цене ${itemsPrice[0]} гривен, "${items[1]}" по цене ${itemsPrice[1]} гривен, "${items[2]}" по цене ${itemsPrice[2]} гривен и "${items[3]}" по цене ${itemsPrice[3]} гривен. Чтобы купить предмет, введите его номер в списке.`);
    switch (product) {
        case 1:
            let confirmProduct0 = +prompt(`Предмет "${items[0]}" по цене ${itemsPrice[0]} гривен даст Вам 20 единиц здоровья. Введите 1 для покупки.`);

            if (confirmProduct0 == 1) {
                if (hero.money >= itemsPrice[0]) {
                    hero.health += 20;
                    hero.money -= itemsPrice[0];
                }

                else {
                    alert("Недостаточно денег для покупки");
                }
            }

            else {
                alert("Вы отказались от покупки");
            }
            break;

        case 2:
            let confirmProduct1 = +prompt(`Предмет "${items[1]}" по цене ${itemsPrice[1]} гривен даст Вам бонус в 5 единиц к урону. Введите 1 для покупки.`);
    
            if (confirmProduct1 == 1) {
                if (hero.money >= itemsPrice[1]) {
                    hero.damage += 5;
                    hero.money -= itemsPrice[1];
                }
    
                else {
                    alert("Недостаточно денег для покупки");
                }
            }
    
            else {
                alert("Вы отказались от покупки");
            }
            break;

        case 3:
            let confirmProduct2 = +prompt(`Предмет "${items[2]}" по цене ${itemsPrice[2]} гривен даст Вам 50 единиц здоровья. Введите 1 для покупки.`);      
            if (confirmProduct2 == 1) {
                if (hero.money >= itemsPrice[2]) {
                    hero.health += 50;
                    hero.money -= itemsPrice[2];
                }
        
                else {
                    alert("Недостаточно денег для покупки");
                }
            }
        
            else {
                alert("Вы отказались от покупки");
            }
            break;

        case 4:
            let confirmProduct3 = +prompt(`Предмет "${items[3]}" по цене ${itemsPrice[3]} гривен даст Вам бонус в 15 единиц к урону. Введите 1 для покупки.`);      
            if (confirmProduct3 == 1) {
                if (hero.money >= itemsPrice[3]) {
                    hero.damage += 15;
                    hero.money -= itemsPrice[3];
                }
            
                else {
                    alert("Недостаточно денег для покупки");
                }
            }
            
            else {
                alert("Вы отказались от покупки");
            }
            break;


        default: 
            alert("Вы ввели неверное значение. Пожалуйста, введите цифру от 1 до 4.");
            break;
    }
}

let showStats = function () {
    alert(`Ваш герой наносит ${hero.damage} единиц урона, его здоровье равно ${hero.health}, а количество денег - ${hero.money}. `);
}

let chooseOption = function (enemy) {
    let option = +prompt("Вы хотите вступить в поединок с противником или узнать его характеристики? Нажмите 1 для получения характеристик и 2 для схватки.");

    if (option == 1) {
        alert(`Этот противник наносит ${enemy.damage} единиц урона, его здоровье равно ${enemy.health}, а в случае победы добыча составит ${enemy.money} гривен.`);
    }
    else if (option == 2) {

        if (hero.health < enemy.damage) {
            alert("Вы проиграли! Придётся начинать сначала...");
            returnHome();
        }

        else {
            battle(enemy);
        }
        
    }

    else {
        alert("Пожалуйста, введите цифру 1 либо цифру 2.");
    }
}

let battle = function (enemy) {

    let hp = enemy.health;

    for (var i1 = 0; enemy.health > 0; i1++) {
        enemy.health -= hero.damage;
    }

    for (var i2 = 0; hero.health > 0; i2++) {
        hero.health -= enemy.damage;
    }

    if (i1 < i2) {
        alert("Враг побеждён! Отличная работа!");
        hero.money += enemy.money;
        hero.health += (i2 - i1) * enemy.damage;
        enemy.health = hp;
        if (enemy == boss) {
            alert("Владелец рынка повержен! Игра успешно пройдена.");
        }
    }

    else {
        alert("Вы проиграли! Придётся начинать сначала...");
        returnHome();
    }

}

let returnHome = function () {
    document.location.href = "Начать игру.html";
}


