const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


function myFunction2() {
  var element = document.getElementById("myDIV2");
  var valueOfScrole = document.querySelectorAll(".owl-wrapper")[0].style.left;
  console.log(parseInt(valueOfScrole));
  element.classList.add("active");
  document.getElementById("myDIV").classList.remove("active");
  if(parseInt(valueOfScrole)==244){
    document.querySelectorAll(".owl-wrapper")[0].style.left = (parseInt(valueOfScrole)+501)+"px";
  }
  else if(parseInt(valueOfScrole)==-105){
    document.querySelectorAll(".owl-wrapper")[0].style.left = (parseInt(valueOfScrole)+349)+"px";
  }
}

function myFunction() {
  var element = document.getElementById("myDIV");
  var valueOfScrole = document.querySelectorAll(".owl-wrapper")[0].style.left;
  element.classList.add("active");
  document.getElementById("myDIV2").classList.remove("active");
  if(parseInt(valueOfScrole)==745){
    document.querySelectorAll(".owl-wrapper")[0].style.left = (parseInt(valueOfScrole)-501)+"px";
  }
  else if(parseInt(valueOfScrole)==244){
    document.querySelectorAll(".owl-wrapper")[0].style.left = (parseInt(valueOfScrole)-349)+"px";
  }
  console.log(parseInt(valueOfScrole));
}

/**** Testimonial *****/
// $(document).ready(function() {
//   $("#testimonial-slider").owlCarousel({
//     items: 2,
//     itemsDesktop: [1000, 2],
//     itemsDesktopSmall: [990, 2],
//     itemsTablet: [768, 1],
//     pagination: true,
//     navigation: false,
//     navigationText: ["", ""],
//     slideSpeed: 1000,
//     autoPlay: true
//   });
// });


/////////////////////////
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imga = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
imga.onclick = function(){
  modal.style.display = "block";
  console.log(document.getElementById("imageeee").src)
  modalImg.src = document.getElementById("imageeee").src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}






document.querySelector(document).ready(function() {
  document.querySelector("#testimonial-slider").owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [990, 2],
    itemsTablet: [768, 1],
    pagination: true,
    navigation: false,
    navigationText: ["", ""],
    slideSpeed: 1000,
    autoPlay: true
  });
});





