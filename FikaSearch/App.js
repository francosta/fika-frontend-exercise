import React from 'react';
import { ListScreen } from './src/screens/ListScreen.screen';
import styled from 'styled-components/native';
import { AppContextProvider } from './src/services/appContext';

const AppContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <AppContextProvider>
      <AppContainer>
        <ListScreen />
      </AppContainer>
    </AppContextProvider>
  );
}
