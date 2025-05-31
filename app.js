let pre = document.getElementById("pre");
let next = document.getElementById("next");

let images = ["car1", "car2", "car3", "car4",]

let index = 0
next.addEventListener('click' , function () {

    index++

    if (index >= images.length) {
        index = 0
        
    }
        document.getElementById("img").src=`${images[index]}.png`;
        

})

pre.addEventListener('click' , function () {

    index--

    if (index < 0) {
        index = images.length - 1
    }
        document.getElementById("img").src=`${images[index]}.png`;
    
})





