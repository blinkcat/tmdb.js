export interface IanyObj {
  [index: string]: any;
}

export type httpMethod = 'get' | 'post' | 'delete';

// account
type account_sort_by = 'created_at.asc' | 'created_at.desc';

export interface IaccountQuery {
  session_id: string;
  language?: string;
  sort_by?: account_sort_by;
  page?: number;
}

type account_media_type = 'movie' | 'tv';

export interface IaccountFavoriteBody {
  media_type: account_media_type;
  media_id: number;
  favorite: boolean;
}

export interface IaccountWatchlistBody {
  media_type: account_media_type;
  media_id: number;
  watchlist: boolean;
}
