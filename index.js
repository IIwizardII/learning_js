// function outer() {
//     let counter = 0;

//     function inner() {
//         counter += 1;
//         console.log(counter);
//     }
    
//     return {inner}
// }

// const obj = outer()
// obj.inner();
// obj.inner();
// obj.inner();
// obj.inner();
// obj.inner();
// obj.inner();
// console.log(obj.inner)



// function run_clock() {
//     const clock = document.getElementById("clock");

//     const dateObj = new Date();

//     let hours = dateObj.getHours();
//     const meridiem = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12
//     hours = hours.toString().padStart(2, 0);
//     const minutes = dateObj.getMinutes().toString().padStart(2, 0);
//     const seconds = dateObj.getSeconds().toString().padStart(2, 0);
//     const deciseconds = Math.round(dateObj.getMilliseconds() / 100).toString().padStart(2, 0);
//     let timeString = `${hours}:${minutes}:${seconds}:${deciseconds} ${meridiem}`;
//     clock.textContent = timeString;
// }

// setInterval(run_clock, 1);



// function task1(callback) {
//     setTimeout(() => {
        
//         callback();
//         console.log("task 1");
//     }, 200);
// }


// function task2(callback) {
//     setTimeout(() => {
        
//         callback();
//         console.log("task 2");
//     }, 100);
// }

// function task3() {
//     setTimeout(() => {
//         console.log("task 3");
//     }, 100);
// }





// task1(() => {
//     task2(() => {
//         task3();
//     });
// });




function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const temp = true;

            if (temp) {
                resolve("worked!");
            } else {
                reject("did not work!");
            }
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const temp = false;

            if (temp) {
                resolve("worked again!");
            } else {
                reject("did not work again!");
            }
        }, 1000);
    });
}


// task1().then(value => {console.log(value);return task2()})
//         .then(value => {console.log(value);})
//         .catch(error => console.error(error));

async function runTask() {
    try {
        const temp = await task1();
        console.log(temp);

        const temp2 = await task2();
        console.log(temp2);
    } catch(error) {
        console.error(error);
    }
}

runTask();