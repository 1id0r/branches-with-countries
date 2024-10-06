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
        
    <h2>${country.name.common}</h2>
      <p>Population: ${country.population}</p>
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" >
     <p> Neighbors: ${neighbors}</p>
          
      `

  elInfoCon.innerHTML = strHTML
}
