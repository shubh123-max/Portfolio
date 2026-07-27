document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.querySelector(".menu"), nav=document.querySelector("nav");
menu.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.flexDirection="column";nav.style.position="absolute";nav.style.top="70px";nav.style.right="20px";nav.style.padding="18px";nav.style.background="#12121c";nav.style.border="1px solid #302d48";nav.style.borderRadius="14px"});
function sendMessage(e){e.preventDefault();alert("Thanks! Please connect your form to Formspree, EmailJS, or a backend to receive messages.");}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.08});
document.querySelectorAll(".section,.project,.skill").forEach(el=>{el.style.transition="opacity .6s ease, transform .6s ease";el.style.opacity="0";el.style.transform="translateY(18px)";observer.observe(el)});
document.addEventListener("scroll",()=>document.querySelectorAll(".show").forEach(el=>{el.style.opacity="1";el.style.transform="translateY(0)"}));
