// Write your solution in this file!
const driver = {
  // name: 'Sam',
  // address:'11 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value){
  // return Object.assign({},{[key]: value}, driver); 
const newDriver = {...driver}
newDriver[key] = value;
return newDriver;
} 

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value
  return driver
}

function deleteFromDriverByKey(driver, key){
  let otherDriver = {...driver};
  otherDriver[key]
  delete otherDriver[key]
  return otherDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}