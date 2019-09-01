import React from 'react';

function Sizing({ details }) {
  const chart = details.map((item) => (
    <tbody>
      <tr>
        <td>{item.size}</td>
        <td>{item.neck}</td>
        <td>{item.chest}</td>
        <td>{item.sleeve}</td>
      </tr>
    </tbody>
  ));

  return (
    <div className='sizing'>
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
        <div className='description'>All sizes in inches unless otherwise noted.</div>
      </table>
    </div>
  );
}

export default Sizing;
