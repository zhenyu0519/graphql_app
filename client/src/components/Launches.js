import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
import { Link } from 'react-router-dom';

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
    if (loading) return <h4>Loading Launches...</h4>
    if (error) console.log('this is error!', error)
    return (
        <React.Fragment>
            <Link to={`/rockets`} className="btn btn-info btn-block" style={{marginTop: '30px'}}>Rocket Details</Link>
            <MissionKey type={'launch'} />
            {data.launches.map(launch =>
                (<LaunchItem key={launch.flight_number} launch={launch}></LaunchItem>)
            )}
        </React.Fragment>)
}

