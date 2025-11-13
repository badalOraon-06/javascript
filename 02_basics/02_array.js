const marvel_heros = ['ironman', 'thor', 'spiderman']
const dc_heros = ['batman', 'superman']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros.length)
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][0])

// const allHero = marvel_heros.concat(dc_heros)
// console.log(allHero)

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flatted_arr = another_arr.flat(Infinity) // flattens the array completely
// console.log(flatted_arr)

// console.log(Array.isArray("badal"))
// console.log(Array.from("badal")) // makes array from iterable object
// console.log(Array.from({name: "badal"})) // it will give empty array because object is not iterable

const score1 = 100
const score2 = 200
const score3 = 300

// console.log(Array.of(score1, score2, score3)) // creates array from the arguments passed