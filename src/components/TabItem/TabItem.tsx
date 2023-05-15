import { FC } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TabItem: FC<any> = () => {
  return (
    <div>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>App 1</Tab>
          <Tab>App 2</Tab>
          <Tab>App 3</Tab>
          <Tab>App 4</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Application 1 development in progress</TabPanel>
          <TabPanel>Application 2 development in progress</TabPanel>
          <TabPanel>Application 3 development in progress</TabPanel>
          <TabPanel>Application 4 development in progress</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabItem;
