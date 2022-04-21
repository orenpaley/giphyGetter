console.log("Let's get this party started!");

form = $('form');
article = $('article');
input = $('input');
remove = $('.remove');

form.on('submit', async function(e){
  e.preventDefault();
  console.log(e.target)
if (e.target.className === 'form') {
  gif = await getGiphy(input.val().toString())
  article.append($(`<img src=${gif.toString()} height='200'>`))
}
})

remove.on('click', function(){ 
  article.empty();
})

async function getGiphy (query) {
 let res = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=ll3q38tdnssB2pLaeKM6LC9iTxSkNoV1&tag=${query}&rating=g`)
 return res.data.data.images.downsized.url
}



 


