import { setupWorker } from 'msw';
import { userHandlers, authHandlers } from './handlers';

export const worker = setupWorker(...userHandlers, ...authHandlers);
