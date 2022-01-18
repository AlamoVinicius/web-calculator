
let area_resposta = document.querySelector("#area-result")
let button = document.querySelector('#btn-calculator')
button.addEventListener('click', clique)


  function clique() {
    let tipo_combustivel = document.querySelector('input[name="flexRadioDefault"]:checked').value
    area_resposta.innerHTML = tipo_combustivel
  }



