$(document).ready(function() {
  $('.subject-center-mob').slick({
    loop: true,
    speed: 300,
    slidesToShow: 1,
    infinite: true,
    prevArrow: '.subject-left-cont-mob',
    nextArrow: '.subject-right-cont-mob',
    arrows: true
  });
  $('.subject-center-mob').on('swipe', function(event, slick, direction) {
    if (direction == 'left') {
      let temp = subjectCity;
      let tempLeft = $('.subject-left-text-mob').text();
      subjectCity = $('.subject-right-text-mob').text();
      $('.subject-left-text-mob').text(temp);
      $('.subject-right-text-mob').text(hiddenCity);
      hiddenCity = tempLeft;
      $('.subject-center-text-mob').text(subjectCity);
    } else if (direction == 'right') {
      let temp = subjectCity;
      let tempRight = $('.subject-right-text-mob').text();
      subjectCity = $('.subject-left-text-mob').text();
      $('.subject-right-text-mob').text(temp);
      $('.subject-left-text-mob').text(hiddenCity);
      hiddenCity = tempRight;
      $('.subject-center-text-mob').text(subjectCity);
    }
  });
  $('.test2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    lazyLoad: 'ondemand',
    asNavFor: '.test1',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          lazyLoad: 'ondemand',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          prevArrow: '.left-gallery-button-box',
          nextArrow: '.right-gallery-button-box'
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
});
$(document).ready(function() {
  $('.test1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    lazyLoad: 'ondemand',
    prevArrow: '.left-gallery-button-box',
    nextArrow: '.right-gallery-button-box',
    arrows: true,
    asNavFor: '.test2',
    centerMode: false,
    focusOnSelect: true
  });
});
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    nav: true,
    center: false,
    items: 3,
    slideBy: 3,
    loop: true,
    dots: false,
    mouseDrag: false,
    navText: [
      '<img src="img/arrow.png" alt="arrow" class="comment-arrow-left">',
      '<img src="img/arrow.png" alt="arrow" class="comment-arrow-right">'
    ],
    responsive: {
      0: {
        items: 1,
        slideBy: 1
      },
      600: {
        0: {
          items: 3,
          slideBy: 3
        }
      }
    }
  });
});

if (getCookie('cookie') != '') {
  var cookie = getCookie('cookie');
} else var cookie = false;
if (getCookie('city') != '') {
  var city = getCookie('city');
} else var city;

$(document).ready(function() {
  if (screen.width > 640) {
    if (city == 'warszawa' || city == 'lublin' || city == 'krakow') {
      updatePrice();
      refreshContact();
    }
    document.getElementById('video-bg').play();
    if (!cookie) $('.cookie').css('display', 'flex');
  }
  if (screen.width < 640) {
    if (!cookie) $('.cookie').css('display', 'block');
    if (city == 'warszawa' || city == 'lublin' || city == 'krakow') {
      $('.price-modal-cont').css('display', 'none');
      commentLoad();
      loadPrice(city);
      refreshContact();
    }
  }
});

function changeTeachersBgMob(id) {
  $('.mob-active').removeClass('mob-active');
  $('.mob-' + id).addClass('mob-active');
  $('#teacher-image').attr('class', 'teacher-image-' + id);
}

var subjectCity = 'WARSZAWA';
var hiddenCity = 'ONLINE';
$('.subject-left-cont-mob').on('click', function() {
  let temp = subjectCity;
  let tempRight = $('.subject-right-text-mob').text();
  subjectCity = $('.subject-left-text-mob').text();
  $('.subject-right-text-mob').text(temp);
  $('.subject-left-text-mob').text(hiddenCity);
  hiddenCity = tempRight;
  $('.subject-center-text-mob').text(subjectCity);
});

$('.subject-right-cont-mob').on('click', function() {
  let temp = subjectCity;
  let tempLeft = $('.subject-left-text-mob').text();
  subjectCity = $('.subject-right-text-mob').text();
  $('.subject-left-text-mob').text(temp);
  $('.subject-right-text-mob').text(hiddenCity);
  hiddenCity = tempLeft;
  $('.subject-center-text-mob').text(subjectCity);
});

function loadPrice(city) {
  if (city == 'lublin') {
    $('#price-city').text('LUBLIN');
    $('.price-row-4').css('display', 'none');
    $('.price-row-8').css('display', 'none');
    $('.price-row-12').css('display', 'none');
    $('.premium-details').css('display', 'none');
    $('.price-col-1-warszawa').css('padding-top', '30px');
    $('.price-text-5').html('110 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-6').html('90 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-7').html('80 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-9').html('130 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-10').html('110 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-11').html('90 PLN<span class="mob-skip">/120 min</span>');
  } else if (city == 'krakow') {
    $('#price-city').text('KRAKÓW');
    $('.price-row-4').css('display', 'none');
    $('.price-row-8').css('display', 'none');
    $('.price-row-12').css('display', 'none');
    $('.premium-details').css('display', 'none');
    $('.price-col-1-warszawa').css('padding-top', '30px');
    $('.price-text-5').html('150 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-6').html('130 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-7').html('110 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-9').html('200 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-10').html('170 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-11').html('140 PLN<span class="mob-skip">/120 min</span>');
  } else if (city == 'warszawa') {
    $('#price-city').text('WARSZAWA');
    $('.price-row-4').css('display', 'block');
    $('.price-row-8').css('display', 'flex');
    $('.price-row-12').css('display', 'flex');
    $('.premium-details').css('display', 'block');
    $('.price-col-1-warszawa').css('padding-top', '0');
    $('.price-text-5').html('160 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-6').html('130 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-7').html('110 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-9').html('220 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-10').html('180 PLN<span class="mob-skip">/120 min</span>');
    $('.price-text-11').html('150 PLN<span class="mob-skip">/120 min</span>');
  }
}
function priceAnimation() {
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
  $('.price-table-active').effect(
    'slide',
    { direction: 'left' },
    300,
    function() {
      $('.price-test-cont-active').effect('slide', 300, function() {
        $('.price-table-name-container').css('display', 'flex');
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
      });
    }
  );
}

