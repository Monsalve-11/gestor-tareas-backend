# gestor-tareas-backend

entramos a la carpeta del proyecto y abrimos una consola y ejecutamos la siguiente linea 

npm install

dentro del proyecto buscar el archivo .env 
PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario_bd
DB_PASS=tu_contraseña_bd
DB_NAME=gestor_tareas

cambiar estos valores por los de tu xammp 

tambien este proyecto debe moverlo a la carpeta htdcos que esta ubicado generalmente en el disco local luego la carpeta xammp y dps si htdocs 

luego debe migrar la bd con la siguiente linea 

npx sequelize-cli db:migrate

al estar todo correcto ejecutamos la siguiente linea para correr el backend 

npm run dev


