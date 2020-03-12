import React from 'react'
import Accordion from '.'

export default {
  title: 'Data Display',
}

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

export const accordion = () => {
  return (
    <>
      <h4>Select One</h4>
      <Accordion items={data} />

      <h4>Select Multiple</h4>
      <Accordion items={data} multiple />
    </>
  )
}
