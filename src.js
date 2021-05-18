const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navLink");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



/** NAVIGATION ACTIVE EFFECTS  **/
/*

var navScrollListener = function navScrollListener() {
    //Nav Button Targets
    var homeNav = document.querySelector('#nav-home');
    var skillsNav = document.querySelector('#nav-skills');
    var aboutNav = document.querySelector('#nav-about');
    var projectsNav = document.querySelector('#nav-projects');
    var contactNav = document.querySelector('#nav-contact');
    var navArray = [homeNav, skillsNav, aboutNav, projectsNav, contactNav];
  
    var clearActiveLinkStyle = function clearActiveLinkStyle(navButton) {
      if (navButton.classList.contains('active-link-section')) {
        navButton.classList.remove('active-link-section');
      }
    };
  
    var colorClear = function colorClear(arrayToClear) {
      arrayToClear.map(clearActiveLinkStyle);
    };
  
    var navColorDetect = function navColorDetect() {
      var screenPosition = window.pageYOffset; // console.log(screenPosition)
      // console.log(contactScrollPosition - (headerHeight * 2));
  
      if (screenPosition > homeScrollPosition && !homeNav.classList.contains('active-link-section') && screenPosition < skillsScrollPosition) {
        colorClear(navArray);
        homeNav.classList.add('active-link-section');
      } else if (screenPosition >= skillsScrollPosition && screenPosition < aboutScrollPosition && !skillsNav.classList.contains('active-link-section')) {
        colorClear(navArray);
        skillsNav.classList.add('active-link-section');
      } else if (screenPosition >= aboutScrollPosition && screenPosition < projectsScrollPosition && !aboutNav.classList.contains('active-link-section')) {
        colorClear(navArray);
        aboutNav.classList.add('active-link-section');
      } else if (screenPosition >= projectsScrollPosition && screenPosition < contactScrollPosition - headerHeight * 4 && !projectsNav.classList.contains('active-link-section')) {
        colorClear(navArray);
        projectsNav.classList.add('active-link-section');
      } else if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && !contactNav.classList.contains('active-link-section')) {
        colorClear(navArray);
        contactNav.classList.add('active-link-section');
      }
    };
  
    navColorDetect();
    document.addEventListener('scroll', navColorDetect);
  };
*/