interface ImailTo {
    name: string,
    email: string
}

interface IMailMessage {
    subject: string,
    body: string,
    attachment?: Array<string> // attachment?: string[]
}

interface IMessageDTO {
    to: ImailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EmailServce implements IEmailService {
    sendMail( { to, message }: IMessageDTO ) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailServce;