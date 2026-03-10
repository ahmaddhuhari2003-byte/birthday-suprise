const message = "Maaf ya mawar, Ari cuma bisa ngasih ini buat mawar tapi percaya ari lakuin ini dengan tulus kok hehe. semoga tahun depan kita masih bersama ya biar ari kasih kejutan yg lebih sempurna dari sekarang hehe. Love u untuk wanita favorit arii❤";

let i = 0;

function typing(){
if(i < message.length){
document.getElementById("text").innerHTML += message.charAt(i);
i++;
setTimeout(typing,40);
}
}

function openLetter(){

document.getElementById("start").style.display="none";
document.getElementById("letter").classList.remove("hidden");

document.getElementById("music").play();

typing();

}

let slideIndex=0;

const slides=document.querySelectorAll(".slide");

setInterval(()=>{

slides[slideIndex].classList.remove("active");

slideIndex=(slideIndex+1)%slides.length;

slides[slideIndex].classList.add("active");

},3000);