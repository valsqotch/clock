const main = document.getElementById("main");
let mode=0; //0 for default, 1 for timer
const ut = setInterval(updateTime,1000);
const uc = setInterval(updateColor,100);
function updateTime(){
    let t = new Date;
    let str = ""
    if(t.getHours()<9){
        str+="0";
    }
    str+=(t.getHours())+":";
    if(t.getMinutes()<9){
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
document.addEventListener("click",);
function alterMode(){
    if(!mode){ //go to timer mode
        clearInterval
    }
    else{//back to clock mode

    }
}