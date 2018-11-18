import React from "react"
import UserProvider from "./../../context/UserContext"
import Enzyme, { mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })
const wrapper = mount(<UserProvider />)

describe('DataTable', () => {
    it("should exist", function() {
        expect(wrapper).toBeDefined();
      })
  it('should have wrapped by the context Provider', () => {
    expect(wrapper.state).not.toBe(null)
  });

  it('should have context', () => {
    expect(typeof wrapper.state).toBe('function')
  })

})