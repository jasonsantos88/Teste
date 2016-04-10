
/*!
 * DOUGLAS PORTO - FUNCTION JS
 */

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

/* ==================================================
   Filter Works
================================================== */

DP.filter = function (){
    if($('#projects').length > 0){      
        var $container = $('#projects');
        
        $container.imagesLoaded(function() {
            $container.isotope({
              // options
              animationEngine: 'best-available',
              itemSelector : '.item-thumbs',
              layoutMode : 'fitRows'
            });
        });
    
        
        // filter items when filter link is clicked
        var $optionSets = $('#options .option-set'),
            $optionLinks = $optionSets.find('a');
    
          $optionLinks.click(function(){
            var $this = $(this);
            // don't proceed if already selected
            if ( $this.hasClass('selected') ) {
              return false;
            }
            var $optionSet = $this.parents('.option-set');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
      
            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
            // parse 'false' as false boolean
            value = value === 'false' ? false : value;
            options[ key ] = value;
            if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
              // changes in layout modes need extra logic
              changeLayoutMode( $this, options )
            } else {
              // otherwise, apply new options
              $container.isotope( options );
            }
            
            return false;
        });
    }
}


/* ==================================================
   FancyBox
================================================== */

DP.fancyBox = function(){
    if($('.fancybox').length > 0 || $('.fancybox-media').length > 0 || $('.fancybox-various').length > 0){
        
        $(".fancybox").fancybox({               
            padding : 0,
            beforeShow: function () {
                this.title = $(this.element).attr('title');
                this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
            },
            helpers : {
                title : { type: 'inside' },
            }
        });
            
        $('.fancybox-media').fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            helpers : {
                media : {}
            }
        });
        
        $(".fancybox-various").fancybox({
            maxWidth    : 800,
            maxHeight   : 600,
            fitToView   : false,
            width       : '70%',
            height      : '70%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none'
        });
    }
}


$(document).ready(function(){
    // Call placeholder.js to enable Placeholder Property for IE9
    Modernizr.load([
    {
        test: Modernizr.placeholder,
        nope: '_include/js/placeholder.js', 
        complete : function() {
                if (!Modernizr.placeholder) {
                        Placeholders.init({
                        live: true,
                        hideOnFocus: false,
                        className: "yourClass",
                        textColor: "#999"
                        });    
                }
        }
    }
    ]);

    
    
    DP.filter();
    DP.fancyBox();
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