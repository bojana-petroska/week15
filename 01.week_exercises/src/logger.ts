import { port } from './config'

export const logServerMessage = (message: string | undefined) => {
    const timeStamp = Date.now();
    return timeStamp + `server is running on http://localhost${port}`;
}
