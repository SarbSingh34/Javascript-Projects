var initialprice =  document.querySelector('#initial-price');
var stocksqty =  document.querySelector('#stocks-quantity');
var currentprice =  document.querySelector('#current-price');
var submitbtn = document.querySelector('#submit-btn');

var outputbox = document.querySelector('#output-box');

submitbtn.addEventListener('click',submitHandler);

function submitHandler()
{
    var ip = initialprice.value ;
    var qty = stocksqty.value;
    var curr = currentprice.value;

    calculateprofitandloss(ip,qty,curr);
}


function calculateprofitandloss(initial,quantity,current)
    {
        if(initial > current)       // 10 > 100
      {
            var loss = (initial - current) * quantity;
            var losspercentage = (loss/initial) * 100 ;

          console.log(`Hey the loss is ${loss} and the Loss  percent is ${losspercentage} % `);
      }
      else if(current > initial)
      {
         var profit = (current - initial) * quantity;
         var profitpercentage = (profit/initial) * 100 ;
         
         console.log(`Hey the Profit is ${profit} and the Profit percent is ${profitpercentage} % `);

      }else{
         console.log('No Profit  nor  Loss //No Pain no  Gain')
      }
    }

// Can use output to  represent output 
