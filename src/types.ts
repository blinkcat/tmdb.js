export interface IanyObj {
  [index: string]: any;
}

export type httpMethod = 'get' | 'post' | 'delete';

// changes
export interface IchangesQuery {
  end_date?: string;
  start_date?: string;
  page?: number;
}

// account
type accountSortBy = 'created_at.asc' | 'created_at.desc';

export interface IaccountQuery {
  session_id: string;
  language?: string;
  sort_by?: accountSortBy;
  page?: number;
}

type accountMediaType = 'movie' | 'tv';

export interface IaccountFavoriteBody {
  media_type: accountMediaType;
  media_id: number;
  favorite: boolean;
}

export interface IaccountWatchlistBody {
  media_type: accountMediaType;
  media_id: number;
  watchlist: boolean;
}

// discover
type discoverMovieSortBy =
  | 'popularity.asc'
  | 'popularity.desc'
  | 'release_date.asc'
  | 'release_date.desc'
  | 'revenue.asc'
  | 'revenue.desc'
  | 'primary_release_date.asc'
  | 'primary_release_date.desc'
  | 'original_title.asc'
  | 'original_title.desc'
  | 'vote_average.asc'
  | 'vote_average.desc'
  | 'vote_count.asc'
  | 'vote_count.desc';

export interface IdiscoverMovie {
  language?: string;
  region?: string;
  sort_by?: discoverMovieSortBy;
  certification_country?: string;
  certification?: string;
  'certification.lte'?: string;
  include_adult?: boolean;
  include_video?: boolean;
  page?: number;
  primary_release_year?: number;
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  'vote_count.gte'?: string;
  'vote_count.lte'?: string;
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  with_cast?: string;
  with_crew?: string;
  with_companies?: string;
  with_keywords?: string;
  with_people?: string;
  year?: number;
  without_genres?: string;
  'with_runtime.gte'?: number;
  'with_runtime.lte'?: number;
  with_release_type?: number;
  with_original_language?: string;
  without_keywords?: string;
}

type discoverTVSortBy =
  | 'vote_average.desc'
  | 'vote_average.asc'
  | 'first_air_date.desc'
  | 'first_air_date.asc'
  | 'popularity.desc'
  | 'popularity.asc';

export interface IdiscoverTV {
  language?: string;
  sort_by?: discoverTVSortBy;
  'air_date.gte'?: string;
  'air_date.lte'?: string;
  'first_air_date.gte'?: string;
  'first_air_date.lte'?: string;
  first_air_date_year?: number;
  page?: number;
  timezone?: string;
  'vote_average.gte': number;
  'vote_count.gte': number;
  with_genres: string;
  with_networks: string;
  without_genres: string;
  'with_runtime.gte': number;
  'with_runtime.lte': number;
  include_null_first_air_dates: boolean;
  with_original_language: string;
  without_keywords: string;
  screened_theatrically: boolean;
}
