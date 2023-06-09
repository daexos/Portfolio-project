function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}



function onTabSelected (event) {
  /* Remove currently active classes */
  // From the document
  document
    // Grab the currently active link
    .querySelector('a.active')
    // Get its list of classes
    .classList
    // Remove active
    .remove('active');
  document
    // Grab the currently active section
    .querySelector('section.active')
    // Get its list of classes
    .classList
    // Remove active
    .remove('active');
  // Get the element that was clicked  
  let linkElement = event.target;

  
  linkElement.classList.add('active');
  // Grab the id from the HREF attribute of
  // the link that was clicked.  
  let id = event.target.getAttribute('href');  
  // Grab the element pointed to by the link, and add
  // active to its classList
  document.querySelector(id)
    .classList.add('active');

}

