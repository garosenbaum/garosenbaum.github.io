const birth = new Date("2007-02-02");

let ageDate = new Date(Date.now() - birth.getTime());
document.getElementById("age").innerText = Math.abs(ageDate.getUTCFullYear() - 1970);
