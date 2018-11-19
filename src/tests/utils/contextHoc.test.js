import React from "react"
import ContextHoc from "./../../utils/hoc/contextHoc"
import DataTable from "./../../components/DataTable"
import Enzyme, { mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })
describe("HOC is Testing", function() {
  const contextHOCFn = jest.fn(ContextHoc)
  it("should exist", function() {
    expect(ContextHoc).toBeDefined()
  })

  it("should be called", function() {
    contextHOCFn(DataTable)
    expect(contextHOCFn).toBeCalled()
  })

  it("should be a function", function() {
    expect(typeof contextHOCFn).toBe("function")
  })

  it("should return a component", function() {
    const wrapperComponent = ContextHoc(DataTable)
    const wrapper = shallow(<wrapperComponent />)

    const returnedTable = shallow(<DataTable />)

    expect(wrapper).not.toBe(null)
  })
})
