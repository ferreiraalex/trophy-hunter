import { FC, useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { i18n } from '../../lib/i18n/i18n';
import { getStatus } from '../../lib/status';
import Alert from '../icons/Alert';
import { Tooltip } from '../tooltip';

const Status: FC = () => {
  const { mutate, data, isLoading, isError } = useMutation(getStatus);
  const [timedout, setTimedout] = useState(false);

  useEffect(() => {
    if (!isLoading || isError) {
      return;
    }

    const timeout = setTimeout(() => {
      setTimedout(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading, isError]);

  useEffect(() => {
    const interval = setInterval(() => {
      mutate();
    }, 60000);

    mutate();

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && data) {
      setTimedout(false);
    }
  }, [isLoading, data]);

  if (!isError && !timedout && (!data || data.length === 0)) {
    return null;
  }
  return (
    <Tooltip
      placement="topLeft"
      title={i18n('Trophy Hunter API is down')}
      text={i18n('Please check Discord for support and updates.')}
      targetId="alert"
    >
      <Alert data-tooltip-id="alert" />
    </Tooltip>
  );
};

export default Status;
