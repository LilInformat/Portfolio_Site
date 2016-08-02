  /*
  * Open the drawer when the menu ison is clicked.
  */
  var menu = document.querySelector('#header_menu_id');
  var main = document.querySelector('main');
  var drawer = document.querySelector('.nav_list');

  menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
  });

  main.addEventListener('click', function() {
    drawer.classList.remove('open');
  });

  function DisplayInformation(id){
    var target = document.querySelector(id);
    target.classList.toggle('show');
  };

  function HideInformation(id){
    var target = document.querySelector(id);
    target.classList.remove('show');
  };
