import React, { Component } from 'react';

// Graphql Tag
import gql from 'graphql-tag';
// React Apollo
import { Query } from 'react-apollo';

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
      <div>
        <h1 className="display-4">
            Launches
        </h1>
        {/*  */}
        <Query query={LAUNCHES_QUERY}>
            {
                ({ loading, error, data }) => {
                    if (loading) return <h1>loading</h1>
                    if (error) console.log(error);
                    console.log(data)
                    return <h1>testing</h1>
                }
            }
        </Query>
      </div>
    )
  }
}

export default Launches
