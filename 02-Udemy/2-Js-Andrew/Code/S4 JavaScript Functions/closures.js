const createCounter = () => {
    let count = 0

    return {
        increment() {
            count ++
        },
        decrement() {
            count --
        },
        get() {
            return count
        }
    }
}

const counter = createCounter() 
counter.increment()
counter.increment()
console.log(counter.get())

// Adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(8)
console.log(add10(2))
console.log(add10(-5))


// Challenege area
// Tipper
const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}

const tip20 = createTipper(.2)
console.log(tip20(200))