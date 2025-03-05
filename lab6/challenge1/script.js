document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll("#main p"); // เลือกเฉพาะ <p> ที่อยู่ใน <div id="main">
    
    paragraphs.forEach(function (p) {
        p.style.fontSize = "24px"; // กำหนดขนาดตัวอักษรเป็น 24px
        p.style.color = "red"; // กำหนดสีตัวอักษรเป็นสีแดง
    });
});
