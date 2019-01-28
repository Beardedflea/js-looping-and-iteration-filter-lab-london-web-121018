// Code your solution in this file

function findMatching(drivers, string){
    return drivers.filter(word => word.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(drivers, string){
    return drivers.filter(word => word.startsWith(string));
}

function matchName(drivers, string){
    let matchNames= [];
    for (const key in drivers){
        if (drivers[key].name == string){
        matchNames.push(drivers[key]);
        }
    }
    return matchNames
}