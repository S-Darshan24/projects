let imgbtnleft = document.getElementById("img-btn-left")
let imgbtnright = document.getElementById("img-btn-right") 
let imgitems = document.querySelectorAll(".img-items")

console.log(imgitems.length-1)

startslider = 0 
endsilder = (imgitems.length-1) * 100

imgbtnleft.addEventListener("click",()=> {
  if(startslider < 0){
    startslider = startslider +100;
 }
 console.log(startslider)

 imgitems.forEach(element =>{
   element.style.transform = `translatex(${startslider}%)`;
 })
  
})
imgbtnright.addEventListener("click",()=> {
  if(startslider >= -endsilder+100){
     startslider = startslider -100;
  }
  console.log(startslider)

  imgitems.forEach(element =>{
    element.style.transform = `translatex(${startslider}%)`;
  })
})
