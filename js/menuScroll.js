$(function(){
  $("nav ul li a, footer ul li a").click(function(){
      var href = $(this).attr("href");
      var offSetTop = $(href).offset().top;

      $("html,body").animate({"scrollTop":offSetTop-64});

      return false;
  });
});