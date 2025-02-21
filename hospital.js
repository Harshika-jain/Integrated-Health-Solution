const hospitalData = {
    "Moradabad": [
        { name: "TMU Hospital", location: "Moradabad, UP", rating: "★★★★☆", image: "hospital1.jpg" },
        { name: "Ujala Cygnus Bright Star Hospital", location: "Moradabad, UP", rating: "★★★★☆", image: "hospital2.jpg" }
    ],
    "Delhi": [
        { name: "AIIMS Delhi", location: "New Delhi", rating: "★★★★★", image: "hospital3.png" },
        { name: "Fortis Hospital", location: "Delhi", rating: "★★★★☆", image: "hospital2.jpg" }
    ],
    "Lucknow": [
        { name: "Sahara Hospital", location: "Lucknow", rating: "★★★★★", image: "hospital1.jpg" },
        { name: "Medanta Hospital", location: "Lucknow", rating: "★★★★☆", image: "hospital3.png" }
    ],
    "Bareilly": [  // ✅ Bareilly ke hospitals add kiye!
        { name: "Gangasheel Hospital", location: "Bareilly, UP", rating: "★★★★★", image: "hospital4.jpg" },
        { name: "Ram Murti Hospital", location: "Bareilly, UP", rating: "★★★★☆", image: "hospital5.jpg" }
    ]
};

function updateHospitals() {
    const cityInput = document.getElementById("city").value.trim();
    const city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();
    const hospitalList = document.querySelector(".hospital-list");
    hospitalList.innerHTML = "";

    if (hospitalData[city]) {
        hospitalData[city].forEach(hospital => {
            const hospitalCard = `
                <div class="hospital-card">
                    <img src="${image3.jpg}" alt="${hospital}">
                    <div class="hospital-info">
                        <h3>${'Ram Murti Hospital'}</h3>
                        <p>${Bareilly}</p>
                        <p>Multispeciality Hospital</p>
                        <div class="rating">${hospital.rating}</div>
                    </div>
                </div>
            `;
            hospitalList.innerHTML += hospitalCard;
        });
    } else {
        hospitalList.innerHTML = `<p style="color:red;">No hospitals found in this city.</p>`;
    }
}

document.getElementById("city").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        updateHospitals();
    }
});
