import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import RocketItem from './RocketItem';
import MissionKey from './MissionKey';
import { Link } from 'react-router-dom';

const ROCKETS_QUERY = gql`
    query RocketsQuery {
        rockets {
            rocket_id
            country
            first_flight
            active
            rocket_name
            rocket_type
        }
    }
`;

export default function Rockets() {
    const { loading, error, data } = useQuery(ROCKETS_QUERY);
    if (loading) return <h4>Loading Rockets...</h4>
    if (error) console.log('this is error', error)
    console.log(data)
    return (
        <div>
            <React.Fragment>
            <Link to={`/`} className="btn btn-primary btn-block" style={{marginTop: '30px'}}>Launches Details</Link>
                <MissionKey type={'rocket'} />
                {data.rockets.map(rocket =>
                    (<RocketItem key={rocket.rocket_id} rocket={rocket}></RocketItem>)
                )}
            </React.Fragment>
        </div>
    )
}
