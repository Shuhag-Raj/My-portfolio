// MixIt UP JQuery
var mixer = mixitup('.grid_latest_container');
// Call to action Button
$(document).ready(function() {
    var ctaButton = $("#ctaBtn");
    var scrollDistance = 300; // Scroll distance in pixels
    var scrollSpeed = 1000;   // Scroll speed in milliseconds

    $(window).scroll(function() {
        if ($(this).scrollTop() > scrollDistance) {
            ctaButton.fadeIn();
        } else {
            ctaButton.fadeOut();
        }
    });

    ctaButton.click(function() {
        $("html, body").animate({ scrollTop: 0 }, scrollSpeed);
    });
});
// Scrollify JS
$(function() {
    $.scrollify({
      section : ".scrollify",
      setHeights: false, 
      updateHash: false,
    });
  });
// Scroll Down Arrow
$(document).ready(function() {
    var nextSectionIcon = $("#scroll_arrow");

    nextSectionIcon.click(function() {
        var targetSection = $("#about_part"); // Change this to the ID of the target section
        var targetOffset = targetSection.offset().top;

        $("html, body").animate({ scrollTop: targetOffset }, 1000);
    });
});
// Hamburger Menu
function openMenu() {
    document.getElementById('navbar').style.height = "100vh";
}
function closeMenu() {
    document.getElementById('navbar').style.height = "0";
}
// Smooth Scroll    
$(document).ready(function() {
    // Smooth scroll animation when clicking on links with class .smooth-scroll
    $(".menu_items a").on("click", function(event) {
      event.preventDefault();
      var target = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(target).offset().top
      }, 1500); // Adjust the duration (in milliseconds) as needed 
      return false; // Prevent the default link behavior
    });
  });