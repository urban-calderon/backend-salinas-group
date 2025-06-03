# **Backend Service** 🏗️  
🔹 API en Node.js + Express + TypeScript para servicio de encriptado basado en el algoritmo “RSA/ECB/PKCS1Padding encoding UTF-8”, devuelve una cadena encriptada de tipo string.

## **🛠️ Tecnologías**  
- **Node.js** (v18+)  
- **Express** (Framework)  

## **⚙️ Requisitos previos**  
- **Node.js** (v18+)  
- **npm** 

## **⚡ Configuración Rápida**  
1. Clonar repositorio:  
   ```bash
   git clone https://github.com/urban-calderon/backend-salinas-group.git
   cd backend-salinas-group

2. Configurar las variables de entorno:  
- Crear en la raíz del proyecto el archivo .env
- Agregar las siguientes variables:
   ```bash
   NODE_ENV=development     
   PORT=3000                 
   RSA_KEY_SIZE=2048      
   RSA_PUBLIC_KEY_PATH=./keys/public.pem
   RSA_PRIVATE_KEY_PATH=./keys/private.pem
   KEY_STORAGE_DIR=./keys 

3. Instalar dependencias:  
   ```bash
   npm install

4. Ejecutar:  
   ```bash
   npm run dev

## **📡 Endpoints**  
### Endpoint URL
- **POST** /api/encrypt 
```bash
   {
        text: "Soy un texto"
   }