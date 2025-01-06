let orders = JSON.parse(localStorage.getItem('orders')) || [];
let button = document.getElementById('button').addEventListener('click',function render(){

    let userName = document.getElementById('userName').value;
    let userPassword = document.getElementById('password').value;
    let userDate = document.getElementById('Bdate').value;
    let userPhone = document.getElementById('phone').value;

    let order =[];
    if (document.getElementById('shawerma').checked) order.push('shawerma');
    if (document.getElementById('Zinger').checked) order.push('Zinger');
    if (document.getElementById('Burger').checked) order.push('Burger');
    
    let choice = document.getElementById('Sandwish').checked ? 'Sandwish' :
    document.getElementById('Combo').checked ? 'Combo' : 'None';

    let customerOrder = {
        name: userName,
        password: userPassword,
        birthDate: userDate,
        phone: userPhone,
        items: order,
        type: choice,
        userDate: new Date().toLocaleString()
    };

    orders.push(customerOrder);

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    console.log('Order Saved:', customerOrder);




});
