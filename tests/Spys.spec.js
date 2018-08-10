

 
function Greater(printer) {

    return {
        great: function (name) {
             return "Hello " + name;
        }
    }
}

describe("test spies", function () {
    it("Test ", function () {
         let greater = new Greater();

        spyOn(greater, 'great');

         greater.great("Lizo");

        expect(greater.great).toHaveBeenCalled();
        expect(greater.great).toHaveBeenCalledWith("Lizo");
    });
});