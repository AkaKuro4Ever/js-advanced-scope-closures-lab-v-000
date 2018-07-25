
function produceDrivingRange(range) {
  return function(start, end) {
    let distance = Math.abs(parseInt(start) - parseInt(end))
    let difference = distance - range;
    if (difference > 0) { return `${difference} blocks out of range`
  } else {return `within range by ${Math.abs(difference)}`}
  }
}

function produceTipCalculator(percentage) {
  return function(cost) {
    return cost * percentage
  }
}