function mobpopup() {
  if (city == 'warszawa' || city == 'lublin' || city == 'krakow') {
  } else {
    $('.price-modal-cont').css('display', 'block');
    $('.price-modal-cont').css({
      background: 'rgba(56, 56, 56, 0.7)'
    });
    $(
      '.module-contact-section, .module-comments-section, .module-price-section, .module-gallery-section'
    ).css({
      filter: 'blur(5px)'
    });
    var select = document.getElementById('price-modal-button');
    var close = document.getElementById('price-close');
    close.onclick = function() {
      $('.price-modal-cont').css({
        background: 'rgba(0, 0, 0, 0)'
      });
      $(
        '.module-contact-section, .module-comments-section, .module-price-section, .module-gallery-section'
      ).css({
        filter: 'none'
      });
      window.scrollTo(0, 2300);
      $('body').css('overflow', 'visible');
      $('.price-modal-cont').css('display', 'none');
    };
    select.onclick = function() {
      if (document.getElementById('price-modal-radio-1').checked) {
        city = document.getElementById('price-modal-radio-1').value;
      } else if (document.getElementById('price-modal-radio-2').checked) {
        city = document.getElementById('price-modal-radio-2').value;
      } else if (document.getElementById('price-modal-radio-3').checked) {
        city = document.getElementById('price-modal-radio-3').value;
      }
      setCookie('city', city);
      currentCity = city.toUpperCase();
      refreshContact();
      if (city == 'warszawa') {
        commentLoad();
        loadPrice(city);
        $('.price-modal-cont').css({
          background: 'rgba(0, 0, 0, 0)'
        });
        $(
          '.module-contact-section, .module-comments-section, .module-price-section, .module-gallery-section'
        ).css({
          filter: 'none'
        });
        $('body').css('overflow', 'visible');
        $('.price-modal-cont').css('display', 'none');
      } else if (city == 'lublin') {
        loadPrice(city);
        commentLoad();
        $('.price-modal-cont').css({
          background: 'rgba(0, 0, 0, 0)'
        });
        $(
          '.module-contact-section, .module-comments-section, .module-price-section, .module-gallery-section'
        ).css({
          filter: 'none'
        });
        $('.price-modal-cont').css('display', 'none');
        $('body').css('overflow', 'visible');
      } else if (city == 'krakow') {
        loadPrice(city);
        commentLoad();
        $('.price-modal-cont').css({
          background: 'rgba(0, 0, 0, 0)'
        });
        $(
          '.module-contact-section, .module-comments-section, .module-price-section, .module-gallery-section'
        ).css({
          filter: 'none'
        });
        $('.price-modal-cont').css('display', 'none');
        $('body').css('overflow', 'visible');
      }
    };
  }
}

function popup(num) {
  if (city == 'warszawa' || city == 'lublin' || city == 'krakow') {
    updatePrice();
    refreshContact();
  } else {
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setLockAnchors(true);
    $.fn.fullpage.setKeyboardScrolling(false);
    $('#left-panel').css({ 'pointer-events': 'none', filter: 'blur(5px)' });
    $('#fullpage').css({ 'pointer-events': 'none', filter: 'blur(5px)' });
    $('.price-modal-cont').css({
      'z-index': '1',
      background: 'rgba(56, 56, 56, 0.7)'
    });
    var select = document.getElementById('price-modal-button');
    var modal = document.getElementById('price-modal');
    var close = document.getElementById('price-close');
    modal.style.display = 'flex';

    close.onclick = function() {
      modal.style.display = 'none';
      $('#left-panel').css({ filter: 'none' });
      $('#fullpage').css({ filter: 'none' });
      $('.price-modal-cont').css({
        background: 'rgba(0, 0, 0, 0)',
        'z-index': '0'
      });
      $('#left-panel').css('pointer-events', 'all');
      $('#fullpage').css('pointer-events', 'all');
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setLockAnchors(false);
      $.fn.fullpage.setKeyboardScrolling(true);
    };

    select.onclick = function() {
      if (document.getElementById('price-modal-radio-1').checked) {
        city = document.getElementById('price-modal-radio-1').value;
      } else if (document.getElementById('price-modal-radio-2').checked) {
        city = document.getElementById('price-modal-radio-2').value;
      } else if (document.getElementById('price-modal-radio-3').checked) {
        city = document.getElementById('price-modal-radio-3').value;
      }
      setCookie('city', city);
      currentCity = city.toUpperCase();
      refreshContact();
      if (city == 'warszawa') {
        commentLoad();
        $('#left-panel').css({ filter: 'none' });
        $('#fullpage').css({ filter: 'none' });
        $('.price-modal-cont').css({
          background: 'rgba(0, 0, 0, 0)',
          'z-index': '0'
        });
        modal.style.display = 'none';
        document.getElementById('price-city').innerText = 'WARSZAWA';
        $('#left-panel').css('pointer-events', 'all');
        $('#fullpage').css('pointer-events', 'all');
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setLockAnchors(false);
        $.fn.fullpage.setKeyboardScrolling(true);
        if (num == 0) $.fn.fullpage.moveTo('contact', 0);
        else if (num == 1) $.fn.fullpage.moveTo('price', 0);
        else if (num == 2) $.fn.fullpage.moveTo('comment', 0);
      } else if (city == 'lublin') {
        commentLoad();
        $('#left-panel').css({ filter: 'none' });
        $('#fullpage').css({ filter: 'none' });
        $('.price-modal-cont').css({
          background: 'rgba(0, 0, 0, 0)',
          'z-index': '0'
        });
        modal.style.display = 'none';
        document.getElementById('price-city').innerText = 'LUBLIN';
        $('.premium-details').css('display', 'none');
        $('.price-table-active').removeClass('price-table-active');
        $('.price-col-1-lublin').addClass('price-table-active');
        $('.price-test-cont-active').removeClass('price-test-cont-active');
        $('.price-test-cont-lublin').addClass('price-test-cont-active');
        $('.price-table-name-container').css('top', '34%');
        $('#left-panel').css('pointer-events', 'all');
        $('#fullpage').css('pointer-events', 'all');
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setLockAnchors(false);
        $.fn.fullpage.setKeyboardScrolling(true);
        if (num == 0) $.fn.fullpage.moveTo('contact', 0);
        else if (num == 1) $.fn.fullpage.moveTo('price', 0);
        else if (num == 2) $.fn.fullpage.moveTo('comment', 0);
      } else if (city == 'krakow') {
        commentLoad();
        $('#left-panel').css({ filter: 'none' });
        $('#fullpage').css({ filter: 'none' });
        $('.price-modal-cont').css({
          background: 'rgba(0, 0, 0, 0)',
          'z-index': '0'
        });
        modal.style.display = 'none';
        document.getElementById('price-city').innerText = 'KRAKÓW';
        $('.premium-details').css('display', 'none');
        $('.price-table-name-container').css('top', '34%');
        $('.price-table-active').removeClass('price-table-active');
        $('.price-col-1-krakow').addClass('price-table-active');
        $('.price-test-cont-active').removeClass('price-test-cont-active');
        $('.price-test-cont-krakow').addClass('price-test-cont-active');
        $('#left-panel').css('pointer-events', 'all');
        $('#fullpage').css('pointer-events', 'all');
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setLockAnchors(false);
        $.fn.fullpage.setKeyboardScrolling(true);
        if (num == 0) $.fn.fullpage.moveTo('contact', 0);
        else if (num == 1) $.fn.fullpage.moveTo('price', 0);
        else if (num == 2) $.fn.fullpage.moveTo('comment', 0);
      }
    };
  }
}

