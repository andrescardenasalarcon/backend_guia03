import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import MonitorRutas from '../../routes/MonitorRutas';
import TecladoRutas from '../../routes/TecladoRutas';
import RatonRutas from '../../routes/RatonRutas';
import ComputadorRutas from '../../routes/ComputadorRutas';
import OrdenRutas from '../../routes/OrdenRutas';
import CompradorRutas from '../../routes/CompradorRutas';
import UserAccessRoutes from '../../routes/UserAccessRoutes';
import safety from "../../middleware/Safety";
class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.startConfigs();
        this.activateRoutes();
    }

    public startConfigs(): void {
        this.app.set('PORT', 8080);
        this.app.use(cors()); //Limita quien entra
        this.app.use(morgan('dev'))
        this.app.use(express.json({ limit: '100mb' }));
        this.app.use(express.urlencoded({ extended: true })); //Para peticiones en rutas de todo tipo

    }

    public activateRoutes(): void {
        this.app.use('/api/public', UserAccessRoutes);

        this.app.use('/api/monitor', MonitorRutas);
        this.app.use('/api/teclado', TecladoRutas);
        this.app.use('/api/raton', RatonRutas);
        this.app.use('/api/computador', ComputadorRutas);
        this.app.use('/api/comprador', CompradorRutas);
        this.app.use('/api/orden', safety.verificarToken, OrdenRutas);

    }

    public start(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('Started!!!', this.app.get('PORT'));
        });
    }
};
export default Server;