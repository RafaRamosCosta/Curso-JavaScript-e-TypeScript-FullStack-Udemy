import app from './app.js';

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Press CTRL + Click on http://localhost:${port}`)
});
