import promise from 'es6-promise';
promise.polyfill();
import Qs from 'qs';
export default function({ $axios,app}) {
  // console.log(app.$cookies.get("login"))
  $axios.onRequest(config => {
    config.data = Qs.stringify(config.data, {
      allowDots: true //Option allowDots can be used to enable dot notation
    });
    // config.headers.common['token'] = 'token';
    console.log(config)
    return config;
  });
 
  $axios.onResponse(response => {
    let data = response.data;
    return Promise.resolve(data);
  });
 
  $axios.onError(error => {
    return Promise.reject(error);
  });
}
