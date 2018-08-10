describe("RobotFactory", function () {
    describe("PurchaseRobot", function () {
        describe("Given a robot has not been quoted", function () {
            it("Should return Not-Quoted", function () {
                //Arrange
                let suppliers = [GetSupplier1(), GetSupplier4()];
                let robotFactory = new RobotFactory(suppliers);
                // let query = {};
                // query.head = "Standard Vision";
                // query.body = "Rectangular";
                // query.arms = "Hands";
                // query.movement = "Legs";
                // query.power = "Solar";
                let myRobot = GetMyRobot();
                //Act
                let result = robotFactory.PurchaseRobot(myRobot);
                //Assert
                expect(result).toBe("Not-Quoted");

            });
        });

        describe("Given a robot valid robot  quote", function () {
            it("Should  purchase the robot", function () {
                //Arrange
                let supplierOne = GetSupplier1();
                let supplierTwo = GetSupplier4();
                let suppliers = [supplierOne, supplierTwo];

                let robotFactory = new RobotFactory(suppliers);
                let query = {};
                query.head = "Standard Vision";
                query.body = "Rectangular";
                query.arms = "Hands";
                query.movement = "Legs";
                query.power = "Solar";

                spyOn(supplierOne, 'purchase');
                spyOn(supplierTwo, 'purchase');

                let costReuslt = robotFactory.CostRobot(query);
                //Act
                let result = robotFactory.PurchaseRobot(costReuslt);
                
                //Assert
                console.log(JSON.stringify(costReuslt));
                expect(supplierOne.purchase).toHaveBeenCalledWith("Legs");
                expect(supplierTwo.purchase).toHaveBeenCalledWith("Standard Vision");
 
            });
        });
    });

});

function GetMyRobot() {
    return {
        "parts": [{ "supplier": "Big Mac", "name": "Standard Vision", "price": 1 },
        { "supplier": "Nkanyiso", "name": "Rectangular", "price": 1 },
        { "supplier": "Nkanyiso", "name": "Hands", "price": 12 },
        { "supplier": "Lizod", "name": "Legs", "price": 17 },
        { "supplier": "Nkanyiso", "name": "Solar", "price": 50 }], "totalPrice": 81
    };
}

function BuildSupplier()
{
    let name = "";
    let parts = [];

    return {
        WithName : function(name){
            name = name;
            return this;
        },
        WithParts : function(parts)
        {
            parts = parts;
            return this;
        }, 
        Build : function()
        {
                     return new Supplier(supplierName, robotParts);
        }
    }
}