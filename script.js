const form = document.querySelector("#form-habits") 
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click',add)
form.addEventListener("change",save)


function add() {
  const today= new Date().toLocaleDateString()
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists){ 
    alert('Dia já existe!')
    return
  }
  alert('Adicionado com sucesso ✔')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data))
}
/* data é um objeto e nlwSetup também
const data = {
  run: ["01-01","01-03"],
  water: ["01-01","01-02","01-04"],
  food:['01-01','01-02','01-03'],
  journal:['01-02','01-05','01-06'],
  takepills:['01-03']
}
*/

function save() {
  localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load() 


