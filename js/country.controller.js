function GetCountryInfo(ev) {
  console.log('ev', ev)
  ev.preventDefault()
  onGetCountryInfo()
}

function onGetCountryInfo() {
  adjustDisplay('no-data')
  const countryName = document.querySelector('.user-input').value
  getCountryByName(countryName)
}

function renderInfo(country) {
  const elInfoCon = document.querySelector('.info')

  const neighbors = country.borders
    ? country.borders.join(', ')
    : 'No neighbors'

  let strHTML = ''
  strHTML += `
        
    <h2>${country.name.common}</h2>
      <p>Population: ${country.population}</p>
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" >
     <p> Neighbors: ${neighbors}</p>
          
      `

  elInfoCon.innerHTML = strHTML
  adjustDisplay('info')
}

function adjustDisplay(status) {
  const elInfoCon = document.querySelector('.info')
  const elNoData = document.querySelector('.loader')

  elInfoCon.classList.add('hidden')
  elNoData.classList.add('hidden')

  switch (status) {
    case 'info':
      elInfoCon.classList.remove('hidden')
      break
    case 'no-data':
      elNoData.classList.remove('hidden')
      break
  }
}
