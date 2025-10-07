import { Request, Response } from "express";
export declare function getAll(req: Request, res: Response): Promise<void>;
export declare function getOne(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function create(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function update(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function remove(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=pratoController.d.ts.map