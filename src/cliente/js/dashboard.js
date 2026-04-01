import { logout, observarUsuario } from "./auth.js";

// 🔐 PROTEGER
observarUsuario((user) => {
  if (!user) {
    window.location.href = "/";
  }
});

// LOGOUT
document.getElementById("logout").addEventListener("click", () => {
  logout();
  window.location.href = "/";
});

// 📦 DATOS DE EJEMPLO (CDMX)
const envios = [
  { id: "ML1001", estado: "En tránsito", lat: 19.4326, lng: -99.1332 },
  { id: "ML1002", estado: "Entregado", lat: 19.427, lng: -99.1677 },
  { id: "ML1003", estado: "Retrasado", lat: 19.41, lng: -99.15 },
  { id: "ML1004", estado: "En tránsito", lat: 19.44, lng: -99.14 }
];

// 📊 CONTADORES
let transito = 0, entregados = 0, retrasados = 0;

// 🗺️ INICIALIZAR MAPA
const map = L.map('map').setView([19.4326, -99.1332], 12);

// 🌍 MAPA BASE
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);

// 📍 MARCADORES
envios.forEach(e => {

  let color = "blue";

  if (e.estado === "Entregado") color = "green";
  if (e.estado === "Retrasado") color = "red";

  // marcador
  const marker = L.marker([e.lat, e.lng]).addTo(map);

  marker.bindPopup(`
    <b>${e.id}</b><br>
    Estado: ${e.estado}
  `);

  // contadores
  if (e.estado === "En tránsito") transito++;
  if (e.estado === "Entregado") entregados++;
  if (e.estado === "Retrasado") retrasados++;
});

// 📊 MOSTRAR DATOS
document.getElementById("transito").textContent = transito;
document.getElementById("entregados").textContent = entregados;
document.getElementById("retrasados").textContent = retrasados;