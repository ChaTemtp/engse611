document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a"); // เลือกทุกลิงก์ใน navigation

    links.forEach(link => {
        // ตรวจสอบว่าไม่ใช่ลิงก์ที่ไปยัง Google
        if (link.href !== "http://google.com") {
            // เพิ่มตัวจัดการการคลิกให้กับลิงก์
            link.addEventListener("click", function(event) {
                alert("clicked!"); // แสดงการแจ้งเตือน "clicked!"
            });
        }
    });
});
