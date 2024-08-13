import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSAwhVI8s2Tg-oyFyKqdw-j25GGBTct8M", // Chave de API da Web
  authDomain: "ia-agricula.firebaseapp.com", // Substitua pelo domínio de autenticação, geralmente "seu-projeto.firebaseapp.com"
  projectId: "13951558894", // Número do projeto
  storageBucket: "ia-agricula.appspot.com", // Substitua pelo bucket de armazenamento, geralmente "seu-projeto.appspot.com"
  messagingSenderId: "seu-messaging-sender-id", // Substitua pelo ID do remetente de mensagens
  appId: "seu-app-id", // Substitua pelo ID do aplicativo
  measurementId: "seu-measurement-id" // Substitua pelo ID de medição (opcional)
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };