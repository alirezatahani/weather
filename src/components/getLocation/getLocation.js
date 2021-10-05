import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/asyncAction';
import { Button, Typography, Modal, AutoComplete } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { encodeQueryData } from '../../utils/queryParams';
import { useDispatch } from 'react-redux';
import { setLocation } from '../../reducer/weather/actions';
import './style.css';

const { Title } = Typography;

function GetLocation() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [{ response, loading, error }, searchCities] = useFetch();
  const dispatch = useDispatch();

  const onSearch = async (searchText) => {
    const queryParams = encodeQueryData({
      q: searchText,
      key: process.env.REACT_APP_WEATHER_KEY,
    });
    await searchCities({
      url: `search.json${queryParams}`,
    });
  };
  const onSelect = (data) => {
    setSelectedOption(data);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(setLocation(selectedOption));
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (response) {
      const normalizedCities = response.reduce((total, acc) => {
        total.push({ label: acc.name, value: acc.name });
        return total;
      }, []);
      setOptions(normalizedCities);
    }
  }, [response]);

  return (
    <div className='getLocationWrapper'>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <AutoComplete
          options={options}
          style={{ width: '100%', paddingTop: 20 }}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder='Please Choose Your Location'
        />
      </Modal>

      <Button
        size='large'
        type='primary'
        shape='circle'
        onClick={showModal}
        icon={<PlusCircleOutlined />}
      />
    </div>
  );
}

export default GetLocation;
