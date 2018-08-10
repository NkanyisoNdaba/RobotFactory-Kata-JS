describe("RobotFactory", function () {
    describe("CostRobot", function () {
        describe("When querying for Infared Vision Head", function () {
            it("Should return supplier, parts and total cost from cheapest suppliers", function () {
                //Arrange
                let suppliers = [GetSupplier1(), GetSupplier2()]
                let robotFactory = new RobotFactory(suppliers);
                let query = {};
                query.head = "Infrared Vision";
                //Act
                let result = robotFactory.CostRobot(query);
                //Assert
                expect(result).toEqual({ "parts": [{ "supplier": "Thabani", "name": "Infrared Vision", "price": 24 }], "totalPrice": 24 });
            });
        });

        describe("When querying for Standard Vision Head", function () {
            it("Should return supplier, parts and total cost from cheapest suppliers", function () {
                //Arrange
                let suppliers = [GetSupplier1(), GetSupplier2()]
                let robotFactory = new RobotFactory(suppliers);
                let query = {};
                query.head = "Standard Vision";
                //Act
                let result = robotFactory.CostRobot(query);
                //Assert
                expect(result).toEqual({ "parts": [{ "supplier": "Thabani", "name": "Standard Vision", "price": 23 }], "totalPrice": 23 });
            });
        });

        describe("When querying for Night Vision Head", function () {
            it("Should return supplier, parts and total cost from cheapest suppliers", function () {
                //Arrange
                let suppliers = [GetSupplier1(), GetSupplier2()]
                let robotFactory = new RobotFactory(suppliers);
                let query = {};
                query.head = "Night Vision";
                //Act
                let result = robotFactory.CostRobot(query);
                //Assert
                expect(result).toEqual({ "parts": [{ "supplier": "Nkanyiso", "name": "Night Vision", "price": 23 }], "totalPrice": 23 });
            });
        });


        describe("When querying for cheapest Night Vision Head and a Square Body", function () {
            it("Should return cheapest supplier, parts and total cost", function () {
                //Arrange
                let suppliers = [GetSupplier1(), GetSupplier2(), GetSupplier5()]
                let robotFactory = new RobotFactory(suppliers);
                let query = {};
                query.head = "Night Vision";
                query.body = "Square";
                //Act
                let result = robotFactory.CostRobot(query);

                //Assert
                expect(result).toEqual({
                    "parts": [
                        { "supplier": "Small Mac", "name": "Night Vision", "price": 1 },
                        { "supplier": "Nkanyiso", "name": "Square", "price": 12 }], "totalPrice": 13
                });
            });
        });

        describe("When querying for cheapest Standard Vision Head, Round Body and Boxing Gloves", function () {
            it("Should return cheapest supplier, parts and total cost", function () {
                //Arrange
                let suppliers = [GetSupplier1(), GetSupplier2()]
                let robotFactory = new RobotFactory(suppliers);
                let query = {};
                query.head = "Standard Vision";
                query.body = "Round";
                query.arms = "Boxing Gloves"
                //Act
                let result = robotFactory.CostRobot(query);
                //Assert
                expect(result).toEqual({
                    "parts": [
                        { "supplier": "Thabani", "name": "Standard Vision", "price": 23 },
                        { "supplier": "Nkanyiso", "name": "Round", "price": 18 },
                        { "supplier": "Thabani", "name": "Boxing Gloves", "price": 14 }], "totalPrice": 55
                });
            });
        });

        describe("When querying for cheapest Infrared Vision Head, Square Body, Hands and Legs", function () {
            it("Should return cheapest supplier, parts and total cost", function () {
                //Arrange
                let suppliers = [GetSupplier1(), GetSupplier2()]
                let robotFactory = new RobotFactory(suppliers);
                let query = {};
                query.head = "Infrared Vision";
                query.body = "Square";
                query.arms = "Hands"
                query.movement = "Legs";
                //Act
                let result = robotFactory.CostRobot(query);
                //Assert
                expect(result).toEqual({
                    "parts": [
                        { "supplier": "Thabani", "name": "Infrared Vision", "price": 24 },
                        { "supplier": "Nkanyiso", "name": "Square", "price": 12 },
                        { "supplier": "Nkanyiso", "name": "Hands", "price": 12 },
                        { "supplier": "Nkanyiso", "name": "Legs", "price": 17 }], "totalPrice": 65
                });
            });
        });

        describe("When querying for cheapest Standard Vision Head, Rectangular Body, Boxing Gloves, Legs and Solar Power", function () {
            it("Should return cheapest supplier, parts and total cost", function () {
                //Arrange
                let suppliers = [GetSupplier1(), GetSupplier4()];
                let robotFactory = new RobotFactory(suppliers);
                let query = {};
                query.head = "Standard Vision";
                query.body = "Rectangular";
                query.arms = "Hands";
                query.movement = "Legs";
                query.power = "Solar";
                //Act
                let result = robotFactory.CostRobot(query);
                 //Assert
                expect(result).toEqual({
                    "parts": [
                        { "supplier": "Big Mac", "name": "Standard Vision", "price": 1 },
                        { "supplier": "Nkanyiso", "name": "Rectangular", "price": 1 },
                        { "supplier": "Nkanyiso", "name": "Hands", "price": 12 },
                        { "supplier": "Nkanyiso", "name": "Legs", "price": 17 },
                        { "supplier": "Nkanyiso", "name": "Solar", "price": 50 }], "totalPrice": 81
                });
            });
        });
    });
});


 