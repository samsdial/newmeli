# Mercado Libre Clone - Prueba Técnica Frontend

![Mercado Libre Clone Screenshot](./screenshot.png)

Clon funcional de Mercado Libre desarrollado con React, Node.js y Sass, implementando las principales vistas de búsqueda, resultados y detalle de productos.

## 🌐 Demo en Vivo

🔗 [Ver en Vercel](https://newmeli.vercel.app/)

## 🚀 Características Clave

- 🔍 Búsqueda de productos con autocompletado
- 📦 Vista de resultados con paginación inteligente
- 🖼️ Página de detalle de producto con galería
- 📱 Diseño 100% responsive (mobile-first)
- 🏷️ SEO optimizado con meta tags dinámicos
- ⚡ Performance optimizada (Lighthouse 90+)
- 🎨 Sistema de diseño con variables CSS/Sass

## 🛠️ Stack Tecnológico

| Frontend           | Backend    | Herramientas |
| ------------------ | ---------- | ------------ |
| React 19           | Node.js 20 | Webpack 5    |
| React Router 7     | Express 5  | Babel        |
| Sass (BEM)         | Axios      | ESLint       |
| React Helmet Async | CORS       | Prettier     |

## 💻 Instalación Local

### Requisitos

- Node.js v20.x
- npm v9.x
- Git

### Pasos

1. Clonar repositorio:

```bash
git clone https://github.com/tu-usuario/meli-clone.git
cd meli-clone
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar entorno:

```bash
cp .env.example .env
```

4. Iniciar servidores:

```bash
npm run dev
```

📌 **Puertos:**

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:3001](http://localhost:3001)

## 🏗️ Estructura del Proyecto

```
meli-clone/
├── client/
│   ├── src/
│   │   ├── assets/       # Imágenes/fuentes
│   │   ├── components/   # Componentes UI
│   │   ├── pages/        # Vistas
│   │   ├── styles/       # Estilos globales
│   │   └── App.js       # Router principal
├── server/
│   ├── api/             # Lógica de endpoints
│   └── index.js        # Config server
└── webpack/           # Configuraciones build
```

## 📜 Scripts Útiles

| Comando           | Descripción                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Inicia front+back en desarrollo |
| `npm run build`   | Crea build de producción        |
| `npm run lint`    | Ejecuta ESLint + Prettier       |
| `npm run test`    | Ejecuta tests unitarios         |
| `npm run analyze` | Analiza bundle size             |

## 🛠️ Configuración Avanzada

### Variables de Entorno

```env
API_BASE_URL=https://api.mercadolibre.com
FRONTEND_URL=http://localhost:3000
PORT=3001
```

### Deployment

El proyecto incluye:

- `vercel.json` para configuración de Vercel
- Configuración CI/CD para despliegues automáticos

## 🤝 Cómo Contribuir

1. Haz fork del proyecto
2. Crea tu feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Add nueva funcionalidad'`)
4. Haz push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE) para detalles.

---

**Nota para revisores:** El proyecto está optimizado para:

- SEO (meta tags, schema markup)
- Performance (lazy loading, compresión)
- Accesibilidad (ARIA, contrastes)
- Seguridad (CORS, sanitización)

Para probar en producción: [https://newmeli.vercel.app/](https://newmeli.vercel.app/)
