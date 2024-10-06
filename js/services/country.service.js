'use strict'

function getCountryByName(name) {
  const cachedCountry = loadFromStorage(name)
  if (cachedCountry) {
    console.log('rendered from cache')
    renderInfo(cachedCountry)
  } else {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${name}
            `
      )
      .then((res) => {
        renderInfo(res.data[0])
        saveToStorage(name, res.data[0])
      })
      .catch((err) => console.log('err', err))
  }
}
function clearCache() {
  localStorage.clear()
  alert('Cache cleared!')
}

function getCountryByCode(code) {
  console.log('code', code)
  axios
    .get(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((res) => {
      console.log('res.data[0]', res.data[0])
      renderInfo(res.data[0])
    })
    .catch((err) => console.log('err', err))
}
