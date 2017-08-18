let searchedItems = document.querySelector('.searchItems')

let searchBttn = document.querySelector('.searchButton')
searchBttn.addEventListener('click', function(event) {
  event.preventDefault();

  let searchBara = document.querySelector('.searchBar')
  let keyWords = searchBara.value

  let appleSearchURL = 'https://itunes.apple.com/search?term=' + keyWords;
  let audio = document.querySelector('.audio')
  let results = document.querySelector('.results')

  fetch(appleSearchURL)
    .then(function(response) {
      if (response.status !== 200) {
        console.log("Wir habten einen Problem...tuten uns Leid aber es ist Kaputz...");
        return;
      }
      if
      response.json().then(function(data) {
        console.log(data);
      }) response.json
    }) then(fun)
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    })
  catch

  //anothys
  // Examine the text in the response
  // response.json().then(function(data) {
  //   console.log(data);
  //   let results = data.results;
  //   let container = document.querySelector('.results');
  //   container.innerHTML = '';
  //
  //let eachSearchItem=`
  //<audio class="music-player" controls="controls" src="${}"></audio>
  //   <div class="itemContainer${i}">
  //     <div class="extrasContainer">
  //       <ul>
  //         <li>ALbum: </li>
  //         <li>Genre</li>
  //         <li>Time</li>
  //       </ul>
  //     </div>
  //     <h2>Artist: ${data.artistName}</h2>
  //     <h3>Song Title: ${data.trackName}</h3>
  //   </div>
  //   `
  //   console.log(i+ eeeeewis)

})
