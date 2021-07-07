const accessToken =
  "88a8d38855edc06b5bf5e20ae720ca304ee7edcb5858491b1eeafdf3c8be8f9c";

const dribbleWrapper = document.getElementById("dribble-wrapper");
fetch(`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`)
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
    if (data.length > 0) {
      data.forEach((element) => {
        console.log(element);
        dribbleWrapper.innerHTML += `<a href="${element.html_url}"><div class="dribble-item"><h1 class="dribble-text">${element.description}</h1>+<img class="dribble-image" src="${element.images.hidpi}"/></div></a>`;
      });
    }
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
