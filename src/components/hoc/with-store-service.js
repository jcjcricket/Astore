import React from 'react';
import { StoreServiceConsumer } from '../store-service-contex';

export const withStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <StoreServiceConsumer>
        {(storeService) => {
          return <Wrapped {...props} storeService={storeService} />;
        }}
      </StoreServiceConsumer>
    );
  };
};