function updatePrice() {
  if (city == 'lublin') {
    document.getElementById('price-city').innerText = 'LUBLIN';
    $('.premium-details').css('display', 'none');
    $('.price-table-active').removeClass('price-table-active');
    $('.price-col-1-lublin').addClass('price-table-active');
    $('.price-test-cont-active').removeClass('price-test-cont-active');
    $('.price-test-cont-lublin').addClass('price-test-cont-active');
    $('.price-table-name-container').css('top', '34%');
  } else if (city == 'krakow') {
    document.getElementById('price-city').innerText = 'KRAKÓW';
    $('.premium-details').css('display', 'none');
    $('.price-table-active').removeClass('price-table-active');
    $('.price-col-1-krakow').addClass('price-table-active');
    $('.price-test-cont-active').removeClass('price-test-cont-active');
    $('.price-test-cont-krakow').addClass('price-test-cont-active');
    $('.price-table-name-container').css('top', '34%');
  } else if (city == 'warszawa') {
    document.getElementById('price-city').innerText = 'WARSZAWA';
    $('.premium-details').css('display', 'block');
    $('.price-table-active').removeClass('price-table-active');
    $('.price-col-1-warszawa').addClass('price-table-active');
    $('.price-test-cont-active').removeClass('price-test-cont-active');
    $('.price-test-cont-warszawa').addClass('price-test-cont-active');
    $('.price-table-name-container').css('top', '25%');
  }
}
function refreshContact() {
  if (city == 'lublin') {
    $('.text-city').html('Lublinie.');
    $('.contact-bg-text-1').html('LUBLIN');
    $('.contact-city-name').html('LUBLIN');
    $('.contact-city-street').html('Spokojna 17 / 19');
    $('.logo-city').html('LBN');
    if (screen.width > 640) myMap('lublin');
    if (
      $('.city-text-1').text() == 'LUBLIN' &&
      $('.city-text-2').text() == 'KRAKÓW'
    ) {
      $('#LUBLIN').attr('id', 'WARSZAWA');
      $('.city-text-1').text('WARSZAWA');
    } else if (
      $('.city-text-1').text() == 'KRAKÓW' &&
      $('.city-text-2').text() == 'LUBLIN'
    ) {
      $('#LUBLIN').attr('id', 'WARSZAWA');
      $('.city-text-2').text('WARSZAWA');
    } else if (
      $('.city-text-1').text() == 'WARSZAWA' &&
      $('.city-text-2').text() == 'LUBLIN'
    ) {
      $('#LUBLIN').attr('id', 'KRAKOW');
      $('.city-text-2').text('KRAKÓW');
    } else if (
      $('.city-text-1').text() == 'LUBLIN' &&
      $('.city-text-2').text() == 'WARSZAWA'
    ) {
      $('#LUBLIN').attr('id', 'KRAKOW');
      $('.city-text-1').text('KRAKÓW');
    }
  } else if (city == 'krakow') {
    $('.text-city').html('Krakowie.');
    $('.contact-bg-text-1').html('KRAKÓW');
    $('.contact-city-name').html('KRAKÓW');
    $('.logo-city').html('KRK');
    $('.contact-city-street').html(
      'Al. Beliny-Prażmowskiego <br class="desktop-skip"> 20A/2'
    );
    if (screen.width > 640) myMap('krakow');
    if (
      $('.city-text-1').text() == 'LUBLIN' &&
      $('.city-text-2').text() == 'KRAKÓW'
    ) {
      $('#KRAKOW').attr('id', 'WARSZAWA');
      $('.city-text-2').text('WARSZAWA');
    } else if (
      $('.city-text-1').text() == 'KRAKÓW' &&
      $('.city-text-2').text() == 'LUBLIN'
    ) {
      $('#KRAKOW').attr('id', 'WARSZAWA');
      $('.city-text-1').text('WARSZAWA');
    } else if (
      $('.city-text-1').text() == 'WARSZAWA' &&
      $('.city-text-2').text() == 'KRAKÓW'
    ) {
      $('#KRAKOW').attr('id', 'LUBLIN');
      $('.city-text-2').text('LUBLIN');
    } else if (
      $('.city-text-1').text() == 'KRAKÓW' &&
      $('.city-text-2').text() == 'WARSZAWA'
    ) {
      $('#KRAKOW').attr('id', 'LUBLIN');
      $('.city-text-1').text('LUBLIN');
    }
  } else if (city == 'warszawa') {
    $('.text-city').html('Warszawie.');
    $('.logo-city').html('W-WA');
    $('.contact-bg-text-1').html('WARSZAWA');
    $('.contact-city-name').html('WARSZAWA');
    $('.contact-city-street').html('ul. Koszykowa 82B/49');
    if (screen.width > 640) myMap('warszawa');
    if (
      $('.city-text-1').text() == 'LUBLIN' &&
      $('.city-text-2').text() == 'WARSZAWA'
    ) {
      $('#WARSZAWA').attr('id', 'KRAKOW');
      $('.city-text-2').text('KRAKÓW');
    } else if (
      $('.city-text-1').text() == 'WARSZAWA' &&
      $('.city-text-2').text() == 'LUBLIN'
    ) {
      $('#WARSZAWA').attr('id', 'KRAKOW');
      $('.city-text-2').text('KRAKÓW');
    } else if (
      $('.city-text-1').text() == 'WARSZAWA' &&
      $('.city-text-2').text() == 'KRAKÓW'
    ) {
      $('#WARSZAWA').attr('id', 'LUBLIN');
      $('.city-text-1').text('LUBLIN');
    } else if (
      $('.city-text-1').text() == 'KRAKÓW' &&
      $('.city-text-2').text() == 'WARSZAWA'
    ) {
      $('#WARSZAWA').attr('id', 'LUBLIN');
      $('.city-text-2').text('LUBLIN');
    }
  }
}
function subjectAnimation() {
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
  $('.col-program-2').effect('slide', { direction: 'down' }, 300, function() {
    $('.col-program-5').effect('slide', { direction: 'left' }, 300, function() {
      $('.col-program-3').effect(
        'slide',
        { direction: 'down' },
        300,
        function() {
          $('.col-program-1').effect(
            'slide',
            { direction: 'right' },
            300,
            function() {
              $.fn.fullpage.setAllowScrolling(true);
              $.fn.fullpage.setKeyboardScrolling(true);
            }
          );
        }
      );
    });
  });
}

