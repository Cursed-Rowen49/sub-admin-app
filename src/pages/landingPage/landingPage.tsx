import React, { useState } from 'react';

import NavigationBar from '@/components/NavigationBar/NavigationBar';
import ResponsiveCard from '@/components/GridItem/gridItem';

import Data from '../../components/GridItem/ThreeData';

function landingPage() {
  const [data, setData] = useState(Data);

  return (
    <>
      <NavigationBar />
      <ResponsiveCard dataFromApi={data} />
    </>
  );
}

export default landingPage;
