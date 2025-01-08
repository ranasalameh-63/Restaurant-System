let button = document.getElementById('button').addEventListener('click',function render(e){
    e.preventDefault();
    let userName = document.getElementById('userName').value;
    let userPassword = document.getElementById('password').value;
    let userDate = document.getElementById('Bdate').value;
    let userPhone = document.getElementById('phone').value;
    let userGender = document.getElementById('userGender').value;
    let userEmail = document.getElementById('mail').value;
    let image = `./profile.jpg`;
    let order =[];
    if (document.getElementById('shawerma').checked) order.push('shawerma');
    if (document.getElementById('Zinger').checked) order.push('Zinger');
    if (document.getElementById('Burger').checked) order.push('Burger');
    
///////////////////////
    let errorMessage = [];

    if (/\s/.test(userName)) {
        alert('Username must not contain spaces.');
    }

    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9,}$/;
    if (!passwordRegex.test(userPassword)) {
        alert('Password must be 9+ characters, include 1 uppercase, 1 number, and 1 special character.');
    }

    let phoneRegex = /^07\d{8}$/;
    if (!phoneRegex.test(userPhone)) {
        alert('Phone number must be 10 digits and start with 07.');
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        alert('Invalid email format.');
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(userDate)) {
        alert( 'Birthday must be in the format YYYY-MM-DD.\n');
    }
    //     if (errorMessage) {
    //         alert("error in Registration");  
    //     }
    //      else {
    //     alert('Registration successful!');
    // }

    let choice = document.getElementById('Sandwish').checked ? 'Sandwish' :
    document.getElementById('Combo').checked ? 'Combo' : 'None';

    
    let x = new Customer(userName,userPassword,userDate,userGender,order,choice,userPhone ,image);

   localStorage.setItem('orders',JSON.stringify(x)) ;
   let result =JSON.parse( localStorage.getItem('orders',x));

    let box = document.getElementById('customersContainer');
    let card = document.getElementById('card');
    
    card.innerHTML = `<p><img src="${result.imgUrl}" alt="Profile Picture" style="width: 100px; border-radius: 50%; margin-bottom: 15px;"></p>
    <p><strong>Name:</strong> ${result.Name}</p>
    <p><strong>Password:</strong> ${result.password}</p>
    <p><strong>Birth Date:</strong> ${result.birthDate}</p>
    <p><strong>Phone:</strong> ${result.phone}</p>
    <p><strong>Gender:</strong> ${result.gender}</p>
    <p><strong>Order:</strong> ${result.orderType}</p>
    <p><strong>Order Type:</strong> ${result.orderOption}</p>`; 
 
});
// Constructor for Customer object
function Customer(fullName, password, birthDate, gender, orderType, orderOption, phone,imgUrl) {
    this.Name = fullName;
    this.password = password;
    this.birthDate = birthDate;
    this.gender = gender;
    this.orderType = orderType;
    this.orderOption = orderOption;
    this.phone = phone;
    this.imgUrl = imgUrl;

}

