// Code your solution here
function findMatching(drivers, name){
const match = drivers.filter(driver=>driver.toLowerCase() === name.toLowerCase())
console.log(match)
return match

}

function fuzzyMatch(drivers,name){
    const match = drivers.filter(driver=>driver.charAt(0) === name.charAt(0))
    console.log(match)
    return match
}

function matchName(drivers, name){
const match = drivers.filter(driver=>name === driver.name)
return match


}