function aboutAnimation() {
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
  $('.about-left-bottom-menu').effect(
    'slide',
    { direction: 'down' },
    300,
    function() {
      $('.subjects').effect('slide', 300, function() {
        $('.about-us-table').effect(
          'slide',
          { direction: 'down' },
          300,
          function() {
            $.fn.fullpage.setAllowScrolling(true);

            $.fn.fullpage.setKeyboardScrolling(true);
          }
        );
      });
    }
  );
}
var lublinComments = [
  [
    'img/comments/lublin/Agata-Piskorowska.png',
    'Agata Piskorowska',
    '"Indywidualne podejście do ucznia, luźny kontakt korepetytorów do uczniów i najpyszniejsza firmowa herbatka :-)"',
    'https://www.facebook.com/agata.piskorowska.5'
  ],
  [
    'img/comments/lublin/Arek-Papierz.png',
    'Arek Papierz',
    '"Znam wielu korepetytorów ale ci tutaj są najlepsi."',
    'https://www.facebook.com/arek.papier'
  ],
  [
    'img/comments/lublin/Karolina-Marczak.png',
    'Karolina Marczak',
    '"Elastyczne godziny zajęć, które pomagają ułożyć indywidualny plan dla każdego."',
    'https://www.facebook.com/karolina.marczak.35'
  ],
  [
    'img/comments/lublin/Ola-Marzeta.png',
    'Ola Marzęta',
    '"Nie tylko wysoki poziom nauczania, ale przede wszystkim wspaniała atmosfera i nauczyciele z pasją."',
    'https://www.facebook.com/ola.marzeta	'
  ],
  [
    'img/comments/lublin/Michal-Rokita.png',
    'Michał Rokita',
    '"Dokształcałem się w wielu szkołach i dopiero w tej czuję faktycznie różnicę w poziomie mojej wiedzy."',
    'https://www.facebook.com/michal.rokita1'
  ],
  [
    'img/comments/lublin/Kasia-Jakubowska.png',
    'Kasia Jakubowska',
    '"Genialna szkoła korepetycji!"',
    'https://www.facebook.com/people/Kasia-Jakubowska/100000966131891'
  ],
  [
    'img/comments/lublin/Michal-Kusmierzak.png',
    'Michał Kuśmierzak',
    '"Nie ma w Lublinie lepszych korepetycji z matury IB."',
    'https://www.facebook.com/michael.kusmierzak'
  ],
  [
    'img/comments/lublin/Marcel-Krol.png',
    'Marcel Król',
    '"Po kilku lekcjach od razu widać rezultaty pracy, korepetytorzy są wyrozumiali i cierpliwi."',
    'https://web.facebook.com/marcelkrl'
  ],
  [
    'img/comments/lublin/Kuba-Makuch.png',
    'Kuba Makuch',
    '"Super atmosfera, dobre podejście do uczniow, przyjemny sposob prowadzenia zajec i dobra hebratka ;D"',
    'https://web.facebook.com/kuba.makuch.96'
  ]
];
var warszawComments = [
  [
    'img/comments/warszawa/WIlhelm-Munio.png',
    'Wilhelm Munio',
    '„Kadra jest bardzo kompetentna i zadba, żeby każda minuta zajęć była bardzo dobrze wykorzystana.”',
    'https://www.facebook.com/wilhelm.munio'
  ],
  [
    'img/comments/warszawa/Ina-Matuszyk.png',
    'Ina Matuszyk',
    '„Jak zawalacie matmę, fizykę, czy życie, Foster High podratuje wiedzą, zadankami i firmową herbatą.”',
    'https://www.facebook.com/https://www.facebook.com/black.cat.two'
  ],
  [
    'img/comments/warszawa/Krzysztof-Zarnecki.png',
    'Krzysztof Żarnecki',
    '„Terminy są bardzo elastyczne, fajna atmosfera.”',
    'https://www.facebook.com/krzysztof.zarnecki'
  ],
  [
    'img/comments/warszawa/Julia-Piekarz.png',
    'Julia Piekarz',
    '„Miejsce warte polecenia osobom, dla których przedmioty ścisłe nie są mocną stroną :)”',
    'https://www.facebook.com/julia.piekarz.560'
  ],
  [
    'img/comments/warszawa/Maks-Zielinski.png',
    'Maks Zieliński',
    '„Indywidualne podejście do ucznia, niesamowita atmosfera oraz firmowa herbatka.”',
    'https://www.facebook.com/maks.zielinski.92'
  ],
  [
    'img/comments/warszawa/Ola-tarapata.png',
    'Ola Tarapata',
    '„Nie boję się zapytać jak czegoś nie wiem i serio na luzie są prowadzone zajęcia.”',
    'https://www.facebook.com/profile.php?id=100013005197428'
  ],
  [
    'img/comments/warszawa/Sandra-Skubis.png',
    'Sandra Skubis',
    '„Świetna szkoła, nauczyciele super, atmosfera jeszcze lepsza ;-)”',
    'https://www.facebook.com/profile.php?id=100006931008548'
  ],
  [
    'img/comments/warszawa/Szymon-Nowosielski.png',
    'Szymon Nowosielski',
    '„W Foster High lubię podejście do ucznia - z luzem, po koleżeńsku, indywidualnie.”',
    'https://www.facebook.com/profile.php?id=100008847914130'
  ],
  [
    'img/comments/warszawa/Wiktoria-Walachowska.png',
    'Wiktoria Wałachowska',
    '„Super nauczyciele, potrafią sprawić, że będąc cienką z matmy można wszystko ogarnąć :)”',
    'https://www.facebook.com/wiktoria.walachowska'
  ]
];
function commentLoad() {
  if (city == 'lublin') {
    $('.comments-all-coments a').attr(
      'href',
      'https://www.google.pl/search?ei=IM1qW8XLJOOg6ASJ_rDgAQ&q=foster%20high%20lublin&oq=foster%20high%20lublin&gs_l=psy-ab.3..0.287117.287713.0.288012.6.3.0.3.3.0.69.196.3.3.0....0...1c.1.64.psy-ab..0.6.207...0i22i30k1.0.Sn8MPUpW7aU#lrd=0x4722576a3273a785:0xe9514aab960eec98,1'
    );
    for (var i = 0; i < lublinComments.length; i++) {
      $.each($('.comment-photo-' + (i + 1)), function() {
        $(this).attr('src', lublinComments[i][0]);
      });
      $.each($('.comment-' + (i + 1)), function() {
        $(this).text(lublinComments[i][1]);
      });
      $.each($('.comment-text-' + (i + 1)), function() {
        $(this).text(lublinComments[i][2]);
      });
      $.each($('.comment-' + (i + 1)), function() {
        $(this).attr('href', lublinComments[i][3]);
      });
      $.each($('.commentl-' + (i + 1)), function() {
        $(this).attr('href', lublinComments[i][3]);
      });
    }
  } else if (city == 'krakow') {
    $('.comments-all-coments a').attr(
      'href',
      'https://www.google.pl/search?ei=VM1qW9LQIomRmwWsoqWQAw&q=foster%20high&oq=foster%20high&gs_l=psy-ab.3..0i67k1j0j0i67k1j0j0i22i30k1l6.34579.35029.0.35281.2.2.0.0.0.0.121.182.1j1.2.0....0...1c.1.64.psy-ab..0.2.181....0.-ygohHrSRsM#lrd=0x471ecc936837cd57:0x274a813edd1c87e2,1'
    );
    for (var i = 0; i < 3; i++) {
      $.each($('.comment-photo-' + (i + 1)), function() {
        $(this).attr('src', warszawComments[i][0]);
      });
      $.each($('.comment-' + (i + 1)), function() {
        $(this).text(warszawComments[i][1]);
      });
      $.each($('.comment-text-' + (i + 1)), function() {
        $(this).text(warszawComments[i][2]);
      });
      $.each($('.comment-' + (i + 1)), function() {
        $(this).attr('href', warszawComments[i][3]);
      });
      $.each($('.commentl-' + (i + 1)), function() {
        $(this).attr('href', warszawComments[i][3]);
      });
    }
    for (var i = 3; i < 6; i++) {
      $.each($('.comment-photo-' + (i + 1)), function() {
        $(this).attr('src', lublinComments[i - 3][0]);
      });
      $.each($('.comment-' + (i + 1)), function() {
        $(this).text(lublinComments[i - 3][1]);
      });
      $.each($('.comment-text-' + (i + 1)), function() {
        $(this).text(lublinComments[i - 3][2]);
      });
      $.each($('.comment-' + (i + 1)), function() {
        $(this).attr('href', lublinComments[i - 3][3]);
      });
      $.each($('.commentl-' + (i + 1)), function() {
        $(this).attr('href', lublinComments[i - 3][3]);
      });
    }
    for (var i = 6; i < 9; i++) {
      $.each($('.comment-photo-' + (i + 1)), function() {
        $(this).attr('src', warszawComments[i][0]);
      });
      $.each($('.comment-' + (i + 1)), function() {
        $(this).text(warszawComments[i][1]);
      });
      $.each($('.comment-text-' + (i + 1)), function() {
        $(this).text(warszawComments[i][2]);
      });
      $.each($('.comment-' + (i + 1)), function() {
        $(this).attr('href', warszawComments[i][3]);
      });
      $.each($('.commentl-' + (i + 1)), function() {
        $(this).attr('href', warszawComments[i][3]);
      });
    }
  } else if (city == 'warszawa') {
    $('.comments-all-coments a').attr(
      'href',
      'https://www.google.pl/search?ei=VM1qW9LQIomRmwWsoqWQAw&q=foster%20high&oq=foster%20high&gs_l=psy-ab.3..0i67k1j0j0i67k1j0j0i22i30k1l6.34579.35029.0.35281.2.2.0.0.0.0.121.182.1j1.2.0....0...1c.1.64.psy-ab..0.2.181....0.-ygohHrSRsM#lrd=0x471ecc936837cd57:0x274a813edd1c87e2,1'
    );
    for (var i = 0; i < warszawComments.length; i++) {
      $.each($('.comment-photo-' + (i + 1)), function() {
        $(this).attr('src', warszawComments[i][0]);
      });
      $.each($('.comment-' + (i + 1)), function() {
        $(this).text(warszawComments[i][1]);
      });
      $.each($('.comment-text-' + (i + 1)), function() {
        $(this).text(warszawComments[i][2]);
      });
      $.each($('.comment-' + (i + 1)), function() {
        $(this).attr('href', warszawComments[i][3]);
      });
      $.each($('.commentl-' + (i + 1)), function() {
        $(this).attr('href', warszawComments[i][3]);
      });
    }
  }
}
var mainLoopId;
var i = 5;
var prev = 1;
var checkFirst = true;
function changeTeachersBg() {
  if (checkFirst) {
    $('.teacher-image-4').effect(
      'slide',
      { direction: 'right' },
      500,
      function() {
        $('#right-teacher-' + prev).css('z-index', prev);
        $('#teacher-br-text-' + prev).addClass('teacher-bold');
        checkFirst = false;
        prev++;
        $('#right-teacher-' + prev).css('z-index', prev);
      }
    );
  } else {
    if (prev - 1 == 0)
      $('#teacher-br-text-' + (prev + 2)).removeClass('teacher-bold');
    else $('#teacher-br-text-' + (prev - 1)).removeClass('teacher-bold');
    $('#right-teacher-' + prev).effect(
      'slide',
      { direction: 'right' },
      500,
      function() {
        $('.teacher-image-' + i).effect(
          'slide',
          { direction: 'right' },
          400,
          function() {
            $('#teacher-br-text-' + prev).addClass('teacher-bold');
            if (i + 1 == 7) {
              $('.teacher-image-' + (i - 3)).css('display', 'none');
              $('#right-teacher-' + (prev - 2)).css('display', 'none');
            } else {
              $('.teacher-image-' + (i + 1)).css('display', 'none');
              $('#right-teacher-' + (prev + 1)).css('display', 'none');
            }
            if (i - 1 == 3) {
              $('.teacher-image-' + (i + 3)).css('display', 'none');
              $('#right-teacher-' + (prev + 2)).css('display', 'none');
            } else {
              $('.teacher-image-' + (i - 1)).css('display', 'none');
              $('#right-teacher-' + (prev - 1)).css('display', 'none');
            }
            $('#right-teacher-' + prev).css('z-index', prev);
            prev++;
            i++;
            if (i > 6) i = 4;
            if (prev > 3) {
              prev = 1;
              $('#right-teacher-' + prev).css('z-index', prev + 3);
            } else $('#right-teacher-' + prev).css('z-index', prev);
          }
        );
      }
    );
  }
}
if (!city) {
  var currentCity = 'WARSZAWA';
} else var currentCity = city.toUpperCase();
var citiesList = [
  ['WARSZAWA', 'ul. Koszykowa 82B/49'],
  ['LUBLIN', 'ul. Spokojna 17/19'],
  ['KRAKÓW', '']
];

