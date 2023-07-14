import React, { ComponentProps, useEffect, useState } from 'react'
import { DetailsType } from '../../redux/Product/types';

interface Props extends ComponentProps<"div"> {
  data: DetailsType[];
}

function DetailsRow({ data }: Props) {
  const [newData, setNewData] = useState<DetailsType[]>([]);

  useEffect(()=>{
    setNewData(data);
  },[data])

  return (
    <div className='flex gap-2 flex-wrap'>
      {
        newData.map((item) =>
          <div key={item.id} className='flex h-6 py-1 px-3 items-center gap-1 rounded-full bg-gray-300'>
            <p className='text-gray-700 text-xs font-normal leading-3.5'>
              {item.name}
            </p>
          </div>
        )
      }
    </div>
  )
}

export default DetailsRow