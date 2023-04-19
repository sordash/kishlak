$(document).ready(function () {
  let imageFiles = ["images/11_11.png", "images/кшлк.png", "images/cat.png",'images/escapist.jpeg', "images/демон.png", 'images/j_2.png' ];
  let index = 0;
  let canChangeImage = true;

  document.addEventListener("mousemove", function(event){
    if (canChangeImage) {
      let backgroundImage = `url(${imageFiles[index % imageFiles.length]})`;
      document.querySelector(".row").style.backgroundImage = backgroundImage;
      index++;
      canChangeImage = false;
      setTimeout(() => {
        canChangeImage = true;
      }, 100); // Change this value to set the delay between image changes in milliseconds
    }
  });

});
