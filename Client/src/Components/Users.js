import React from 'react';
import UserCard from './UserCard'
import { useQuery, gql, NetworkStatus } from '@apollo/client';

const ALL_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

function Users(){


    //Passing query to useQuery hook to fetch data
    const{data, loading, error, networkStatus} = useQuery(ALL_USERS, {fetchPolicy: "cache-and-network"})


    if (networkStatus === NetworkStatus['refetch'])
        return 'Refetching!';
    else if (loading)
        return 'Loading..';
    else if (error)
        return `Error! ${error}`;
    else if(data)
        console.log(data)
        return(
            <div className="is-scrollable-list">
                {data ? data.getAllUsers.map((item) => (
                    <UserCard
                        key={item.id}
                        item={item}
                    />
                )) : 'Users list undefined...' }
            </div>
        )
}

export default Users;