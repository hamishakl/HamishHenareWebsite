const navbarChange = () => {
  const y = window.scrollY;
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  const vh2 = vh * 2;
  const about = vh * 3
  const contact = vh * 4
  const footer = vh * 5
  const navbar = document.getElementById("navbar");
  const links = document.getElementsByClassName("navbar-link"); // get all links
  const linkColor = (a) => {
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = a;
    }
  };
  if (y >= vh && y < vh2) {
    navbar.style.backgroundColor = "#f5f0e1";
    
    navbar.style.color = "black";
    navbar.style.borderColor = "black";
    linkColor("black");
    navbar.style.opacity = "0.5"
  } 
  else if (y > vh2 && y < about ){
    navbar.style.opacity = "1"
    navbar.style.borderColor = "white";
    navbar.style.color = "white";
    navbar.style.backgroundColor = "#1e3d59";
    linkColor("white");
  } 
  else if (y > about && y < contact) {
  } 
  else {
    navbar.style.opacity = "1"
    navbar.style.backgroundColor = "#f5f0e1";
    navbar.style.color = "black";
    navbar.style.borderColor = "black";
    linkColor("black");
  }
};

// const a = document.getElementById("work-section")

// const textPath = document.querySelector("#text-path");

// const h = document.documentElement,
//       b = document.body,
//       st = 'scrollTop',
//       sh = 'scrollHeight';

// document.addEventListener("scroll", e => {
//   let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
//   textPath.setAttribute("startOffset", (-percent * 40) + 1200)
// });

window.onscroll = () => {
  navbarChange();
};

//hey bro, i havent had any time to work on the bot as im busy with client websites. i might have some time friday to publish the avg down a couple times then stop? atm its just been running the fiverr dudes script with no avg down since we stopped it a few weeks back.