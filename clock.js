const main = document.getElementById("main");
let mode=0; //0 for default, 1 for timer
let secondsCount=0; //used in the timer mode
var ut = setInterval(updateTime,1000);
var uc = setInterval(updateColor,100);
var tm = setInterval(countTime,1000);
clearInterval(tm);
function updateTime(){
    let t = new Date;
    let str = ""
    if(t.getHours()<=9){
        str+="0";
    }
    str+=(t.getHours())+":";
    if(t.getMinutes()<=9){
        str+="0";
    }
    str+=(t.getMinutes());
    main.innerText =str;
}
updateTime();
function updateColor(){
    let t = new Date;
    let seconds = t.getSeconds()+t.getMilliseconds()/1000;
    const baseC = 65;
    let variable=(seconds%20)*8.5; //low point 65, high point 235
    if(seconds<20){
        document.body.style.backgroundColor = "rgb(" + (baseC+variable) + ","+baseC+","+(235-variable)+")";
    }
    else if(seconds>=20&&seconds<40){
        document.body.style.backgroundColor = "rgb(" + (235-variable) + ","+(baseC+variable)+","+baseC+")";
    }
    else{
        document.body.style.backgroundColor = "rgb(" + (baseC) + ","+(235-variable)+","+(baseC+variable)+")";
    }
    console.log(variable);
}
document.addEventListener("click",alterMode);

function alterMode(){
    if(!mode){ //go to timer mode
        clearInterval(ut);
        clearInterval(uc);
        main.innerText="00:00";
        secondsCount=0;
        tm = setInterval(countTime,1000);
        mode=1;
        document.body.style.backgroundColor = "black";
    }
    else{//back to clock mode
        clearInterval(tm);
        updateColor();
        updateTime();
        ut = setInterval(updateTime,1000);
        uc = setInterval(updateColor,100);
        mode=0;
    }
}
function countTime(){
    secondsCount++;
    let str="";
    if(secondsCount/60<=9){
        str+="0";
    }
    str+=Math.floor((secondsCount/60))+":";
    if(secondsCount%60<=9){
        str+="0";
    }
    str+=(secondsCount%60).toFixed(0);
    console.log(secondsCount);
    main.innerText=str;
}
