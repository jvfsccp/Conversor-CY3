// Cotação de moedas do dia
const USD = 5.87
const EUR = 6.36
const GBP = 7.59

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Capturando o evento de submit do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault()

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
})

// Função para converter a moeda.
function convertCurrency(amount, price, symbol){
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total.
    let total = amount * price

    // Formata o resultado total
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o resultado total
    result.textContent = `${total} Reais`

    footer.classList.add("show-result")

  }catch(error) {
    footer.classList.remove("show-result")

    alert("Não foi possível converter. Tente novamente mais tarde.")
    console.log(error)
  }

}

function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  })
}