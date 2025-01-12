let firstUserName = "Alisher";
let firstUserPoint = "97";
let Data = `${firstUserName} ${firstUserPoint} баллов из 100`;
console.log(Data);

let secondUserName = "Nooruz";
let secondUserPoint = "89";
let Data1 = `${secondUserName} ${secondUserPoint} баллов из 100`;
console.log(Data1);

let thirdUserName = "Jakshylyk ";
let thirdUserPoint = "75";
let Data2 = `${thirdUserName} ${thirdUserPoint} баллов из 100`;
console.log(Data2);

let fourthUserName = "Aziret ";
let fourthUserPoint = "90";
let Data3 = `${fourthUserName} ${fourthUserPoint} баллов из 100`;
console.log(Data3);

let text1 = "Экзамендин ";
let text2 = "орточо";
let text3 = " баллы:";
let text4 = "87.75";
console.log(`${text1} ${text2} ${text3} ${text4}`);

for (let i = 4; i <= 4; i += 1) {
  for (let j = 1; j <= 10; j += 1) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

alert("Вы успешно зарегистрировались!");

console.log(
  confirm(
    "При перезагрузке сайта, введённые данные на форме будут очищены, Вы уверены что хотите перезагрузить?"
  )
);

let daniel = prompt("Введите ваше имя?");
console.log(daniel);
