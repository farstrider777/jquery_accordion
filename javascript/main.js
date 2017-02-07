$("section").on("mouseover", expandBox);

function expandBox(event){
  var target = event.currentTarget;
  target = $(target);
  $(".section1").removeClass("expanded").addClass("shrunk");
  $(".section2").removeClass("expanded").addClass("shrunk");
  $(".section3").removeClass("expanded").addClass("shrunk");
  target.removeClass("shrunk noClass").addClass( "expanded" );
}
