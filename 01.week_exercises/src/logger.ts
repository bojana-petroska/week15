
export const logServerMessage = (message: string) => {
    const timeStamp = Date.now();
    return timeStamp + message;
}
