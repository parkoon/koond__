import React from 'react'
import Dim from '.'

export default {
  title: 'Dim',
  component: Dim,
  parameters: {
    componentSubtitle: '뒷 배경을 어둡게 만들 때 사용하는 컴포넌트',
  },
}

export const dim = () => {
  return (
    <>
      <Dim visible={true} onClose={() => console.log('closed')} />
    </>
  )
}
