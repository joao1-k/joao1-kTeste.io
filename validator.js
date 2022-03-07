const nameInput = document.querySelector("#name")
const CPFInput = document.querySelector("#CPF")
const dateInput = document.querySelector("#date")
const pesoInput = document.querySelector("#peso")
const submitButton = document.querySelector("#btn-submit")
const erroMessage = document.querySelector(".msg")

submitButton.addEventListener("click", (e) =>{
  e.preventDefault()

  const nameValue = nameInput.value;
  const CPFValue = CPFInput.value;
  const dateValue = dateInput.value
const pesoValue = pesoInput.value


if(nameValue === "" ||  CPFValue === "" || dateValue === "" || pesoValue === "" ){
  erroMessage.textContent = "A compos sem preencher!"

  setTimeout(() => {
    erroMessage.textContent = "";
  }, 1000);
  return;

}
})