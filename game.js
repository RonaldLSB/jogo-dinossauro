function jump() {
    var dino = document.getElementById("dino");
    var cactus = document.getElementById("cactus");

    if(dino.classList != "jump"){

        dino.classList.add("jump");
    
        setTimeout(function () { 
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function(){
   //posicao y do dino
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
    //posicao x do cacto
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
     
    //detectar colisao
    if(cactusLeft < 45 && cactusLeft >0 && dinoTop >=140) {
       alert("Game Over!");
       window.location.reload()
    }
},10);

document.addEventListener("keydown", function() {
    jump();
});

function pontos2(){
    var pts = 0;
    setInterval(() => {
        pts++; 
        document.getElementById("ScoreSpan").innerText = pts;

        if (pts > 55){
            document.getElementById("cactus").style.animation = "block 2.3s infinite linear";
        }if (pts >= 116){
            document.getElementById("cactus").style.animation = "block 2s infinite linear";
            document.getElementById("nuvens").style.animation = "updown 1.5s infinite linear";
        }if (pts > 200){
            document.getElementById("cactus").style.animation = "block 1.5s infinite linear";
            document.getElementById("nuvens").style.animation = "updown 1s infinite linear";
        }if (pts > 300){
            document.getElementById("cactus").style.animation = "block 1s infinite linear";
        }if (pts > 600){
            document.getElementById("cactus").style.animation = "block 0.5s infinite linear";
            document.getElementById("nuvens").style.animation = "updown 0.5s infinite linear";
        }
    }, 90);
}

function pontos(){
    var pontos = 0;
   if(pontos< 100){
       pontos++
       console.log(pontos);
       if(pontos<100){
           pontos2();
       }
   }
}

window.onload = function(){
    pontos2();
}