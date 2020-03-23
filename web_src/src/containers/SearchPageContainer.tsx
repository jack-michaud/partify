import React, { useState } from 'react';
import { 
  useDispatch,
  useSelector 
} from 'react-redux';
import { 
  searchPlaylistAction,
  setPlaylistSearchTextAction,
} from '../store/playlists/actions';
import { 
  playlistsSearchQuerySelector,
  playlistsSearchResultsSelector
} from '../store/playlists/selectors';

import SearchPageComponent from '../components/SearchPageComponent';

const SearchPageContainer = () => {
  const dispatch = useDispatch();

  const searchQuery = useSelector(playlistsSearchQuerySelector);
  const setSearchQuery = (query: string) => dispatch(setPlaylistSearchTextAction(query));

  const search = () => {
    dispatch(searchPlaylistAction(searchQuery));
  }
  const playlists = useSelector(playlistsSearchResultsSelector);

  return (
    <SearchPageComponent 
      playlists={playlists} 
      search={search}
      setSearchQuery={setSearchQuery} />
  )
}
export default SearchPageContainer;
