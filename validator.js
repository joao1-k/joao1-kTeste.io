const nameInput = document.querySelector("#name")
const CPFInput = document.querySelector("#CPF")
const dateInput = document.querySelector("#date")
const pesoInput = document.querySelector("#peso")
const AlturaInput = document.querySelector("#Altura")
const EstadoInput = document.querySelector("#Estado")
const clienteInput = document.querySelector("#cliente")
const submitButton = document.querySelector("#btn-submit")
const erroMessage = document.querySelector(".msg")

const items = document.querySelector(".items")


submitButton.addEventListener("click", (e) =>{
  e.preventDefault()

  const nameValue = nameInput.value;
  const CPFValue = CPFInput.value;
  const dateValue = dateInput.value;
const pesoValue = pesoInput.value;
const AlturaValue = AlturaInput.value;
const EstadoValue = EstadoInput.value;
const clienteValue = clienteInput.value;


if(nameValue === "" ||  CPFValue === "" || dateValue === "" || pesoValue === "" ){
  erroMessage.textContent = "A compos sem preencher!"

  setTimeout(() => {
    erroMessage.textContent = "";
  }, 3000);
  return;

}

const li = document.createElement('li')

  li.classList = "item";
  li.innerHTML = `Nome: ${nameValue}<br />CPF: ${CPFValue}<br />Data: ${dateValue}<br />Peso: ${pesoValue}<br /> Altura: ${AlturaValue}<br /> Estado: ${EstadoValue}<br /> Cadastro: ${clienteValue}`


items.appendChild(li);

})