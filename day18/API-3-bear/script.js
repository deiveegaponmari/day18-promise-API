const url = "https://placebear.com/200/300.jpg";

//----------------------------------

const button = document.getElementById("button_dog");
button.addEventListener('click', () => {
  const url = "https://placebear.com/200/300.jpg";
  if(url){
    renderimage(url);
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
