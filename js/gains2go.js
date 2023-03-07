

$("#mySidebar").ready(function() {
	// albums -> galleries &&  /mzt/ -> nichts
	var page = window.location.pathname;
    console.log( 'if:' + page);
    } else if ( page.includes('programs.html') ||
                page.includes('recipes.html') ||
                page.includes('gear.html') || 
                page.includes('supplements.html') || 
                page.includes('contact.html')
              ) {
        // lets pass for these sites
    } else {
        page = 'index.html';
	}
	// set current class to current page href call
  $( '#mySidebar > a[href*=\''+page+'\']' ).children().addClass('current');

});



function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}




$(function() {
    $('.project-box').click(function() {
        $(this).find('.post').slideToggle();
    });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


