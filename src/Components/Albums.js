import React from 'react';
import AlbumCard from './AlbumCard'
import { useQuery, gql, NetworkStatus } from '@apollo/client';

const ALL_ALBUMS = gql`
query{
 albums{
    data{
      id
      title
      user{
        name
        email
        address{
          city
        }
        phone
        company{
          name
        }
      }
      
    }
  }
}
`

function Albums(){


    //Passing query to useQuery hook to fetch data
    const{data, loading, error, networkStatus} = useQuery(ALL_ALBUMS, {fetchPolicy: "cache-and-network"})


    if (networkStatus === NetworkStatus['refetch'])
        return 'Refetching!';
    else if (loading)
        return 'Loading..';
    else if (error)
        return `Error! ${error}`;
    else if(data)
        return(
            <div className="is-scrollable-list">
                {data ? data.albums.data.map((item) => (
                    <AlbumCard
                        key={item.id}
                        item={item}
                    />
                )) : 'Albums list undefined...' }
            </div>
        )
}

export default Albums;