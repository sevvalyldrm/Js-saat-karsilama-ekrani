let userName = prompt("Adınız nedir?");
let myName =document.querySelector("#myName")
myName.innerHTML = `${userName}`

function tarihsaat() {  

    let date = new Date(); 
    let gün = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","cuma","Cumartesi"]
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    let günismi = date.getDay();
    let myClock =document.querySelector("#myClock")
    myClock.innerHTML = `${saat}:${dakika}:${saniye}  ${gün[günismi]}`
    }

    setInterval(tarihsaat, 1000);
