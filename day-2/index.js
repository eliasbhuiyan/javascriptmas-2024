const calendarContainer = document.getElementById('calendar');
for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);
}
const calendarBox = document.querySelectorAll(".calendar-box")

const saveCalender = ()=>{
  const saved = Array.from(calendarBox).map(item => item.innerHTML);
  if(saved) localStorage.setItem("giftCalender", JSON.stringify(saved))
}
window.onload = ()=>{
  const giftCalender = JSON.parse(localStorage.getItem('giftCalender'))
 if(giftCalender) giftCalender.forEach((items, index)=>{
    calendarBox[index].innerHTML = items;
  })
}
let giftItems = ["🍕", "🍔", "🍫", "🍬", "🍗", "🧁", "🚗", "🏠", "🚲", "👗", "🥼", "💰"]
calendarBox.forEach((boxes)=>{
  boxes.addEventListener("click",(e)=>{
    const parentBox = e.target.closest(".calendar-box")
    parentBox.innerHTML = "";
    let giftBox = document.createElement('p');
    giftBox.classList.add("giftBox");
    
    let randomGift = Math.floor(Math.random() * giftItems.length)
    giftBox.innerHTML = giftItems[randomGift];
    parentBox.appendChild(giftBox)
    parentBox.style.pointerEvents = "none"
    saveCalender()
})
})