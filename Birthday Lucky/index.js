const dateofBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumberButton = document.querySelector('#check-number');
const outputBox = document.querySelector('#output-box');

 function comparevalues(sum,luckyNumber)
 {
    if(sum%luckyNumber === 0){
        outputBox.innerText = "Your Birthday is Lucky";
    }else{
        outputBox.innerText = "Sorry! Your Birthday is not Lucky";
    }
 }


 function checkbirthdayisLucky()
 {
      const dob = dateofBirth.value;
      const sum = calculateSum(dob);
      comparevalues(sum,luckyNumber.value);
 }

  function calculateSum(dob)
 {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i = 0;i<dob.length;i++)
    {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
 }


checkNumberButton.addEventListener('click',checkbirthdayisLucky);

