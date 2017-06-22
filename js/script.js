console.log('trying some changes')

function pausecomp (millis) {
  var date = new Date()
  var curDate = null

  while (curDate - date < millis) {
    curDate = new Date()
  }
  alert('done')
}

pausecomp(3000)
