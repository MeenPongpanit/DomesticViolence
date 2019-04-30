story = [
    'Story1',
    'Story2'
];
choice = [
    'คน',
    'หมา',
    'เเมว',
    'เสือ'
]

var game = document.querySelector("#game");
var show = document.querySelector("#show");
var way = document.querySelector(".way");
var way1 = document.querySelector(".way1");
var way2 = document.querySelector(".way2");
var count = 0;
show.innerHTML = "เล่น";
way1.addEventListener("click", function(){
    game.innerText = way1.innerHTML; 
});
way2.addEventListener("click", function(){
    game.innerText = way2.innerHTML; 
});

function play(){
    count++;
    game.style.opacity = "0";
    setTimeout(function(){
    game.innerText = story[count%2];
    game.style.opacity = "1";
    way.style.opacity = "1";
    way1.innerHTML = choice[0];
    way2.innerHTML = choice[1];
    }
    ,1000)
    show.style.visibility = "hidden";
    setTimeout(function(){
        show.style.visibility = "visible";
    }, 5000
    )
    if (count > 0){
        show.innerHTML = "ต่อไป";
    }
}


