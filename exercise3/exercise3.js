function turnOn(){
    document.getElementById('myImage').src='./images/pic_bulbon.png';
    document.querySelector('#myMessage').innerHTML='The light is turn on';
    document.querySelector('.myMessage').innerHTML='The light is turn on - CLASS';
}
function turnOff(){
    document.getElementById('myImage').src='./images/pic_bulboff.png';
     document.getElementById('myMessage').innerHTML='The light is turn off';
      document.querySelector('.myMessage').innerHTML='The light is turn oFF - CLASS';
}