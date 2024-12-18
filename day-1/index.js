// Get references to DOM elements
const itemInput = document.getElementById('item-input')
const addItemButton = document.getElementById('add-item-button')
const shoppingList = document.getElementById('shopping-list')
const error = document.getElementById('error')
const listArr = []

// Function to check item is not duplicate
function checkDuplicate() {
    const itemText = itemInput.value.trim()
    const checkedText = itemText.replace(/\s{2,}/g, ' ')
    const existingValue = listArr.find((item)=>{
      return item.toLowerCase() === checkedText.toLowerCase()
    })
    if(checkedText){
        if(!existingValue && !listArr.includes(checkedText)){
            error.innerHTML = ""
            listArr.push(checkedText)
            renderList()        
        }else{
           error.innerHTML = "Duplicate value!"
        }
    }else{
        error.innerHTML = "Item is required!"
    }
}

// Function to add an item to the shopping list
function renderList() {
    shoppingList.innerHTML = ''
    listArr.forEach((gift) => {
        const listItem = document.createElement('li')
        listItem.textContent = gift
        shoppingList.appendChild(listItem)
    })
 error.innerHTML = ""; // Clear the input field
}

// Add event listener to button
addItemButton.addEventListener('click', checkDuplicate)

// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate()
    }
})
