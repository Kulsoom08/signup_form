
document.querySelector(".btn").addEventListener("click",store);

function store(){
    document.querySelector(".btn").addEventListener("click", function(event){
        event.preventDefault()
      });

    document.querySelector(".profilePage").style.display="block";
    document.querySelector(".SignupPage").style.display="none";

    const fname=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const cpassword=document.querySelector("#cpassword").value;

   
    // if(fname=="" || email=="" || password=="" || cpassword=="")
    // {
    //     const mssg=document.querySelector(".error");
    //     mssg.style.display="block";
    //     mssg.style.color="red";
    // }
    // else{
    //     const mssg=document.querySelector(".done");
    //     mssg.style.display="block";
    //     mssg.style.color="green";
    // }

    const user = {
        name: fname,
        email: email,
        password:password,
        accesstoken:generateAccessToken(),
    }

    

    localStorage.setItem("user",JSON.stringify(user));
   
    const details=document.querySelector(".showdetails");

    const guser=JSON.parse(localStorage.getItem("user"));

    if(user.accesstoken=="")
     {
        document.querySelector(".profilePage").style.display="none";
        document.querySelector(".SignupPage").style.display="block";
     }
     else{
        document.querySelector(".profilePage").style.display="block";
        document.querySelector(".SignupPage").style.display="none";
     }

    details.innerHTML+=`
    <div class="fetcont">
    <h2 class="fet">Profile</h2>
    <h2 class="fet">Full Name: ${guser.name}</h2>
    <h2 class="fet">Email: ${guser.email}</h2>
    <h2 class="fet">Password: ${guser.password}</h2>
    </div>
    `;
    
     

    document.querySelector(".btnl").addEventListener("click",refresh); 
    function refresh(){
        localStorage.clear("user");
    }
}
function generateAccessToken() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
  }