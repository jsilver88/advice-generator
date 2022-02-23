const adviceId = document.getElementById('advice-id')
const quote = document.getElementById('quote')
const adviceBtn = document.getElementById('advice-button')

const fetchAdvice = async () => {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`)
    const data = await response.json()
    renderAdvice(data)
  } catch (error) {
    console.log(error)
  }
}

const renderAdvice = (adviceData) => {
  quote.textContent = `“${adviceData.slip.advice}”`
  adviceId.textContent = adviceData.slip.id
}

adviceBtn.addEventListener('click', fetchAdvice)
