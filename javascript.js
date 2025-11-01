let body = document.querySelector("body")

body.addEventListener("mousemove", (dets)=> {
   gsap.to(".curser", {
    x: dets.clientX,
    y: dets.clientY,
    duration:0.3,
    ease:"Power4.out",
    scale:1
   })
})


function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

// locomotiveAnimation()

const nav = document.querySelector("nav");

function navAnimation() {
  nav.addEventListener("mouseenter", function(){

    let tl = gsap.timeline()
  
    tl.to("#nav-bottom",{
      height:"25vh"
    } )
  
    tl.to(".nav-elem h5", {
      display:"block"
    })
  
    tl.to(".nav-link h5 span", {
      y:0,
      opacity:1,
      stagger:{
        amount:0.6
      }
    })
  })
  
  nav.addEventListener("mouseleave", function(){
  
    let tl = gsap.timeline()
  
    tl.to(".nav-link h5 span", {
      y:25,
      opacity:0,
      stagger:{
        amount:0.2
      }
    })
  
    tl.to(".nav-elem h5", {
      display:"none",
      duration:0.1
  
    })
  
    tl.to("#nav-bottom",{
      height:"0",
      duration:0.1
    } )
  })
}
navAnimation()


function page2Animation() {
  const rightelem =  document.querySelectorAll(".right-elem")
  
rightelem.forEach(function(elem){

  elem.addEventListener("mouseenter",()=>{
    let ele = elem.childNodes[3]
      gsap.to(ele, {
        opacity:1,
        scale:1
  
      })
  })
  
  elem.addEventListener("mouseleave",()=>{
    let ele = elem.childNodes[3]
    gsap.to(ele, {
      opacity:0
    })
  })
  
   elem.addEventListener("mousemove",(dets)=> {
    let ele = elem.childNodes[3]
    gsap.to(ele, {
    x:dets.x - ele.x-50 ,
    y:dets.y - ele.y-100, 
   })
  
  })
})}
page2Animation()


function page3VideoAnimation() {

  let page3Center =  document.querySelector(".page3-center")
  let video = document.querySelector("#page3 video")
 
  page3Center.addEventListener("click", function() {
   video.play()
 
   gsap.to(video, {
     transform: "scaleX(1) scale(1)",
     opacity:1,
     borderRadius:0
   })
  })
 
  video.addEventListener("click", function() {
   video.pause()
   gsap.to(video, {
     transform: "scaleX(0.7) scaleY(0)",
     opacity:1,
     borderRadius:"3rem"
   })
 
  })
}

page3VideoAnimation()


function page6videoAnimation() {
const section = document.querySelectorAll(".sect-right")
const video = document.querySelector(".sect-right video")

section.forEach(function(elem){
let ele = elem.childNodes[3]



 elem.addEventListener("mouseenter",function() {
  let circle = elem.childNodes[5]
  circle.style.opacity = 1
  circle.style.scale = 1

     ele.style.opacity = 1
     ele.play()
 })

 elem.addEventListener("mouseleave",function() {
  let circle = elem.childNodes[5]
  circle.style.opacity = 0
  circle.style.scale = 0

  ele.style.opacity = 0
  ele.load()
})


elem.addEventListener("mousemove",(dets) =>{
  let circle = elem.childNodes[5]
  let ele = circle.getBoundingClientRect().x
  let ele2 = circle.getBoundingClientRect().y

   console.log(ele)
   console.log(ele2)

   gsap.to(circle,{
     x:dets.x - ele + 250 ,
     y:dets.y - ele2-300
   })

  })
 
})

}

page6videoAnimation()



function arrow() {

const uiux = document.querySelector(".uiux")

  const arrow = document.querySelector("#arrow")
  console.log(arrow)
uiux.addEventListener("click", function(){
    arrow.style.transform = "rotate(180deg)"
})


const product = document.querySelector(".product")
const arrow1 = document.querySelector(".product #arrow")
product.addEventListener("click", function() {
     arrow1.style.transform = "rotate(180deg)"
})

}
arrow()


function page8Animation() {


  gsap.from("#page8 h1" , {
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:"#page8",
      scroller:"body",
      // markers:true,
      start:"top 50%",
      end:" 0%",
      scrub:true
    }
    
    })


gsap.from(".page8-prts h4" , {
  x:0,
  duration:1,
  scrollTrigger:{
    trigger:".page8-prts",
    scroller:"body",
    // markers:true,
    start:"top 80%",
    end:" top 10%",
    scrub:true
  }
  
  })

}

page8Animation()




function lodingAnimation() {

  var tl = gsap.timeline()

tl.from("#page1",{
  opacity:0,
  duration:0.2,
  delay:0.2,
  height:"120vh",
 
})

tl.to("#page1",{
  transform:"scaleY(1) scaleX(1)",
  duration:2,
  borderRadius:0,
  ease:"expo.out",

  
})
tl.from("nav",{ 
  opacity:0,
  delay:-0.2
})

tl.from("#page1 h1, #page1 p, #page1 div",{ 
  opacity:0,
  duration:0.5,
  stagger:0.2
})

}


lodingAnimation()


const input = document.querySelector(".leftfooterHead div input")
const label = document.querySelector(".leftfooterHead div label")

console.log(label)


input.addEventListener("mouseenter", function(){
  label.style.top = "-15px"
  label.style.left = "0px"
  label.style.fontSize = "1.2rem"
})

input.addEventListener("mouseleave", function(){
  label.style.top = "10px"
  label.style.left = "5px"
  label.style.fontSize = "1.7rem"
})

