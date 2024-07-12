function createEmployeeRecord(employee) {
    return {
      firstName:employee[0],
      familyName:employee[1],
      title:employee[2],
      payPerHour:employee[3],
      timeInEvents:[],
      timeOutEvents:[]
    };
}
  
function createEmployeeRecords(employee) {
    return employee.map(createEmployeeRecord);
}
  
function createTimeInEvent(dateStamp) {
    let [date, hour]=dateStamp.split(" ");
  
this.timeInEvents.push({
      type:"TimeIn",
      hour:parseInt(hour, 10),
      date:date
});
    return this;
}
function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ");  
    this.timeOutEvents.push({
      type:"TimeOut",
      hour:parseInt(hour, 10),
      date:date
    });
  
    return this;
}

function hoursWorkedOnDate(date) {
    let timeIn =this.timeInEvents.find((event) => event.date === date);
    let timeOut =this.timeOutEvents.find((event) => event.date === date);
  
    return (timeOut.hour-timeIn.hour)/100;
}
  
function wagesEarnedOnDate(date) {
    let hoursWorked=hoursWorkedOnDate.call(this, date);
    return hoursWorked*this.payPerHour;
}

  function allWagesFor() {
    let datesWorked=this.timeInEvents.map(event => event.date);
    let totalWages=datesWorked.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
    return totalWages;
  }
  

function findEmployeeByFirstName(srcArr, firstName) {
    return srcArr.find(employee => employee.firstName === firstName);
  }
  

  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
  }
  
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll
  };
  