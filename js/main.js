

// var testLamb = document.getElementById('lamb');
function turnOn()
{
    document.getElementById("test-img").src='images/pic_bulbon.gif';
    document.getElementById('lamb').style.backgroundColor="tomato";
    turnOnOffBtn.innerHTML="Turn off"
}
function turnOff()
{
    document.getElementById("test-img").src='images/pic_bulboff.gif';
    document.getElementById('lamb').style.backgroundColor="teal";
    turnOnOffBtn.innerHTML="Turn on"
}
function turnOnOff()
{
    if(document.getElementById('lamb').style.backgroundColor =="tomato" )
    {
        turnOff();
    }
    else
    {
        turnOn()
    }
}

