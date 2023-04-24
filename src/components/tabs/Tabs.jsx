import React, { useState } from 'react'
import "./style.scss"
import { useSelector } from 'react-redux'

const Tabs = ({data, onTabChange}) => {

    const [selectedTab,setSelectedTab] = useState(0)
    const [left,setLeft] = useState(0)

    const activeTab = (tab,index) =>{
        setLeft(index * 100)
        setTimeout(() =>{
            setSelectedTab(index)
        },300)
        onTabChange(tab, index)
    }

    const isLightMode = useSelector((state) => state.lightMode.value);

  return (
    <div className={!isLightMode ? 'switchingTabs' : 'switchingTabsLight'}>
        <div className='tabItems'>
            {data.map((tab,index)=>(
                <span key={index} className={`tabItem ${selectedTab === index ? "active" : ""}`}
                onClick={() => activeTab(tab, index)}
                >
                    {tab}
                </span>
            ))}
            <span className='movingBg' style={{left}}/>
        </div>
    </div>
  )
}

export default Tabs