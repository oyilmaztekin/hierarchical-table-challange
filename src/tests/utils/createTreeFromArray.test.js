import DataSet from '../../mockData/DataSet'
import DataSetTree from '../../mockData/DataSetTree'
import createTree from '../../utils/createTreeFromArray'
import reverseTreeFromArray from '../../utils/reverseTreeFromArray'
const cTree = jest.fn(createTree)


describe("Tree creation function is testing", function() {
    it("should exist", function() {
      expect(cTree).toBeDefined()
    })
  
    it("should be called", function() {
      cTree(DataSet)
      expect(cTree).toBeCalled()
    })
  
    it("should be a function", function() {
      expect(typeof cTree).toBe("function")
    })
    
    it("should return a object", () => {
      expect(typeof cTree(DataSet)).toEqual('object')
    })

    it("should create a valid tree", () => {
      expect(cTree(DataSet)).toEqual(DataSetTree)
    })
    
  })

  describe("result of the Tree function is comparing by reversed data...", function() {
    it("should return a array", () => {
      expect(typeof reverseTreeFromArray).toBe('object')
    })

    it("length of reversed array and the Dataset must not be the same...", () => {
      // removed parentID:0 from array when tree was creating 
      expect(reverseTreeFromArray.length).toEqual(DataSet.length - 1)
    })

    it("should contain same data...", () => {
      // removed parentID:0 from array when tree was creating 
      expect(reverseTreeFromArray[30]).toEqual(DataSet[31])
    })
    
  })

  