function changeCity(clicked) {
  var changed = currentCity;
  var target = clicked;
  if (clicked == 'KRAKOW') target = citiesList[2][0];
  $('#' + clicked).attr('id', currentCity);
  currentCity = clicked;
  switch (currentCity) {
    case 'LUBLIN':
      city = 'lublin';
      setCookie('city', city);
      if (screen.width > 640) updatePrice();
      else if (screen.width < 640) loadPrice(city);
      changeCityText(target, changed);
      $('.text-city').html('Lubline.');
      $('.logo-city').html('LBN');
      $('.contact-city-name').html('LUBLIN');
      $('.contact-bg-text-1').html('LUBLIN');
      $('.contact-city-street').html('Spokojna 17 / 19');

      if (screen.width > 640) myMap('lublin');
      commentLoad();
      break;
    case 'KRAKOW':
      city = 'krakow';
      setCookie('city', city);
      if (screen.width > 640) updatePrice();
      else if (screen.width < 640) loadPrice(city);
      changeCityText(target, changed);
      $('.text-city').html('Krakowie.');
      $('.logo-city').html('KRK');
      $('.contact-city-name').html('KRAKÓW');
      $('.contact-bg-text-1').html('KRAKÓW');
      $('.contact-city-street').html('Al. Beliny-Prażmowskiego 20A/2');
      if (screen.width > 640) myMap('krakow');
      commentLoad();
      break;
    case 'WARSZAWA':
      city = 'warszawa';
      setCookie('city', city);
      if (screen.width > 640) updatePrice();
      else if (screen.width < 640) loadPrice(city);
      changeCityText(target, changed);
      $('.text-city').html('Warszawie.');
      $('.logo-city').html('W-WA');
      $('.contact-city-name').html('WARSZAWA');
      $('.contact-bg-text-1').html('WARSZAWA');
      $('.contact-city-street').html('ul. Koszykowa 82B/49');

      if (screen.width > 640) myMap('warszawa');
      commentLoad();
      break;
  }
}

