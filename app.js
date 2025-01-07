let button = document.getElementById('button').addEventListener('click',function render(e){
    e.preventDefault();
    let userName = document.getElementById('userName').value;
    let userPassword = document.getElementById('password').value;
    let userDate = document.getElementById('Bdate').value;
    let userPhone = document.getElementById('phone').value;
    let userGender = document.getElementById('userGender').value;
    let order =[];
    if (document.getElementById('shawerma').checked) order.push('shawerma');
    if (document.getElementById('Zinger').checked) order.push('Zinger');
    if (document.getElementById('Burger').checked) order.push('Burger');
    
    if (/\s/.test(userName)) {
        alert('Username must not contain spaces.');
    }

    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be 9+ characters, include 1 uppercase, 1 number, and 1 special character.');
    }

    let phoneRegex = /^07\d{8}$/;
    if (!phoneRegex.test(phone)) {
        alert('Phone number must be 10 digits and start with 07.');
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));  
    } else {
        alert('Registration successful!');
    }

    let choice = document.getElementById('Sandwish').checked ? 'Sandwish' :
    document.getElementById('Combo').checked ? 'Combo' : 'None';

    
    let x = new Customer(userName,userPassword,userDate,userPhone,userGender,order,choice);

   localStorage.setItem('orders',JSON.stringify(x)) ;
   let result =JSON.parse( localStorage.getItem('orders',x));

    let box = document.getElementById('customersContainer');
    let card = document.getElementById('card');
    
    card.innerHTML = ` <p><strong>Name:</strong> ${result.Name}</p>
    <p><strong>Password:</strong> ${result.userPassword}</p>
    <p><strong>Birth Date:</strong> ${result.userDate}</p>
    <p><strong>Phone:</strong> ${result.userPhone}</p>
    <p><strong>Gender:</strong> ${result.userGender}</p>
    <p><strong>Order:</strong> ${result.order}</p>
    <p><strong>Order Type:</strong> ${result.choice}</p>` 
  ;
  console.log(result);
  
});
// Constructor for Customer object
function Customer(fullName, password, birthDate, gender, orderType, orderOption, imgUrl, phone) {
    this.Name = fullName;
    this.password = password;
    this.birthDate = birthDate;
    this.gender = gender;
    this.orderType = orderType;
    this.orderOption = orderOption;
    this.imgUrl = imgUrl;
    this.phone = phone;
}






