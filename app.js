function getPin(){
    const pin=generatePin();
    const pinString=pin+'';
    if(pinString.length===4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const randomNum= Math.round(Math.random()*10000);
    return randomNum;
}
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField=document.getElementById('display-pin');
    displayPinField.value =pin;
})


document.getElementById('calculator').addEventListener('click',function(event){
    const number= event.target.innerText;
    const typedNumberField= document.getElementById('typed-field');
    const previousTypedNumber=typedNumberField.value;
    if(isNaN(number)){
        if(number==='C'){
            typedNumberField.value='';
        }
    }else{
        const newTypedNumber=previousTypedNumber+number;
        typedNumberField.value=newTypedNumber;
    }
})


document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField=document.getElementById('display-pin')
    const currentPin=displayPinField.value;

    const typedNumberField=document.getElementById('typed-field');
    const typedPinNumber=typedNumberField.value;

    const pinSuccess= document.getElementById('pin-success');
    const pinFail=document.getElementById('pin-fail');

    if(typedPinNumber===currentPin){
        pinSuccess.style.display='block';
        pinFail.style.display='none';

    }else{
        pinFail.style.display='block';
        pinSuccess.style.display='none';
    }
})