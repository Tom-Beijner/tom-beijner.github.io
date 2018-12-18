(function ($) { // Begin jQuery
  $(function () { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

$(window).scroll(function (event) {

  var nav = document.getElementsByClassName("navigation");
  var navDropdown = document.getElementsByClassName("nav-dropdown");

  var yOffset = window.pageYOffset;
  var breakpoint = 50;
  if (yOffset > breakpoint) {
    $(nav).addClass('active');
    $(navDropdown).addClass('active');
  } else {
    $(nav).removeClass('active');
    $(navDropdown).removeClass('active');
  }

});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});


AOS.init();