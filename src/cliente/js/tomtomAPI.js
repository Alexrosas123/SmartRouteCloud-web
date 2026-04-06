const apiKey = "sCOM5LuFwCbSgBMjegm6m7uvyT23NiJq";

export function iniciarMapa() {
  const map = tt.map({
    key: apiKey,
    container: "map",
    center: [-99.1332, 19.4326], // CDMX
    zoom: 12
  });

  map.addControl(new tt.NavigationControl());

  map.on('load', () => {
    map.addLayer({
      id: 'traffic',
      type: 'line',
      source: {
        type: 'vector',
        url: `https://api.tomtom.com/traffic/map/4/tile/flow/vector/relative0/{z}/{x}/{y}.pbf?key=${apiKey}`
      },
      'source-layer': 'Traffic flow',
      paint: {
        'line-color': [
          'match',
          ['get', 'traffic_level'],
          'low', 'green',
          'medium', 'orange',
          'heavy', 'red',
          'gray'
        ],
        'line-width': 3
      }
    });
  });

  

  return map;
}

export async function calcularRuta(origen, destino) {
  const url = `https://api.tomtom.com/routing/1/calculateRoute/${origen}:${destino}/json?traffic=true&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.routes[0];
}

