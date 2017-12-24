import request from '../request';

const timezones = {
  list() {
    return request('get', '/timezones/list');
  }
};

export default timezones;
