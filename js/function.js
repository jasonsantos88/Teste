
/*!
 * DOUGLAS PORTO - FUNCTION JS
 */


document.querySelector('#idiom').addEventListener('change', function () {

  var origin = window.location.origin;

  switch (this.value) {

    case 'en':
      window.location = origin + '/en/index.html';
      break;
    case 'pt_br':
      window.location = origin + '/pt_br/index.html';
      break;

  }

});

// =============================================================================
// ================ FUNCTION btn-toggle =======================================
// =============================================================================

var $btnMenu = jQuery('#btn-toggle-menu'),
$nav    = jQuery('#wrapper');
$btnMenu.on('click', function(e) {
      e.preventDefault();
    $("#wrapper").toggleClass("toggled");
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
    // ;$btnMenu.css("left","260px")
    $nav.addClass('active');
  }
});


//=============================================================================
// ==================== FUNCTION SCROLL =======================================
// ============================================================================
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



//=============================================================================
// =================== NECESSARY FUNCTIONS TO PORTIFOLIO ======================
// ============================================================================

jQuery(function($){

var DP = window.DP || {};



$(document).ready(function(){
    

    
    var data = idade(1990, 01, 31);
    $("#age").html(data);
});
});
function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),
  
        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,
  
        quantos_anos = ano_atual - ano_aniversario;
    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
  
  return quantos_anos < 0 ? 0 : quantos_anos;
}