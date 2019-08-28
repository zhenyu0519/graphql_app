import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function RocketItem({ rocket: { rocket_id, country, first_flight, active, rocket_name } }) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Rocket: <span className={classNames({
                        'text-info': active,
                        'text-warning': !active
                    })}>{rocket_name}</span></h4>
                    <p>Date: <Moment format="YYYY-MM-DD HH:mm">{first_flight}</Moment></p>
                    <p>Country: {country}</p>
                </div>
                <div className="col-md-3">
                    <Link to={`/rocket/${rocket_id}`} className="btn btn-secondary">Rocket Details</Link>
                </div>
            </div>
        </div>
    )
};