function changeCityText(target, changed) {
  if (changed == 'KRAKOW') changed = citiesList[2][0];
  if ($('.city-text-1').text() == target) {
    $('.city-text-1').html(changed);
  } else if ($('.city-text-2').text() == target) {
    $('.city-text-2').html(changed);
  }
}

$('.spacer-box').on('click', function(e) {
  if (city == 'lublin') {
    $('.iframe-cont').css('display', 'block');
    if (screen.width > 640) {
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setLockAnchors(false);
      $.fn.fullpage.setKeyboardScrolling(true);
    }
    $('#left-panel').css({ 'pointer-events': 'none', filter: 'blur(5px)' });
    $('#fullpage').css({ 'pointer-events': 'none', filter: 'blur(5px)' });
    $('.worldpicture360_panorama').attr('src', 'iframe/lublin');
  } else if (city == 'warszawa') {
    $('.iframe-cont').css('display', 'block');
    if (screen.width > 640) {
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setLockAnchors(false);
      $.fn.fullpage.setKeyboardScrolling(true);
    }
    $('#left-panel').css({ 'pointer-events': 'none', filter: 'blur(5px)' });
    $('#fullpage').css({ 'pointer-events': 'none', filter: 'blur(5px)' });
    $('.worldpicture360_panorama').attr('src', 'iframe/warszawa');
  } else if (city == 'krakow') {
    e.stopPropagation();
  }
});

