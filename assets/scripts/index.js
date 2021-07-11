const navbarChange = () => {
  const y = window.scrollY;
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
    const dribbleHeight = getDribbleDimensions()
    const dribbleShotsLength = vh + (dribbleHeight*4)
  const vh2 = vh * 2;
  const about = vh * 3;
  const contact = vh * 4;
  const navbar = document.getElementById("navbar");
  const links = document.getElementsByClassName("navbar-link");
  const linkWrapper = document.getElementById("link-wrapper");
  const linkColor = (a) => {
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = a;
    }
  };
  if (y >= vh && y < dribbleShotsLength) {
    navbar.style.backgroundColor = "#f5f0e1";
    linkWrapper.style.borderTop = "1.2px solid black";
    navbar.style.color = "black";
    navbar.style.borderColor = "black";
    linkColor("black");
    navbar.style.opacity = "0.5";
  } else if (y > vh2 && y < about) {
    navbar.style.opacity = "1";
    linkWrapper.style.borderTop = "1.2px solid white";

    navbar.style.borderColor = "white";
    navbar.style.color = "white";
    navbar.style.backgroundColor = "#1e3d59";
    linkColor("white");
  } else if (y > about && y < contact) {
  } else {
    navbar.style.opacity = "1";
    navbar.style.backgroundColor = "#f5f0e1";
    navbar.style.color = "black";
    linkWrapper.style.borderTop = "1.2px solid black";

    navbar.style.borderColor = "black";
    linkColor("black");
  }
};

window.onscroll = () => {
  navbarChange();
};
