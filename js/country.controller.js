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
  console.log('country', country)
  const elInfoCon = document.querySelector('.info')
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    country.name.common
  )}` //   console.log('country', country)
  let neighborsHTML = 'No neighbors'
  if (country.borders && country.borders.length > 0) {
    neighborsHTML = country.borders
      .map((borderCode) => {
        return `<button onclick="getCountryByCode('${borderCode}')" data-code="${borderCode}" class="neighbor-link">${borderCode}</button>`
      })
      .join(' ')
  }
  let strHTML = ''
  strHTML += `
    <h2>${country.name.common}</h2>
    
      <p>Population: ${country.population}</p>
      <a href="${googleMapsUrl}"><img src="${country.flags.svg}" alt="Flag of ${country.name.common}"></a>
      
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
