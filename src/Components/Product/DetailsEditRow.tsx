import React, { ComponentProps, useEffect, useState } from 'react'
import { DetailsType } from '../../redux/Product/types';

interface Props extends ComponentProps<"div"> {
  data: DetailsType[];
  onUpdateData: (newData: DetailsType[]) => void;
}

function DetailsEditRow({ data, onUpdateData }: Props) {

  const [newData, setNewData] = useState<DetailsType[]>([]);
  const [textInput, setTextInput] = useState("");

  const deleteEntry = (name?: string)=> {
    const prevData = [...newData]; // Make a copy of the original array

    const filteredData = prevData.filter(item => item.name !== name);

    setNewData(filteredData);
    onUpdateData(filteredData);
  }

  const onInputChange = (event: any) => {
    setTextInput(event.target.value)
  }

  const addAttr = () => {
    const obj = {
      id: newData.length + 1,
      name: textInput,
    };
    const updatedData = [...newData, obj];
    setNewData(updatedData);
    onUpdateData(updatedData);
    setTextInput('');
  };

  const handleKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      addAttr()
    }
  };

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
            <p className='deleteBtn pl-2' onClick={() => deleteEntry(item.name)} >X</p>
          </div>
        )
      }
      <input 
        type="text" 
        className="rounded-md border border-gray-300 bg-white flex h-10 w-full px-2.5 items-center gap-1 self-stretch"
        placeholder='Add new attributes here and press enter' 
        onChange={onInputChange}
        value={textInput}
        onKeyDown={handleKeyPress}
      />
    </div>
    
  )
}

export default DetailsEditRow