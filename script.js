// 1. Typing Effect Logic untuk Bio/Slogan
const textToType = "Saya adalah mahasiswa Teknik Informatika yang bersiap untuk menjadi developer game.";
const typingSpeed = 50; // Kecepatan mengetik dalam ms
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        document.getElementById("typing-text").innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// 2. Scroll Reveal Animation Logic
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Kapan elemen mulai muncul

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Jalankan fungsi saat halaman dimuat dan di-scroll
window.addEventListener("scroll", reveal);
window.onload = function() {
    typeWriter(); // Mulai efek mengetik
    reveal();     // Cek posisi scroll saat pertama kali render
};