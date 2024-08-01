let yearInput = document.getElementById("tahun");
let monthInput = document.getElementById("bulan");
let dayInput = document.getElementById("hari");

let dateNow = new Date();

let day = dateNow.getDate();
let month = dateNow.getMonth() + 1;
let year = dateNow.getFullYear();


// document.getElementById("kirim").addEventListener("click", yearCount);
// document.getElementById("kirim").addEventListener("click", monthCount);
// document.getElementById("kirim").addEventListener("click", dayCount);

document.getElementById("kirim").addEventListener('click', () => {
    yearCount();
    monthCount();
    dayCount();
})

function yearCount() {
   let yearValue = yearInput.value;
   let countYear = year - yearValue;
   return document.getElementById("yearResult").innerHTML = countYear;
}


function monthCount() {
    let monthValue = monthInput.value;
    let countMonth = month - monthValue;
    return document.getElementById("monthResult").innerHTML = countMonth;
}

function dayCount() {
    let dayValue = dayInput.value;
    let countDay = day - dayValue;
    return document.getElementById("dayResult").innerHTML = countDay;
}
