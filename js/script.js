const pousse = document.getElementsByClassName("pousse");
const jaime = document.getElementsByClassName("jaime");
let temp;
let tab=[];

for (let i = 0; i < pousse.length; i++){
    tab[i] = false;
}

for (let i = 0; i < pousse.length; i++){
    pousse[i].addEventListener('click', () => {
        if (tab[i] == false){
            pousse[i].src = "./img/miniature_like.png";
            temp = jaime[i];
            temp.style.color = "blue";
            tab[i]=true;
        }else{
        pousse[i].src = "./img/miniature_unlike.png";
        temp = jaime[i];
        temp.style.color = "black";
        tab[i]=false;
        }
    })
}

