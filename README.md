# Sistema Web - Astro + Django + Supabase

Sistema web con frontend en Astro, backend en Django y base de datos PostgreSQL en Supabase.

---

## 🛠️ Tecnologías

- **Frontend:** Astro + Bulma CSS
- **Backend:** Django + Django REST Framework
- **Base de datos:** PostgreSQL (Supabase)

---

## 📋 Requisitos

- Node.js (v18+)
- Python (v3.8+)
- Git

---

## 🚀 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/mi-proyecto.git
cd mi-proyecto
```

### 2. Configurar Frontend
```bash
cd frontend
npm install
```

### 3. Configurar Backend

**Windows:**
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

**Mac/Linux:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 4. Configurar Base de Datos

**Copiar el archivo de variables de entorno:**
```bash
# En la carpeta backend/
cp .env.example .env
```

**El archivo `.env` ya tiene las credenciales configuradas.** No necesitas cambiar nada.

### 5. Crear las tablas en la base de datos
```bash
# Asegúrate de estar en backend/ con el entorno virtual activado
python manage.py migrate
```

### 6. Crear tu usuario administrador
```bash
python manage.py createsuperuser
```

Completa los datos que te pida (username, email, password).

---

## ▶️ Ejecutar el proyecto

Necesitas **DOS terminales abiertas:**

### Terminal 1 - Frontend
```bash
cd frontend
npm run dev
```

✅ Frontend: **http://localhost:4321**

### Terminal 2 - Backend
```bash
cd backend
# Activa el entorno virtual
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate
python manage.py runserver
```

✅ Backend: **http://localhost:8000**  
✅ Admin: **http://localhost:8000/admin**

---

## 📁 Estructura del Proyecto
```
mi-proyecto/
├── frontend/          # Aplicación Astro
├── backend/           # Aplicación Django
│   ├── apps/         # Apps de Django
│   ├── config/       # Configuración
│   └── .env          # Variables de entorno (credenciales)
└── README.md
```

---

## 🔧 Comandos Útiles

### Frontend
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
```

### Backend
```bash
python manage.py runserver              # Iniciar servidor
python manage.py makemigrations         # Crear migraciones
python manage.py migrate                # Aplicar migraciones
python manage.py createsuperuser        # Crear admin
```

---

## ⚠️ Problemas Comunes

**Error: "No module named 'django'"**
- Solución: Activa el entorno virtual (`venv\Scripts\activate` en Windows)

**Error de conexión a base de datos**
- Solución: Verifica que el archivo `.env` exista en `backend/`

**Estilos no cargan en el frontend**
- Solución: Asegúrate de haber ejecutado `npm install` en la carpeta `frontend/`

---
