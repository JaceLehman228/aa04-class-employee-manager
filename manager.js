const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }
    
    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary()) * multiplier;
    }
    _totalSubSalary() {
        let sum = 0;
        this.employees.forEach(person => {
            if(person instanceof Manager) {
                sum += (person.salary + person._totalSubSalary());
            } else {
                sum += person.salary;
            }
        })
        return sum;
    } 
}

module.exports = Manager;