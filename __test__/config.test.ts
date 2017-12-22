import config from '../src/config';

describe('api config', () => {
  it('is an object', () => {
    expect(config).toEqual(expect.any(Object));
  });

  it('has api_key string', () => {
    expect(config.api_key).toBeDefined();
    expect(config.api_key).toEqual(expect.any(String));
  });

  it('has base_url string', () => {
    expect(config.base_url).toBeDefined();
    expect(config.base_url).toEqual(expect.any(String));
  });

  it('has language string', () => {
    expect(config.language).toBeDefined();
    expect(config.language).toEqual(expect.any(String));
  });
});
