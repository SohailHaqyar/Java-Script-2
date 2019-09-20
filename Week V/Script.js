// Question Number 1 
// let Numbers = [1,2,3,4];
 
// const Double = function(element){
//     const doubled = element*2;
//     return doubled;
// }
// const result = Numbers.map(Double);
// console.log(result);
//Done//

//Question Number 2 //

let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let tasks = monday.concat(tuesday);

function convert(num){
    h = Math.floor(num/60);
    m = num%60;
    return h+m
}
tasksinhour = task.map(function(index,value,originaltask){
    convert(value.duration)
})
const filteredtasks = tasksinhour.filter(function(index,value,previoustasks){
    
})
