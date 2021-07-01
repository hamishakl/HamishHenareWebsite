const navbarChange = () => {
  const navbar = document.getElementById("navbar");
  const links = document.getElementsByClassName('navbar-link'); // get all links
  const linkColor = (a) => {
      for(var i = 0; i < links.length; i++){
          links[i].style.color = a;
      }
  }
  if (window.scrollY > window.innerHeight) {
    navbar.style.backgroundColor = "#f5f0e1";
    navbar.style.color = "black";
    navbar.style.borderColor = "black"
    linkColor('black')
} else {
    navbar.style.borderColor = "white"
    navbar.style.color = "white";
    navbar.style.backgroundColor = "#1e3d59";
	linkColor('white')
  }
};

window.onscroll = () => navbarChange()
