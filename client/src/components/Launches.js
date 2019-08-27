import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './Launchitem';

const LAUNCHES_QUERY = gql`
 query LaunchesQuery {
    launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
}
`;

export default function Launches() {
    const { data, loading, error } = useQuery(LAUNCHES_QUERY);
    if (loading) return <h4>Loading...</h4>
    if (error) console.log('this is error!', error)
    return (
        <React.Fragment>
            {data.launches.map(launch =>
                (<LaunchItem key={launch.flight_number} launch={launch}></LaunchItem>)
            )}
        </React.Fragment>)
}

