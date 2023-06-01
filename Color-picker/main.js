const defaultColor = '#0000ff'
const chooseInput = document.querySelector('.choose-input')
const viewBtn = document.querySelector('.view-btn')
const colorText = document.querySelector('.color-text')
const colorDiv = document.querySelector('.view-color')

colorDiv.style.backgroundColor = defaultColor
chooseInput.value = defaultColor

viewBtn.addEventListener('click', () => {
    colorText.textContent = chooseInput.value
    colorDiv.style.backgroundColor = chooseInput.value
})
