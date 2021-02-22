import React, { useState } from 'react';
import { useMemo } from 'react';
import { TimeDisplay } from '../styled';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useMemo(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  return (
    <div>
      <TimeDisplay time={time.getHours()}>{time.toString()}</TimeDisplay>
    </div>
  );
};

Clock.protTypes = {};

export default Clock;
