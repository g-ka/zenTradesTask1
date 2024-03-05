import React, { useEffect, useState } from 'react';
import Axios from '../api/Axios';

const Main = () => {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchItems = async () => {
      try{        
        const response = await Axios.get(
          '',
          {
            headers: { "Content-Type": 'application/json' }
          }
        );
        const { count, products } = response.data;
        const items = Object.values(products);
        const sortedItems = items.sort((a, b) => b.popularity - a.popularity);
        setData(sortedItems);
        setCount(count);
      }catch(err){
        setError(err.message);
      }finally{
        setLoading(false);
      }      
    };

    fetchItems();

  }, []);

  return (
    <main>
      {
        loading ?
          <p className='loading'>Loading...</p> :
            error ?
            <p className='error'>{error}</p> :
              <ul className='list'>
                {
                  data.map((item, index) => {
                    return(
                      <>
                        <li className='list_item'>
                          <div className='list_item_product'>
                            <div className='list_item_product_rank'>
                              <p className='list_item_product_rank_number'>#{index + 1}</p>
                            </div>
                            <div className='list_item_product_info'>
                              <p className='list_item_product_info_name'>{item.title}</p>
                              <p className='list_item_product_info_category'>{item.subcategory}</p>
                            </div>
                          </div>          
                          <div className='list_item_price'>
                            <p  className='list_item_price_tag'>₹{item.price}</p>
                          </div>
                        </li>
                        { index + 1 == count ? <></> : <hr></hr> }
                      </>              
                    )            
                  })
                }                
              </ul>
      }      
    </main>
  )
}

export default Main