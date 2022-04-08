
//...........promises async and await.....................
// Write one example explaining how you can write a callback function ?
let user = {
    firstName: 'Sam',
    sayHi() {
        console.log(this.firstName)
    }
}
user.sayHi() //sam

// Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Explain callback hell.
// Numbers
// 1,2,3,4,5,6,7
function printAlphabets(letter, delay) {
    setTimeout(() => {
        console.log(letter)
    }, delay)
}

printAlphabets('1', 1000)
printAlphabets('2', 2000)
printAlphabets('3', 3000)
printAlphabets('4', 4000)
printAlphabets('5', 5000)
printAlphabets('6', 6000)
printAlphabets('7', 7000)

// Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Numbers
// 1,2,3,4,5,6,7

function cp(alphabet) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(alphabet)
        }, 1000)
    })
}
cp("1").then((res) => {
    console.log(res)
    cp("2").then((res) => {
        console.log(res)
        cp("3").then((res) => {
            console.log(res)
            cp("4").then((res) => {
                console.log(res)
                cp("5").then((res) => {
                    console.log(res)
                    cp("6").then((res) => {
                        console.log(res)
                        cp("7").then((res) => {
                            console.log(res)
                        })
                    })
                })
            })
        })
    })
})

// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
function printNum(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve("Condition satisfied, number even")
        }
        else {
            reject("number not even, reject")
        }
    })
}
printNum(24).then((result) => { console.log(result) }).catch((result) => { console.log(result) })
printNum(27).then((result) => { console.log(result) }).catch((result) => { console.log(result) })

// Create examples to explain async await function
function pri(num) {
    return new Promise((restore,reject)=>{
        setTimeout(()=>{console.log(num)},1000)
    })
}
async function print() {
    await pri('1')
    console.log('before 2')
    await pri('2')
    console.log('before 3')
    await pri('3')
}
print()
