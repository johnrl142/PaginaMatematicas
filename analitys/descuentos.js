 
//descuento normal
function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento; 
}


function OnClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = parseFloat(inputPrice.value);
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = parseFloat(inputDiscount.value);
    const descuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El valor de descuento ingresado es de: " + discountValue + "%, " + "el total a pagar es de: $" + descuento;
}

//descuento con cupones texto
 const coupons = [
     "NewYear",
     "TheGroundhogDay",
     "CanadaDay",
     "LaborDay",
     "ThanksGivindDay",
     "BoxingDay",
     "FamiliDay",
     "BlackFriday"
];

function OnClickButtonCuponText() {
    const inputPrice = document.getElementById("InputPrice2");
    const priceValue = parseFloat(inputPrice.value);
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = (inputCoupon.value) ;

    let descuento;

    switch(couponValue) {
      case "NewYear":
        descuento = 80;
      break;
      case "TheGroundhogDay":
        descuento = 30;
      break;
      case "CanadaDay":
        descuento = 10;
      break
      case "LaborDay":
        descuento = 20;
      break;
      case "ThanksGivindDay":
        descuento = 20;
      break;
      case "BoxingDay":
        descuento = 50;
      break;
      case "FamiliDay":
        descuento = 15;
      break;
      case "BlackFriday":
        descuento = 60;
      break;
    }
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultC = document.getElementById("ResultCuponText");
    resultC.innerText = "Su descuento es del: " + descuento + "%, " + "el total a pagar es de: $" + precioConDescuento;
  }

  //descuento con lista desplegable

  function OnClickButtonCupon() {
    const inputPrice = document.getElementById("InputPrice3");
    const priceValue = parseFloat(inputPrice.value);

    const cupons = document.getElementById("Cupons");
    const cupon = parseFloat(cupons.value);

    const descuento = calcularPrecioConDescuento(priceValue, cupon);

    const resultCS = document.getElementById("ResulCuponSelect");
    resultCS.innerText = "Su descuento es de: "+ cupon + "%, " + "el total a pagar es de: $" + descuento;
    
  }

  