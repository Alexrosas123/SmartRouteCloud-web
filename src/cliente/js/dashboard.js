import { iniciarMapa } from "./tomtomAPI.js";
import { calcularRuta } from "./tomtomAPI.js";

const map = iniciarMapa();






async function mostrarRuta() {
  const origen = "-99.1332,19.4326";
  const destino = "-99.1677,19.427";

  const ruta = await calcularRuta(origen, destino);

  console.log(ruta);
  
}


export function agregarMarcador(map, lat, lng, texto) {
  new tt.Marker()
    .setLngLat([lng, lat])
    .setPopup(new tt.Popup().setText(texto))
    .addTo(map);
}


mostrarRuta();
agregarMarcador(map, 19.4326, -99.1332, "Paquete 1");
agregarMarcador(map, 19.427, -99.1677, "Paquete 2");

