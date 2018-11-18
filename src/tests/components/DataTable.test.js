import React from 'react'
import Enzyme, { mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import DataTable from "./../../components/DataTable"
import UserProvider, {UserTree} from "./../../context/UserContext"
Enzyme.configure({ adapter: new Adapter() })
const wrapper = shallow(<DataTable />)
const wrapperProvider = mount(
    <UserProvider>
        <DataTable />
    </UserProvider>
)

describe('DataTable', () => {
    it("should exist", function() {
        expect(wrapper).toBeDefined();
      })
  it('should have wrapped by the context Provider', () => {
    expect(wrapper.context).not.toBe(null)
  });

  it('should have context', () => {
    expect(typeof wrapper.context).toBe('function')
  })

})

describe('DataTable with UserProvider', () => {
    it("should exist", function() {
        expect(wrapperProvider).toBeDefined();
      })
  it('should have wrapped by the context Provider', () => {
    expect(wrapperProvider.state).not.toBe(null)
  });

  it('should have context', () => {
    expect(typeof wrapperProvider.state).toBe('function')
  })

})