document.querySelectorAll('.show-btn').forEach(button => {
    button.addEventListener('click', function() {
        // ดึงข้อมูลจาก data-exercise attribute
        const exerciseId = this.getAttribute('data-exercise');
        
        // กำหนด URL ที่จะเชื่อมโยงไป
        const url = `challengefile/challenge${exerciseId}.html`;  // รูปแบบ URL สำหรับไฟล์ทั้งหมด

        // เปลี่ยนเส้นทางไปยังไฟล์
        window.location.href = `../challengefile/challenge${exerciseId}.html`;  // ใช้ exerciseId ที่ดึงมาแทน
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.getElementById("profile-pic");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    // ซ่อน Modal ตั้งแต่แรก (ป้องกันการเปิดอัตโนมัติ)
    modal.style.display = "none";

    profilePic.addEventListener("click", function () {
        modal.style.display = "flex";  // แสดง Modal เมื่อคลิก
        modalImg.src = profilePic.src;
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";  // ปิด Modal เมื่อกดปุ่ม X
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";  // ปิด Modal เมื่อคลิกที่พื้นหลัง
        }
    });
});
