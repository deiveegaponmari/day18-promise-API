//Fetch data from url
 function fetchallimage(url) {
  fetch(url)
  .then((response)=>{
    return response.json()
  }).then((result)=>{
    //console.log(result)
    return renderdata(result)
  }).catch((err)=>{
    console.log(err)
  })
 }
const url="https://api.thecatapi.com/v1/images/search?limit=10";
//----------------------------------

const button=document.getElementById("button-pets");
button.addEventListener('click',()=>{
  const getdata=fetchallimage(url);
  console.log(getdata)
  if(getdata){
  renderdata();
  }else{
    console.log(error);
  }
})
function renderdata(data){
  const render_image=document.getElementById("pets_image");
  //console.log(render_image)
  console.log(data);
  data.forEach((datavalue) => {
    const image=document.createElement("img");
    image.src=datavalue.url;
    image.width=datavalue.width;
    image.height=datavalue.height;
    render_image.appendChild(image)
});
 
}
