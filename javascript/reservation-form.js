// สร้างฟอร์มการจองเมื่อคลิกที่ช่องจอดรถ
document.querySelectorAll(".parking-space").forEach((space) => {
  space.addEventListener("click", function () {
    const reservationForm = document.getElementById("reservation-form");
    reservationForm.classList.remove("hidden");
    // เมื่อคลิกที่ช่องจอดรถ นำข้อมูลจำนวนช่องจอดไปแสดงในฟอร์ม
    const spaceInfo = this.textContent.trim(); // รับข้อมูลของช่องจอดรถ
    const spaceNumber = spaceInfo.split(" ")[1]; // แยกเอาเลขที่ช่องจอดรถ
    document.getElementById("spaceNumber").value = spaceNumber; // แสดงเลขที่ช่องจอดรถในฟอร์ม
  });
});

// เพิ่มฟังก์ชันสำหรับการจอง
document
  .getElementById("reservation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const licensePlate = document.getElementById("licensePlate").value;

    // นำข้อมูลการจองไปแสดงในช่องจอดรถ
    const spaceNumber = document.getElementById("spaceNumber").value;
    const reservedSpace = document.querySelector(
      `.parking-space:nth-child(${spaceNumber})`
    );
    reservedSpace.classList.remove("available");
    reservedSpace.classList.add("reserved");
    reservedSpace.textContent = `Reserved: ${licensePlate}`;
    document.getElementById(
      "reservation-status"
    ).innerHTML = `<p>Parking space reserved for ${licensePlate}</p>`;

    // ซ่อนฟอร์มหลังจากจองเสร็จ
    this.classList.add("hidden");
    this.reset(); // ล้างข้อมูลในฟอร์ม
  });

// สร้างช่องจอดรถเมื่อหน้าเว็บโหลดเสร็จ
window.addEventListener("load", function () {
  createParkingSpaces(20); // สร้างช่องจอดรถทั้งหมด 20 ช่อง
});
