const khodamNames = [
    "Lumba - lumba Girang",
    "Hantu Jerangkong",
    "Genderuwo",
    "Sundel Bolong",
    "Wewe Gombel",
    "Pralambasura",
    "Banaspati",
    "Siluman Kodok",
    "Gundul Pringis",
    "Leak"
];

function getRandomKhodam() {
    const randomIndex = Math.floor(Math.random() * khodamNames.length);
    return khodamNames[randomIndex];
}

function cekKhodam() {
    const nameInput = document.getElementById("nameInput").value.trim();
    if (nameInput) {
        const khodamName = getRandomKhodam();
        document.getElementById("khodamName").textContent = khodamName;
        document.getElementById("result").style.display = "block";
    } else {
        alert("Masukkan nama Anda terlebih dahulu.");
    }
}

function resetForm() {
    document.getElementById("nameInput").value = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("khodamName").textContent = "";
}