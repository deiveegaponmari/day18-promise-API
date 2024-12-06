//Fetch data from url
function fetchallimage(url) {
  fetch(url)
    .then((response) => {
      return response.json()
    }).then((result) => {
      console.log(result.message)
      return renderimage(result.message)
    }).catch((err) => {
      console.log(err)
    })
}
const url = "https://dog.ceo/api/breeds/image/random";

//----------------------------------

const button = document.getElementById("button_dog");
button.addEventListener('click', () => {
  const getdata = fetchallimage(url);
  if(getdata){
    renderimage();
  }
  
})
function renderimage(data) {
  const renderdata = document.getElementById("render_image");
  //console.log(render_image)
  //console.log(data);

  const image = document.createElement("img");
  image.src = data;
  renderdata.innerHTML = "";
  renderdata.appendChild(image)
}
