/**
 * @file firebaseConfig.js
 * @description Configuración e inicialización de Firebase Admin SDK para la aplicación.
 * @requires dotenv Configuración de variables de entorno.
 * @requires firebase-admin SDK de Firebase para administración del backend.
 */

const dotenv = require('dotenv');
dotenv.config();

const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
})

const db = admin.database();
const auth = admin.auth();

module.exports = { db, auth };