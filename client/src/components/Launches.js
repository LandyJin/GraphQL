import React, { Component, Fragment } from 'react';

// Graphql Tag
import gql from 'graphql-tag';
// React Apollo
import { Query } from 'react-apollo';

// Components
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey'

const LAUNCHES_QUERY = gql `
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    } 
`

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4">
            Launches
        </h1>

        <MissionKey/>

        {/*  Apollo Query */}
        <Query query={LAUNCHES_QUERY}>
            {
                ({ loading, error, data }) => {
                    if (loading) return <h1>loading...</h1>
                    if (error) console.log(error);
                    console.log(data)
                    return (
                        <Fragment>
                        {
                            data.launches.map(launch => (
                                <LaunchItem 
                                    key={launch.flight_number}
                                    launch={launch}
                                />
                            ))
                        }
                        </Fragment>
                    );
                }
            }
        </Query>
      </Fragment>
    )
  }
}

export default Launches
