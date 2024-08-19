import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 4000;
export const message: string | undefined = process.env.CUSTOM_MESSAGE;

