const base64Url = require('base64url');

const header = {
    alg: 'HS256',
    typ: 'JWT',
};

const payload = {
    username: 'user1@user.com',
    name: 'Kelps GF',
    exp: new Date().getTime(), //timestamp
};

const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));

const key = 'wjqeqeoi34u3drfi3k920';

//certificado - chave privada e outro publica

const crypt = require('crypto');

const signature = crypt
    .createHmac('sha256', key)
    .update(`${headerEncoded}.${payloadEncoded}`)
    .digest('bin');

console.log(`${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`);