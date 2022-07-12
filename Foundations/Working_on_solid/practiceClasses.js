class saveEmployeeInDataBase {
    // Connect data base and save employee
}


class CalculateEmplyeeTaxes {
    // Calculate taxes adn deduct it from emplyee
    // paycheck
}


class Employee {
    // This is how we apply the coupling principle
    // where we split the functionality and make sure that every
    // module in this case every class performs only one task
 

    // Each class has only one responsibility or reason to change ....
    save() { new saveEmployeeInDataBase().bind(this);
     }
     calculateDeductTaxes (){ new CalculateEmplyeeTaxes().bind(this);
    }
    
// ------------------  bad practice ------------------
    save() {
        // This is a method taht will save the emplpyee inf in a 
        // data base
    }

    calculateTax() {
        // Calculate taxes and deducts the 
        //amount from the employee paycheck
    }
}