 const Buttons=document.querySelectorAll('.button')
const Body=document.querySelector("body")

Buttons.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click',function(event){
       console.log(event)
       console.log(event.target)
       if(event.target.id==='grey'){
        Body.style.backgroundColor=event.target.id;
       }
      if(event.target.id==='white'){
        Body.style.backgroundColor=event.target.id;
      }
      if(event.target.id==='blue'){
        Body.style.backgroundColor=event.target.id;
      }
      if(event.target.id==='yellow'){
        Body.style.backgroundColor=event.target.id;
      }
      
    })
   
})

