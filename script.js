const messages = [
    "Setiap detik yang berlalu adalah alasan baru untuk semangat, apalagi kalau kamu yang jadi alasanku. 😊",
    "Kamu itu matahari buatku. Tanpamu, hariku gelap. Semangat terus ya, pelangi hidupku!",
    "Ingat ya, kamu itu spesial. Tak peduli hari sedang cerah atau hujan, kamu tetap berkilau! ✨",
    "Setiap langkah yang kamu ambil hari ini adalah langkah yang mendekatkan kita pada masa depan bersama. ❤️",
    "Aku yakin, kamu bisa menaklukkan apa pun yang kamu mau. Karena kamu hebat, jangan pernah lupa itu!",
    "Semangat, ya! Aku di sini selalu dukung kamu, tak peduli sejauh apa mimpi yang ingin kamu kejar. 😊",
    "Tersenyumlah, dunia butuh senyuman manis kamu, seperti aku butuh kamu. ☀️",
    "Hari ini mungkin berat, tapi yakinlah aku akan ada di sini untuk menemanimu setiap langkah. 🥰"
];

function showMessage() {
    const messageElement = document.getElementById("message");
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;

    // Putar efek suara tombol
    const sound = document.getElementById("button-sound");
    sound.currentTime = 0;
    sound.play();
}

// Fungsi untuk mengontrol musik dan menampilkan/menghilangkan tombol musik
// Fungsi untuk mengontrol musik dan menampilkan/menghilangkan tombol musik
function toggleMusic() {
    const music = document.getElementById("background-music");
    const musicButton = document.getElementById("music-toggle");

    if (music.paused) {
        music.play();
        musicButton.style.display = "none"; // Sembunyikan tombol saat musik diputar
    } else {
        music.pause();
        musicButton.style.display = "inline"; // Tampilkan kembali tombol saat musik berhenti
    }
}

// Putar musik saat halaman dimuat
window.addEventListener("load", () => {
    const music = document.getElementById("background-music");
    music.play();
    document.getElementById("music-toggle").style.display = "none"; // Sembunyikan tombol saat musik mulai
});

    

