import React, { ComponentProps } from 'react'
import * as DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import DetailsRow from '../../Components/Product/DetailsRow';
import businessModelIcon from '../../icons/businessmodel.svg';
import costIcon from '../../icons/cost.svg';
import techIcon from '../../icons/technology.svg';
import trlIcon from '../../icons/trl.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { ProductType } from '../../redux/Product/types';
import MapsComponent from '../../Components/MapsComponent/MapsComponent';

interface Props extends ComponentProps<"div"> {
  productData: ProductType,
}

function ViewLayout({ productData }: Props) {

  const { config } = useSelector((state: RootState)=>state.ConfigData);

  let getCleanHTML = ()=> {
    if (productData) { 
      return DOMPurify.sanitize(String(productData?.description))
    }else{
      return ''
    }
  };

  //function to extract the youtube id and use it for embeding.
  function extractYouTubeVideoId(url:string) {
    const pattern = /(?:watch\?v=|embed\/)([^&/]+)/;
    const match = url.match(pattern);
    return match ? match[1] : null;
  }

  return (
    <>
      <div className='text-white flex justify-end'>
        <Link 
          to="/product/edit" className='rounded-md border border-indigo-900 px-4 py-2'
          style={{
            backgroundColor: config.mainColor
          }}>
          Edit
        </Link>
      </div>
      <div className="main-section md:flex items-start gap-1 align-self-stretch bg-white rounded-md border border-gray-300 my-6">
        <div className='w-full md:border-r md:w-2/3 md:flex md:flex-col'>
          <div className='img-section relative md:h-5/12'>
            <div className='absolute top-0 left-0 bg-white flex items-center gap-4 rounded-br-md border-b border-r border-gray-300 py-1 px-1.5'><p className='text-gray-700 text-base font-semibold'>{productData?.type?.name}</p></div>
            <img src={productData?.picture} alt={productData?.name} className='w-full max-h-80'/>
          </div>
          <div className='p-4 md:h-3/12'>
            <p className='title'>{productData?.name} </p>
            {/* a library like html-react-parser can be used to parse the html string for the description */}
            <div dangerouslySetInnerHTML={{__html: getCleanHTML()}} className='text-gray-500 font-sans text-sm font-normal leading-6 '/>
          </div>
        </div>
        {
          config.hasUserSection 
          ? (
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
              <div className='map w-full h-60 my-4'>
                <MapsComponent long={parseFloat(productData.company.address.longitude)} lat={parseFloat(productData.company.address.latitude)}/>
              </div>
            </div>
          ) : null
        }
        
      </div>
      <div className='details-section rounded-md border border-gray-300 my-6 py-5 px-4'>
        <p className='title'>Product Details</p>
        <div className='md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4'>
          <div className='categories my-2 flex flex-row gap-2'>
            <img src={techIcon} className="w-6 h-6" alt="catgory-icon" />
            <div>
              <p className='text-gray-500 text-4 font-normal leading-normal'>Categories</p>
              <DetailsRow data={productData?.categories} />
            </div>
          </div>
          <div className='business-models my-2 flex flex-row gap-2'>
            <img src={businessModelIcon} className="w-6 h-6" alt="businessModelIcon" />
            <div>
              <p className='text-gray-500 text-4 font-normal leading-normal'>Business Models</p>
              <DetailsRow data={productData.businessModels} />
            </div>
          </div>
          <div className='trl flex flex-row my-2 gap-2'>
            <img src={trlIcon} className="w-6 h-6" alt="trlIcon" />
            <div>
              <p className='text-gray-500 text-4 font-normal leading-normal'>Implementation Time</p>
              <div className='flex py-1 px-3 items-center gap-1 rounded-full bg-gray-300'>
                <p className='text-gray-700 text-xs font-normal'>{productData?.trl?.name}</p>
              </div>
            </div>
          </div>
          <div className='investment-effort flex flex-row my-2 gap-2'>
            <img src={costIcon} className="w-6 h-6" alt="costIcon" />
            <div>
              <p className='text-gray-500 text-4 font-normal leading-normal'>Investment Effort</p>
              <div className='flex h-6 py-1 px-3 items-center gap-1 rounded-full bg-gray-300'>
                <p className='text-gray-700 text-xs font-normal'>{productData?.investmentEffort}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='video-section rounded-md border border-gray-300 my-6 py-5 px-4 h-80'>
        <p className='title'>Video</p>
        <iframe
          className='w-full h-5/6'
          src={`https://www.youtube.com/embed/${extractYouTubeVideoId(String(productData?.video))}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>            
    </>
  )
}

export default ViewLayout