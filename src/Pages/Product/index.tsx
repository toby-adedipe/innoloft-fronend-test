import React, { useEffect } from 'react'
import DashboardLayout from '../../Layouts/Dashboard/Dashboard';
import ViewLayout from '../../Layouts/Product/ViewLayout';
import { AppDispatch, RootState } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../../redux/Product/service';

function Product() {
  const dispatch:AppDispatch = useDispatch();
  const { loading, productData, error } = useSelector((state: RootState)=>state.ProductData);

  useEffect(()=>{
    const payload = {
      id: '6781'
    }
    dispatch(getProductData(payload))
  }, [dispatch])


  return (
    <>
      <DashboardLayout>
        {
            loading ? (
              <p>Fetching data...</p>
            ) : error ? (
              <p>An error occured while getting the data</p>
            ) : (          
            <ViewLayout productData={productData}/>
          )
        }
      </DashboardLayout>
    </>
  )
}

export default Product