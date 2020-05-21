import countriesServ from './services/serv-countries';
import oneCountryTmpl from '../templates/one-country.hbs';
import fewCountriesTmpl from '../templates/few-countries.hbs';
import pnotif from './pnotif';

const debounce = require('lodash.debounce');

const refs = {
  requestInput: document.querySelector('.request-js'),
  requestOutput: document.querySelector('.respond-js'),
};

refs.requestInput.addEventListener('input', debounce(requestInputHandler), 500);

function requestInputHandler(e) {
  countriesServ.query = e.target.value;

  countriesServ
    .fetchCountries(this.query)
    .then(data => {
      if (data.length === 1) {
        clearOutput();
        const markup = buildMarkupForOneCountry(data);
        insertMarkup(markup);
      }
      if (data.length > 1 && data.length < 11) {
        clearOutput();
        const markup = buildMarkupForFewCountries(data);
        insertMarkup(markup);
      }
      if (data.length > 10) {
        clearOutput();
        pnotif.tooMany();
      }
      if (data.status === 404) {
        clearOutput();
        pnotif.notFound();
      }
    })
    .catch(error => {
      pnotif.wentWrong(error);
    });
}

function buildMarkupForOneCountry(smth) {
  return oneCountryTmpl(smth);
}

function buildMarkupForFewCountries(smth) {
  return fewCountriesTmpl(smth);
}

function insertMarkup(smth) {
  refs.requestOutput.insertAdjacentHTML('beforeend', smth);
}

function clearOutput() {
  refs.requestOutput.innerHTML = '';
}
