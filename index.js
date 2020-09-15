

var sectionIds = {};
$(".section").each(function () {
    var $this = $(this);
    sectionIds[$this.attr("id")] = $this.first().offset().top;
});


$(window).scroll(function (event) {
  var scrolled = $(this).scrollTop();
  for (key in sectionIds) {
      if (scrolled+200 >= sectionIds[key]) {
        $(".nav-item").removeClass("active");
        var c = $("[data-id=" + key + "]");
        c.addClass("active");
      }
      if((key==='top-img-logo' && scrolled >= 0 && scrolled < 500)
        || (key!=='top-img-logo' && scrolled > sectionIds[key]-500)){
        $(`.${key}`).addClass('active')
        // console.log('---')
      }
      else{
        $(`.${key}`).removeClass('active')
      }
        
        // else{
        //   $('.intro').css("opacity", 0.2);
        // }
      // }
      // else{
      //   $('.intro').css("opacity", "yellow");
      // }
  }
});