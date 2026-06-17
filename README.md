# Backend

## Instalación
# 1. Entrar al Backend
```bash
cd Backend
```
# 2. Instalar las dependencias
```bash
npm install
```

## Desarrollo

```bash
npm start
```

## Certificados HTTPS
El backend funciona con certificados autofirmados.
Para generar certificados autofirmados, dentro de la carpeta Backend:

```bash
openssl req -nodes -new -x509 -keyout server.key -out server.crt
```

# Frontend

# 1. Entrar al Frontend
```bash
cd Frontend
```
# 2. Iniciar frontend mediante http-server
```bash
http-server
```

En caso de no tener http-server. Instalarlo.
# Instalación:
```bash
npm install http-server
```

En el caso de que no funciones bien el front (no te deje hacer peticion al servidor).
Entrar a:

https://localhost:3443/

Hacé click en "Avanzado" → "Continuar a localhost (no seguro)"