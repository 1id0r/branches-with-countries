'use strict'

function onGetCountryInfo() {
  const countryName = document.querySelector('.user-input').value
  console.log('countryName', countryName)
  renderInfo()
}

function renderInfo(data) {
  console.log('Rendering...')
}
