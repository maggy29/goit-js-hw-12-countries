const baseUrl = 'https://restcountries.eu/rest/v2/';

export default {
  query: '',

  fetchCountries() {
    const requestParams = `name/${this.query}`;

    return fetch(baseUrl + requestParams).then(response => response.json());
  },
};
