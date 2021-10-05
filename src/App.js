import React from 'react';
import Weather from './components/weather/weather';
import GetLocation from './components/getLocation/getLocation';
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';

import './App.css';

const { TabPane } = Tabs;

function App() {
  const locationNames = useSelector((state) => state.weather.locationNames);
  return (
    <>
      <GetLocation />
      <Tabs type='card'>
        {locationNames.map((locationName, index) => {
          return (
            <TabPane tab={locationName} key={index}>
              <Weather cityName={locationName} />
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
}

export default App;
