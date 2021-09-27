// create instance
let granimInstance = new Granim({
    element : "#canvas-image-blending",
    direction : 'top-bottom',
    isPausedWhenNotInView : true,
    image : {
        source : './assets/img1.jpg',
        blendingMode: 'multiply',
        stretchMode : ['stretch', 'stretch-if-bigger']
    },
    states : {
        "default-state" : {
            gradients : [
                ['#DAE2F8', '#DAE2F8'],
                // ['#e35d5b', '#f0cb35'],
                // ['#0F2027', '#8E9EAB']
            ],
            transitionSpeed : 4000,
            loop: false
        },
        "evening-state" : {
            gradients : [
                // ['#DAE2F8', '#DAE2F8'],
                ['#e35d5b', '#f0cb35'],
                // ['#0F2027', '#8E9EAB']
            ],
            transitionSpeed : 4000,
            loop: false
        },
        "dark-state" : {
            gradients : [
                // ['#DAE2F8', '#DAE2F8'],
                // ['#e35d5b', '#f0cb35'],
                ['#0F2027', '#8E9EAB']
            ],
            transitionSpeed : 4000,
            loop: false
        }
    }
})

const heading = document.querySelector(".container h1")
const morning = document.getElementById("morning")
const evening = document.getElementById("evening")
const night = document.getElementById("night")

// onclick morning
morning.addEventListener("click", function(event){
    granimInstance.changeState('default-state')
    heading.innerHTML = "Morning"
})

// onclick evening
evening.addEventListener("click", function(event){
    granimInstance.changeState('evening-state')
    heading.innerHTML = "Evening"
})

// onclick night
night.addEventListener("click", function(event){
    granimInstance.changeState('dark-state')
    heading.innerHTML = "Night"
})