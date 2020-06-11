import React from 'react'
import { v1 as uuidv1 } from 'uuid'

import * as Styled from './styled'
import Icon from '../Icon'

export type AccordionProps = {
  /** 메뉴를 동시에 여러개 열 수 있는 Flag */
  multiple?: boolean

  /** 아코디언 메뉴에 사용 할 데이터 { title: string, description: string } */
  items: AccordionData[]
}

export type AccordionData = {
  title: string
  description: string
}

function Accordion({ items, multiple }: AccordionProps) {
  let key = uuidv1()

  return (
    <Styled.AccordionWrapper>
      {items.map((item, idx) => {
        return (
          <Styled.KeyboardWrapper>
            <Styled.InvisibleInput id={`${key}-${idx}`} multiple={multiple} name={key} />
            <Styled.KeyboardLabel htmlFor={`${key}-${idx}`}>
              {item.title}
              <Icon name="arrow-right" />
            </Styled.KeyboardLabel>
            <Styled.KeyboardDescription>
              <p>{item.description}</p>
            </Styled.KeyboardDescription>
          </Styled.KeyboardWrapper>
        )
      })}
    </Styled.AccordionWrapper>
  )
}

Accordion.defaultProps = {
  multiple: false,
}

export default Accordion
