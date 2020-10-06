var plusSlides, currentSlide, loaderInterval;

$(document).ready(function() {
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("pic-slides");
        var dots = document.getElementsByClassName("dot");
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

    var slideIndex = 1;
    showSlides(slideIndex);
    
    
// Next/previous controls
    plusSlides = function (n) {
            showSlides(slideIndex += n);
        }
    
// Thumbnail image controls
    currentSlide = function (n) {
            showSlides(slideIndex = n);
        }
        
    var loaderElement = $('#slider-loader'), 
        currentProgress = 0,
        continueLoader = function () {
            loaderInterval = setInterval(function () {
                if (currentProgress >= 100) {
                    currentProgress = 0;
                    plusSlides(1);
                }
                currentProgress += 5;
                loaderElement.css('width', currentProgress + '%');
            }, 250);        
        },
        stopLoader = function () {
            clearInterval(loaderInterval);
        };
    continueLoader();
    $('#home-slider').hover(stopLoader, continueLoader);
});


function resetBurgerMenu() {
    $('div#links a').removeClass("active");
    $('div#burger-icon').removeClass("change");
    $('#links').css({display: 'none'});
}

function toggleBurgerMenu(burgerElement) {
    burgerElement.classList.toggle("change");
    if (!$(burgerElement).hasClass("change")) {
        resetBurgerMenu();
    } else {
        $('#links').css({display: 'block'});
    }
  }

function selectMenu(selectedMenu) {
    resetBurgerMenu();
    selectedMenu.classList.toggle("active");
}
