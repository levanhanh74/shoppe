function showlogin(){
    let email = document.getElementById('email').value;
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
   
    if(email === 'levanhanh1718@gmail.com' && password1,password2 === 'vanhanh'  ){
        alert('ban dang ki thanh cong. Vui long dang nhap tai khoan')
        
    }
    else if (password1 !== password2){
        alert('ban nhap mat khau mat khau lai khong dung')
    }
    else{
        alert('ban nhap sai ten email hay mk. Xin vui')
    }
   }