$('#price-close-i').on('click', function() {
  $('.iframe-cont').css('display', 'none');
  $('#left-panel').css({ 'pointer-events': 'all', filter: 'none' });
  $('#fullpage').css({ 'pointer-events': 'all', filter: 'none' });
  if (screen.width > 640) {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
  }
  $('.worldpicture360_panorama').attr('src', '');
});

$('.iframe-cont').on('click', function() {
  $('.iframe-cont').css('display', 'none');
  $('#left-panel').css({ 'pointer-events': 'all', filter: 'none' });
  $('#fullpage').css({ 'pointer-events': 'all', filter: 'none' });
  if (screen.width > 640) {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
  }
  $('.worldpicture360_panorama').attr('src', '');
});
$('.video-button').on('click', function() {
  if (screen.width > 640) {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
    $('#left-panel').css({ 'pointer-events': 'none', filter: 'blur(5px)' });
    $('#fullpage').css({ 'pointer-events': 'none', filter: 'blur(5px)' });
  }
  $('.video-popup-cont').css('display', 'block');
  if (screen.width > 640) $('#video-bg').trigger('pause');
  document.getElementById('video').play();
});

$('#price-close-v').on('click', function() {
  $('.video-popup-cont').css('display', 'none');
  if (screen.width > 640) {
    $('#left-panel').css({ 'pointer-events': 'all', filter: 'none' });
    $('#fullpage').css({ 'pointer-events': 'all', filter: 'none' });
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
  }
  $('#video').trigger('pause');
  if (screen.width > 640) document.getElementById('video-bg').play();
});
$('.video-popup-cont').on('click', function() {
  $('.video-popup-cont').css('display', 'none');
  if (screen.width > 640) {
    $('#left-panel').css({ 'pointer-events': 'all', filter: 'none' });
    $('#fullpage').css({ 'pointer-events': 'all', filter: 'none' });
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
  }
  $('#video').trigger('pause');
  if (screen.width > 640) document.getElementById('video-bg').play();
});

var video = document.getElementById('video');
video.onended = function() {
  $('.video-popup-cont').css('display', 'none');
  if (screen.width > 640) {
    $('#left-panel').css({ 'pointer-events': 'all', filter: 'none' });
    $('#fullpage').css({ 'pointer-events': 'all', filter: 'none' });
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
    document.getElementById('video-bg').play();
  }
};
function mapsSelector() {
  if (city == 'warszawa') {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf('iPhone') != -1 ||
      navigator.platform.indexOf('iPad') != -1 ||
      navigator.platform.indexOf('iPod') != -1
    )
      window.open(
        'maps://www.google.com/maps/search/?api=1&query=Foster+High,+ Warszawa'
      );
    /* else use Google */ else
      window.open(
        'https://www.google.com/maps/search/?api=1&query=Foster+High,+ Warszawa'
      );
  } else if (city == 'krakow') {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf('iPhone') != -1 ||
      navigator.platform.indexOf('iPad') != -1 ||
      navigator.platform.indexOf('iPod') != -1
    )
      window.open(
        'maps://www.google.com/maps/search/?api=1&query=Aleja+Pułkownika+Władysława+Beliny-Prażmowskiego+20A, + Kraków'
      );
    /* else use Google */ else
      window.open(
        'https://www.google.com/maps/search/?api=1&query=Aleja+Pułkownika+Władysława+Beliny-Prażmowskiego+20A, + Kraków'
      );
  } else if (city == 'lublin') {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf('iPhone') != -1 ||
      navigator.platform.indexOf('iPad') != -1 ||
      navigator.platform.indexOf('iPod') != -1
    )
      window.open(
        'maps://www.google.com/maps/search/?api=1&query=Foster+High,+ Lublin'
      );
    /* else use Google */ else
      window.open(
        'https://www.google.com/maps/search/?api=1&query=Foster+High,+ Lublin'
      );
  }
}

$('.contact-map-mob a').on('click', function() {
  mapsSelector();
});

