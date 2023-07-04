let bio = document.getElementsByClassName("bio");
console.log(bio);


for(let i=0;i<3;i++){
    bio[i].style.display = "none";
}
bio[1].style.display = "flex";