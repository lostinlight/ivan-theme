$(function() {
  "use strict";

/* ----------------------------------------
 *  NAVIGATION
 * ----------------------------------------
 */
var Nav = (function() {

  var
    nav     = $(".um-menu"),
    burger  = $(".um-burger"),
    page    = $(".um-wrapper"),
    section = $(".um-section"),
    link    = $(".um-menu__link"),
    navH    = nav.innerHeight(),
    isOpen  = true,
    hasT    = false;

  var toggleNav = function() {
    nav.toggleClass("menu--active");
    burger.toggleClass("burger--close");
  };

  var switchPage = function(e) {
    var self = $(this);
    var i = self.parents(".um-menu__item").index();
    var s = section.eq(i);
    var a = $("section.section--active");
    var t = $(e.target);

    var links = $(".um-menu__label");
    var activeLink = self.find(".um-menu__label");

     links.removeClass("um-active");
     activeLink.addClass("um-active")

    if (!hasT) {
      if (i == a.index()) {
        return false;
      }
      a
      .addClass("section--hidden")
      .removeClass("section--active");

      s.addClass("section--active");

      hasT = true;

      a.on("transitionend webkitTransitionend", function() {
        $(this).removeClass("section--hidden");
        hasT = false;
        a.off("transitionend webkitTransitionend");
      });
    }

    return false;
  };

  var keyNav = function(e) {
    var a = $("section.section--active");
    var aNext = a.next();
    var aPrev = a.prev();
    var i = a.index();


    if (!hasT) {
      if (e.keyCode === 37) {

        if (aPrev.length === 0) {
          aPrev = section.last();
        }

        hasT = true;

        aPrev.addClass("section--active");
        a
          .addClass("section--hidden")
          .removeClass("section--active");

        a.on("transitionend webkitTransitionend", function() {
          a.removeClass("section--hidden");
          hasT = false;
          a.off("transitionend webkitTransitionend");
        });

      } else if (e.keyCode === 39) {

        if (aNext.length === 0) {
          aNext = section.eq(0)
        }

        aNext.addClass("section--active");
        a
          .addClass("section--hidden")
          .removeClass("section--active");

        hasT = true;

        aNext.on("transitionend webkitTransitionend", function() {
          a.removeClass("section--hidden");
          hasT = false;
          aNext.off("transitionend webkitTransitionend");
        });

      } else {
        return
      }
    }
  };

  var bindActions = function() {
    burger.on("click", toggleNav);
    link.on("click", switchPage);
    $("body").on("keydown", keyNav);
  };

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

}());

Nav.init();

/* ----------------------------------------
 *  MOBILE NAV STYLE
 * ----------------------------------------
 */
  var closeNav = {};
  var closeBurger = {};

  var hideNav = function(selector) {
    this.value = window.getComputedStyle(document.querySelector(selector), ":before")
                       .getPropertyValue("content").replace(/\"/g, "");
  };

  closeNav.refreshValue = hideNav;
  closeBurger.refreshValue = hideNav;

  $(window).resize(function() {
    closeNav.refreshValue("body");
    closeBurger.refreshValue("main");

  $(".um-menu").removeClass(closeNav.value);
  $(".um-burger").removeClass(closeBurger.value);
  }).resize();


/* ----------------------------------------
 *  SCROLLBAR
 * ----------------------------------------
 */
  var containers = document.getElementsByClassName("scrolled");

  for (var i=0; i<containers.length; i++) {
    Ps.initialize(containers[i], {
      maxScrollbarLength: 80
    });
  }

/* ----------------------------------------
 *  QR CODE GENERATOR
 * ----------------------------------------
 */
  var qrLink = $("#qrcode").attr("data-url");

  $("#qrcode").qrcode({
      width: 60,
      height: 60,
      text: qrLink
    });

/* ----------------------------------------
 *  GALLERY
 * ----------------------------------------
 */
  new CBPGridGallery(document.getElementById("um-wrapper"));

/* ----------------------------------------
 *  GALLERY ESC CLOSE
 * ----------------------------------------
 */  $("body").on("keyup", function (e) {
    var $item = $("li.scrolled.current");
    var $itemPrev = $item.prev();
    var $itemNext = $item.next();

    if (($item.hasClass("show")) && (e.keyCode === 27)) {
      $item.removeClass("current show");
      $itemPrev.removeClass("show").attr("style", "");
      $itemNext.removeClass("show").attr("style", "");
      $(".um-gallery").removeClass("slideshow-open");
    }
  });

/* ----------------------------------------
 *  GALLERY RESPONSIVE VIDEO
 * ----------------------------------------
 */
  $(".video-player").fitVids();

/* ----------------------------------------
 *  GALLERY FILTERING
 * ----------------------------------------
 */
  var self = $(".um-gallery");

  self.imagesLoaded(function () {
    self.masonry({
        gutterWidth: 15,
        isAnimated: true,
        itemSelector: "li.item"
    });
  });

  $(".filters .btn").click(function(e) {
    e.preventDefault();

    var filter = $(this).attr("data-filter");

    self.masonryFilter({
        filter: function () {
            if (!filter) return true;
            return $(this).attr("data-filter") == filter;
        }
    });
  });

});
