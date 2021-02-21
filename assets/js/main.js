$('.button').on('click', function () {
      $(".focus").css({ 'top': '47%', 'left': '41.5%' });
      $('.button').removeClass('active');
      $( document.activeElement).addClass('active');
}) 