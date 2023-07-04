/*****************OUVERTURE & FERMETURE Menu*******/
let bt_menu= document.querySelector("nav #ouvrt");


let menu= document.querySelector(".menu");


let bt_close= document.querySelector("nav #ferm");

let width = window.innerWidth;
   

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
   
    content_formul[0].innerHTML="";
    let message=document.createElement('p');
    message.style.fontSize="20px";
    message.textContent="MESSAGE ENVOYER";
    content_formul[0].appendChild(message);
}
/************************************************************** */



