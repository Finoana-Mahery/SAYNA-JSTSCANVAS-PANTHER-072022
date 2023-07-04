let btleft=document.querySelector(".s_left");
let btright=document.querySelector(".s_right");
let contenue=document.getElementsByClassName("contenue");
let content_gal=document.querySelector(".contentGalerie");

let compteurGalerie=0;
console.log(contenue[0].firstElementChild);
contenue[0].firstElementChild.style.transform="scale(1)";
function overflow (n){
  content_gal.scrollIntoView;
  compteurGalerie= compteurGalerie+n;
  contenue[compteurGalerie].scrollIntoView();

  if(compteurGalerie ===9)
  {
    
    btright.style.visibility="hidden";

  }
  else
  {
    btright.style.visibility="visible";
  }

  if(compteurGalerie!==0){
    btleft.style.visibility="visible";
  }
  else
  {
    btleft.style.visibility="hidden";
  }
  
}

btleft.addEventListener("click",function(){
  overflow(-1);
})
btright.addEventListener("click", () => {overflow(1)})