function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const result = document.getElementById("result");

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
    } else {
        const lovePercentage = Math.floor(Math.random() * 101);

        // Custom messages based on percentage
        let message = "";
        if (lovePercentage > 80) {
            message = "Perfect Match 💖 Meant to be!";
        } else if (lovePercentage > 50) {
            message = "Great bond 💕 Keep it strong!";
        } else {
            message = "Love is uncountable 💌 <br/>It can’t be measured, but here’s your fun result!";
        }

        result.innerHTML = `
            ${name1} ❤️ ${name2} <br>
            Love Score: <strong>${lovePercentage}%</strong> <br>
            <em>${message}</em>
        `;
    }
}
