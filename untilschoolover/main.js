const year = new Date().getFullYear();
let dateStr = `${year}-06-03T00:00:00`;
const birthday = new Date(dateStr); 

function calculateDaysUntilSchoolOver() {
    const today = new Date();
    const timeDifference = birthday - today;
    const daysUntilSchoolEnd = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const secondsUntilSchoolEnd = Math.floor(timeDifference / 1000);
    if (daysUntilSchoolEnd < 0 && secondsUntilSchoolEnd < 0 ) {
        triggerConfetti();
        document.getElementById('countdown').innerText = "School is over!";
    }
    document.getElementById('countdown').innerText = `There are ${secondsUntilSchoolEnd} seconds until school is over!, and also ${daysUntilSchoolEnd} days until my birthday!`;
}


function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
}
calculateDaysUntilSchoolOver();
setInterval(calculateDaysUntilSchoolOver(), 10);
