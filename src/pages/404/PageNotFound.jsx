import React, { useEffect } from 'react'
import "./style.scss"
import ContentWrapper from './../../components/contentWrapper/ContentWrapper';
import { useSelector } from 'react-redux';

const PageNotFound = () => {

  const isLightMode = useSelector((state) => state.lightMode.value);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isLightMode]); 
  return (
    <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
  )
}

export default PageNotFound