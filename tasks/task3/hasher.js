import crypto from "node:crypto";

class Hasher  {
    constructor() {
    }

    getHash(message, key) {
        const hmac = crypto.createHmac('sha256', key);
        hmac.update(message);

        return hmac.digest('hex');
    }
}

export default Hasher;