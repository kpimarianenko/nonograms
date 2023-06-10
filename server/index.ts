import express from 'express';

const app = express();
const port = 4000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server started on port ${port}`));
