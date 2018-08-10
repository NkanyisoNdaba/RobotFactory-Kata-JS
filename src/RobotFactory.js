
function RobotFactory(suppliers) {
    let quotedRobot = [];
    let queryResult = {
        parts: [],
        totalPrice: 0
    };

    let PurchaseRobot = function (robot) {
        if (quotedRobot.includes(robot)) {
            robot.parts.forEach(part => {
                let supplierName = part.supplier;
                let partToPurchase = part.name;
                suppliers.filter(s => s.name == supplierName)[0].purchase(partToPurchase);;
            });
            return;
        }
        return "Not-Quoted";
    }

    let CostRobot = function (query) {
        GetRobotParts(query);
        quotedRobot.push(queryResult);
        return queryResult;
    }

    let GetRobotParts = function (query) {
        Object.keys(query).forEach(key => {
            let qResult = GetPart(query[key]);
            if (Object.keys(qResult).length > 0) {
                queryResult.parts.push(qResult);
                queryResult.totalPrice += qResult.price
            }
        });
    }

    let GetPart = function (partName) {
        let eligibleSuppliers = suppliers.filter(e => e.parts.filter(a => a.name == partName).length > 0);
        let cheapestSupplier = eligibleSuppliers.reduce((supplierOne, supplierTwo) => {
            let supplierOneMinPrice = GetMinPrice(supplierOne, partName);
            let supplierTwoMinPrice = GetMinPrice(supplierTwo, partName);

            if (IsANumber(supplierTwoMinPrice) && IsANumber(supplierOneMinPrice)) {
                return (supplierOneMinPrice < supplierTwoMinPrice) ? supplierOne : supplierTwo;
            }
        });
        return CreateQueryResults(cheapestSupplier, partName);
    }

    let IsANumber = function (supplierMinPrice) {
        return supplierMinPrice != NaN;
    }

    let CreateQueryResults = function (cheapestSupplier, partName) {
        let part = {};
        if (cheapestSupplier) {
            part = {
                supplier: cheapestSupplier.name,
                name: partName,
                price: cheapestSupplier.parts.filter(p => p.name == partName).map(z => z.price)[0]
            }
        }
        return part;
    }

    let GetMinPrice = function (supplier, partName) {
        let minPrice = 0;
        if (supplier) {
            let supplierPrices = supplier.parts
                .filter(f => f.name == partName)
                .map(x => x.price);
            if (supplierPrices.length == 0) return NaN;
            minPrice = supplierPrices.reduce((y, z) => Math.min(y, z));
        }
        return minPrice;
    }
    return {
        CostRobot: CostRobot,
        PurchaseRobot: PurchaseRobot
    };
}



