import React from 'react'
import Table from './Table'

export default {
  title: 'Data Display',
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
  // {
  //   title: 'Action',
  //   key: 'action',
  //   // render: () => (
  //   //   <span>
  //   //     <a style={{ marginRight: 16 }}>Delete</a>
  //   //     <a className="ant-dropdown-link">
  //   //       More actions <DownOutlined />
  //   //     </a>
  //   //   </span>
  //   // ),
  // },
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

export const table = () => {
  return (
    <>
      <Table columns={columns} dataSource={null} />
      <Table columns={columns} dataSource={data} yScroll tableLayout="fixed" />
      <Table columns={columns} dataSource={data} size="small" loading />
      {/* <Table yScroll /> */}
    </>
  )
}
