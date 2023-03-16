import React, { useEffect } from 'react';
import router, { useRouter } from 'next/router';

export default function Index() {
  useEffect(() => {
    router.push('/signin');
  });

  return <div></div>;
}
