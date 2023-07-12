import React, { ComponentProps, useEffect, useState } from 'react'
import * as DOMPurify from 'dompurify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import DetailsEditRow from '../../Components/Product/DetailsEditRow';
import businessModelIcon from '../../icons/businessmodel.svg';
import costIcon from '../../icons/cost.svg';
import techIcon from '../../icons/technology.svg';
import trlIcon from '../../icons/trl.svg';
import { AppDispatch, RootState } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductData } from '../../redux/Product/service';
import { DetailsType, ProductType } from '../../redux/Product/types';

interface Props extends ComponentProps<"div"> {
  productData: ProductType,
  trlList: DetailsType[],
}

function EditLayout({ productData, trlList }: Props) {
  const dispatch:AppDispatch = useDispatch();

  const [videoLink, setVideoLink] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState<DetailsType[]>([]);
  const [models, setModels] = useState<DetailsType[]>([])

  const { config } = useSelector((state: RootState)=>state.ConfigData);
  const { loading } = useSelector((state: RootState)=>state.ProductData);

  const [selectedTrlOption, setSelectedTrlOption] = useState<string>('');

  const handleSelectChange = (event:any) => {
    setSelectedTrlOption(event.target.value);
  };


  useEffect(()=>{
    let getCleanHTML = ()=> {
      if (productData) {
        return DOMPurify.sanitize(productData.description)
      }else{
        return ''
      }
    };
    setSelectedTrlOption(String(productData?.trl?.id));
    setDescription(getCleanHTML());
  }, [productData])


  const onVideoLinkChange = (event:any) => {
    setVideoLink(event.target.value);
  };


  const onCategoriesChange = (categories: DetailsType[]) => {
    setCategories(categories);
  };

  const onModelsChange = (models: DetailsType[]) => {
    setModels(models);
  }

  const onSubmit = () => {
    const payload = {
      id: '6781',
      description: description,
      categories: categories,
      businessModels: models,
      trl: selectedTrlOption,
      video: videoLink,
    }
    dispatch(updateProductData(payload));
  }

  return (
    <>
      <div className='flex items-center justify-between'>
        <p className='text-gray-700 text-base font-semibold leading-6'>Edit Product</p>
        <button 
          style={{
            backgroundColor: config.mainColor
          }}
          className=' text-white rounded-md border border-indigo-900 px-4 py-1.5' onClick={onSubmit}>
          {loading? 'Saving...' : 'Save' }
        </button>
      </div>
      <div className="main-section md:flex items-start gap-1 align-self-stretch bg-white rounded-md border border-gray-300 my-6">
        <div className='w-full md:border-r md:w-2/3 md:flex md:flex-col'>
          <div className='img-section relative md:h-5/12'>
            <div className='absolute top-0 left-0 bg-white flex items-center gap-4 rounded-br-md border-b border-r border-gray-300 py-1 px-1.5'><p className='text-gray-700 text-base font-semibold'>{productData?.type?.name}</p></div>
            <img src={productData?.picture} alt={productData?.name} className='w-full max-h-80'/>
          </div>
          <div className='p-4 md:h-3/12'>
            <p className='title'>{productData?.name} </p>
            <ReactQuill
              value={description}
              onChange={setDescription}
              className='rounded-md bg-white items-center'
            />
          </div>
        </div>
        <div className='px-4 w-full md:w-1/3'>
          <div className='user-info mt-4'>
            <p className='title'>Sold By</p>
            <div className='flex gap-2 items-center'>
            <img src={productData?.picture} alt={productData?.user?.profilePicture} className='w-12 h-12 rounded-full' />
              <div>
                <p className='text-gray-500 text-3.5 font-semibold leading-tight'>{productData?.user?.firstName} {productData?.user?.lastName}</p>
                <p className='text-gray-500 text-3.5 font-normal leading-tight'>{productData?.company?.name}</p>
              </div>
            </div>
          </div>
          <div className='map my-4'>
          </div>
      </div>
      </div>
      <div className='details-section rounded-md border border-gray-300 my-6 py-5 px-4'>
        <p className='title'>Product Details</p>
          <div className='categories my-2 flex flex-row gap-2'>
            <img src={techIcon} className="w-6 h-6" alt="catgory-icon" />
            <div className='w-full'>
              <p className='text-gray-500 text-4 font-normal leading-normal'>Categories</p>
              <div>
                <DetailsEditRow 
                  data={productData.categories} 
                  onUpdateData={onCategoriesChange}
                />
              </div>
            </div>
          </div>
          <div className='business-models my-2 flex flex-row gap-2'>
            <img src={businessModelIcon} className="w-6 h-6" alt="businessModelIcon" />
            <div className='w-full'>
              <p className='text-gray-500 text-4 font-normal leading-normal'>Business Models</p>
              <div>
                <DetailsEditRow 
                  data={productData.businessModels} 
                  onUpdateData={onModelsChange}
                />
              </div>
            </div>
          </div>
          <div className='trl flex flex-row my-2 flex flex-row gap-2'>
            <img src={trlIcon} className="w-6 h-6" alt="trlIcon" />
            <div>
              <p className='text-gray-500 text-4 font-normal leading-normal'>Implementation Time</p>
              <div className='flex items-center gap-1 flex-start whitespace-normal'>
                <select value={selectedTrlOption} onChange={handleSelectChange} className='flex flex-wrap text-gray-500 rounded-full bg-gray-300 p-1 w-full'>
                  { trlList.length>0 && trlList.map((item) => (
                    <option className="" key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className='investment-effort my-2 flex flex-row gap-2'>
            <img src={costIcon} className="w-6 h-6" alt="costIcon" />
            <div>
              <p className='text-gray-500 text-4 font-normal leading-normal'>Investment Effort</p>
              <div className='flex h-6 py-1 px-3 items-center gap-1 rounded-full bg-gray-300'>
                <p className='text-gray-700 text-xs font-normal'>{productData?.investmentEffort}</p>
              </div>
            </div>
          </div>
      </div>
      <div className='video-section rounded-md border border-gray-300 my-6 py-5 px-4'>
        <p className='title'>Video</p>
        <input 
          type="text" 
          className="rounded-md border border-gray-300 bg-white flex h-10 w-full px-2.5 items-center gap-1 self-stretch"
          placeholder='Add a youtube or vimeo link' 
          onChange={onVideoLinkChange}
        />
      </div>            
    </>
  )
}

export default EditLayout