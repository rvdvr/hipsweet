$(document).ready(function(){
  $('.cupcake__list').slick({
      arrows: false,
			dots: true,
			infinite: true,
			speed: 750,
			slidesToShow: 1,
			adaptiveHeight: true
  });
});

$(document).ready(function() {
    $('.cook__link').on('click',function(e) {
      e.preventDefault();

      var
          $this = $(this),
          item = $this.closest('.cook__item'),
          container = $this.closest('.our-team'),
          content = container.find('.cook__disc-item'),
          ndx = item.index();

      item.addClass('cook__item_active')
          .siblings()
          .removeClass('cook__item_active');

      content.eq(ndx)
            .addClass('cook__disc-item_active')
            .siblings()
            .removeClass('cook__disc-item_active');
    });




    (function() {
      $('.accordion__trigger').on('click', function(e) {
        e.preventDefault();

        var
            $this = $(this),
            container = $this.closest('.accordion'),
            item = $this.closest('.accordion__item'),
            currentContent = item.find('.accordion__cont')
            duration = 500;



        if (!item.hasClass('accordion__item_active')) {
            item.addClass('accordion__item_active')
            .siblings()
            .removeClass('accordion__item_active')
            .find('.accordion__cont')
            .slideUp();

            currentContent.stop(true, true).slideDown(duration);
        } else {
            item.removeClass('accordion__item_active');
            currentContent.stop(true, true).slideUp(duration);
        }


      });
    })();


});






$('#phone').mask('8 (000) 000-00-00');


var map,
    myIcon;

   DG.then(function () {
       map = DG.map('map', {
           center: [59.89681506743146,30.402910000732366],
           zoom: 13,
           scrollWheelZoom: false,
           fullscreenControl: false
       });

       myIcon = DG.icon ({
            iconUrl: 'img/marker.png',
            iconSize: [42,59]
       });

       DG.marker([59.89681506743146,30.402910000732366], {
            icon: myIcon
       }).addTo(map);
   });
