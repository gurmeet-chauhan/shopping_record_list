document.querySelector('#form-items').addEventListener('submit', function(event){
    event.preventDefault();

    let itemNameElement=document.querySelector('#item-name');
    let itemPriceElement=document.querySelector('#item-price');

    const itemName = itemNameElement.value;
    const itemPrice = itemPriceElement.value;
    if (itemName=="" || itemPrice=="") return false;
    const listItem = document.createElement('li')
    listItem.innerHTML=itemName +" - " + itemPrice
    document.querySelector('#items').appendChild(listItem)
    
    itemNameElement.value="";
    itemPriceElement.value="";



})