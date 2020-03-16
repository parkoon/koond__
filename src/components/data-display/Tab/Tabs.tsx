import React, { useState, useCallback } from 'react'

import * as Styled from './styled'
import * as I from './interface'

function Tabs({ children, ...props }: I.TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target
    setSelectedTab(parseInt(value, 10))
  }, [])

  return (
    <Styled.Tabs>
      <Styled.TabsHeader {...props}>
        {React.Children.map(children as React.ReactNode, (child, index) => {
          if (!React.isValidElement(child)) return null

          return (
            <Styled.TabLabel key={child.key} className={`${selectedTab === index && 'active'}`} {...props}>
              {child.props.title}
              <Styled.InvisibleInput checked={selectedTab === index} value={index} onChange={handleChange} />
            </Styled.TabLabel>
          )
        })}
      </Styled.TabsHeader>
      <Styled.TabsBody {...props}>
        {React.Children.map(children as React.ReactNode, (child, index) => (
          <Styled.TabContent selected={selectedTab === index}>{child}</Styled.TabContent>
        ))}
      </Styled.TabsBody>
    </Styled.Tabs>
  )
}

function TabPanel({ children }: I.TabPanelProps) {
  return <>{children}</>
}

Tabs.defaultProps = {
  type: 'default',
}

Tabs.TabPanel = TabPanel

export default Tabs
