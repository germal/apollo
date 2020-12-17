import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import { observer } from 'mobx-react';

import POI from './POI';
import DefaultRoutingPoint from './DefaultRoutingPoint';


@observer
export default class DefaultRouting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPOI: true,
    };
  }

  render() {
    const { routeEditingManager, options, inNavigationMode } = this.props;
    return (
      <div className="tool-view-menu" id="poi-list">
        <div className="card data-recorder">
          <Tabs>
            <TabList>
              <Tab><div className="card-header">
                    <span>Point of Interest</span>
                </div></Tab>
              <Tab><div className="card-header">
                    <span>Default Routings</span>
                </div></Tab>
            </TabList>
            <TabPanel>
              <POI
                routeEditingManager={routeEditingManager}
                options={options}
                inNavigationMode={inNavigationMode}
              />
            </TabPanel>
            <TabPanel>
              <DefaultRoutingPoint
                routeEditingManager={routeEditingManager}
                options={options}
              />
            </TabPanel>
          </Tabs>
        </div>
      </div>);
  }
}
