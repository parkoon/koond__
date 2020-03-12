import React from 'react'
import { v1 as uuidv1 } from 'uuid'

import * as Styled from './styled'
import * as I from './interface'
import Icon from '../../general/Icon'

function Accordion({ items, multiple }: I.AccordionProps) {
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
