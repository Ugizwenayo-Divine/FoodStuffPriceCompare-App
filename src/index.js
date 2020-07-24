import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome' });
});
app.listen('3000', () => {
  console.log('listening on 3000');
});

export default app;
