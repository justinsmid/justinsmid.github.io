(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// handling modals for competencies

// get modals
var profModal = document.getElementById("prof-modal");
var onderzoekModal = document.getElementById("onderzoek-modal");
var communicatiefModal = document.getElementById("communicatief-modal");
var leerModal = document.getElementById("leer-modal");
var ethiekModal = document.getElementById("ethiek-modal");
var samenModal = document.getElementById("samen-modal");

var modalArr = [profModal, onderzoekModal, communicatiefModal, leerModal, ethiekModal, samenModal];

// close button
var close = document.getElementsByClassName("close");

// get buttons
var prof = document.getElementById("professioneel-vakmanschap");
var onderzoek = document.getElementById("onderzoekend-vermogen");
var communicatief = document.getElementById("communicatief-vermogen");
var leer = document.getElementById("leervermogen");
var ethiek = document.getElementById("beroepsethiek");
var samen = document.getElementById("samenwerken");

var buttonsArr = [prof, onderzoek, communicatief, leer, ethiek, samen];

// Let close button actually close modals
for(let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    for(let modal in modalArr) {
      modal.style.display = "none";
    }
    for(let button in buttonsArr) {
      button.style.display = "none";
    }
  }
}

// Let buttons show modal
for(let button in buttonsArr) { 
  button.onclick = function() {
    button.style.display = "block";
  }
}