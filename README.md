🚚 SmartRouteCloud Web

Sistema web de logística para gestión de envíos, desarrollado con Node.js, Firebase y frontend en JavaScript.

📌 Descripción

SmartRouteCloud Web es una aplicación enfocada en la gestión de paquetes y monitoreo logístico.
Permite a los usuarios iniciar sesión, visualizar un dashboard y observar el estado de envíos en un mapa interactivo.

🛠️ Tecnologías utilizadas
Node.js
JavaScript (ES Modules)
HTML5 y CSS3
Firebase (Authentication y Hosting)
Leaflet (mapas interactivos)
📁 Estructura del proyecto
SmartRouteCloud-web/
│
├── src/
│   ├── cliente/        # Frontend (HTML, CSS, JS)
│   └── servidor/       # Backend (Node.js - uso local)
│
├── firebase.json       # Configuración de Firebase Hosting
├── package.json        # Dependencias del proyecto
└── README.md
🚀 Instalación y ejecución
1️⃣ Clonar repositorio
git clone https://github.com/tu-usuario/SmartRouteCloud-web.git
cd SmartRouteCloud-web
2️⃣ Instalar dependencias
npm install
3️⃣ Ejecutar en local (Node.js)
node index.js

Abrir en navegador:

http://localhost:3000
🔐 Configuración de Firebase
1️⃣ Instalar CLI
npm install -g firebase-tools
2️⃣ Iniciar sesión
firebase login
3️⃣ Inicializar Hosting
firebase init hosting

Configurar:

Public directory:
src/cliente
Single Page App: No
Overwrite index.html: No
🌐 Despliegue
firebase deploy

Resultado:

https://tu-proyecto.web.app
```
