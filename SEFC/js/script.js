const myForm = document.getElementById('myForm')
const name = document.forms["messageForm"]["name-message"];
const tanggal = document.forms["messageForm"]["tanggal-message"];
const jk = document.forms["messageForm"]["jk-message"];
const message = document.forms["messageForm"]["message-message"];

function setName() {
    let name = document.getElementById("name")
    let person = prompt("Siapa nama anda?");
    name.innerHTML = person;
}

function hasil() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();


    document.getElementById("hasil-date").innerHTML = `${day} - ${month + 1} -  ${year}`;

    let hasilNama = document.getElementById("hasil-name");
    let hasilTanggal = document.getElementById("hasil-tanggal");
    let hasilJK = document.getElementById("hasil-jk");
    let hasilMessage = document.getElementById("hasil-message");

    hasilNama.innerHTML = name.value;
    hasilTanggal.innerHTML = tanggal.value;
    hasilJK.innerHTML = jk.value;
    hasilMessage.innerHTML = message.value;
}

function validate() {
    let isError = false;

    if (name.value == "") {
        name.style.border = "1px solid red";
        document.getElementById("error-name-message").innerHTML = "Nama Harus Diisi";
        isError = true;
    } else {
        name.style.border = "1px solid green";
        document.getElementById("error-name-message").innerHTML = "";
    }

    if (tanggal.value == "" && !isValidDate(tanggal.value)) {
        tanggal.style.border = "1px solid red";
        document.getElementById("error-tanggal-message").innerHTML = "Tanggal Lahir Harus Diisi";
        isError = true;
    } else {
        tanggal.style.border = "1px solid green";
        document.getElementById("error-tanggal-message").innerHTML = "";
    }

    if (jk.value == "") {
        jk.style.border = "1px solid red";
        document.getElementById("error-jk-message").innerHTML = "Jenis Kelamin Harus Diisi";
        isError = true;
    } else {
        jk.style.border = "1px solid green";
        document.getElementById("error-jk-message").innerHTML = "";
    }

    if (message.value == "") {
        message.style.border = "1px solid red";
        document.getElementById("error-message-message").innerHTML = "Pesan Harus Diisi";
        isError = true;
    } else {
        message.style.border = "1px solid green";
        document.getElementById("error-message-message").innerHTML = "";
    }

    return isError == false ? true : false;
}

function isValidDate(dateString) {
    const regex = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    if (!regex.test(dateString)) return false;

    const [day, month, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validate()) {
        hasil()
    }
})


let indexSlide = 1;
showBanner(indexSlide); // Tampilkan slide pertama

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(n) {
    const banners = document.getElementsByClassName("banner-image");

    if (n > banners.length) {
        indexSlide = 1; // Jika mencapai akhir, kembali ke slide pertama
    }

    let index = 0;
    while (index < banners.length) {
        banners[index].style.display = "none"; // Tampilkan semua slide
        index++;
        console.log(index);
    }

    // Tampilkan slide yang dituju
    banners[indexSlide - 1 ].style.display = "block"; // Tampilkan slide saat ini
}

// Setiap 3 detik, slide berpindah
setInterval(function() {
    nextSlide(1); 
}, 3000); 

