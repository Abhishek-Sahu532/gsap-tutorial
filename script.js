//from - initial
//to - destination

gsap.to('#box', {
    backgroundColor : "white",
    x : "50vw", //shift to x
    duration : 1, //how much it will take
    delay : 2, //after this time, the effect will start
    rotate : "360",
    borderRadius : "50%",
    // transition : 'ease'
    repeat : -1, // for infinity -1,
    yoyo : 1 //for bounce back the action, like the ball on wall

})

// gsap.from('#box', {
//     backgroundColor : "greenyellow",
//     x : "0", //shift to x
//     duration : 1, //how much it will take
//     delay : 2, //after this time, the effect will start
//     rotate : "360",
//     borderRadius : "0"
//     // transition : 'ease'
    
// })


//FOR TIMELINE - if we are not using the timeline funtion, so we need to calculate the time, duration and delay and other things to maintain the perfect timing for the right css.

//in timeline the effect will work once the earlier one is comple



// gsap.to('#box1', {
//     backgroundColor : "white",
//     x : "50vw", //shift to x
//     duration : 1, //how much it will take
//     delay : 3, //the delay must be calculated with the earlier effect
//     borderRadius : "50%",
// })


// gsap.to('#box2', {
//     backgroundColor : "white",
//     x : "50vw", //shift to x
//     duration : 1, //how much it will take
//     delay : 4, //after this time, the effect will start
//     borderRadius : "50%",
// })

// gsap.to('#box3', {
//     backgroundColor : "white",
//     x : "50vw", //shift to x
//     duration : 1, //how much it will take
//     delay : 5, //after this time, the effect will start
//     borderRadius : "50%",
// })

// gsap.to('#box4', {
//     backgroundColor : "white",
//     x : "50vw", //shift to x
//     duration : 1, //how much it will take
//     delay : 6, 
//     borderRadius : "50%",
// })

// if we need to emit the calculation, use the timeline

var tl = gsap.timeline()

tl.to('#box1', {
    backgroundColor : "white",
    x : "50vw", //shift to x
    duration : 1, //how much it will take
    delay : 0.5, //after this time, the effect will start
    borderRadius : "50%",
})

tl.to('#box2', {
    backgroundColor : "white",
    x : "50vw", //shift to x
    duration : 1, //how much it will take
    borderRadius : "50%",
})


tl.to('#box3', {
    backgroundColor : "white",
    x : "50vw", //shift to x
    duration : 1, //how much it will take
    borderRadius : "50%",
})


tl.to('#box4', {
    backgroundColor : "white",
    x : "50vw", //shift to x
    duration : 1, //how much it will take
    borderRadius : "50%",
})

// this will create the one by one effect


// nav effect

var navtl = gsap.timeline()

navtl.from("#nav h2", {
    y : '-20',
    opacity : 0,
    duration : 1,
    delay : 0.5
})

// in timeline we omit the delay keyword
navtl.from("#part-2 h5", {
    y : '-20',
    opacity : 0,
    duration : 0.5,
    stagger : 1 // if we have select multile elements, here like h5, so the effect will apply one by one on the h5
})

navtl.from("#title",{
    y: -20,
opacity: 0,
    duration : 0.5,
    scale : 0.2
    
})