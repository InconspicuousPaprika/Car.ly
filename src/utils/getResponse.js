import Promise from 'bluebird';

module.exports = {
  getResponse(response) {
  return Promise.resolve(response)
    .then((res) => res)
    .catch((err) => console.log(err));
  },

  getResponseJSON(response) {
  return Promise.resolve(response.json())
    .then((res) => res)
    .catch((err) => console.log(err));
  }
};

