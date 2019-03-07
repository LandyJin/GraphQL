import React from 'react'

export default function LaunchItem({ launch: {flight_number,mission_name,launch_date_local,launch_success}}) {
    // console.log(props.launch)
  return (
    <div>
      <p>{flight_number}</p>
      <p>{mission_name}</p>
      <p>{launch_date_local}</p>
      <p>{launch_success}</p>
    </div>
  )
}
