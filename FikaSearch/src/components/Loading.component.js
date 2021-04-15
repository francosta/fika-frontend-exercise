import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator />
    </LoadingContainer>
  );
};
