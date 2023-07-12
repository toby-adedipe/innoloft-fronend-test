import React, { useEffect } from 'react'
import DashboardLayout from '../../Layouts/Dashboard/Dashboard'
import EditLayout from '../../Layouts/Product/EditLayout'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import { getTrl } from '../../redux/TrlList/service';

export default function ProductEdit() {
  const dispatch:AppDispatch = useDispatch();
  const { loading, productData, error } = useSelector((state: RootState)=>state.ProductData);

  const { trlList } = useSelector((state: RootState)=>state.TrlData);

  useEffect(()=>{
    dispatch(getTrl({}));
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
            <EditLayout productData={productData} trlList={trlList} />
          )
        }
      </DashboardLayout>
    </>
  )
}
