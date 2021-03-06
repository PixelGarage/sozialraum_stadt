/**
 * This file contains all Drupal behaviours of the Pixelgarage theme.
 *
 * Created by ralph on 05.01.14.
 */

(function ($) {

  Drupal.behaviors.closeMainContent = {
    attach: function (context) {
      var $mainContainer = $('.main-container'),
          $closeButton   = $mainContainer.find('.fa-times'),
          $footer        = $('footer');

      $closeButton.once('click', function () {
        $(this).on('click', function () {
          // small header
          $('body').removeClass('front').addClass('not-front');

          // hide main container
          $mainContainer.hide();

          // hide footer
          $footer.hide();
        });
      });
    }
  };

  Drupal.behaviors.enableTopBottomTextFader = {
    attach: function() {
      $(window).off('.fading');
      $(window).on('load.fading resize.fading shown.bs.collapse.fading hidden.bs.collapse.fading', function() {
        var $mainContainer = $('.main-container'),
            hMainContainer = $mainContainer.height(),
            hContent = $mainContainer.find('.scroll .container').height(),
            $tbFading = $mainContainer.find('.fading');

        $tbFading.toggle(hContent > hMainContainer);
      });
    }
  };

  /**
   * This behavior adds shadow to header on scroll.
   *
  Drupal.behaviors.addHeaderShadow = {
    attach: function (context) {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 10) {
          $("header.navbar .container").css("box-shadow", "0 4px 3px -4px gray");
        } else {
          $("header.navbar .container").css("box-shadow", "none");
        }
      });
    }
  };
   */

  /**
   * Allows full size clickable items.
  Drupal.behaviors.fullSizeClickableItems = {
    attach: function () {
      var $clickableItems = $('.node-link-item.node-teaser .field-group-div')
        .add('.node-team-member.node-teaser .field-group-div');

      $clickableItems.once('click', function () {
        $(this).on('click', function () {
          window.location = $(this).find("a:first").attr("href");
          return false;
        });
      });
    }
  };
   */

  /**
   * Swaps images from black/white to colored on mouse hover.
  Drupal.behaviors.hoverImageSwap = {
    attach: function () {
      $('.node-project.node-teaser .field-name-field-images a img').hover(
        function () {
          // mouse enter
          src = $(this).attr('src');
          $(this).attr('src', src.replace('teaser_bw', 'teaser_normal'));
        },
        function () {
          // mouse leave
          src = $(this).attr('src');
          $(this).attr('src', src.replace('teaser_normal', 'teaser_bw'));
        }
      );
    }
  }
   */

  /**
   * Open file links in its own tab. The file field doesn't implement this behaviour right away.
  Drupal.behaviors.openDocumentsInTab = {
    attach: function () {
      $(".field-name-field-documents").find(".field-item a").attr('target', '_blank');
    }
  }
   */


})(jQuery);
