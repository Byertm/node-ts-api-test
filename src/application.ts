import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import serverless from 'serverless-http';

const application = express();

const port = process.env.PORT || 3000;

application
	.get('/', (req: Request, res: Response) => {
		res.send({ message: 'Hello, World!' });
	})
	.get('/random', (req: Request, res: Response) => {
		res.send({ number: Math.floor(Math.random() * 100) });
	});

application.listen(port, () => {
	console.log(`Application listening on port http://localhost:${port}`);
});

export const handler = serverless(application);