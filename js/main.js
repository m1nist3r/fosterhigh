if (screen.width <= 1025) {
} else if (screen.width > 1025) {
    $(document).ready(function () {
        $('#fullpage').fullpage({
            menu: '#menu',
            anchors: ['home', 'about-us', 'subjects', 'teachers', 'gallery', 'price', 'comment', 'contact'],
            scrollingSpeed: 1000,
            autoScrolling: true,
            lazyLoading: true,
            showActiveTooltip: true,
            responsiveWidth: 480,
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            onLeave: function (anchorLast, anchorFirst, direction) {
                if (anchorFirst.anchor == 'home') {
                    $('#left-panel').css('z-index', '0');
                    $('.video-bg').trigger('play');
                    $('.nav-item a').css('color', '#383838');
                    $('.social-box a').css('color', '#383838');
                    $('.logo-city').css('color', '#383838');
                    $('.phone').css('color', '#383838');
                    $('.bg-primary').animate({backgroundColor: '#ffbf0a'}, {duration: 1000, queue: false});
                    let iconSVG = document.getElementById('object-2');
                    let doc = iconSVG.contentDocument;
                    $(doc).find('.st1').css({fill: '#ffbf0a', transition: '1.0s'});
                    defaultIconColor(doc, iconSVG);
                } else if (anchorFirst.anchor == 'about-us') {
                    $('.nav-item a').css('color', '#383838');
                    $('.phone').css('color', '#383838');
                    $('.social-box a').css('color', '#383838');
                    $('.logo-city').css('color', '#383838');
                    $('.dot-gr-1').show(500);
                    $('.dot-gr-1').animate({backgroundColor: '#073884'}, {duration: 1000, queue: false});
                    $('#a-about').css({color: '#073884'});
                    $('.bg-primary').animate({backgroundColor: '#17e7c6'}, {duration: 1000, queue: false});
                    let iconSVG = document.getElementById('object-2');
                    let doc = iconSVG.contentDocument;
                    $(doc).find('.st1').css({fill: '#17e7c6', transition: '1.0s'});
                    defaultIconColor(doc, iconSVG);
                } else if (anchorFirst.anchor == 'subjects') {
                    $('.nav-item a').css('color', 'white');
                    $('.phone').css('color', 'white');
                    $('.social-box a').css('color', 'white');
                    $('.logo-city').css('color', 'white');
                    $('#a-subjects').css({color: '#ffbf0a'});
                    $('.dot-gr-2').show(500);
                    $('.dot-gr-2').animate({backgroundColor: '#ffbf0a'}, {duration: 1000, queue: false});
                    $('.bg-primary').animate({backgroundColor: '#071566'}, {duration: 1000, queue: false});
                    let iconSVG = document.getElementById('object-2');
                    let doc = iconSVG.contentDocument;
                    $(doc).find('.st1').css({fill: '#071566', transition: '1.0s'});
                    changeIconColor(doc, iconSVG);
                } else if (anchorFirst.anchor == 'teachers') {
                    $('.nav-item a').css('color', '#383838');
                    $('.phone').css('color', '#383838');
                    $('.social-box a').css('color', '#383838');
                    $('.logo-city').css('color', '#383838');
                    $('#a-teachers').css({color: '#071566'});
                    $('.dot-gr-3').show(500);
                    $('.dot-gr-3').animate({backgroundColor: '#071566'}, {duration: 1000, queue: false});
                    $('.bg-primary').animate({backgroundColor: '#17e7c6'}, {duration: 1000, queue: false});
                    let iconSVG = document.getElementById('object-2');
                    let doc = iconSVG.contentDocument;
                    $(doc).find('.st1').css({fill: '#17e7c6', transition: '1.0s'});
                    defaultIconColor(doc, iconSVG);
                } else if (anchorFirst.anchor == 'gallery') {
                    $('.nav-item a').css('color', '#383838');
                    $('.phone').css('color', '#383838');
                    $('.social-box a').css('color', '#383838');
                    $('.logo-city').css('color', '#383838');
                    $('#a-gallery').css({color: '#071566'});
                    $('.dot-gr-4').show(500);
                    $('.dot-gr-4').animate({backgroundColor: '#071566'}, {duration: 1000, queue: false});
                    $('.bg-primary').animate({backgroundColor: '#ffbf0a'}, {duration: 1000, queue: false});
                    let iconSVG = document.getElementById('object-2');
                    let doc = iconSVG.contentDocument;
                    $(doc).find('.st1').css({fill: '#ffbf0a', transition: '1.0s'});
                    defaultIconColor(doc, iconSVG);
                } else if (anchorFirst.anchor == 'price') {
                    if (city == 'warszawa' || city == 'lublin' || city == 'krakow') {
                        updatePrice();
                        $('.nav-item a').css('color', 'white');
                        $('.phone').css('color', 'white');
                        $('.social-box a').css('color', 'white');
                        $('.logo-city').css('color', 'white');
                        $('#a-price').css({color: '#ffbf0a'});
                        $('.dot-gr-5').show(500);
                        $('.dot-gr-5').animate({backgroundColor: '#ffbf0a'}, {duration: 1000, queue: false});
                        $('.bg-primary').animate({backgroundColor: '#071566'}, {duration: 1000, queue: false});
                        let iconSVG = document.getElementById('object-2');
                        let doc = iconSVG.contentDocument;
                        $(doc).find('.st1').css({fill: '#071566', transition: '1.0s'});
                        changeIconColor(doc, iconSVG);
                    } else {
                        popup(1);
                        return false;
                    }
                } else if (anchorFirst.anchor == 'comment') {
                    if (city == 'warszawa' || city == 'lublin' || city == 'krakow') {
                        $('.nav-item a').css('color', '#383838');
                        $('.social-box a').css('color', '#383838');
                        $('.logo-city').css('color', '#383838');
                        $('.phone').css('color', '#383838');
                        $('#a-comment').css({color: '#071566'});
                        $('.dot-gr-6').show(500);
                        $('.dot-gr-6').animate({backgroundColor: '#071566'}, {duration: 1000, queue: false});
                        $('.bg-primary').animate({backgroundColor: '#17e7c6'}, {duration: 1000, queue: false});
                        let iconSVG = document.getElementById('object-2');
                        let doc = iconSVG.contentDocument;
                        defaultIconColor(doc, iconSVG);
                        $(doc).find('.st1').css({fill: '#17e7c6', transition: '1.0s'});
                    } else {
                        popup(2);
                        return false;
                    }
                } else if (anchorFirst.anchor == 'contact') {
                    if (city == 'warszawa' || city == 'lublin' || city == 'krakow') {
                        setTimeout(() => {
                            $('.left-panel').animate({height: '94vh'}, {
                                duration: 300,
                                easin: 'easeInExpo',
                                queue: false
                            });
                        }, 900);
                        $('.dot-gr-7').animate({backgroundColor: '#071566'}, {duration: 1000});
                        $('.bg-primary').animate({backgroundColor: '#ffbf0a'}, {duration: 1000, queue: false});
                        refreshContact();
                        $('.nav-item a').css('color', '#383838');
                        $('.phone').css('color', '#383838');
                        $('.social-box a').css('color', '#383838');
                        $('.logo-city').css('color', '#383838');
                        $('#a-contact').css({color: '#071566'});
                        $('.dot-gr-7').show(500);
                        let iconSVG = document.getElementById('object-2');
                        let doc = iconSVG.contentDocument;
                        $(doc).find('.st1').css({fill: '#ffbf0a', transition: '1.0s'});
                        defaultIconColor(doc, iconSVG);
                    } else {
                        popup(0);
                        return false;
                    }
                }
                if (anchorLast.anchor == 'about-us') {
                    $('.dot-gr-1').hide(500);
                    $('.about-us-table').effect('slide', {direction: 'down', mode: 'hide'}, 250, function () {
                        $('.subjects').effect('slide', {direction: 'left', mode: 'hide'}, 200, function () {
                            $('.about-left-bottom-menu').effect('slide', {direction: 'down', mode: 'hide'}, 400);
                        });
                    });
                } else if (anchorLast.anchor == 'gallery') {
                    $('.dot-gr-4').hide(500);
                } else if (anchorLast.anchor == 'contact') {
                    $('.dot-gr-7').hide(100);
                    $('.left-panel').animate({height: '100%'}, {duration: 250});
                } else if (anchorLast.anchor == 'price') {
                    $('.dot-gr-5').hide(500);
                    $('.price-test-cont-active').effect('slide', {direction: 'left', mode: 'hide'}, 400, function () {
                        $('.price-table-active').effect('slide', {direction: 'left', mode: 'hide'}, 400, function () {
                            $('.price-table-name-container').css('display', 'none');
                        });
                    });
                } else if (anchorLast.anchor == 'subjects') {
                    $('.dot-gr-2').hide(500);
                    $('.col-program-1').effect('slide', {direction: 'right', mode: 'hide'}, 400, function () {
                        $('.col-program-3').effect('slide', {direction: 'down', mode: 'hide'}, 500, function () {
                            $('.col-program-5').effect('slide', {direction: 'left', mode: 'hide'}, 400, function () {
                                $('.col-program-2').effect('slide', {direction: 'down', mode: 'hide'}, 400);
                            });
                        });
                    });
                } else if (anchorLast.anchor == 'teachers') {
                    $('.dot-gr-3').hide(500);
                } else if (anchorLast.anchor == 'comment') {
                    $('.dot-gr-6').hide(500);
                } else if (anchorLast.anchor == 'home') {
                    $('#left-panel').css('z-index', '99999');
                }
            },
            afterLoad: function (anchorLast, anchorFirst, direction) {
                if (anchorFirst.anchor == 'about-us') {
                    aboutAnimation();
                }
                if (anchorFirst.anchor == 'gallery') {
                    popup(-1);
                }
                if (anchorFirst.anchor == 'price') {
                    priceAnimation();
                }
                if (anchorFirst.anchor == 'subjects') {
                    subjectAnimation();
                }
                if (anchorFirst.anchor == 'teachers') {
                }
                if (anchorFirst.anchor == 'comment') {
                }
                if (anchorFirst.anchor == 'contact') {
                }
            }
        });
        commentLoad();
    });
}

