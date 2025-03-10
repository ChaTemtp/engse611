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

    profilePic.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = profilePic.src; // Show the clicked image
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

