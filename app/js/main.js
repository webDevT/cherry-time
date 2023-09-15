$(function(){

    $('.close-modal').click(function(){
        $('.login-modal').fadeOut();
    })

    $(function($){
        $(document).mouseup(function (e){ 
          var div = $(".login-modal-content"); 
          var div2 = $(".login-modal");
          if (!div.is(e.target) 
              && div.has(e.target).length === 0) {
            div2.fadeOut();
      
          }
        });
      });
    
    $('.header__login').click(function(){
        $('.login-modal').fadeIn();
    })

    $('.slider').slick({
        dots: true,
        arrows: false,
        fade: true
    });

    $('.proceed-item .green-button').click(function() {
        $(this).parent().addClass('active');
    })

    $('.close-item').click(function(){
        $('.proceed-item').removeClass('active');
    })

    $('.code-button').click(function(){
        $('.proceed-item__content-wrapper').addClass('active');
    })

    $('.pick-up-select').on('change', function() {
       $('.pick-up__content').addClass('active');
      });

    $('.checkout-table__footer').click(function(){
        $(this).parent().find('.checkout-delivery-details').slideToggle();
        $(this).parent().find('.down-white').toggleClass('active');
    })

    $('.add-gift__button').click(function(){
        $('.add-gift-content').slideToggle();
        $(this).css('opacity', '0');
    })

    $(".tab").click(function() {
        $(".tab").removeClass("active").eq($(this).index()).addClass("active");
         $(".tab__item").hide().eq($(this).index()).fadeIn(1000)
    }).eq(0).addClass("active");

    $('.tabs').click(function(){
        $(this).toggleClass('active');
    })

    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.admin-menu').toggleClass('active');

    })

      

    

      

});

const incrementButton = document.querySelector(".increment");
const decrementButton = document.querySelector(".decrement");
const quantityInput = document.querySelector(".quantity");

incrementButton.addEventListener("click", () => {
    if(quantityInput.value <= 14) {
  quantityInput.value = parseInt(quantityInput.value) + 1;
    }
});
decrementButton.addEventListener("click", () => {
    if(quantityInput.value >= 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  
});

let codeInput = document.getElementById('code-input')

codeInput.oninput = function() {
    if (codeInput.value.length >= 4) {
        document.getElementById('codeBtn').classList.add('active');
    } else {
        document.getElementById('codeBtn').classList.remove('active');
    }
    
  };


