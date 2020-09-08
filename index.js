var sectionIds = {};
$(".section").each(function () {
    var $this = $(this);
    sectionIds[$this.attr("id")] = $this.first().offset().top;
});

console.log(sectionIds)

$(window).scroll(function (event) {
  var scrolled = $(this).scrollTop();
  for (key in sectionIds) {
      if (scrolled+200 >= sectionIds[key]) {
        $(".nav-item").removeClass("active");
        var c = $("[data-id=" + key + "]");
        c.addClass("active");
      }


      // if(scrolled < sectionIds.intro-500 || scrolled > sectionIds.intro+500){
        var diff = sectionIds.intro - scrolled-200
        if(diff<0){
          $('.intro').css("opacity", 1);
        }
        else{
          $('.intro').css("opacity", (500-diff)/500);
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