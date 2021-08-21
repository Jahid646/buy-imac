//calcuate wit Memory cost 
const memoryElement = document.getElementById('memory-cost');
function calculateMemoryCost(size){
    let  memoryCost;
    if(size == '8gb') {
        memoryCost = 0;
    } else if(size == '16gb'){ 
        memoryCost = 180;
    }
    memoryElement.innerText = memoryCost;
}

document.getElementById('memory-8gb').addEventListener('click',function(){
    calculateMemoryCost('8gb');
    updateSubTotal();
});

document.getElementById('memory-16gb').addEventListener('click',function(){
    calculateMemoryCost('16gb');
    updateSubTotal();
});

//calculate with storage cost 
const storageElement = document.getElementById('storage-cost');
function calculateStorageCost(size){
    let storageCost;
      if(size  == '256gb'){
        storageCost = 0;
    }
    else if(size == '512gb'){
        storageCost = 100;
    }
    else{
        storageCost = 180;
    }
    storageElement.innerText = storageCost;
}
//function using onclick in button.


//calculate with delivery cost 
const deliveryElement = document.getElementById('delivery-cost');
function calculateDeliveryCost(choose){
    let deliveryCost;
      if(choose  == 'free'){
        deliveryCost = 0;
    }
    else if (choose == 'charge'){
        deliveryCost = 20;
    }
   deliveryElement.innerText = deliveryCost;
}
//function using onclick in button.


//  Calculation Subtotal

function updateSubTotal(){

    const bestPrice = document.getElementById('best-price').innerText;
    const newBestPrice = parseFloat(bestPrice);

    const memoryCost = document.getElementById('memory-cost').innerText;
    const newMemoryCost = parseFloat(memoryCost);

    const storageCost = document.getElementById('storage-cost').innerText;
    const newStorageCost = parseFloat(storageCost);

    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const newDeliveryCost = parseFloat(deliveryCost);

    const subTotal = document.getElementById('sub-total').innerText;
    let newSubTotal = parseFloat(subTotal);
    newSubTotal = newBestPrice + newMemoryCost + newStorageCost + newDeliveryCost;

    document.getElementById('sub-total').innerText = newSubTotal;
    document.getElementById('total-price').innerText = newSubTotal;
    
}

// Apply promo code 
function applyPromoCode(){
    const promoCode = document.getElementById('promo-input').value;
    const totalPrice = document.getElementById('sub-total').innerText;
    // value read from subTotal for re-type promo code issue 
    let newTotalPrice = parseFloat(totalPrice);


    if(promoCode == 'stevekaku'){

        newTotalPrice = newTotalPrice - (newTotalPrice * (20 / 100));
    }
    document.getElementById('promo-input').value = '';
    document.getElementById('total-price').innerText = newTotalPrice;
}
//function using onclick in button.