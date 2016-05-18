import Promise from 'bluebird';

export default function getResponse(response) {
  return Promise.resolve(response)
    .then((res) => res)
    .catch((err) => console.log(err));
}

export default function getResponseJSON(response) {
  return Promise.resolve(response.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}
