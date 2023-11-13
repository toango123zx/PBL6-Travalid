const express = require('express');
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

export const fee = Number(process.env.FEE) || 10;