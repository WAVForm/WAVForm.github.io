//v 0.01
$(document).ready(()=>{
  $('#mobile-menu').click(()=>{
    $('#mobile-open').css("display", "block");
    $('#mobile-open').css("animation", "nav-menu-opening 1s cubic-bezier(0.5, 0, 0.25, 1) 1");
    $('#mobile-open').css("width", "var(--mobile-menu-size)");
  });

  $('#mobile-exit').click( ()=>{
    $('#mobile-open').css("display", "block");
    $('#mobile-open').css("animation", "");
    setTimeout(()=>{
    $('#mobile-open').delay(1).css("animation", "nav-menu-opening 1s cubic-bezier(0.5, 0, 0.25, 1) 1 reverse");
    setTimeout(() => {
      $('#mobile-open').delay(1000).css("display", "none");
    }, "1000");
    },"1")
  });

})