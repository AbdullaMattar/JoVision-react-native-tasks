import { useEffect, useState } from 'react';

export default function useCurrentTime() {
  const [curTime, setCurTime] = useState('');
  useEffect(() => {
    const interval = setInterval(
      () => setCurTime(new Date().toLocaleString()),
      1000
    );
    return () => {
      clearInterval(interval);
      //console.log('unmouted');
    };
  }, []);
  return curTime;
}
