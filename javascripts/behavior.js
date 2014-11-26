/*
$( document ).ready(function() {
  var menu = document.querySelector('.sidebar > .nav')
  var menuPosition = menu.getBoundingClientRect().top;
  var classTrigger = menuPosition - 110;
  window.addEventListener('scroll', function() {
      if (window.pageYOffset >= classTrigger) {
          menu.style.position = 'fixed';
          menu.style.top = '110px';
      } else {
          menu.style.position = 'static';
          menu.style.top = '';
      }
  });
});
*/


