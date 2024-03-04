// 東京に行きます
// 大阪に行きます
// 京都に行きます

// let city = ["東京", "大阪", "京都",];
// for (let i =0; i < 3; i++) {
//     console.log(city[i] + "に行きます");
// }


//リンゴとバナナ
// 1 2 
// let fruit1 = "りんご";
// let fruit2 = "バナナ";

// console.log(fruit1 + 'と' + fruit2);




/* このプールを使用できません */
// let age = 10;
// let height = 110;

// if ((age > 7) && (height == 120)) {
//     console.log('このプールを使用できます');
// } else {
//     console.log('このプールを使用できません');
// }


/* 換気してね */
//1
// let distance = 2;
// let time = 25;

// if ((distance < 2) || (time > 15)) {
//     console.log('換気してね');
// } else {
//     console.log('手洗いとうがいを忘れないでね');
// }



/* ペンギンは海の生き物です */
/* ペンギンは鳥です */
/* イルカは海の生き物です */
/* カラスは鳥です */


// let animal = ["ペンギン", "イルカ", "カラス"];

// for (let i =0; i < 3; i++) {
//     if (i != 2) {
//         console.log(animal[i] + 'は海の生き物です');
//     }
//     if ((i == 0) || (i == 2)) {
//         console.log(animal[i] + 'は鳥です');
//     }    
// }

/* 
    火
    水
    木
*/
// 1 
// let weekday = ["月", "火", "水", "木", "金", ];

// for (let i = 0; i < 5; i++) {
//     if  ((i > 0) && (i < 4)) {
//         console.log(weekday[i]);
//     }
// }



/* 
    ジャンプ！
    ジャンプ！
    2回ジャンプしたよ
*/
//1 4
// let comment = "ジャンプしよう";

// if (!(comment == "休憩しよう")) {
//     for (let i =0; i < 2; i++) {
//         console.log('ジャンプ！');
//     }    
// }
// console.log('2回ジャンプしたよ');

/* 火曜日は雨 */
//3 4
// let weekday = ["月曜日", "火曜日", "水曜日",];
// let weather = ["晴れ", "雨", "くもり",];

// for (let i =0; i < 3; i++) {
//     if ((weekday[1] == "火曜日") && (weather[i] == "雨")) {
//         console.log(weekday[i] + "は" + weather[i]);
//     }
// }


/* ストロベリー */
// let flavors = ["バニラ", "チョコ", "抹茶", "ストロベリー", ];
// console.log(flavors[3]);
//2

// let arr = ["1", "2", "3"];
// let str = "";

// for (let i =0; i < 3; i++) {
//     if (i != 2) {
//         str = str + arr[i];
//     }
// }
// console.log(str);

/* 乗り物に乗れます */
//3 4 
// let ticket = "ある";
// let height = 130;

// if ((ticket != "ない") && (height > 120)) {
//     console.log('乗り物にのれます');
// } else {
//     console.log('乗り物に乗れません');
// }

/* 商品は輸入可能です */
//2 3

// let wallet = 100;
// let icCard = 300;
// let price = 150;
// let judge;

// if ((wallet > price) || (icCard > price)){
//     judge = "可能";
// } else {
//     judge = "不可能";
// }
// console.log('商品は購入' + judge + 'です。');

//1
// let pieces = 5;
// let member = 10;
// let  str;

// if (!(pieces / member < 1)) {
//     str = "足りる";
// } else {
//     str = "足りない";
// }
// console.log('人数分' + str);


/* 
    0
    1
    4
*/

// for (let i =0; i < 5; i++) {
//     if ((i < 2) || (i == 4)) {
//         console.log(i);
//     }
// }


/* 
    夏と言えば海
    夏と言えば山
    夏と言えばかき氷
    夏と言えば花火
*/

// let arr = ["海", "山", "かき氷", "花火", ];

// for (let i =0; i < 4; i++) {
//     console.log(`夏と言えば${arr[i]}`);
// }



/* 二郎は馬に乗ることができます */


// let age = 5;
// let height = 90;
// let friends = ["太郎", "花子", "二郎", ];

// if ((age > 4) || (height > 100)) {
//     console.log(`${friends[2]}は馬に乗ることができます`);
// } else {
//     console.log(`${friends[2]}は馬に乗ることができません}`);
// }

//名前は花子

// let name = ["太郎", "花子", "次郎", ];
// let num = 5;

// if (num != 10) {
//     console.log('名前は');
// }
// console.log(name[1]);

// const comment = () => {
//     if (true) {
//         console.log('紅葉を見に行こう');
//     } else {
//         console.log('カフェに行こう');
//     }
// };
// console.log('天気がいいね');
// comment();


// const notice = () => {
//     console.log('完売しました');
// };

// const sell = (num1, num2) => {
//     return num1 - num2;
// };
//     let item = 6;

//     for (let i = 0; i < 3 ; i++) {
//         item = sell(item, 2);
//         if (item == 0) {
//             notice()
//         }
//         console.log(`残りは${item}個です`);
//     }

// const judge = (value) => {
//     if (value > 0) {
//         return true;
//     }
//     return false;
// };

// let arr = [-1, 0, 1];

// for (let i =0; i < 3; i++) {
//     if (judge(arr[i])) {
//         console.log(`${arr[i]}は正の数です`);
//     }
// }

// let text;
// let year = "2022";

// if (true) {
//     text = "今年は"
// }

// console.log(text + year);


//1500ポイント

// let point = 100;

// const triple = () => {
//     let ans = point * 3;

//     return ans
// };

// point = point + 400;
// console.log(`${triple()}ポイント`);



// function checkNumber(num) {
//     if (num > 0) {
//         return "OK"; // numが正の数の場合、ここで関数が終了する
//     }
//     return "Non-positive"; // numが0または負の数の場合、ここで関数が終了する
// }

// console.log(checkNumber(5)); // 出力: Positive
// console.log(checkNumber(-2)); // 出力: Non-positive

// let trueFalse = [false, true, false, false, true];
// let strNumbers = ["1", "2", "3", "4", "5", ];
// let sum = 0;

// for (let i =0; i < 5; i++) {
//     if (trueFalse[i]) {
//         sum = sum + Number(strNumbers[i]);
//         console.log(sum);
//     }
// }

// let time;

// if ((1 + 1 == 3) == false) {
//     time = "昼";
// } else {
//     time = "夜"
// }
// console.log(time);

const score = () => {
    let japanese = 50;
    let math = 100;
    let english = 50;
    let total = japanese + math + english;

    return math;
};

console.log(`テストの合計点は${score()}点です`);



const text = () => {
    console.log("text");
};

text();

console.log(text);
