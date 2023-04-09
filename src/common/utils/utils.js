export function checkLenghtSymbols(number) {
    if(String(number).length < 7) return number
    else {
        let arr = String(number).split('')
        arr.splice( arr.length - 6, 0, ',')
        return  arr.join('')
    }
}

export  function getCurrencies(obj) {
    if(typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
        let value = Object.values(obj)[0]
        if(typeof value === 'object' && value !== null) {
            return `(${value.symbol}) ${value.name}`
        }
    }
}

export function getRegion(arr){
    let region = []
    for (let country of arr) {
        region.push(country.region)
    }
    return Array.from(new Set(region)).sort()
}


export  function getLanguages(obj) {
    if(typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
        let value = Object.values(obj)
        return value.join(' - ')
    }
}

export  function getCarsInfo(obj) {
    if(typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
        let result = [];
        let side = obj.side
        if(side) result.push(side)
        if(Array.isArray(obj.signs)) result.push(obj.signs[0])
        return result.join(' - ')
    }
}

export  function getTimezone(arr) {
   if(Array.isArray(arr)) return arr.join(', ')
}

export  function checkDarkMode() {
    if(localStorage.getItem('darkMode')) return localStorage.getItem('darkMode')
    return false;
}

export  function checkTheme() {
    if(localStorage.getItem('theme')) return localStorage.getItem('theme')
    return 'App';
}