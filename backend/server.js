const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS so React frontend can access

const serverData = [
  { label: "PLAYERS", value: "60/64" },
  { label: "PING", value: "104 ms" },
  { label: "TICKRATE", value: "60 Hz" },
];

const settingsData = {
  settings: {
    region: "Europe - DE",
    punkbaster: "On",
    fairfight: "On",
    password: "Off",
    preset: "Normal",
  },
  advanced: {
    minimap: "On",
    onlySquadLeaderSpawn: "Off",
    vehicles: "On",
    teamBalance: "On",
    minimapSpotting: "On",
    hud: "On",
    thirdPersonVehicleCam: "On",
    regenerativeHealth: "On",
    killCam: "On",
    friendlyFire: "Off",
    threeDSpotting: "On",
    enemyNameTags: "On",
  },
  rules: {
    tickets: 400,
    vehicleSpawnDelay: 25,
    bulletDamage: 100,
    kickAfterTeamKills: 5,
    playerHealth: 100,
    playerRespawnTime: 100,
    kickAfterIdle: 300,
    banAfterKicks: 3,
  },
};

app.get('/api/server-data', (req, res) => {
  res.json(serverData);
});

app.get('/api/settings-data', (req, res) => {
  res.json(settingsData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
