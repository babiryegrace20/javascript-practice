//accessing elements by elementIds
/**function validate(name)
{
userid = document.getElementById(name)
if (userid.value.length>4 && userid.value.length<13)
{
userid.style.border='1px solid green'
}
else
{
  userid.style.border='1px solid red'
}

} **/

//accessing elements by form name attributes
function validate()
{

  var userid = document.loan.FullName
  var job    = document.loan.Job
  var email  = document.loan.Email
  var phoneno = document.loan.PhoneNumber
  var yearly = document.loan.YearlyIncome
  var amount = document.loan.Amount

function uid(min, max)
  {

    if(userid.value.length==0|| userid.value.length<min||userid.value.length>max)
    {
      alert('Invalid length')
    }
    
  }

  var ValidateEmail =(email) =>{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
      if(email.value.match(mailformat))
      {
        return true
      }
      else
      {
        alert("Invalid email address")
        email.focus()
        return false
      }
    }

    var tel =(phoneno) =>{
      if(phoneno.value.length==0 || phoneno.value.length!=10)
      {
        alert("Invalid phone number")
        phoneno.focus()
        return false
      }
      else
      {
        return true
      }
    }

function alphabet()
{
  /**declaring a variable letter that stores the regular expression that 
  will be matched against**/
  var letter = /^[A-Za-z]+$/
  if (job.value.match(letter))
  {
    return true
  }
  else
  {
    alert("Value should not be numeric")
    job.focus()
    return false
  }
}

var year =(yearly)=>{

  var yearlyIncome = /^[0-9]+$/;
  if (yearly.value.match(yearlyIncome))
  {
    return true
  }
  else
  {
    alert("Value should be numeric")
    job.focus()
    return false
  }
}
var amountToLoan =(amount)=>{

  var amountIncome = /^[0-9]+$/;
  if (amount.value.match(amountIncome))
  {
    return true
  }
  else
  {
    alert("Value should be numeric")
    job.focus()
    return false
  }
}
if(uid(5,12))
{
  
}
if(ValidateEmail(email))
 {

 }
 if(tel(phoneno))
{

}
 if(alphabet())
 {

 } 
 

if(year(yearly, amount))
{

}
if(amountToLoan(amount))
{
  
}
}

  
