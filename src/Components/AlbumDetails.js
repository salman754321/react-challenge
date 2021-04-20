import React from 'react';
import {NetworkStatus, useQuery, gql} from "@apollo/client";


const ALBUM_DETAIL = gql`
query($id: ID!){
 album(id : $id){
      id
      title
      user{
        name
        username
        email
        address{
          city
        }
        phone
        website
        company{
          name
        }
      }
      
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
                            <b>Name: </b> <span>{data['album']['user'].name}</span> <br/> <br/>
                            <b>User name: </b> <span>{data['album']['user']['username']}</span><br/> <br/>
                            <b>Email: </b> <span>{data['album']['user']['email']}</span><br/> <br/>
                            <b>Phone: </b> <span>{data['album']['user']['phone']}</span><br/> <br/>
                            <b>Address: </b> <span>{data['album']['user']['address'].city}</span><br/> <br/>
                            <b>Website: </b> <span>{data['album']['user']['website']}</span><br/> <br/>
                            <b>Company: </b> <span>{data['album']['user']['company'].name}</span><br/> <br/>

                        </div>
                    </div>
                </div>
            </div>
        );


    }


}

export default AlbumDetails;