 let searchedItems = document.querySelector('.searchItems')
 let searchBttn = document.querySelector('.searchButton')

 searchBttn.addEventListener('click', searchNow)


 function searchNow() {
    event.preventDefault();
    let searchBara = document.querySelector('.searchBar')
    let keyWords = searchBara.value


   let appleSearchURL = 'https://itunes.apple.com/search?term=' + keyWords;
   let audio = document.querySelector('.audio')
   let results = document.querySelector('.results')

    fetch(appleSearchURL)
     .then(
       function(response) {
       if (response.status !== 200) {
         console.log("Wir habten einen Problem...tuten uns Leid aber es ist Kaputz...");
         return
        }

       response.json().then(function(data) {
         for (var i = 0; i < data.results.length; i++) {
           // console.log(data.results[i].trackName);
           let eachSearchItem += `<div class="resultBox" id=${i}>
             <img src="${data.results[i].artworkUrl100}">
             <p>${data.results[i].trackName}</p>
             <p>${data.results[i].artistName}<p/>
             </div>
           `
         }
         console.log(data);
})
     })
     .catch(function(err) {
       console.log('Fetch Error :-S', err);
     })

 }
