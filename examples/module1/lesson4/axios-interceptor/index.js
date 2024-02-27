import axios from 'axios';

let startPoint = undefined;
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  startPoint = new Date().getTime();
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  const endPoint = new Date().getTime();
  const timeDifference = ((endPoint - startPoint) / 1000).toFixed(2);
  console.log(`The request took about ${timeDifference} seconds.`);
  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
