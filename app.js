const card = document.querySelector('.card')
const card2 = document.querySelector('.card2')
const loader = document.querySelector('.loading-gif')

document.querySelector('.form').addEventListener('submit',(e)=>{
  const inputText = document.querySelector('.inputText').value
  card2.innerHTML = `<h3>Welcome ${inputText}</h3>
  <p>Eid Greetings From Mary</p>
  <img src="Happy-Eid-Mubarak.webp" alt="">
   <p>Enjoy your holiday ${inputText}</p>
   <p><i class ="fa fa-heart"></i></p>
   <p><i class ="fa fa-heart"></i></p>
   <p><i class ="fa fa-heart"></i></p>
   <p><i class ="fa fa-heart"></i></p>

  `
  loader.style.display = 'block'

  setTimeout(()=>{
   card.style.display = 'none',
   loader.style.display = 'none'
  },2000)


  setTimeout(()=>{
    card2.style.display = 'block'
  },3000)





  


})





  