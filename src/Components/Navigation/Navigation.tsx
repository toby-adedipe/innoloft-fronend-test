import React, { useEffect, useState, ComponentProps } from 'react';
import { Link } from 'react-router-dom';

interface Props extends ComponentProps<"div"> {
  mainColor?: string,
}

function Navigation({mainColor}: Props) {
  const [activeLink, setActiveLink] = useState('main');

  useEffect(()=>{
    const path = window.location.pathname;
    setActiveLink(path);
  }, [])

  return (
    <div className="relative border-b border-gray-300 w-full h-11 flex items-center px-4 md:border-b-0 md:flex-col md:justify-start md:p-0 md:h-full md:mx-4 md:items-start md:text-374151 md:text-base">
      <div 
        style={{
          borderBottom: activeLink === '/' ? `1px solid ${mainColor}` : ''
        }}
        className={`flex items-center h-11 mr-4`}>
        <Link to="/"> Main </Link>
      </div>
      <div 
        style={{
          borderBottom: activeLink.includes('/product') ? `1px solid ${mainColor}` : ''
        }}        
        className={`flex items-center h-11 mr-4`}>
        <Link to="/product"> Product </Link>
      </div>
    </div>
  )
}

export default Navigation