/*****************OUVERTURE & FERMETURE Menu*******/
let bt_menu= document.querySelector("nav #ouvrt");


let menu= document.querySelector(".menu");


let bt_close= document.querySelector("nav #ferm");

let width = window.innerWidth;
    console.log(width);

let ouvert= ()=>{
    menu.style.display = "block";
    bt_menu.style.display = "none";
     bt_close.style.display="block";
}


let fermer= ()=>{
    menu.style.display = "none";
    
    bt_menu.style.display = "block";
   
    bt_close.style.display="none";
   
} 

function handleResize() {
    var largeurEcran = window.innerWidth;
    // Remplacez 'monElement' par l'ID de votre élément
  
    if (largeurEcran > 1000) {
      // Modifier le style de l'élément lorsque la largeur de l'écran est supérieure à 1000 pixels
      bt_menu.style.display = "none";
    } else {
      // Rétablir le style par défaut lorsque la largeur de l'écran est inférieure ou égale à 1000 pixels
      bt_menu.style.display = "block";
    }
  }
  
  // Ajouter un écouteur d'événement pour l'événement resize
  window.addEventListener('resize', handleResize);
  
  // Exécution initiale pour appliquer le style en fonction de la largeur de l'écran au chargement de la page
  handleResize();

/*********************************envoye_formulaire****************************************** */
function envoyer(){
    let content_formul=document.getElementsByClassName("content_formul");
    console.log(content_formul);
    content_formul[0].innerHTML="";
    let message=document.createElement('p');
    message.style.fontSize="20px";
    message.textContent="MESSAGE ENVOYER";
    content_formul[0].appendChild(message);
}
/************************************************************** */
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


