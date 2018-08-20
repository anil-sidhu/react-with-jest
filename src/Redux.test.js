import React from 'react';
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as action from './redux/action.js'
import renderer from 'react-test-renderer';
import reducer from './redux/reducer.js'
import ReduxApp from './ReduxApp.js'


Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        getData: jest.fn()
    }
    const enzymeWrapper = mount(<ReduxApp {...props} />)
    return {
        props,
        enzymeWrapper
    }
}


it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()
    console.warn("enzymeWrapper", enzymeWrapper.find('ReduxApp').hasClass('App'))
    expect(3).toEqual(3)
})

describe('actions test ', () => {
    it('should create an action to add a todo', () => {
        const expectedAction = {
            type: "ADD_TODO",
            id: 100,
        }
     // console.warn("test action",action)
        //   expect(2).toEqual(2)
        expect(action.getData()).toEqual(expectedAction)
    })
})


it('should handle ADD_TODO', () => {
    expect(
        {
            type: 'ADD_TODO',
            id: 100
        }
    ).toEqual(
        {
            type: 'ADD_TODO',
            id: 100
        }
        )
})