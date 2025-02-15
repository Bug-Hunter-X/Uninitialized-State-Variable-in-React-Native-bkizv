import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await someAsyncOperation();
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.someProperty}</Text>
    </View>
  );
};

export default MyComponent; 