import request from '../request';

const certifications = {
  /**
   * Get an up to date list of the officially supported movie certifications on TMDb.
   *
   * @returns {AxiosPromise<any>}
   */
  movie() {
    return request('get', '/certification/movie/list');
  },
  /**
   * Get an up to date list of the officially supported TV show certifications on TMDb.
   *
   * @returns {AxiosPromise<any>}
   */
  tv() {
    return request('get', '/certification/tv/list');
  }
};

export default certifications;
