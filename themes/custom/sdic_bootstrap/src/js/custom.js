/**
 * Created by Charles Dowe on 2/5/22.
 */
(function custom($) {
  "use strict";

  $( document ).ready(function() {

    // Desktop main menu function update
    if ($(window).width() > 992) {
      $(".dropdown").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
          dropdownMenu.parent().toggleClass("show");
        }
      });
    } else {
      $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass('show');
        });


        return false;
      });

    }

  });
}(window.jQuery));