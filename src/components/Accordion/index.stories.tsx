import React from 'react'
import Accordion from '.'

export default {
  title: 'Accordion',
  component: Accordion,
}

export const Default = () => {
  const data = [
    {
      title: 'Enim fugiat ex deserunt cillum sint.',
      description: `Dolore eu do excepteur dolore. Fugiat tempor mollit aute quis proident laborum cupidatat pariatur adipisicing culpa ex eiusmod sint irure. Qui minim aliqua velit est commodo adipisicing irure in eiusmod non ea cillum.
Mollit incididunt amet cupidatat ipsum proident tempor proident ad non. Consequat consectetur deserunt irure aliqua fugiat magna sit pariatur sunt est consectetur laborum. Reprehenderit consequat irure cupidatat sunt et ex sunt laboris irure reprehenderit nisi.`,
    },
    {
      title: 'Enim fugiat ex deserunt cillum sint.',
      description: `Dolore eu do excepteur dolore. Fugiat tempor mollit aute quis proident laborum cupidatat pariatur adipisicing culpa ex eiusmod sint irure. Qui minim aliqua velit est commodo adipisicing irure in eiusmod non ea cillum.
Mollit incididunt amet cupidatat ipsum proident tempor proident ad non. Consequat consectetur deserunt irure aliqua fugiat magna sit pariatur sunt est consectetur laborum. Reprehenderit consequat irure cupidatat sunt et ex sunt laboris irure reprehenderit nisi.`,
    },
    {
      title: 'Enim fugiat ex deserunt cillum sint.',
      description: `Dolore eu do excepteur dolore. Fugiat tempor mollit aute quis proident laborum cupidatat pariatur adipisicing culpa ex eiusmod sint irure. Qui minim aliqua velit est commodo adipisicing irure in eiusmod non ea cillum.
Mollit incididunt amet cupidatat ipsum proident tempor proident ad non. Consequat consectetur deserunt irure aliqua fugiat magna sit pariatur sunt est consectetur laborum. Reprehenderit consequat irure cupidatat sunt et ex sunt laboris irure reprehenderit nisi.`,
    },
  ]
  return (
    <>
      <Accordion items={data} />
    </>
  )
}
export const Multiple = () => {
  const data = [
    {
      title: 'Enim fugiat ex deserunt cillum sint.',
      description: `Dolore eu do excepteur dolore. Fugiat tempor mollit aute quis proident laborum cupidatat pariatur adipisicing culpa ex eiusmod sint irure. Qui minim aliqua velit est commodo adipisicing irure in eiusmod non ea cillum.
Mollit incididunt amet cupidatat ipsum proident tempor proident ad non. Consequat consectetur deserunt irure aliqua fugiat magna sit pariatur sunt est consectetur laborum. Reprehenderit consequat irure cupidatat sunt et ex sunt laboris irure reprehenderit nisi.`,
    },
    {
      title: 'Enim fugiat ex deserunt cillum sint.',
      description: `Dolore eu do excepteur dolore. Fugiat tempor mollit aute quis proident laborum cupidatat pariatur adipisicing culpa ex eiusmod sint irure. Qui minim aliqua velit est commodo adipisicing irure in eiusmod non ea cillum.
Mollit incididunt amet cupidatat ipsum proident tempor proident ad non. Consequat consectetur deserunt irure aliqua fugiat magna sit pariatur sunt est consectetur laborum. Reprehenderit consequat irure cupidatat sunt et ex sunt laboris irure reprehenderit nisi.`,
    },
    {
      title: 'Enim fugiat ex deserunt cillum sint.',
      description: `Dolore eu do excepteur dolore. Fugiat tempor mollit aute quis proident laborum cupidatat pariatur adipisicing culpa ex eiusmod sint irure. Qui minim aliqua velit est commodo adipisicing irure in eiusmod non ea cillum.
Mollit incididunt amet cupidatat ipsum proident tempor proident ad non. Consequat consectetur deserunt irure aliqua fugiat magna sit pariatur sunt est consectetur laborum. Reprehenderit consequat irure cupidatat sunt et ex sunt laboris irure reprehenderit nisi.`,
    },
  ]
  return (
    <>
      <Accordion items={data} multiple />
    </>
  )
}
