
let area_resposta = document.querySelector("#area-result")
let button = document.querySelector('#btn-calculator')

button.addEventListener('click', clique)


function clique() {
  let tipo_combustivel = document.querySelector('input[name="flexRadioDefault"]:checked').value
  let preco_combustivel = Number(document.querySelector('#fuel-price').value)
  let autonomia = Number(document.querySelector('#autonomia').value)
  let valor_total = Number(document.querySelector('#valor-total').value)
  let km_total = Number(document.querySelector('#km-total').value)
  let ganho_km = (valor_total / km_total)
  let gasto_combustivel = (km_total / autonomia * preco_combustivel)
  let ganho_liquido = (valor_total - gasto_combustivel)
  area_resposta.style = 'display: block'
  if (valor_total == 0 || preco_combustivel == 0 || autonomia == 0 || km_total == 0) {
    area_resposta.innerHTML = `<p>erro, valores incorretos</p>`
  } else {
    area_resposta.innerHTML = ''
    area_resposta.innerHTML += `<h2>Resultado para ${tipo_combustivel}</h2>`
    area_resposta.innerHTML += `<p>Ganho bruto...........................: R$ ${valor_total.toFixed(2).replace('.', ',')}</p>`
    area_resposta.innerHTML += `<p>Ganho por km..........................: R$ ${ganho_km.toFixed(2).replace('.', ',')}</p>`
    area_resposta.innerHTML += `<p>Gasto com o combustível...............: R$ ${gasto_combustivel.toFixed(2).replace('.', ',')}</p>`
    area_resposta.innerHTML += `<p class="final-result">Ganho Liquido: R$ ${ganho_liquido.toFixed(2).replace('.', ',')}</p>`
  }


}



