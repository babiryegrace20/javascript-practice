function validate(){
  var uid = document.form.Firstname
  var secondname = document.form.Lastname
  var streetname = document.form.Street
  var cityname = document.form.City
  var text  = document.form.textarea
  var images = document.form.image
  var selects = document.form.select


  function character(min, max){
    if(uid.value.length==0|| uid.value.length<min||uid.value.length>max)
    {
      alert('Invalid length')
    }

  }
  
  function lastname(minimum, maximum){
    if(secondname.value.length==0|| secondname.value.length<minimum||secondname.value.length>maximum)
    {
      alert('Invalid length')
    }

  }

  function alphanumeric(){
    

  }
  function cityname(){

  }
  function text(){

  }
  function imagevalidate(){

  }
  function selected(){

  }
  if (character(5,12)){

  }

  if (lastname(5, 12)){

  }
  if (alphanumeric(streetname)){

  }
  if (cityname()){

  }
  if (text()){

  }
  if (imagevalidate(images)){

  }
  if (selected(selects)){

  }
}


