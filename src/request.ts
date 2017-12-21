import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { httpMethod, IbodyObj, IqueryObj } from './types';

const postOrDeleteDefaultContentType = 'application/json;charset=utf-8';
const request = axios.create({
  baseURL: TMDB.baseURL
});
request.defaults.headers.post['Content-Type'] = postOrDeleteDefaultContentType;
request.defaults.headers.delete['Content-Type'] = postOrDeleteDefaultContentType;

export default request;

function commonRequest(
  type: httpMethod,
  apiPath: string,
  query: IqueryObj,
  body?: IbodyObj
): AxiosPromise<any> {
  query = query || {};
  query.api_key = this.apiKey;
  if (query.session_id === true) {
    query.session_id = this.sessionId;
  }
  if (query.guest_session_id === true) {
    query.guest_session_id = this.guestSessionId;
  }
  const querystring = qs.stringify(query);
  const finalApiPath = apiPath + '?' + querystring;
  if (type === 'post') {
    return this.request.post(finalApiPath, body);
  } else if (type === 'delete') {
    return this.request.delete(finalApiPath);
  } else {
    return this.request.get(finalApiPath);
  }
}
