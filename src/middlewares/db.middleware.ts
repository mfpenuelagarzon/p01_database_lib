import {Request, Response, NextFunction} from "express";
import {Database} from "../database";
import {DbConfig} from "../config/database.config";

declare global {
    namespace Express {
        interface Request {
            db: ReturnType<typeof Database.getConnection>;
        }
    }
}

let initialized = false;

export const dbMiddleware = (config: DbConfig) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('dbMiddleware.in');
            if (!initialized) {
                console.log('dbMiddleware.initializing database connection...');
                await Database.init(config);
                console.log('dbMiddleware.initializing database successfully');
                initialized = true;
            }
            console.log('dbMiddleware.database connected');
            // Agregar la conexión de base de datos al request
            req.db = Database.getConnection();
            next();
        } catch (error) {
            console.error('dbMiddleware.error:: ',error);
            next(error);
        }
    }
}