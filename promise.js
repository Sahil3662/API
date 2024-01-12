// function uploadProject()
// {
//     return new Promise(function(resolve,reject)
//     {
//         var state=true;
//         if(state)
//         {
//             resolve();
//         }
//         else
//         {
//             reject();
//         }
//     })
// }

// uploadProject().then(function()
// {
//     console.log("Good job!");

// }).catch(function()
// {
//     console.log("Try Again!");
// })
// console.log(uploadProject());
var img = document.getElementById("image");
var nam = document.getElementById("name");
var mail = document.getElementById("email");
var loc = document.getElementById("location");
var pass = document.getElementById("password");

let userDob=new Date (userInfo.dob.date);
userDob=${userDob.getDate()}/${userDob.getMonth()+1}/${userDob.getFullYear()};
var userDob = document.getElementById("birthday");


async function getData() {
    try {
        var data = await fetch("https://randomuser.me/api/");
        if (data.ok) {
            var res = await data.json();
            console.log(res);

            img.src = res.results[0].picture.large;
            nam.innerText = res.results[0].name.first;
            mail.innerText = res.results[0].email;
            loc.innerText = res.results[0].location.country;
            pass.innerText = res.results[0].login.password;
            userDob.innerText = res.results[0].dob.name;

        }
        else {
            console.log("Error in API", data.status);
        }

        // console.log(data);
    }
    catch (error) {
        console.log("Error fetching data", error);
    }
}
getData();

// async function getData() {
//     try {
//         var data = await fetch("https://randomuser.me/api/");
//         if (data.ok) {
//             var res = await data.json();
//             console.log(res);
//             // var newRes = res.results[0];
//             // const { title, first, last } = newRes.name;
//             // console.log(title, first, last);
//         } else {
//             console.log("Error In API:", data.status);
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// getData();