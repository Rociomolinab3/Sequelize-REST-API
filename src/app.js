import express from 'express';
import projectsRoutes from './routes/projects.routes.js';
import taskRoutes from "./routes/tasks.routes.js";
import preinscripcionesRoutes from './routes/preincripciones.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use(projectsRoutes)
app.use(taskRoutes)
app.use(preinscripcionesRoutes)

export default app;