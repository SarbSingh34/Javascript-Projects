const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector('#error-message');

checkButton.addEventListener('click',() =>
{  
      message.style.display = "none";
      if(billAmount.value > 0){
             if(cashGiven.value >= billAmount.value)
             {
                   const amountleft = cashGiven.value - billAmount.value;
                   message.style.display = amountleft;
             }else
             {
                  showmessage("  Go Get Enough Money equal to bill amount ");
             }
      }
      else {

            showmessage('Invalid Bill Amount');
      }
})

function showmessage(msg){
      message.style.display = "block";
      message.innerText = msg;
}