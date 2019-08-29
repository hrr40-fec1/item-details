import React from 'react';
import SellingPoints from './SellingPoints.jsx';

function ItemDetails(props) {
  var item = props.details[0];

  return(
    <div className="item-detail-list">
    <SellingPoints details={props.details}/>
      <p><b>Sizing: </b> {item.sizing}</p>
      <p><b>Material: </b> {item.material}</p>
      <p><b>Fit: </b> {item.fit}</p>
      <p><b>Length: </b> {item.length}</p>
      <p><b>Features: </b> {item.features}</p>
      <p><b>Neckline: </b> {item.neckline}</p>
      <p><b>Item Style: </b> {item.itemStyle}</p>
      <p><b>Garment cuff cut type: </b> {item.garmentCuffCutType}</p>
      <p><b>Garment sleeve style: </b> {item.garmentSleeveStyle}</p>
      <p><b>Care and Cleaning: </b> {item.careAndCleaning}</p>
      <p><b>TCIN: </b> {item.TCIN}</p>
      <p><b>UPC: </b> {item.UPC}</p>
      <p><b>ItemNumber (DPCI): </b> {item.DPCI}</p>
      <p><b>Origin: </b> {item.origin}</p>
      <p><b>Item Style: </b> {item.itemStyle}</p>

      <p>If the item details above aren’t accurate or complete, we want to know about it. Report incorrect product info.</p>
    </div>
  )
}

export default ItemDetails;
