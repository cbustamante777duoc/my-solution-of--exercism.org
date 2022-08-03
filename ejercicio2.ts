// A client contacts the freelancer to enquire about his rates. The freelancer explains that he works 8 hours a day. However, the freelancer knows only his hourly rates for the project. Help him estimate a day rate given an hourly rate.


const dayRate = (day: number) =>{
    return 8*day;
}

console.log(dayRate(89)); //712

// Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed budget and the freelancer's hourly rate, help him calculate the number of days he would work until the budget is exhausted. The result must be rounded down to the nearest whole number.

const daysInBudget = (budget: number,days: number ) =>{

    return Math.floor(budget/ dayRate(days))
}
console.log(daysInBudget(20000, 89)); //28

// Often, the freelancer's clients hire him for projects spanning over multiple months. In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. Every month has 22 billable days. Help him estimate his cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.


const priceWithMonthlyDiscount =(hours:number, day: number,discount:number) =>{

    //mes
    const mounth = Math.floor(day/22);

    const remain = day % 22

    const fullMountPrice = mounth* 22 * dayRate(hours);
    
    return Math.ceil(fullMountPrice - discount * fullMountPrice+remain*dayRate(hours));

}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));//97972