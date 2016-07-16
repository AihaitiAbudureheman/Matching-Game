var numberOfFaces=5;
var theLeftSide=document.getElementById('leftSide');
var theRightSide=document.getElementById('rightSide')

function generateFaces(){
  for(var k=0; k<numberOfFaces; k++)
  {
    var pose1=Math.floor(Math.random()*(400-0)+0);
    var pose2=Math.floor(Math.random()*(400-0)+0);
    var image=document.createElement("IMG");
    image.setAttribute("src","lion.png");
    document.getElementById('leftSide').appendChild(image);
    image.style.top=pose1+"px";
    image.style.left=pose2+"px";
    image.style.position='absolute';

  }


  var leftsideImages=theLeftSide.cloneNode(true);
  leftsideImages.removeChild(leftsideImages.childNodes[4]);
  theRightSide.appendChild(leftsideImages);


  theLeftSide.lastChild.onclick= function nextLevel(event){
    event.stopPropagation();
    numberOfFaces+=5;
    generateFaces();
  };

  var theBody=document.getElementsByTagName("body")[0];
  theBody.onclick=function gameOver(){
    alert("Game is over ! Thank you for playing !");
    theBody.onclick=null;
    theLeftSide.lastChild.onclick=null;
  }



  }
