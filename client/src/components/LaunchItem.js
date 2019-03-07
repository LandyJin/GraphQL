import React from 'react';

// classNames, Moment
import classNames from 'classnames';
import moment from "moment";

// Reacr Router Dom
import { Link } from 'react-router-dom';

export default function LaunchItem({ 
    launch: {
        flight_number,
        mission_name,
        launch_date_local,
        launch_success}}) {
    // console.log(props.launch)
    return (
    <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-9">
                <h4>Mission: <span className={classNames({
                    'text-success': launch_success,
                    'text-danger': !launch_success
                })}>{ mission_name }</span></h4>
                <p>Launch Date: {moment(launch_date_local ).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            <div className="col-md-3">
                <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Launch Detail</Link>
            </div>
        </div>
    </div>
  )
}
