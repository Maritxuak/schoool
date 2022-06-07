function currentfun() {
    var current = $('#current option:selected').val();
    if (current.length > 0) {
    switch (current) {
            case "usd":
              $("li.price_line div.val").removeClass("active");
              $("li .usd").addClass("active");
              break;     
            case "euro":
              $("li.price_line div.val").removeClass("active");
              $("li .euro").addClass("active");
              break;  
            case "rub":
              $("li.price_line div.val").removeClass("active");
              $("li .rub").addClass("active");
              break;    
          } 
      }
    }
    // аякс пагинация
    $(document).ajaxStop(function() {
     currentfun();
    });
    // событие выбора
    $(' #current').change(function() {
     currentfun();
    //запись в куки
    jQuery.cookie("selected-val", $('#current option:selected').val(), {expires: 365, path:'/'});
    });
    // после загрузки страницы
    jQuery(document).ready(function(){
      currentfun();  
      var selectedVal = jQuery.cookie("selected-val");
      if (selectedVal) {
          $('#current option:selected').removeAttr("selected");
            $('#current').val($.cookie("selected-val"));
            $("#current option[value='"+$.cookie("selected-val")+"']").attr("selected", "selected");
      }   
    
    });