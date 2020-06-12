import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormItemRule } from './Form'
// import { theme } from '../../../Theme'

const StyledField = styled.div`
  flex: 4;
`

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`

const StyledLabel = styled.div`
  flex: 1;
  margin-right: 10px;
  font-size: 12px;
`

const StyledErrorText = styled.div`
  color: red;
  margin-top: 4px;
  word-wrap: break-word;
  min-width: 100%;
  font-size: 11px;
`

type FormItemProps = {
  children: any
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  value?: string
  rules?: Partial<FormItemRule[]>
  handleError?: (rules: FormItemRule[], name: string, value: string) => void
  errors?: object
  label?: string
}

function FormItem({ children, handleChange, name, errors, rules, handleError, label }: FormItemProps) {
  const handleBlur = ({ target }) => {
    const { value } = target
    rules && handleError(rules, name, value)
  }
  return (
    <StyledWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledField>
        {React.cloneElement(children, { onChange: handleChange, name, onBlur: handleBlur })}
        {errors[name] && <StyledErrorText>{errors[name]}</StyledErrorText>}
      </StyledField>
    </StyledWrapper>
  )
}

export default FormItem
