// reverse a string 

function reversestring(str)
{
     return str.split('').reverse().join('');
}

console.log(reversestring('vrello'));

// js function for Palindrome 
// By  starting and reversing the character should et same results  


function checkpal(str)
{
    var reversestr = reversestring(str);

    if(str === reversestr)
    {
        return true;
    }
    return false;
}
console.log(checkpal('oppo'))

// Put the zero if month is less than 9 like 09 
// same for day also 

function convertDatetoStr(date)
{
  var dateStr = {day: '', month : '' , year : ''};

//    if day no. is less  than 10 then append zero before digit 9
    if(date.day < 10)
    {
        dateStr.day = '0' + date.day;    // 0 + 9 = 09 
    }
    else{
        dateStr.day = date.day.toString(); // rest converted to string  10 ->  '10'
    }

    //    if month no. is less  than 10 then append zero before digit 9
    if(date.month < 10)
    {
        dateStr.month = '0' + date.month;    // 0 + 9 = 09 
    }else{
        dateStr.month = date.month.toString(); // restt converted to string  10 ->  '10'
    }

    dateStr.year = date.year.toString();
    return dateStr;
}

var date = {
  day : 5,
  month : 9,
  year : 2020
}

console.log(convertDatetoStr(date))

// get All date Formats 

function getallDateFormats()
{
    var dateStr = convertDatetoStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year ;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year  ;
    var yyyymmdd =  dateStr.year + dateStr.month + dateStr.day ;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2) ;
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2) ;
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day ;

    return [ddmmyyyy , mmddyyyy , yyyymmdd ,ddmmyy , mmddyy , yymmdd];

}

console.log(getallDateFormats(date));