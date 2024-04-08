import expres from 'express';
import routes from './routes/projectRoutes.js';
const app = expres();

import './model/project.js'

const PORT = process.env.PORT || 3000;

//Routes
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server on port http://localhost:${PORT}`);
})
