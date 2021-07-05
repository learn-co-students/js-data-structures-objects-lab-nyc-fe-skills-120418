const driver={}; 
function updateDriverWithKeyAndValue(driver, key, value) {
  const drivercopy = {...driver};
  drivercopy[key]=value;
  return drivercopy;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
 return driver;
}
function deleteFromDriverByKey(driver, key){
const drivercopy={...driver};
delete drivercopy[key];
return drivercopy;
}
function destructivelyDeleteFromDriverByKey(driver, key){
// const key (driver)={}
delete driver[key];
return driver;
}