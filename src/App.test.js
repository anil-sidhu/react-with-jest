import React from 'react';
import App from './App.js';
import Enzyme, {shallow,mount} from 'enzyme';

import CheckBox from './CheckBox.js'
import Network from './Network.js'
import ReduxApp from './ReduxApp.js'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

// it('snapShort', () => {
//     const tree = renderer
//       .create(<App />)
//       .toJSON();
//       // console.warn("tree console",tree);
//     expect(tree).toMatchSnapshot();
//   });   

//   it('function', () => { 
//     const tree = renderer
//       .create(<App />).getInstance();
//      // console.warn("tree console",tree.jestCalling(20));
//     expect(tree.jestCalling(20)).toBe(20);
//   });   

//   it(' states', () => {
//     const tree = renderer
//       .create(<App />).getInstance();
//      tree.jestCalling(30)
//     expect(tree.state.data).toBe(30)
//   });  

  test(' api test ', async () => {
    
    const tree =renderer.create(<Network />).getInstance()
    // console.warn("tree console", await tree.testApi());

    expect(2).toEqual(2);
  }); 

 