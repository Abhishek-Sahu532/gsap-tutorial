console.log('oageslaj')

// gsap.from("#page1 .box",{
//     scale : 0,
//     duration : 1,
//     delay : 0.5,
//     rotate: 360
// })

gsap.from("#page2 .box",{
    scale : 0,
    duration : 1,
    delay : 0.5,
    rotate: 720,
    scrollTrigger : {
        trigger : "#page2 .box",
        scroller : "body",
        markers : true,
       start : "top 50%", //start pointer, where the animation will start
       end: 'top 30%',
       scrub : 5 //true or false and between 1 to 5, depending on the smoothness
//in scrub , the animation will start from the start point and will end when reaches the end point , in this case 'top 30%', in scrub the animation is fully dependent on the scroll
    }
})


//pin element - whenever you used the 'pin' , must target the parant components
gsap.to("#page3 h1", {
    transform : 'translateX(-40%)',
    scrollTrigger : {
        trigger : "#page3", //targetting the parent , that will hold till the scroll animation, with the pin keyword
        scroller : "body",
        markers : true,
        start : "top -10%",
        end : "top -150%", //for long run
        scrub : 2,
        pin : true


    }

})
