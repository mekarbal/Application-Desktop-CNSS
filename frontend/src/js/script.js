const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container"); 
const Login = document.getElementById("Login");
const Register = document.getElementById("Register");


sign_up_btn.addEventListener("click", () => {       container.classList.add("sign-up-mode");
}); 

sign_in_btn.addEventListener("click", () => {       container.classList.remove("sign-up-mode");
});


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




//register Employee

Register.addEventListener('click', () => {

    var nameR = document.getElementById('nameR').value;
    var emailR = document.getElementById('emailR').value;
    var phoneR = document.getElementById('phoneR').value;
    var mat = document.getElementById('mat').value;
    var passwordR = document.getElementById('password').value;
        
        axios.post('http://localhost:5000/employee/',{

            name : nameR,
            email : emailR,
            phone : phoneR,
            mat : mat,
            password : passwordR
        })
        .then(function (response){   
            
            location.replace("index.html");
           

            const myNotification = new Notification('Notification', {
                body: 'You are Added You need just to login'
              })
        })

        .catch(function (err) {
            console.log(err);
        });
})


