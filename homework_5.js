let arrMixed = ["Name", 124, "month", 2020, "color", "123", "seven", "hell", "cars", "girls"];

for(a = 0; a <arrMixed.length; a++ ){
console.log(arrMixed[a]);
}
*/
/*
for(let Mix of arrMixed){
 console.log(Mix);
 }*/

/*
let arrMixed = ["Name", 124, "month", 2020, "color", "123", true, "hell", false, NaN];
for(let b = 0; b < arrMixed.length; b++){                  //выборка по числам
if (typeof arrMixed[b] === "number"){
console.log(arrMixed[b]);
}else{
""
}
}
*/


/*typeof arrMixed[b] === "boolean"
? console.log(arrMixed[b])
: "" ;


if(typeof arrMixed[b] === "boolean"){   // разные варианты одной операции
console.log(arrMixed[b]);
}else {
" "
}
}*/
/*
let arrStr = ["Name", 124, "month", 2020, "color", "123", true, "hell", false, "string"];
for(let c = 0; c < arrStr.length; c++){
if (typeof arrStr[c] === "string"){
console.log(arrStr[c]);
}else{
""
}
}*/
/*
let arrStrings = [];
arrStrings[0] = "dollars";
arrStrings[1] = "stringa";
arrStrings[2] = 143;
arrStrings[3] = '178';
arrStrings[4] = false;
arrStrings[5] = true;
arrStrings[6] = 'car';
arrStrings[7] = NaN;
arrStrings[8] = {name:'Valentin', age: 56};
arrStrings[9] = 'Germany';
arrStrings[10] = 'Strong';


for(let mix in arrStrings){
console.log(arrStrings[mix]);
}
*/
/*
for(let i = 0; i < 100; i ++)  //1 способ вывода нечетного числа
if(i%2 !== 0)
{
 console.log(`step: ${[i]}`);   // 2 спрособ вывода нечетного числа
 document.write(`step: ${[i]}|`);
 }*/
/*
for(let i = 0; i < 60; i++)
{ console.log(`hour: ${[i]}`);
  for (let s = 0; s < 120; s++){  //часы и минуты
 console.log(`seconds: ${[s]}`);
  document.write( `seconds: ${[s]}`);
 }
 }
*/
/*let arr = ["a", "b", "c"];
let string = '';
for(let a = 0; a < arr.length; a++ ){  //1 попытка
string = string + arr[a];


}
console.log(string);*/
/*
let arr = ["a", "b", "c"];
let s = '';
for (let string in arr){  //for in
s = s + arr[string];

}
console.log(s);
*/
/*
let arr = ["a", "b", "c"];
for(let i = 1; i <= 3; i++){
arr.push(i);

}

console.log(arr);*/
/*let str = ['js', 'css', 'jq'];
string = str.shift();//вывести первый элемент массива shift-ом
console.log(str);
console.log(string);*/

/*
let num = [1, 2, 3, 4, 5];
let numDel = num.splice(1,2);
console.log(num);
console.log(numDel);

*/