import React, { useEffect } from 'react';
import router from 'next/router';

export default function Index() {
  useEffect(() => {
    // redirect to the siignin page.
    router.push('/signin');
  });

  return <div></div>;
}
