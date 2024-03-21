const express = require("express");
const app = express();
const cors = require('cors');
const fs = require ('fs');
const path = require('path');


app.use(cors());

app.use(express.json());
port = 3020;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

app.post('/llegirImatgesVinasHidalgo', (req, res)=> {
  const readableStream = fs.createReadStream('../UF1_ExamenAaDHectorVinas/Imatges/Imatge1.jpg', {highWaterMark: 8192});
  console.log(`${path.basename('../UF1_ExamenAaDHectorVinas/Imatges/Imatge1.jpg')}`);

  readableStream.on('data', (chunk) => {
      console.log(chunk);
    }
  );
});
/*
app.put('/copiaFitxerVinasHidalgo', (req, res)=> {
  const rutaCarpeta = '../UF1_ExamenAaDHectorVinas/Documents/Docs1';
  const fitxerOrigen = '../UF1_ExamenAaDHectorVinas/Documents/FitxerOrigen.txt';
  const fitxerDesti = path.join(rutaCarpeta, 'FitxerDesti.txt');
  if (!fs.existsSync(rutaCarpeta)) {
    fs.mkdirSync(rutaCarpeta);
  }
  const contingutOrigen = fs.readFileSync(fitxerOrigen, 'utf-8');

  if (fs.existsSync(fitxerDesti)) {
    const contingutDesti = fs.readFileSync(fitxerDesti, 'utf-8');
    fs.writeFileSync(fitxerDesti, contingutDesti +'\n'+ contingutOrigen);
  } else {
    fs.writeFileSync(fitxerDesti, contingutOrigen);
  }
});

app.get('/mostraNomsVinasHidalgo', (req, res)=> {
  const path_carpeta = '../UF1_ExamenAaDHectorVinas';
  function fitxersicarpetes(directori) {
    const files = fs.readdirSync(directori);
    files.forEach((file) => {
      const rutaRel = directori + '/' + file;
      const ruta = path.resolve(rutaRel);
      const stats = fs.statSync(ruta);
      if (stats.isDirectory()) {
        console.log(ruta);
        fitxersicarpetes(ruta);
      } else {
        console.log(ruta);
      }
    });
  }
  console.log(path.resolve(path_carpeta));
  fitxersicarpetes(path_carpeta);
});
*/
