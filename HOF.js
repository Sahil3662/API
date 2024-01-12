
const employees =[{name :"Slim Shady", age :21, email :"slimshady@gmail.com", salary :2100},
{name :"Sahil", age :21, email :"dalvisahil@gmail.com", salary :1100},
{name :"Pranay", age :21, email :"Pranay@gmail.com", salary :1000},
{name :"Jitesh", age :30, email :"Jitesh@gmail.com", salary :900},
{name :"Satvik", age :22, email :"Satvik.com", salary :500},  
];

console.log(employees);

// const updateEMP = employees.map((emp)=>{
//     emp.salary = emp.salary + (emp .salary*0.2);
//     return emp;
// });
// console.log(updateEMP);

const updateEMP=employees.filter((emp)=>emp.age < 22)
    .reduce((total,emp)=>{
        emp.salary = emp.salary + (emp .salary*0.5);
        total=emp.salary + total;
        return total;
    },0);

console.log(updateEMP);