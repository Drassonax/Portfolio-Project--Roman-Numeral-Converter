function convertToRoman(num) {
    let desetice = {}
    let romans = {
      1000: 'M',
      500: 'D',
      100: 'C',
      50: 'L',
      10: 'X',
      5: 'V',
      1: 'I'
    }
    let roNum = ''
    let arNum = num
    for (let i=1; i<=num; i*=10) {
      var d = arNum % 10
      arNum -= d
      arNum /= 10
      if (d >= 5 ) {
        desetice[i*5] = 1
        d -= 5
      }
      desetice[i] = d
    }
    let i = 10**(num.toString().length)
    while (i>=1) {
        if (desetice[i] === 4 && desetice[i*5] === 1) {
          roNum += `${romans[i]}${romans[i*10]}`
        } else if (desetice[i] === 4) {
          roNum += `${romans[i]}${romans[i*5]}`
        } else if (desetice[i*5] > 0) {
          roNum += romans[i*5]
          for (let j=0; j<desetice[i]; j++) {
            roNum += romans[i]
          }
        } else { 
          for (let j=0; j<desetice[i]; j++) {
            roNum += romans[i]
          }
        }
      i /= 10
    }
   return roNum
  }