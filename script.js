let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");


document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+20 +"px"
    cursor.style.top = dets.y+"px"
    cursorBlur.style.left = dets.x -200 +"px"
    cursorBlur.style.top = dets.y -200 +"px"
})

var h4All = document.querySelectorAll("#nav h4")

h4All.forEach(function (elem) {
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3
        cursor.style.border = "1px solid #ffff"
        cursor.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95c11e"
        cursor.style.backgroundColor = "#95c11e"
    })
})





gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end:"end -11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:false,
        start:"top -20%",
        end:"top -60%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})