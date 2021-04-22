import React from 'react';
import {NetworkStatus, useQuery, gql} from "@apollo/client";


const ALBUM_DETAIL = gql`
query($id: ID!){
 album(id : $id){
      id
      title 
    }
}
`;

function AlbumDetails(){

    //Pass the id to the Query to fetch details of the related Album
    const id = null

    const{data, loading, error, networkStatus} = useQuery(ALBUM_DETAIL,{
        variables: {id},
        fetchPolicy: 'cache-and-network',
        notifyOnNetworkStatusChange: true,
    })

    if (networkStatus === NetworkStatus.refetch)
        return 'Refetching!';
    if (loading)
        return 'Loading...';
    if (error) {
        return `Error! ${error}`;
    }
    if (data) {
        return (
            <div className={"is-detail-Page"}>
                <div className="album-detailsHead align-left is-row is-card"
                     style={{display: 'flex', flexFlow: 'column'}}>
                    <div className="is-row">
                        <div className="is-100">
                            <h3>{data['album'].title}</h3>
                        </div>
                    </div>
                </div>
                <div className="album-detailsBody is-card">
                    <div className="album-outline-container">
                        <div className="album-outline">
                            <p>{data['album'].title}</p>
                        </div>
                    </div>
                </div>
            </div>
        );


    }


}

export default AlbumDetails;