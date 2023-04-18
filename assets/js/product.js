$(document).ready(function() {
    $('.card-img-top').click(function() {
      var $card = $(this).closest('.card');
      if (!$card.hasClass('full-screen')) {
        $card.addClass('full-screen');
        $card.append('<span class="close-btn">&times;</span>');
        $('body').addClass('no-scroll');
      }
    });
    
    $(document).on('click', '.close-btn', function() {
      var $card = $(this).closest('.card');
      $card.removeClass('full-screen');
      $('.close-btn').remove();
      $('body').removeClass('no-scroll');
    });
  });

  