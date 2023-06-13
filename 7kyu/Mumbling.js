// MUMBLING

/* The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z. */

//SOLUTION

function accum(s) {
    return s
      .split('')
      .map((char, index) => {
        const charRepeated = char.repeat(index + 1)
        return (
          charRepeated.charAt(0).toUpperCase() +
          charRepeated.slice(1).toLowerCase()
        )
      })
      .join('-')
  }