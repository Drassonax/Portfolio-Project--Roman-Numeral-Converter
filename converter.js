document.getElementById('arabic-numeral').addEventListener('input', (e) => {
  document.getElementById('roman-result').innerHTML = ''
  document.getElementById('arabic-error').innerHTML = ''
  document.getElementById('arabic-result').innerHTML = ''
  if (parseInt(e.target.value)) {
    e.target.value = parseInt(e.target.value)
  } else {
    e.target.value = ''
  }
})

document.getElementById('submit-arabic').addEventListener('click', () => {
  const arabicNum = Number(document.getElementById('arabic-numeral').value)
  if (arabicNum < 0 || arabicNum>=4000) {
    document.getElementById('arabic-error').innerHTML = 'You can only convert numbers between 1 and 4000!'
    document.getElementById('arabic-numeral').value = ''
  } else {
    document.getElementById('arabic-result').innerHTML = `Arabic: ${document.getElementById('arabic-numeral').value}`
    document.getElementById('roman-result').innerHTML = `Roman: ${convertToRoman(arabicNum)}`
    document.getElementById('arabic-numeral').value = ''
  }
})
