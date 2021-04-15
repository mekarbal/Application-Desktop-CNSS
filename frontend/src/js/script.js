const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container"); 
const Login = document.getElementById("Login");
const Register = document.getElementById("Register");


//login emplyee
Login.addEventListener('click', () => {

    const checkbox = document.getElementById("checkbox").checked;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
      

    //login Employee

    if(!checkbox){

        axios.post('http://localhost:5000/employee/login',{
            email : email,
            password : password
        })
        .then(function (response){   
            
            window.localStorage.setItem('x-auth-token', response.data);
            location.replace("DashbardEm.html")
        })

        .catch(function (err) {
            console.log(err);
        });
    }
    
    //login Admin

        else {
           
            axios.post('http://localhost:5000/agent/login',{
                email : email,
                password : password
            })
            .then(function (response){   
                
                window.localStorage.setItem('x-auth-token', response.data);
                
                location.replace("DashboardAgent.html")
            })
    
            .catch(function (err) {
                console.log(err);
                
            });
        }
})




