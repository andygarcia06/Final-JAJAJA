
const popup = document.querySelector("#popup"),
head = popup.querySelector(".jajaja-popup-header");
function popupOnDrag({movementX, movementY}){
  let getStyle = window.getComputedStyle(popup);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  popup.style.left = `${leftVal + movementX}px`;
  popup.style.top = `${topVal + movementY}px`;
}
// popup.addEventListener('click',()=>{
//     alert('click')
// })
head.addEventListener("mousedown", ()=>{
  head.classList.add("active");
  head.addEventListener("mousemove", popupOnDrag);
});
document.addEventListener("mouseup", ()=>{
  head.classList.remove("active");
  head.removeEventListener("mousemove", popupOnDrag);
});

const closePopup2 = document.querySelector('.close-popup-2');

closePopup2.addEventListener('click', ()=>{
    popup.style.display = 'none';
})










