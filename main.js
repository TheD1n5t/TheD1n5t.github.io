const summonerName = "GG Montı"; // dein fest eingebauter Name
const proxyUrl = "https://dein-proxy.onrender.com"; // später anpassen!

async function loadSummonerData() {
  const infoDiv = document.getElementById("summoner-info");
  infoDiv.innerHTML = "<p>Lade Daten...</p>";

  try {
    const response = await fetch(`${proxyUrl}/summoner/${encodeURIComponent(summonerName)}`);
    if (!response.ok) throw new Error("API Fehler");

    const data = await response.json();
    infoDiv.innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Level:</strong> ${data.summonerLevel}</p>
      <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${data.profileIconId}.png" 
           alt="Profile Icon" width="64" height="64" />
    `;
  } catch (err) {
    infoDiv.innerHTML = "<p style='color: red;'>Fehler beim Laden der Daten.</p>";
    console.error(err);
  }
}

loadSummonerData();
