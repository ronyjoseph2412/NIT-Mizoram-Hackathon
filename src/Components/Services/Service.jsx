import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero'

export const Service = (props) => {
    
  const { pathname } = useLocation();
  useEffect(() => {
    props.path(pathname)
  }, [])
  
  return (
    <div>
        <Hero />
    </div>
  )
}
