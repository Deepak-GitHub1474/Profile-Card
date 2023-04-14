// Change Heart for favourite
let heart = document.querySelector(".fa-heart");
heart.onclick = ()=>{
    if(heart.classList.contains("fa-regular")){
        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");
        heart.style.color = "red";
    }
    else{
        heart.classList.add("fa-regular");
        heart.classList.remove("fa-solid");
        heart.style.color = "black";
    }
};

// Change Profile image

let profileImg = document.querySelector(".profile-img");
let inputFile = document.querySelector("#input-file");
inputFile.onchange = ()=>{
    profileImg.src = URL.createObjectURL(inputFile.files[0]);
};
