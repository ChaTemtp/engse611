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
