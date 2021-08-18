import BaseCommand from "..";
import { EmailType } from "../../../@types/email-type";
import ConfirmEmailStrategy from "../../strategies/email/confirmed";

class EmailCommand extends BaseCommand {
  create(emailType: EmailType) {

    if (emailType === EmailType.Confirmed) {
      return new ConfirmEmailStrategy();
    }

    throw new Error(`Email type ${emailType} is not found!`);
  }
}

export default EmailCommand;