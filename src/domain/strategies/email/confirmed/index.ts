import BaseStrategy from "../..";
import { Email } from "../../../../@types/email";
import { EmailPayload } from "../../../../@types/email-payload";

class ConfirmEmailStrategy extends BaseStrategy {
  execute(payload : EmailPayload) : Email {
    const email : Email = {
      
    };

    return email;
  }
}

export default ConfirmEmailStrategy;