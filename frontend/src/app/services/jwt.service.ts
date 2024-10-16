import { Inject, Injectable } from '@angular/core';
import { KEYUTIL, KJUR } from 'jsrsasign';
import { jwtDecode } from "jwt-decode";

@Injectable({
    providedIn: 'root'
})
export class JwtService {
    alg: string[] = ['HS512', 'HS256'];

    constructor(@Inject(String) private token: string = '', @Inject(String) private key: string = '') {
        if (key != '') {
            this.key = key;
        }
    }

    decode() {
        //let temp: string = this.generateTempJWT();
        //let retVal = KJUR.jws.JWS.verifyJWT(temp, this.key, { alg: this.alg });
        //console.log('verifyTemp', temp);
        //console.log('verifyTemp', retVal);
        //console.log('temp: ', jwtDecode(temp));

        //console.log('key', this.key);
        //console.log('token', this.token);
        //console.log('verify', this.verify());
        //console.log('temp: ', jwtDecode(this.token));
        console.log('Ricordarsi di verificare il token');
        //if (this.verify()) {
        return jwtDecode(this.token);
        //}

        return null;
    }

    verify() {
        return KJUR.jws.JWS.verifyJWT(this.token, this.key, { alg: this.alg });
    }

    generateTempJWT(): string {
        // Header
        var oHeader = { alg: 'HS512', typ: 'JWT' };

        var tNow = KJUR.jws.IntDate.get('now');
        var tEnd = KJUR.jws.IntDate.get('now + 1year');
        // Payload
        var oPayload = {
            nbf: tNow,
            iat: tNow,
            //exp: tEnd,
            jti: "id123456",
            aud: "http://localhost",
            name: "nome.cognome",
            sub: "AAABBB00F10B123K",
            iss: "AppRubDip",
            tipo: "VVF",
            sedi: [
                {
                    "codSede": 1,
                    "isSuperUser": true,
                    "uffici": [
                        {
                            "idUff": 1,
                            "idProfilo": 1
                        },
                        {
                            "idUff": 2,
                            "idProfilo": 1
                        }
                    ]
                }
            ],

        };

        // Sign JWT, password=616161
        var sHeader = JSON.stringify(oHeader);
        var sPayload = JSON.stringify(oPayload);
        var sJWT = KJUR.jws.JWS.sign("HS512", sHeader, sPayload, this.key);
        return sJWT;
    }
}
