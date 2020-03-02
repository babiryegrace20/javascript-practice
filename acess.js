function acess(a,b,c,d,e){
const demoid = document.getElementById(a)
const democlass = document.getElementsByClassName(b)
const demotag = document.getElementsByTagName(c)
const demoquery = document.querySelector(d)
const demoqueryall = document.querySelectorAll(e)

demoid.style.border= '1px solid purple'

for (i=0; i<democlass.length; i++)
{
 
  democlass[i].style.border='1px solid orange'

}

for(i=0; i<demotag.length; i++)
{

   demotag[i].style.border= '1px solid blue'

}
demoquery.style.border= '1px solid red'

demoqueryall.forEach(query=>
  {
query.style.border = '1px solid green'
})

}
//acess('demo', 'demo', 'article', '#demoquery', '.demo-query-all')