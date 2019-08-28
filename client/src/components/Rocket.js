import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';

const ROCKET_QUERY = gql`
    query LaunchQuery($rocket_id: String!) {
        rocket(rocket_id: $rocket_id) {
            rocket_id
            country
            first_flight
            active
            rocket_name,
            engines {
                number
                type
                version
                layout
            }
        }
    }
`;

export default function Rocket(props) {
    let { rocket_id } = props.match.params;
    const { loading, error, data } = useQuery(ROCKET_QUERY, {
        variables: { rocket_id: rocket_id }
    })
    if (loading) return <h4>Loading...</h4>
    if (error) console.log(error)

    const { country, first_flight, active, rocket_name, engines: {
        number, type, version, layout
    } } = data.rocket
    return (
        <React.Fragment>
            <h1 className="display-4 my-3"><span className="text-dark">Rocket: {rocket_name}</span></h1>
            <h4 className="mb-3">Rocket Details</h4>
            <ul className="list-group">
                <li className="list-group-item">Rocket ID: {rocket_id}</li>
                <li className="list-group-item">Country: {country}</li>
                <li className="list-group-item">Active: <span className={classNames({
                    'text-success': active,
                    'text-danger': !active,
                })}>{active ? 'Yes' : 'No'}</span></li>
                <li className="list-group-item">First Flight: <Moment format="YYYY-MM-DD HH:mm">{first_flight}</Moment></li>
            </ul>

            <h4 className="my-3">Engine Details</h4>
            <ul className="list-group">
                <li className="list-group-item">Number: {number}</li>
                <li className="list-group-item">Type: {type}</li>
                <li className="list-group-item">Version: {version}</li>
                <li className="list-group-item">Layout: {layout}</li>
            </ul>
            <hr />
            <Link to="/rockets" className="btn btn-secondary">Back</Link>
        </React.Fragment>
    )
}
