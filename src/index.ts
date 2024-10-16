import Express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = Express();
const port = 3000;

const publicPath = path.join(__dirname, '../public');
app.use(Express.static(publicPath));

app.get('/', (req, res) => {
  const targetFilePath = path.join(publicPath, 'index.html');
  res.sendFile(targetFilePath);
})
 
app.get('/pagina2', (req, res) => {
  const targetFilePathPagina2 = path.join(publicPath, 'pagina2.html');
  res.sendFile(targetFilePathPagina2);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})