import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, {shallow,mount} from 'enzyme';
import ReduxContainer from './Container';
import * as action from './redux/action.js'
import renderer from 'react-test-renderer';
import reducer from './redux/reducer.js'
import ReduxApp from './ReduxApp.js'
import configureStore from 'redux-mock-store';
const mockStore=configureStore();
Enzyme.configure({adapter: new Adapter()});

describe('Counter Container', () => {
    let wrapper, store;

    beforeEach(() =>{
        store = mockStore(1);
        store.dispatch = jest.fn();
        wrapper = shallow(<ReduxContainer store={store}/>);
    });

    it('maps state and dispatch to props', () => {

        expect(wrapper.props()).toEqual(expect.objectContaining({
            getData: expect.any(Function),
            
        }));
    });

    it('maps onIncrement to dispatch increment action', () => {
        wrapper.props().getData();

        expect(store.dispatch).toHaveBeenCalledWith({"id": 100, "type": "ADD_TODO"});
    });
});

// Enzyme.configure({ adapter: new Adapter() })

// function setup() {
//     const props = {
//         getData: jest.fn() 
//     }
//     const enzymeWrapper = mount(<ReduxApp {...props} />)
//     return {
//         props,
//         enzymeWrapper
//     }
// }

// it('Components', () => {
//     const { enzymeWrapper } = setup()
//     console.warn("enzymeWrapper", enzymeWrapper.find('ReduxApp').hasClass('App'))
//     expect(3).toEqual(3)
// })


// it('Components', () => {
//     const { enzymeWrapper } = setup()
//     console.warn("enzymeWrapper", enzymeWrapper.find('ReduxApp').hasClass('App'))
//     expect(3).toEqual(3)
// })

// describe('actions test ', () => {
//     it('should create an action to add a todo', () => {
//         const expectedAction = {
//             type: "ADD_TODO",
//             id: 100,
//         }
//      // console.warn("test action",action)
//         //   expect(2).toEqual(2)
//         expect(action.getData()).toEqual(expectedAction)
//     })
// })


// it('should handle ADD_TODO', () => {
//     expect(
//         {
//             type: 'ADD_TODO',
//             id: 100
//         }
//     ).toEqual(
//         {
//             type: 'ADD_TODO',
//             id: 100
//         }
//         )
// })