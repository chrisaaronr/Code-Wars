// BEGINNER SERIES #2 CLOCK

// Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.

// SOLUTION

function past(h, m, s) {
    const hourInMs = h * 3600000
    const minutesInMs = m * 60000
    const secondsInMS = s * 1000
    return hourInMs + minutesInMs + secondsInMS
  }