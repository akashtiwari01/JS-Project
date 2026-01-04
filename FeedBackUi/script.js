const ratingEl=document.querySelectorAll(".rating")
const btnEl=document.getElementById("btn")
const containerEl = document.getElementById("container");
let selR="";

ratingEl.forEach((rating)=>{
    rating.addEventListener("click",(event)=>{
    removeActive()
    selR=event.target.innerText || event.target.parentNode.innerText
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
    })
})

btnEl.addEventListener("click", () => {
  if (selR !== "") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selR}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
});

function removeActive(){
    ratingEl.forEach((rating) => {
    rating.classList.remove("active");
  });
}