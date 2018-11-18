import React from 'react'
import Enzyme, { mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import DataTable from "./../../components/DataTable"

Enzyme.configure({ adapter: new Adapter() })
const wrapper = shallow(<DataTable />)

describe('DataTable', () => {
    it("should exist", function() {
        expect(wrapper).toBeDefined();
      })
  it('renders without exploding', () => {
    expect(typeof wrapper.context).toBe("function");
    //expect(wrapper.props().id).toBe('MountedBadge')
    

  });
})