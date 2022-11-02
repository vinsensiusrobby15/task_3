const nama = document.getElementById("nama")
const tanggal_lahir = document.getElementById("tanggal_lahir")
const tinggi_badan = document.getElementById("tinggi_badan")
const berat_badan = document.getElementById("berat_badan")
const Gender = document.getElementById("Gender")

const konfirmasi = document.getElementById("konfirm")
const clear = document.getElementById("clear")

const card = document.getElementById("card")

konfirmasi.addEventListener("click", () => {

    if (nama.value === "" || tanggal_lahir === "" || tinggi_badan === "" || berat_badan === "") {
        alert("Data Harus Lengkap WOI!!!")
    } else {  
        card.innerHTML = `
        <div class="item">
            <p>Nama</p>
            <p> : </p>
            <p>${nama.value}</p>
        </div>
        <div class="item">
            <p>Tanggal Lahir</p>
            <p> : </p>
            <p>${tanggal_lahir.value}</p>
        </div>
        <div class="item">
            <p>Tinggi badan</p>
            <p> : </p>
            <p>${tinggi_badan.value}cm</p>
        </div>
        <div class="item">
            <p>Berat Badan</p>
            <p> : </p>
            <p>${berat_badan.value} kg</p>
        </div>
        <div class="item">
            <p>Jenis Kelamin</p>
            <p> : </p>
            <p>${Gender.value}</p>
        </div>
        `
        nama.value = ""
        tanggal_lahir.value = ""
        tinggi_badan.value = ""
        berat_badan.value = ""
    }

})

clear.addEventListener("click", () => {
    clearForm()
})

const clearForm = () => {
    nama.value = ""
    tanggal_lahir.value = ""
    tinggi_badan.value = ""
    berat_badan.value = ""
    card.innerHTML = ""
}