function myMap(city) {
    if (city == 'lublin') {
        var mapOptions = {
            center: new google.maps.LatLng(51.250507, 22.553803),
            zoom: 16,
            gestureHandling: 'cooperative',
            mapTypeId: google.maps.MapTypeId.roadmap
        };
        var map = new google.maps.Map(document.getElementById('city-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(51.251902, 22.553914),
            map: map,
            title: 'FosterHigh'
        });
    } else if (city == 'warszawa') {
        var mapOptions = {
            center: new google.maps.LatLng(52.223766, 21.000466),
            zoom: 15,
            gestureHandling: 'cooperative',
            mapTypeId: google.maps.MapTypeId.roadmap
        };
        var map = new google.maps.Map(document.getElementById('city-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(52.223766, 21.000466),
            map: map,
            title: 'FosterHigh'
        });
    } else if (city == 'krakow') {
        var mapOptions = {
            center: new google.maps.LatLng(50.065218, 19.947259),
            zoom: 15,
            gestureHandling: 'cooperative',
            mapTypeId: google.maps.MapTypeId.roadmap
        };
        var map = new google.maps.Map(document.getElementById('city-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(50.069063, 19.958937),
            map: map,
            title: 'FosterHigh'
        });
    } else {
        var mapOptions = {
            center: new google.maps.LatLng(52.223766, 21.000466),
            zoom: 18,
            gestureHandling: 'cooperative',
            mapTypeId: google.maps.MapTypeId.roadmap
        };
        var map = new google.maps.Map(document.getElementById('city-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(52.223766, 21.000466),
            map: map,
            title: 'FosterHigh'
        });
    }
}