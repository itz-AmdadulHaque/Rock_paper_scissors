import crypto from "crypto";

export class HMAC {
  generateKey(){
    this.key = crypto.randomBytes(32).toString("hex");
  }
  generateHMAC(move) {
    return crypto.createHmac("sha256", this.key).update(move).digest("hex");
  }
}
