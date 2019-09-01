import React from 'react';
import SellingPoints from './SellingPoints';

function ItemDetails({ details }) {
  const item = details[0];

  return (
    <div className="item-detail-list">
      <SellingPoints details={details} />
      <p>
      <span className='h-text-bold'>Sizing:</span>
      <span>{item.sizing}</span>
      </p>
      <p>
      <span className='h-text-bold'>Material:</span>
      <span>{item.material}</span>
      </p>
      <p>
      <span className='h-text-bold'>Fit:</span>
      <span>{item.fit}</span>
      </p>
      <p>
      <span className='h-text-bold'>Length:</span>
      <span>{item.length}</span>
      </p>
      <p>
      <span className='h-text-bold'>Features:</span>
      <span>{item.features}</span>
      </p>
      <p>
      <span className='h-text-bold'>Neckline:</span>
      <span>{item.neckline}</span>
      </p>
      <p>
      <span className='h-text-bold'>Item Style:</span>
      <span>{item.itemStyle}</span>
      </p>
      <p>
      <span className='h-text-bold'>Garment cuff cut type:</span>
      <span>{item.garmentCuffCutType}</span>
      </p>
      <p>
      <span className='h-text-bold'>Garment sleeve style:</span>
      <span>{item.garmentSleeveStyle}</span>
      </p>
      <p>
      <span className='h-text-bold'>Care and cleaning:</span>
      <span>{item.careAndCleaning}</span>
      </p>
      <p>
      <span className='h-text-bold'>TCIN:</span>
      <span>{item.TCIN}</span>
      </p>
      <p>
      <span className='h-text-bold'>UPC:</span>
      <span>{item.UPC}</span>
      </p>
      <p>
      <span className='h-text-bold'>DPCI:</span>
      <span>{item.DPCI}</span>
      </p>
      <p>
      <span className='h-text-bold'>Origin:</span>
      <span>{item.origin}</span>
      </p>
      <p>If the item details above aren’t accurate or complete, we want to know about it. <u>Report incorrect product info.</u></p>
    </div>
  );
}

export default ItemDetails;
