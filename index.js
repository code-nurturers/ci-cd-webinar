const express = require('express');
const app = express();
const port = 3000; // or any other port you prefer

app.use(express.json());

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Halloween API',
    version: '1.0.0',
    description: 'API for Halloween jokes and costumes',
  },
  servers: [{ url: 'http://localhost:3000', description: 'Local server' }],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Specify the path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Serve the API routes
app.use('/jokes', require('./routes/jokes'));
app.use('/costumes', require('./routes/costumes'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  