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

      

});