import React, { useState } from 'react'

function Tabs({ tabsContent, onChange }) {

  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  function handleOnclick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex)
    onChange(getCurrentIndex)
  }

  return (
    <div className='wrapper'>
      <div className="heading">

        {
          tabsContent.map((tabItem, index) => (
            <div className={`tab-item ${currentTabIndex === index ? 'active' : ''}`} onClick={() => handleOnclick(index)} key={tabItem.label}>
              <span className='label'>{tabItem.label}</span>
            </div>
          ))}

      </div>
      <div className="content" style={{color:'red'}}>
        {
          tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  )
}

export default Tabs
