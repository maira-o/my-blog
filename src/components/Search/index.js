import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';

import * as S from './styled'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const searchClient = algoliasearch(
  algolia.appId, 
  algolia.searchOnlyApiKey
);

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox autofocus translations={{ placeholder: 'Pesquisar...' }} />
      <Stats translations={{stats(nbHits, timeSpentMS) {
        return `${nbHits} resultados encontrados em ${timeSpentMS}ms`
      }}}/>
      <Hits />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search 