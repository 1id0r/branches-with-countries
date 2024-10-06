'use strict'

function onGetCountryInfo() {
  const countryName = document.querySelector('.user-input').value
  console.log('countryName', countryName)
  getCountryByName(countryName)
}

function renderInfo(country) {
  const elInfoCon = document.querySelector('.info')
  const neighbors = country.borders
    ? country.borders.join(', ')
    : 'No neighbors'
  const name = country.name.common
  const population = country.population
  const imgsrc = country.flags.svg
  const neighborsOb = neighbors
  document.querySelector('h2').innerText = name
  document.querySelector('p').innerText = population + ' ' + neighborsOb
  document.querySelector('img').src = imgsrc
}
