import {createHash} from 'crypto'

export function hash (text) { 
   try { return createHash('sha256').update(text).digest('hex');

   } catch (error) { 
    return ''; }
    
}

console.log(hash());
