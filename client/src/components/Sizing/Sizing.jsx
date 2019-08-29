import React from 'react';

function Sizing(props) {

  var chart = props.details.map((item, index) => {
    return(
      <tbody key={index}>
      <tr>
        <td>{item.size}</td>
        <td>{item.neck}</td>
        <td>{item.chest}</td>
        <td>{item.sleeve}</td>
      </tr>
      </tbody>
    )

  })

  return (
    <div className="sizing">
    <h3>Sizing</h3>
    <table>
    <tbody>
    <tr>
      <th>Size</th>
      <th>Neck</th>
      <th>Chest</th>
      <th>Sleeve</th>
    </tr>
    </tbody>
    {chart}
    </table>
    </div>
  );
}

export default Sizing;
