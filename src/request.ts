import axios, { AxiosInstance, AxiosPromise } from 'axios';
import qs from 'qs';
import config from './config';
import { httpMethod, IanyObj } from './types';

export const postOrDeleteDefaultContentType = 'application/json;charset=utf-8';
const request = axios.create({
  baseURL: config.base_url
});
request.defaults.headers.post['Content-Type'] = postOrDeleteDefaultContentType;
request.defaults.headers.delete['Content-Type'] = postOrDeleteDefaultContentType;

export default function commonRequest(type: httpMethod, apiPath: string, query?: IanyObj, body?: IanyObj) {
  query = query || {};
  query.api_key = config.api_key;
  const querystring = qs.stringify(query);
  const finalApiPath = apiPath + '?' + querystring;
  if (type === 'post') {
    return request.post(finalApiPath, body);
  } else if (type === 'delete') {
    return request.delete(finalApiPath);
  } else if (type === 'get') {
    return request.get(finalApiPath);
  } else {
    throw Error(`don't support http method ${type}`);
  }
}
