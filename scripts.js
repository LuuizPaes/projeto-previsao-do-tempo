let chave = 'cebacd0af9d0901b0362a31a4a1f79e0'

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)  + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "umidade: " + dados.main.humidity + "%"
}
// innerHTML -> Trocar informação 

async function buscarCidade(cidade) {
  let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebacd0af9d0901b0362a31a4a1f79e0&units=metric").then(resposta => resposta.json())

  // AWAIT = ESPERE
  // FETCH -> Ferramenta do JavaScript para acessar servidores
  // THEN -> ENTÃO
  // JSON -> JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JAVASCRIPT ENTENDE)
  //Math.flooe -> Ferramenta do JavaScript para arredondar valores

  colocarNaTela(dados)


}

function cliqueiNoBotao() {
  let cidade = document.querySelector('.input-cidade').value

  buscarCidade(cidade)
}

