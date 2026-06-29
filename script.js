let button = document.querySelector(".footerButton")

button.addEventListener("click", function(){
  alert("Thanks for Visiting! :D")
  button.disabled = true  
  button.textContent = "Visited"
})

let modeButton = document.querySelector(".ModeButton")

modeButton.addEventListener("click", function(){
  document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        modeButton.innerHTML =
        '<i class="fa-solid fa-moon"></i>';
    }else{
        modeButton.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }
})
