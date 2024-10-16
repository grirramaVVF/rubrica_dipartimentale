import { IUserHeadOffice } from "./IUserHeadOffice";

export interface IToken {
    sub?: string;  // soggetto a cui è stato rilasciato il token CodiceFiscale
    iss?: string;  // chi emette e firma il token
    tipo?: string;
    sedi?: Array<IUserHeadOffice>,
    aud?: string,
    name?: string, // nome utente
    iat?: number, // dada emissione
    exp?: number,  //scadenza
}
