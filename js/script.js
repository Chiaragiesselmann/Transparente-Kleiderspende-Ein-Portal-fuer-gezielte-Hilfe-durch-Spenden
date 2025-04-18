function toggleSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id !== sectionId) {
            section.style.display = "none";
        }else if (section.id == sectionId){
             section.style.display = "inline"; 
        }
    });
}                   
function onSubmit(sectionId) {
    var snackbar = document.getElementById("confirmationMessage");
    snackbar.className = "show";
    // After 3 seconds stopp show
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}       
function handleUbergabeChange() {
    const ubergabeSelect = document.getElementById("übergabe");
    const adressContainer = document.getElementById("adressContainer");

    if (ubergabeSelect.value === "abholen") {
        adressContainer.innerHTML = `
            <label for="vorname">Vorname:</label>
            <input type="text" id="vorname" name="vorname" required>

            <label for="nachname">Nachname:</label>
            <input type="text" id="nachname" name="nachname" required>

            <label for="strasse">Straße:</label>
            <input type="text" id="strasse" name="strasse" required>

            <label for="hausnummer">Hausnummer:</label>
            <input type="text" id="hausnummer" name="hausnummer" required>

            <label for="ort">Ort:</label>
            <input type="text" id="ort" name="ort" required>

            <label for="plz">PLZ:</label>
            <input type="text" id="plz" name="plz" pattern="30\\d{3}" title="PLZ muss mit 30 beginnen und 5 Ziffern haben" required>`;
    } else {
        adressContainer.innerHTML = "";
    }
}

function validateAddress() {
    const inputs = document.querySelectorAll('#adressContainer input');
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
            input.classList.add("invalid"); 
        } else {
            input.classList.remove("invalid");
        }
    });

    return valid;
}


document.getElementById("spenden-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert Neuladen der Seite

    document.getElementById("confirmationMessage").classList.remove("hidden");

    this.reset();

    setTimeout(() => {
        document.getElementById("confirmationMessage").classList.add("hidden");
    }, 9000);
});

