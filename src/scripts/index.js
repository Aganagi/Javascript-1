var ad = prompt("Adınızı qeyd edin");
var soyad = prompt("Soyadınızı qeyd edin");
var dogum = Number(prompt("Doğum ilinizi qeyd edin"));

var age = 2024 - dogum;
console.log(ad);
console.log(soyad);
console.log(age);
alert("Ad :" + ad + "\nSoyad :" + soyad + "\nYaş :" + age);
