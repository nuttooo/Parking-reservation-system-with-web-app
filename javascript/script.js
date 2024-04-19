function createParkingSpaces(numSpaces) {
  const parkingLot = document.querySelector(".parking-lot");
  for (let i = 1; i <= numSpaces; i++) {
    const space = document.createElement("div");
    space.classList.add("parking-space", "available");
    space.textContent = `Space ${i}`;
    space.onclick = openReservationPage; // เพิ่ม onclick event
    parkingLot.appendChild(space);
  }
}

function openReservationPage() {
  // สร้าง URL สำหรับหน้าใหม่ที่ให้ผู้ใช้กรอกข้อมูล
  const reservationPageURL = "reservation.html";
  // เปิดหน้าใหม่ในหน้าต่างเดียวกับเว็บไซต์
  // window.open(reservationPageURL, "_blank");
  window.location.href = reservationPageURL;
}


// ฟังก์ชันเมื่อคลิกที่ช่องจอดรถ
function reserveParkingSpace() {
  const licensePlate = document.getElementById("licensePlate").value;
  if (!licensePlate) {
    alert("Please enter license plate number!");
    return;
  }

  if (this.classList.contains("available")) {
    this.classList.remove("available");
    this.classList.add("reserved", "selected");
    this.textContent = `Reserved: ${licensePlate}`;
    document.getElementById(
      "reservation-status"
    ).innerHTML = `<p>Parking space reserved for ${licensePlate}</p>`;
  } else {
    alert("This space is already reserved.");
  }
}

// สร้างช่องจอดรถเมื่อหน้าเว็บโหลดเสร็จ
window.addEventListener("load", function () {
  createParkingSpaces(20); // สร้างช่องจอดรถทั้งหมด 20 ช่อง
});

// สร้างตัวแปรเก็บอ้างอิงไปยัง popup
const popup = document.getElementById("popup");

// ฟังก์ชันสำหรับแสดง popup
function showPopup() {
  popup.style.display = "block";
}

// ฟังก์ชันสำหรับซ่อน popup
function hidePopup() {
  popup.style.display = "none";
}

// เมื่อ form ถูก submit
document.getElementById("reservation-form").addEventListener("submit", function(event) {
  event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

  // แสดง popup เมื่อกดปุ่ม "Reserve Parking"
  showPopup();
});

// เมื่อกดปุ่ม "OK" ใน popup
document.getElementById("okButton").addEventListener("click", function() {
  hidePopup(); // ซ่อน popup
});
