var $btnMenu = jQuery('#btn-toggle-menu'),
    $nav    = jQuery('#sidebar-wrapper');
$btnMenu.on('click', function() {
  if ($nav.hasClass('active')) {
    // jQuery(this).removeClass('active').find('.fa').removeClass('fa-times').addClass('fa-bars');
    jQuery('.overlay').removeClass('visible');
    setTimeout(function(){jQuery('.overlay').remove()}, 400);
    jQuery(this).removeClass('active').find('.nav-icon').removeClass('x');
    $nav.removeClass('active');
  } else {
    // jQuery(this).addClass('active').find('.fa').removeClass('fa-bars').addClass('fa-times');
    jQuery('body').append('<div class="overlay"></div>');
    setTimeout(function(){jQuery('.overlay').addClass('visible')}, 5);
    jQuery(this).addClass('active').find('.nav-icon').addClass('x');
    $nav.addClass('active');
  }
});
