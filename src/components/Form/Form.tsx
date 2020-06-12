import React, { useState } from 'react'

export type FormItemRule = {
  required?: boolean
  pattern?: RegExp
  min?: number
  max?: number
  len?: number
  message: string
}

type FormProps = {
  children: React.ReactNode
  onSubmit: (values: object) => void
}
function Form({ children, onSubmit }: FormProps) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkError()) return
    onSubmit(values)
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const checkError = () => {
    const result = Object.keys(errors).filter(field => errors[field])
    return result.length > 0 ? true : false
  }

  const handleError = (rules: Partial<FormItemRule[]>, name: string, value: string) => {
    if (!rules) return

    const requiredRule = rules.filter(rule => rule.required)[0]
    const patternRule = rules.filter(rule => rule.pattern)[0]
    const lengthRule = rules.filter(rule => rule.len)[0]
    const minMaxRule = rules.filter(rule => rule.min && rule.max)[0]

    if (requiredRule) {
      const { message } = requiredRule
      if (!value) {
        setErrors({ ...errors, [name]: message })
        return
      }
    }

    if (patternRule) {
      const { pattern, message } = patternRule
      const isValid = pattern.test(value)
      if (!isValid) {
        setErrors({ ...errors, [name]: message })
        return
      }
    }
    if (lengthRule) {
      const { len, message } = lengthRule
      const isValid = value.length < len
      if (!isValid) {
        setErrors({ ...errors, [name]: message })
        return
      }
    }

    if (minMaxRule) {
      const { min, max, message } = minMaxRule
      const isValid = value.length >= min && value.length <= max
      if (!isValid) {
        setErrors({ ...errors, [name]: message })
        return
      }
    }
    setErrors({ ...errors, [name]: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, (child: any) => {
        const { name, rules } = child.props
        return React.cloneElement(child, { handleChange, name, rules, handleError, errors })
      })}
    </form>
  )
}
// Form.FormItem = FormItem

export default Form
