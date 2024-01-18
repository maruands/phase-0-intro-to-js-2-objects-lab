// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway", 
} ;
function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const newArray = {...employee} ;
    newArray[key] = value;
    return newArray
}

const worker  = updateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    employee.streetAddress="12 Broadway";
    return employee;
}


function deleteFromEmployeeByKey(employee,key, value){
     const newArray = {...employee};
     delete newArray[key]; 
     return newArray;
 }
const newEmployee  = deleteFromEmployeeByKey(employee, "name", "");
delete newEmployee.name.valueOf();


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;

}
