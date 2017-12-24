import movies from './movies';

const moviesMethods = [
  'details',
  'accountStates',
  'alternativeTitles',
  'changes',
  'credits',
  'images',
  'keywords',
  'releaseDates',
  'videos',
  'translations',
  'recommendations',
  'similar',
  'reviews',
  'lists',
  'rate',
  'deleteRating',
  'latest',
  'nowPlaying',
  'popular',
  'topRated',
  'upcoming'
];

describe('movies api', () => {
  moviesMethods.forEach(method => {
    it(`has ${method} method`, () => {
      expect(movies[method]).toEqual(expect.any(Function));
    });
  });
});
