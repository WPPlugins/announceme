function setCookie(c_name, value, exdays) {
 var exdate = new Date();
 exdate.setDate(exdate.getDate()+exdays);
 var c_value=escape(value) + ((exdays==null) ? "" : ";expires="+exdate.toUTCString());
 document.cookie=c_name+"="+c_value;
}
$(document).ready(function() {
 mt = parseInt($("body").css('margin-top'));
 $(".announceme-close").click(function() {
  $(this).parent().slideUp(300);
  mt = mt-41;
  $("body").animate({'margin-top':mt+"px"},300);
 });
 $(".announceme-del").click(function() {
  id = $(this).parent().attr('id');
  $(this).parent().slideUp(300);
  mt = mt-41;
  $("body").animate({'margin-top':mt+"px"},300);
  setCookie(id,'deleted',1000000);
 });
});
