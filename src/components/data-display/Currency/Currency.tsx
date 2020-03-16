import React from 'react'

import * as Styled from './styled'

import numberWithCommas from '../../../helpers/numberWithCommas'

export type CurrencyProps = {
  /** 표현 할 값 */
  won: number | string | React.ReactNode

  /** 앞에 붙일 단어 */
  prefix?: string

  /** 뒤에 붙일 단어 */
  suffix?: string

  /** 음수로 표현 할 것인가 */
  negative?: boolean
}

function Currency({ won, prefix, suffix, negative }: CurrencyProps) {
  const isReactNode = typeof won === 'object' && (won as Object).hasOwnProperty('$$typeof')

  let price = won
  /**
   * won 을 react node 로 전달 받았을 때 처리
   * any 를 사용하지 않고 props children에 접근할 수 있을까?
   */
  let style = {}
  if (isReactNode) {
    price = parseInt((won as any).props.children, 10)
    style = (won as any).props.style
  }

  let withComma = numberWithCommas(price as number)

  if (negative) {
    withComma = '-' + withComma
  }

  return (
    <>
      <Styled.CurrenyWrapper>
        {prefix && <Styled.CurrenyPrefix>{prefix}</Styled.CurrenyPrefix>}
        <Styled.Curreny style={{ ...style }}>{withComma}</Styled.Curreny>
        {suffix && <Styled.CurrenySuffix>{suffix}</Styled.CurrenySuffix>}
      </Styled.CurrenyWrapper>
    </>
  )
}

export default Currency
