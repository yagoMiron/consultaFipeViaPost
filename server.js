import express from "express";
import path from "path";

const app = express();
const __dirname = new URL(".", import.meta.url).pathname;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// arquivos estáticos do React
app.use(express.static(path.join(__dirname, "build")));

// Bitrix pode chamar por POST (iframe)
app.post("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta" + " " + PORT);
});
