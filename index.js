const filterByAge = (el) => {
    return el.age < 50
};

const filterByScore = (el) => {
    return el.score > 75
};

const filterByServiceRecord = (el) => {
    return el.serviceRecord >= 5
};

const sortByScore = (arr) => {
    let newARR = arr.slice()
    return newARR.sort(function (a, b) {
        return b.score - a.score
    })
};

const getMeanAge = (arr) => {
    let sum = 0
    for (let el of arr) {
        sum += el.age
    }
    return sum / arr.length
};

const getMeanAgeReduce = (arr) => {

};

const getNamesOnly = (arr) => {
    // let names = ''
    // for (let el of arr) {
    //     names += el.name + ', '
    // }
    // return names


};

module.exports = {
    filterByAge,
    filterByScore,
    filterByServiceRecord,
    sortByScore,
    getMeanAge,
    getMeanAgeReduce,
    getNamesOnly,
};
