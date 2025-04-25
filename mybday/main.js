const year = new Date().getFullYear();
let dateStr = `${year}-05-19T00:00:00`;
const birthday = new Date(dateStr); 

function calculateDaysUntilBirthday() {
    const today = new Date();
    const timeDifference = birthday - today;
    const daysUntilBirthday = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const secondsUntilBirthday = Math.floor(timeDifference / 1000);
    if (secondsUntilBirthday < 0 && daysUntilBirthday < 0 ) {
        triggerConfetti();
        document.getElementById('countdown').innerText = "Happy Birthday! 🎉";
    }
    document.getElementById('countdown').innerText = `There are ${secondsUntilBirthday} seconds until my birthday!, and also ${daysUntilBirthday} days until my birthday!`;
}


function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
}
calculateDaysUntilBirthday();
setInterval(calculateDaysUntilBirthday, 1000);