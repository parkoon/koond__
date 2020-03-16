import React from 'react'
import Tabs from '.'

const { TabPanel } = Tabs

export default {
  title: 'Data Display',
}
export const tabs = () => {
  return (
    <>
      <Tabs>
        <TabPanel title="Lorem 1" key="tab-1">
          <p>
            1 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
        </TabPanel>
        <TabPanel title="Lorem 2" key="tab-2">
          <p>
            2 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
        </TabPanel>
        <TabPanel title="Lorem 3" key="tab-3">
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
        </TabPanel>
      </Tabs>
      <Tabs type="card">
        <TabPanel title="Lorem 1" key="tab-1">
          <p>
            1 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
        </TabPanel>
        <TabPanel title="Lorem 2" key="tab-2">
          <p>
            2 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
        </TabPanel>
        <TabPanel title="Lorem 3" key="tab-3">
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
        </TabPanel>
      </Tabs>

      <Tabs type="card" placement="left">
        <TabPanel title="Lorem 1" key="tab-1">
          <p>
            1 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
        </TabPanel>
        <TabPanel title="Lorem 2" key="tab-2">
          <p>
            2 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
        </TabPanel>
        <TabPanel title="Lorem 3" key="tab-3">
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
          <p>
            3 Exercitation laboris fugiat aliquip ea velit duis ullamco est consectetur nisi consequat velit
            adipisicing.
          </p>
        </TabPanel>
      </Tabs>
    </>
  )
}
