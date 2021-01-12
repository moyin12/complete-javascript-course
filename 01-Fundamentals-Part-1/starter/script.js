// First coding challenge 

// var markHeight = 1.6
// var johnHeight = 2
// var markMass = 80
// var johnMass = 120

// var markBMI = markMass / (markHeight * markHeight)
// var johnBMI = johnMass / (johnHeight * johnHeight)

// console.log(markBMI)
// console.log(johnBMI)

// var compareBMI = markBMI > johnBMI

// console.log(`Is Mark's BMI higher than John's ? ${compareBMI}`)


/* 
Second coding challenge 
*/

// let johnsTeamAvg = (116 + 94 + 123) / 3
// let mikesTeamAvg = (180 + 97 + 123) / 3
// let marysTeamAvg = (9007 + 134 + 105) /3


// johnsTeamAvg > mikesTeamAvg ? console.log(`John's team has the highest with an average score of ${johnsTeamAvg}`) : console.log(`Mike's team has the highest with an average score of ${mikesTeamAvg}`)

// if (johnsTeamAvg > mikesTeamAvg && johnsTeamAvg > marysTeamAvg){
//     console.log(`John's team has the highest with an average score of ${johnsTeamAvg}`) 
// } 
// else if (mikesTeamAvg > johnsTeamAvg && mikesTeamAvg > marysTeamAvg ){
//     console.log(`Mike's team has the highest with an average score of ${mikesTeamAvg}`)
// }
// else if (marysTeamAvg > johnsTeamAvg && marysTeamAvg > mikesTeamAvg ){
//     console.log(`Mary's team has the highest with an average score of ${marysTeamAvg}`)
// }
// else {
//     console.log(`All teams are equal with the same average value`)
// }


/*
    Third coding challenge
*/

// function tipCalculator(bill){
//     var percentage;
//    if (bill < 50){
//         percentage = .2
//    } 
//    else if (bill >= 50 && bill <= 200){
//         percentage = .15
//    }
//    else{
//        percentage = .1
//    }
//    return percentage * bill
// }

// var bills = [124, 48, 268]

// var tips = []
// var totalBill = []
// for(let i in bills){
//     tips.push(tipCalculator(bills[i]))
//     totalBill.push(tips[i] + bills[i])
// }

// console.log(tips , totalBill)

/*
    Fourth coding challenge
*/

// var mark = {
//     firstName: 'Mark',
//     lastName: 'Anthony',
//     mass: 93,
//     height: 1.4,
//     calcBMI: function(){
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI
//     }
// }

// var john = {
//     firstName: 'John',
//     lastName: 'Kennedy',
//     mass: 100,
//     height: 1.2,
//     calcBMI: function(){
//         this.BMI =  this.mass / (this.height * this.height)
//         return this.BMI
//     }
// }

// if(john.calcBMI() > mark.calcBMI()){
//     console.log(`${john.firstName} ${john.lastName} has a higher BMI of ${john.BMI}`)
// }
// else if(mark.BMI > john.BMI){
//     console.log(`${mark.firstName} ${mark.lastName} has a higher BMI of ${mark.BMI}`)
// } 
// else {
//     console.log(`They have an equal BMI of ${mark.BMI}`)
// }

/*
    Fifth coding challenge(MY Attempt)
*/

// var john = {
//     fullName: 'John Page',
//     bills: [124, 48, 268, 180, 42],
//     calcTip: function(){
//         this.tips = []  
//         this.newBills = []
//         for(let i of this.bills){
//             let percentage;
//             if( i < 50){
//                 percentage = 0.2
//             }
//             else if(i >= 50 && i <= 200){
//                 percentage = 0.15
//             }
//             else{
//                 percentage = 0.1
//             }
//             console.log()
//             this.tips.push(percentage * i)
//             this.newBills.push(i + i * percentage)
//         }
//     }

// }

// var mark = {
//     fullName: 'Mark Angels',
//     bills: [77, 375, 110, 45],
//     calcTip: function(){
//         this.tips = []  
//         this.newBills = []
//         // let newTipSingle = 0
//         for(let i of this.bills){
//             let percentage;
//             if( i < 100){
//                 percentage = 0.2
//             }
//             else if(i >= 100 && i <= 300){
//                 percentage = 0.1
//             }
//             else{
//                 percentage = 0.25
//             }
//             console.log()
//             this.tips.push(percentage * i)
//             this.newBills.push(i + i * percentage)
//         }
//     }

// }

// console.log(john)
// john.calcTip();
// mark.calcTip();

// function calcAverage(john,mark){
//     let sumJohn = 0
//     let sumMark = 0
//     for(let i in john){
//         sumJohn += john[i] 
//     }

//     for(let i in mark){
//         sumMark += mark[i]
//     }
//     let johnAvgTip = sumJohn/john.length
//     let markAvgTip = sumMark/mark.length

//     if(johnAvgTip > markAvgTip){
//         console.log(`John has the highest with average tip of ${johnAvgTip}`)
//     }
//     else if(markAvgTip > johnAvgTip){
//         console.log(`Mark has the highest with average tip of ${markAvgTip}`)
//     }
//     else{
//         console.log(`They have the same average tip of ${markAvgTip}`)
//     }
// }
// calcAverage(john.tips, mark.tips);

/*
    challennge 5 solution from tutorial
*/
var john = {
    fullName: 'John Page',
    bills: [124, 48, 268, 180, 42],
    calcTip: function(){
        this.tips = []  
        this.newBills = []
        for(let i of this.bills){
            let percentage;
            if( i < 50){
                percentage = 0.2
            }
            else if(i >= 50 && i <= 200){
                percentage = 0.15
            }
            else{
                percentage = 0.1
            }
            console.log()
            this.tips.push(percentage * i)
            this.newBills.push(i + i * percentage)
        }
    }

}

var mark = {
    fullName: 'Mark Angels',
    bills: [77, 375, 110, 45],
    calcTip: function(){
        this.tips = []  
        this.newBills = []
        // let newTipSingle = 0
        for(let i of this.bills){
            let percentage;
            if( i < 100){
                percentage = 0.2
            }
            else if(i >= 100 && i <= 300){
                percentage = 0.1
            }
            else{
                percentage = 0.25
            }
            console.log()
            this.tips.push(percentage * i)
            this.newBills.push(i + i * percentage)
        }
    }

}

console.log(john)
john.calcTip();
mark.calcTip();

function calcAverage(tips){
    let sum = 0
    for(let i in tips){
        sum += tips[i] 
    }
    return sum/tips.length
}

john.avg = calcAverage(john.tips);
mark.avg = calcAverage(mark.tips);

if(john.avg > mark.avg){
    console.log(`${john.fullName}'s family has the highest with average tip of ${john.avg}`)
}
else if(mark.avg > john.avg){
    console.log(`${mark.fullName}'s family has the highest with average tip of ${mark.avg}`)
}
else{
    console.log(`Both families have equal average tips of ${mark.avg}`)
}