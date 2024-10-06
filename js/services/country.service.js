'use strict'

function getCountryByName(name) {
  console.log('name', name)
  axios
    .get(
      `https://restcountries.com/v3.1/name/${name}
  `
    )
    .then((res) => renderInfo(res.data[0]))
    .catch((err) => console.log('err', err))
}
