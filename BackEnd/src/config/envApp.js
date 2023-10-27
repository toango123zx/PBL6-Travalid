import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

export const port = Number(process.env.PORT) || 3000;