const changetxt = () =>{
  const p = document.querySelector('p')
  p.textContent = 'je changed because of an event listener'
}

const button = document.querySelector('button')
button.addEventListener('click',changetxt)