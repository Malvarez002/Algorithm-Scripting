function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    arr.forEach((elem, i) => {
      arr[i][1] = "orbitalPeriod : xxx"
    })
    return arr
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);