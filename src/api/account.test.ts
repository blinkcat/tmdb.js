import account from './account';

const accountMethods = [
  'details',
  'createdLists',
  'favoriteMovies',
  'favoriteTVShows',
  'markAsFavorite',
  'ratedMovies',
  'ratedTVShows',
  'ratedTVEpisodes',
  'movieWatchlist',
  'tVShowWatchlist',
  'addToWatchlist'
];

describe('account api', () => {
  accountMethods.forEach(method => {
    it(`has ${method} method`, () => {
      expect(account[method]).toEqual(expect.any(Function));
    });
  });
});
