

dotenv.config({path:`./.env.example`}); 



import dotenv from 'dotenv';

const argList = process.argv.slice(2);
const args = {};

for (const str of argList) {
    const [key, value] = str.split('=');

    if (key && value && key.startsWith('--')) {
        args[key.slice(2)] = value;
    }
}

const a = dotenv.config({
    path: 'src/.env.' + args.env,
    quet: true     // ne viska spauszina

});

console.log(a);

/*
export const PORT = +process.env.PORT ?? 5510;
export const TITLE = process.env.TITLE ?? 'Project title';
export const DB_DATABASE = process.env.DB_DATABASE ?? 'test_db';
export const DB_USER = process.env.DB_USER ?? 'test_user';
export const DB_PASSWORD = process.env.DB_PASSWORD ?? 'test_password';
*/


export const PORT = +process.env.PORT ?? 5520;
export const TITLE = process.env.TITLE ?? 'Project title';
export const DB_DATABASE = process.env.DB_DATABASE ?? 'test_db';
export const DB_USER = process.env.DB_USER ?? 'test_user';
export const DB_PASSWORD = process.env.DB_PASSWORD ?? 'test_password';