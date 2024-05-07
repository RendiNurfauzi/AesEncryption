// Fungsi untuk enkripsi menggunakan AES
function encryptText() {
    try {
        var inputText = document.querySelector('.kolomInput').value;
        var secretKey = document.querySelector('.kolomKey').value;
        var encrypted = CryptoJS.AES.encrypt(inputText, secretKey);
        document.querySelector('.kolomOutput').value = encrypted.toString();
    } catch (error) {
        alert('Error saat enkripsi: ' + error.message);
    }
}

// Fungsi untuk deskripsi menggunakan AES
function decryptText() {
    try {
        var encryptedText = document.querySelector('.kolomInput').value;
        var secretKey = document.querySelector('.kolomKey').value;
        var decrypted = CryptoJS.AES.decrypt(encryptedText, secretKey);
        var decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

        if (!decryptedText) {
            document.querySelector('.kolomOutput').value = "Teks tidak dapat didekripsi dengan kunci yang diberikan. Teks asli: ";
        } else {
            document.querySelector('.kolomOutput').value = decryptedText;
        }
    } catch (error) {
        document.querySelector('.kolomOutput').value = "Error saat deskripsi: " + error.message;
    }
}


// Event listener untuk tombol enkripsi dan deskripsi
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btnEnkripsi').addEventListener('click', encryptText);
    document.querySelector('.btnDeskripsi').addEventListener('click', decryptText);
});

