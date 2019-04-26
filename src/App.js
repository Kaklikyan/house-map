import React from 'react';
import { Provider } from 'react-redux'
import Wrapper from './components/Wrapper';
import SelectTemplate from './components/SelectTemplate';
import HouseMap from './components/HouseMap';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <SelectTemplate />
        <HouseMap />
      </Wrapper>
    </Provider>
  );
}

export default App;
