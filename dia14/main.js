function salaryAdjustment() 
{ // ask basic infos
    let name = prompt('Name:')
    let salary = parseFloat(prompt('Salary:'))

    // calculate and show increase and new salary
    calculateIncrease(salary, name)
}

function calculateIncrease(salary, name) 
{
    let percentualIncrease, increase
    if  (salary <= 1500) { 
        percentualIncrease = 0.2;
     } else if(salary <= 2000) {
        percentualIncrease = 0.15;
     } else if(salary <= 3000) {
        percentualIncrease = 0.1;
     } else {
        percentualIncrease = 0.05;
     }

     increase = salary * percentualIncrease

     newSalary = salary + increase

     console.log(`The employee ${name}, with a salary of R$ ${salary}. Receives the increase of R$ ${increase}, his new salary is R$ ${newSalary}.`)
     
    if (wannaContinue()) {
        salaryAdjustment()
    }
}

function wannaContinue() {
    return confirm('deseja continuar?')
}

salaryAdjustment()