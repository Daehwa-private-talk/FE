import { setupWorker } from 'msw';
import { userHandlers } from './handlers';

export const worker = setupWorker(...userHandlers);
