
export const EditImageComponent = (props) => {
let rotation = 0;
function rotateImg() {
    rotation += 90; // add 90 degrees, you can change this as you want
    if (rotation === 360) { 
        // 360 means rotate back to 0
        rotation = 0;
    }
document.getElementById("myImg").style.transform = `rotate(${rotation}deg)`;
}
function agrandir() {
    var myImg = document.getElementById("myImg");
    var width = myImg.clientWidth;
    if (width == 600) {
        alert("Vous avez atteint le niveau de zoom maximal.");
    } 
    else {
        myImg.style.width = (width + 20) + "px";
    }
}
function diminuer() {
    var myImg = document.getElementById("myImg");
    var width = myImg.clientWidth;
    console.log(width)
    if (width == 40) {
        alert("Vous avez atteint le niveau de zoom minimal.");
    } 
    else {
        myImg.style.width = (width - 50) + "px";
    }
}

const logo = require('../assets/icon/qizuna.png');

return(
    <div >
    <img src={logo} className='logo' id="myImg" style="width:100%"></img>
    <p>
      <button type="button" onclick="agrandir()">+ Agrandir</button>
      <button type="button" onclick="diminuer()">- Diminuer</button>
    </p>
  </div>
)
}