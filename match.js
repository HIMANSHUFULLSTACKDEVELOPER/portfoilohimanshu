let lastTeam = "";

function selectTeam(team) {
    const matchDisplay = document.getElementById("match-display");
    const teamLogo = document.getElementById("team-logo");

    if (lastTeam !== team) {
        matchDisplay.textContent = `${team} vs LSG`;
        lastTeam = team;

        // Update logo based on selected team
        teamLogo.src = team === "MI"
            ? "https://img.icons8.com/office/2x/india.png"
            : "https://img.icons8.com/ios/452/circle-back-arrow.png";
        teamLogo.alt = `${team} Logo`;
    } else {
        matchDisplay.textContent = "Please select a different team";
    }
}