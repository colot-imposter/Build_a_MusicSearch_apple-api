let searchBttn = document.getElementsByClassName('searchButton')
searchBttn.addEventListener('click', searchNow)

function searchNow() {
  let searchBara = document.querySelector('.searchBar')
  let keyWords = searchBara.value

  let appleSearchURL = "https://itunes.apple.com/search?=" + keyWords;

  fetch(appleSearchURL)
    .then(
      function(response) {
        if (response.status !== 200) console.log("Wir habten einen Problem...tuten uns Leid aber es ist Kaputz...");
      }
      return
    )
}
