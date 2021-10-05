import React, { useEffect } from 'react';
import useFetch from '../../hooks/asyncAction';
import DayImage from '../../assets/day.jpg';
import NightImage from '../../assets/clearNight.jpg';
import RainyDayImage from '../../assets/rainyDay.jpg';
import RainyNightImage from '../../assets/rainyNight.jpg';
import StormNightImage from '../../assets/stormNight.jpg';
import { weatherCodes } from '../../utils/constants';
import { encodeQueryData } from '../../utils/queryParams';
import { Typography, Row, Col, Space } from 'antd';
import './style.css';

const { Text, Title } = Typography;

const weatherImages = {
  clearNight: NightImage,
  day: DayImage,
  rainyNight: RainyNightImage,
  rainyDay: RainyDayImage,
  stormNight: StormNightImage,
};
function Weather({ cityName }) {
  const [{ response, loading, error }, getWeather] = useFetch();

  useEffect(() => {
    fetchWeather();
  }, [cityName]);

  const fetchWeather = async () => {
    const queryParams = encodeQueryData({
      q: cityName,
      key: process.env.REACT_APP_WEATHER_KEY,
    });
    await getWeather({
      url: `forecast.json${queryParams}`,
    });
  };
  const weatherBackground = () => {
    const code = response.current.condition.code;
    if (response.current.is_day) {
      return weatherImages[weatherCodes[code].dayImage];
    } else {
      return weatherImages[weatherCodes[code].nightImage];
    }
  };
  const calculateChance = (moment) => {
    if (moment.chance_of_rain) {
      return `${moment.chance_of_rain}%`;
    } else if (moment.chance_of_snow) {
      return `${moment.chance_of_snow}%`;
    } else {
      return ' ';
    }
  };
  return (
    <>
      {response && (
        <div className='weatherWrapper'>
          <img src={weatherBackground()} />
          <div className='weatherDetail'>
            <Row>
              <Col span={16}>
                <Title level={1}>{response.location.name}</Title>
                <Title level={3}>{response.location.country}</Title>
              </Col>
              <Col span={8}>
                <Title level={2}>
                  {response.current.temp_c}&#176;C / {response.current.temp_f}
                  &#176;F{' '}
                </Title>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                {response.forecast.forecastday.map((today) => {
                  return (
                    <>
                      <Col span={24}>
                        <Space>
                          <Text type='secondary'>
                            H: {today.day.maxtemp_c}&#176;C
                          </Text>{' '}
                          <Text type='secondary'>
                            C: {today.day.mintemp_c}&#176;C
                          </Text>
                        </Space>
                      </Col>
                      <Col span={24} className='weatherDetailHours'>
                        {today.hour.map((moment) => {
                          return (
                            <div>
                              <img src={`https:${moment.condition.icon}`} />
                              <Text>{calculateChance(moment)}</Text>
                            </div>
                          );
                        })}
                      </Col>
                    </>
                  );
                })}
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
