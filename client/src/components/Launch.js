import React, { Component, Fragment } from 'react';

// Graphql Tag
import gql from 'graphql-tag';
// React Apollo
import { Query } from 'react-apollo';

// Reacr Router Dom
import { Link } from 'react-router-dom';

// classNames
import classNames from 'classnames';

const LAUNCH_QUERY = gql `
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            rocket {
                rocket_id 
                rocket_name
                rocket_type
            }
        }
    } 
`

export class Launch extends Component {
  render() {
      let { flight_number } = this.props.match.params;
      flight_number = parseInt(flight_number);
    return (
      <Fragment>
        <h1>Launch</h1>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
            {
                ({ loading, error, data }) => {
                    if (loading) return <h1>loading...</h1>
                    if (error) console.log(error);
                    console.log(data)

                    const {
                        flight_number,
                        mission_name,
                        launch_year,
                        launch_success,
                        rocket: {
                            rocket_id,
                            rocket_name,
                            rocket_type,
                        }
                    } = data.launch

                    return (
                        <div>
                            <h1 className="display-4 my-3">
                                <span className="text-dark">Mission: </span>
                                { mission_name }
                            </h1>
                            <h4>Launch Detail:</h4>
                            <ul className="list-group">
                                <li className="list-group-item">Flight Number: {flight_number}</li>
                                <li className="list-group-item">Launch Year: {launch_year}</li>
                                <li className="list-group-item">
                                    Launch Success: 
                                    <span className={classNames({
                                        'text-success': launch_success,
                                        'text-danger': !launch_success
                                    })}>{launch_success ? " Yes" : " No"}</span>
                                </li>
                            </ul>
                            <h4>Rocket Detail:</h4>
                            <ul className="list-group">
                                <li className="list-group-item">Rocket ID: {rocket_id}</li>
                                <li className="list-group-item">Rocket Name: {rocket_name}</li>
                                <li className="list-group-item">Rocket Type: {rocket_type}</li>
                            </ul>
                            <br/>
                            <Link to={`/`} className="btn btn-secondary">Back</Link>
                        </div>
                    );
                }
            }
        </Query>
      </Fragment>
    )
  }
}

export default Launch
