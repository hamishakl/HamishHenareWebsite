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
    if (data.length > 0) {
      data.forEach((element) => {
        console.log(element);
        dribbleWrapper.innerHTML += webOrPrint(element)
        
      });
    }
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
  
  window.addEventListener('load', function () {
    
})

const webOrPrint = (element) => {
  const tags = element.tags
    for (let i = 0; i < tags.length; i++) {
        if (tags.includes('web') ) {
          console.log('issa website')
            return `
            <a class="dribble-link" href="${element.html_url}">
                <div class="dribble-item">
                    <p class="dribble-text">${element.title}</p>
                    <img class="dribble-image" src="${element.images.hidpi}"/>
                    <div class="dribble-button url-link-button">
                    url
                    </div>
                    <div class="dribble-button dribble-link-button">info
                    </div>
                    </a>
                    `
                  } else {
                    return `
                    <a class="dribble-link" href="${element.html_url}">
                <div class="dribble-item">
                    <p class="dribble-text">${element.title}</p>
                    <img class="dribble-image" src="${element.images.hidpi}"/>
                    <div class="dribble-button url-link-button">
                      url
                    </div>
                    </div>
                    </a>
            `
        }
        
    }
}

