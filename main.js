let searchedItems = document.querySelector('.searchItems')

let searchBttn = document.querySelector('.searchButton')
searchBttn.addEventListener('click', function(event) {
  event.preventDefault();

  let searchBara = document.querySelector('.searchBar')
  let keyWords = searchBara.value

  let appleSearchURL = 'https://itunes.apple.com/search?term=' + keyWords;
  let audio = document.querySelector('.audio')


  let results = document.querySelector('.results')
  let eachSearchItem = ''
  // let resultsBox = document.querySelector('.results');

  fetch(appleSearchURL)
    .then(function(response) {
      if (response.status !== 200) {
        console.log("Wir habten einen Problem...tuten uns Leid aber es ist Kaputz..." + response.status);
        return;
        }
      })
      response.json().then(function(data) {

        // console.log(data.results);
        for (var i = 0; i < data.results.length; i++) {
          // console.log(data.results[i].trackName);
          eachSearchItem += `
            <div class="resultBox" id=${i}>
            <img src="${data.results[i].artworkUrl100}" alt='Album Artwork'>
            <p>${data.results[i].trackName}</p>
            <p>${data.results[i].artistName}<p/>
            </div>
          `
        }
        sectResults.innerHTML = eachSearchItem;
        return data;
      })
      .then(function(data) {
        console.log(data);
        let allResultDivs = document.querySelectorAll('.result');
        // allResultDivs.forEach(function(e) {
        //   e.addEventListener('click', function(clickEvent) {
        //     let audioPlayer = audio
        //     audioPlayer.src = data.results[clickEvent.path[1].id].previewUrl;
        //   })
        // })

      })
      .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });

})




//you are a real cool dude, dude! 





  // ----------------------------------
  //
  //let eachSearchItem=`
  //<audio class="music-player" controls="controls" src="${}"></audio>
  //   <div class="itemContainer${i}">
  //     <div class="extrasContainer">
  //       <ul>
  //         <li>ALbum:</li>
  //         <li>Genre</li>
  //         <li>Time</li>
  //       </ul>
  //     </div>
  //     <h2>Artist: ${data.results[i].artistName}</h2>
  //     <h3>Song Title: ${data.trackName}</h3>
  //   </div>
  //   `
  //   console.log(i+ eeeeewis)





//_________________________________-------------
