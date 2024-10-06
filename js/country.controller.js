function onGetCountryInfo() {
  const countryName = document.querySelector('.user-input').value
  getCountryByName(countryName)
}

function renderInfo(country) {
  const elInfoCon = document.querySelector('.info')
  let strHTML = ''

  const neighbors = country.borders
    ? country.borders.join(', ')
    : 'No neighbors'

  strHTML += `
          <pre>
      Name: ${country.name.common}
      Population: ${country.population}
      Flag: <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="50">
      Neighbors: ${neighbors}
          </pre>
      `

  elInfoCon.innerHTML = strHTML
}
