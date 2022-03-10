
/** 
 * 分割代入
 */

 //オブジェクトの場合
 const myProfile = {
   name:"じゃけぇ",
   age: 28.
 };
 
 const message1 =`名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
 console.log(message1);

 
 const{ name ,age } = myProfile;
 const message2 =`名前は${name}です。年齢は${age}歳です。`;
 console.log(message2); */


//配列の場合
/const myProfile = [`じゃけぇ`,28];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

const[name,age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4); 



/**
 * デフォルト値、引数など
 */
// 引数がデフォルトの場合に備えて初期値を設定するとよい
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello("じゃけぇ");




/**
 * スプレッド構文   ... 配列  →  配列の中身を順番に処理して展開
 */
//配列の展開
/const arr1 = [1,2]; 
/* console.log(arr1);
console.log(...arr1); */

 const sumFunc = (num1,num2) =>console.log(num1+num2);
sumFunc(arr1[0],arr1[1]); 
//スプレッド構文使用すると(51行目と53行目は同じことをしてる)
/sumFunc(...arr1); 

// まとめる
 const arr2 =[1,2,3,4,5];
const [num1,num2,...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);
 */

 // 配列のコピー,結合
const arr4 = [10,20];
const arr5 = [30,40];

const arr6 = [...arr4];
console.log(arr6);
 //スプレッド構文でコピーした配列は値を更新していくことができる
 arr6[0] = 100;
 console.log(arr6);
 console.log(arr4);

const arr7 = [...arr4,...arr5];
console.log(arr7);
 

// イコールでコピーすると元の配列にも影響を与えてしまうので、上記のコピー方法がよい
/const arr8 =arr4;
arr8[0] = 100;
console.log(arr8);
console.log(arr4);
 





 /**
  * map,filterを使った配列の処理
  */
 // 従来はfor文を使用
 const nameArr = ["田中","ヤマダ","じゃけぇ"];
  for(let index = 0;index <nameArr.length; index++){
    console.log(`${index +1}番目は${nameArr[index]}です`);
 } 

 //①mapで配列を生成
/ const nameArr2 = nameArr.map((name)=>{
   return name;
 })
 console.log(nameArr2); 

//②mapでループして処理する
  nameArr.map((name,index) => console.log(`${index +1}番目は${name}です`)); 
 

// filter はある条件に一致した時ももだけ返却し、新しい配列を生成
 const numArr =[1,2,3,4,5];
 
//奇数だけ取り出して配列にする.returnの後は条件式
 const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
 

 // じゃけぇ以外の名前の末尾にさんをつける
  const newNameArr = nameArr.map((name) => {
   if(name === "じゃけぇ"){
     return name
    }else{
      return `${name}さん`
    }   
  })
  console.log(newNameArr); 

  /**
   * 三項演算子
   */
  // ある条件 ? 条件がtrueの場合 : 条件がfalseの場合
  const val1 = 1 > 0 ? 'trueです' : 'falseです';
  console.log(val1); 

  // toLocaleString は数値の時に金額表示になる
   const num = 1300;
  console.log(num.toLocaleString());
 
  //typeof は変数の型を示す
   const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
console.log(formattedNum);
 

//関数のreturn部分に三項演算子を使用するパターン
 const checkSum = (num1,num2) => {
  return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
}
console.log(checkSum(50,60));
 

 /**
  * 論理演算しの本当の意味  && ||
  */
/ const flag1 = true;
 const flag2 = false;

 if (flag1 || flag2){
   console.log("1か2はtrueになります");
 }
 if(flag1 && flag2){
   console.log("1も2もtrueになります");
 } 

 // || は左側がfalseとなるとき、右側を返す。nullはfalse判定
 const num =100;
 const fee =num || "金額未設定です";
 console.log(fee);

 // && は左側がtrueなら右側を返す　
 const num2 = 100;
 const fee2 = num2 && "何か設定されました";
 console.log(fee2);
