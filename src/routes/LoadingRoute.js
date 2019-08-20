import React from 'react';
import LoadingComponent from 'components/Loading';

export const Loading = ({ error, retry, pastDelay }) => {
  if (error) {
    return (
      <div>
        Error!
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }
  if (pastDelay) {
    return <LoadingComponent />;
  }
  return null;
};

export const LoadingDashboard = ({ error, retry, pastDelay }) => {
  if (error) {
    return (
      <div>
        Error!
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }
  if (pastDelay) {
    return <LoadingComponent isDashboard />;
  }
  return null;
};
