import injector from 'vue-inject';

function apiUrlBuilder(apiRoot){
 return function(path){
   return apiRoot + '/' + path;
 }
}
injector.factory('apiUrlBuilder', 'apiRoot', apiUrlBuilder);

function api(apiUrlBuilder, axios){
 this.get(path){
   var url = apiUrlBuilder(path);
   return axios.get(url);
 };
}
injector.service('api', ['apiUrlBuilder', 'axios'], api);