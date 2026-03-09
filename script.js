// Fungsi untuk memunculkan elemen secara halus saat di-scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Jarak trigger dari bawah layar

        // Menambahkan kelas 'active' jika elemen sudah masuk viewport
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Menjalankan event listener setiap kali layar digulir
window.addEventListener("scroll", reveal);

// Memastikan elemen yang sudah terlihat saat web pertama kali dimuat juga muncul
window.onload = function() {
    reveal(); 
};