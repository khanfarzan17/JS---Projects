const Clock=document.getElementById('clock');
setInterval(() => {
    let date=new Date();
   Clock.innerHTML=date.toLocaleTimeString();
}, 1000);