window.onload = function() {

//Grab elements.
let text = document.getElementById('text');
let go = document.getElementById('go');
let devmon = document.querySelectorAll('.mon img');


//Add sound.
let theme = new Audio('assets/themesong.wav');
let sound1 = new Audio('assets/sound-1.wav');
let sound2 = new Audio('assets/sound-2.wav');
let sound3 = new Audio('assets/sound-3.wav');

//Enlarge the image focused on.
function change(focus) {
  for (i = 0; i<3; i++) {
    devmon[i].style.height = "80%";
    devmon[i].style.width = "80%";
  }

  devmon[focus].style.height = "100%";
  devmon[focus].style.width = "100%";
}

//Add event handlers for the images.
for (i=0; i<devmon.length; i++) {
  handleElement(i);
}

//Change text and play devmon sound onclick.
function handleElement(i) {
  devmon[i].addEventListener("click", function() {
    switch(i) {
      case 0:
        text.innerHTML = "Ghostlis";
        change(0);
        sound1.play();
        break;
      case 1:
        text.innerHTML = "Wormy";
        sound2.play();
        change(1);
        break;
      case 2:
        text.innerHTML = "Dolphio";
        sound3.play();
        change(2);
        break;
      default:
        console.log('Something is not right.');
    }
  });
}

//Add event handler for the select button to play sound and view image.
go.addEventListener('click', function() {
  console.log("you pressed go");
  for (i = 0; i<3; i++) {
    if(devmon[i].style.height === "100%") {
      devmon[i].src = "assets/devmon" + i + ".png";
    }
  }
  theme.play();
});

}
