INICIO

npm init -y

npm i express cors dotenv joi nodemon pg express-async-errors

npm i typescript ts-node -D

npm i @types/express @types/cors @types/pg @types/node

npx tsc --init 
(criar o tsconfig)("target" : "es6")

package.json ("start": "ts-node src/index.ts")("dev": "nodemon src/index.ts")
