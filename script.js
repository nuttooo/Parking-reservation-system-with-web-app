document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // ตรวจสอบว่า username และ password ถูกต้องหรือไม่
    // ในที่นี้คุณสามารถเพิ่มเงื่อนไขตรวจสอบ username และ password ตามที่ต้องการ
  
    if (username === 'admin' && password === 'password') {
      alert('เข้าสู่ระบบสำเร็จ!');
      window.location.href = 'car.html';
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!');
  }
  });
  