$('.cookie-button').on('click', function() {
  cookie = true;
  setCookie('cookie', cookie);
  $('.cookie').css('display', 'none');
});
$('.cookie-a').on('click', function() {
  $('.private-policy-wrapper').css('display', 'inline-block');
  if (screen.width > 640) {
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setLockAnchors(true);
    $.fn.fullpage.setKeyboardScrolling(false);
  } else {
    $('body').css('overflow', 'hidden');
  }
});
function openPP() {
  $(document).ready(function() {
    $('.private-policy-wrapper').css('display', 'inline-block');
    if (screen.width > 640) {
      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setLockAnchors(true);
      $.fn.fullpage.setKeyboardScrolling(false);
    } else {
      $('body').css('overflow', 'hidden');
    }
  });
}
$('#private-policy').on('click', function() {
  openPP();
});
$('#price-close-pp').on('click', function() {
  $('.private-policy-wrapper').css('display', 'none');
  if (screen.width > 640) {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
  } else {
    $('body').css('overflow', 'visible');
  }
});
$('.private-policy-cont').on('click', function(e) {
  e.stopPropagation();
});
$('.faq-cont').on('click', function(e) {
  e.stopPropagation();
});
$('.reg-cont').on('click', function(e) {
  e.stopPropagation();
});
$('.private-policy-wrapper').on('click', function() {});
function openFaq() {
  $(document).ready(function() {
    $('.faq-wrapper').css('display', 'inline-block');
    if (screen.width > 640) {
      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setLockAnchors(true);
      $.fn.fullpage.setKeyboardScrolling(false);
    } else {
      $('body').css('overflow', 'hidden');
    }
  });
}
$('#faq').on('click', function() {
  openFaq();
});
$('#price-close-faq').on('click', function() {
  $('.faq-wrapper').css('display', 'none');
  if (screen.width > 640) {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
  } else {
    $('body').css('overflow', 'visible');
  }
});
$('.faq-wrapper').on('click', function() {
  $('.faq-wrapper').css('display', 'none');
  if (screen.width > 640) {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
  } else {
    $('body').css('overflow', 'visible');
  }
});
$('#regulamin').on('click', function() {
  $('.reg-wrapper').css('display', 'inline-block');
  if (screen.width > 640) {
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setLockAnchors(true);
    $.fn.fullpage.setKeyboardScrolling(false);
  } else {
    $('body').css('overflow', 'hidden');
  }
});
$('#price-close-reg').on('click', function() {
  $('.reg-wrapper').css('display', 'none');
  if (screen.width > 640) {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
  } else {
    $('body').css('overflow', 'visible');
  }
});
$('.reg-wrapper').on('click', function() {
  $('.reg-wrapper').css('display', 'none');
  if (screen.width > 640) {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setLockAnchors(false);
    $.fn.fullpage.setKeyboardScrolling(true);
  } else {
    $('body').css('overflow', 'visible');
  }
});

$('a.facebook').on('click', function(event) {
  // if (screen.width < 640) {
  //   setTimeout(function() {
  //     window.open('https://www.facebook.com/foshigh/', '_blank');
  //   }, 25);
  //   window.open($(this).data('scheme'), '_blank');
  // } else {
  window.open('https://www.facebook.com/foshigh/', '_blank');
  // }
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($('.spacer-box').visible('partial')) {
      if (!city) {
        $('body').css('overflow', 'hidden');
        mobpopup();
      }
    }
  });
});

$(document).ready(function() {
  var follower;
  var mouseX, mouseY, limitX, limitY;
  $('.mouse-move').each(function() {
    (mouseX = 0),
      (mouseY = 0),
      (limitX =
        parseInt($(this).css('width')) -
        parseInt(
          $(this)
            .children('img')
            .css('width')
        )),
      (limitY =
        parseInt($(this).css('height')) -
        10 -
        parseInt(
          $(this)
            .children('img')
            .css('height')
        ));
    $(this).mousemove(function(e) {
      var offset = $(this).offset();
      mouseX = Math.min(e.pageX - offset.left, limitX);
      mouseY = Math.min(e.pageY - offset.top, limitY);
      if (mouseX < 0) mouseX = 0;

      if (mouseY < 0) mouseY = 0;
      follower = $(this).children('img');
    });

    var xp = 0,
      yp = 0;
    var loop;
    $(this).on('mouseenter', function() {
      loop = setInterval(function() {
        xp += (mouseX - xp) / 20;
        yp += (mouseY - yp) / 20;
        follower.css({ left: xp, top: yp });
      }, 20);
    });
    $(this).on('mouseleave', function() {
      clearTimeout(loop);
    });
  });
});

function changeIconColor(doc, iconSVG) {
  $(doc)
    .find('.st0')
    .css({ fill: 'white' });
  iconSVG = document.getElementById('object-0');
  doc = iconSVG.contentDocument;
  $(doc)
    .find('.st0')
    .css({ fill: 'white' });
  iconSVG = document.getElementById('object-1');
  doc = iconSVG.contentDocument;
  $(doc)
    .find('.st0')
    .css({ fill: 'white' });
  iconSVG = document.getElementById('object-3');
  doc = iconSVG.contentDocument;
  $(doc)
    .find('.st0')
    .css({ fill: 'white' });
  iconSVG = document.getElementById('object-logo');
  doc = iconSVG.contentDocument;
  $(doc)
    .find('.cls-1')
    .css({ fill: 'white' });
}
function defaultIconColor(doc, iconSVG) {
  $(doc)
    .find('.st0')
    .css({ fill: '#3B3B3B' });
  iconSVG = document.getElementById('object-0');
  doc = iconSVG.contentDocument;
  $(doc)
    .find('.st0')
    .css({ fill: '#3B3B3B' });
  iconSVG = document.getElementById('object-1');
  doc = iconSVG.contentDocument;
  $(doc)
    .find('.st0')
    .css({ fill: '#3B3B3B' });
  iconSVG = document.getElementById('object-3');
  doc = iconSVG.contentDocument;
  $(doc)
    .find('.st0')
    .css({ fill: '#3B3B3B' });
  iconSVG = document.getElementById('object-logo');
  doc = iconSVG.contentDocument;
  $(doc)
    .find('.cls-1')
    .css({ fill: '#3B3B3B' });
}
