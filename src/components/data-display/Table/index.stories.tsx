import React from 'react'
import Table from './'

export default {
  title: 'Table',
  component: Table,
}

const columns = [
  {
    title: 'Name',
    key: 'name',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    key: 'age',
  },
  {
    title: 'Address',
    key: 'address',
  },
  {
    title: 'Description',
    key: 'description',
  },
]

const data = []
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  })
}

export const Default = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}
export const NoData = () => {
  return (
    <>
      <Table columns={columns} dataSource={null} />
      {/* <Table yScroll /> */}
    </>
  )
}

export const Scroll = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} yScroll tableLayout="fixed" />
    </>
  )
}

export const Loading = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} size="small" loading />
    </>
  )
}
