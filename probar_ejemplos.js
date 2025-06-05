import fs from 'fs';
import { execSync } from 'child_process';

const ejemplosDir = './ejemplos';
const ejemplos = fs.readdirSync(ejemplosDir).filter(f => f.endsWith('.txt'));

for (const ejemplo of ejemplos) {
    console.log('='.repeat(60));
    console.log(`Ejemplo: ${ejemplo}`);
    fs.copyFileSync(`${ejemplosDir}/${ejemplo}`, 'input.txt');
    try {
        const salida = execSync('node analizador.js', { encoding: 'utf8' });
        console.log(salida);
    } catch (err) {
        console.log(err.stdout || err.message);
    }
} 