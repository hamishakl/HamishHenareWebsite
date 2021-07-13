const navbarChange = () => {
  const y = window.scrollY;
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const footerY = y + vh;
  const dribbleHeight = getDribbleDimensions();
  const dribbleShotsLength = vh + dribbleHeight;
  const vh2 = vh * 2;
  const about = vh * 3;
  const navbar = document.getElementsByClassName("navbar");
  const links = document.getElementsByClassName("navbar-link");

  const linkColor = (a, b) => {
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = a;
      links[i].style.borderColor = b;
    }
  };

  const navColor = (a, b, c, d, e) => {
    navbar[e].style.backgroundColor = a;
    navbar[e].style.borderColor = b;
    navbar[e].style.color = c;
    navbar[e].style.opacity = d;
  };

  if (y >= vh && y < dribbleShotsLength) {
    navColor("#f5f0e1", "#f5f0e1", "black", "0.5", 0);
  } else if (y > vh2 && y < about) {
    navColor("#1e3d59", "white", "white", "1", 0);
  } else {
    navColor("#f5f0e1", "black", "black", "1", 0);
  }

  const afterVh = vh * 1.02;

  if (footerY >= afterVh && footerY < dribbleShotsLength) {
    navColor("#f5f0e1", "#f5f0e1", "black", "0.5", 1);
    linkColor("black", "#f5f0e1");
    document.getElementById("nav-wrapper").style.display = "flex";
    document.getElementById("social-wrapper").style.display = "none";
  } else if (footerY > dribbleShotsLength) {
    navColor("#1e3d59", "white", "white", "1", 1);
    linkColor("white", "white");
    document.getElementById("nav-wrapper").style.display = "none";
    document.getElementById("social-wrapper").style.display = "flex";
  } else {
    navColor("#f5f0e1", "black", "black", "1", 1);
    linkColor("black", "black");
    document.getElementById("nav-wrapper").style.display = "flex";
    document.getElementById("social-wrapper").style.display = "none";
  }
};

const navbarAdjust = () => {
  document.getElementById("nav-wrapper").style.display = "flex";
  document.getElementById("social-wrapper").style.display = "none";
};

window.onscroll = () => {
  navbarChange();
};