export interface IVMAOOItemobj {
    codiceUO: string;
    riga1: string;
    riga2: string;
    riga3: string;
    isChild:boolean;
    coloreSfondoBase:string;
    opacita:number;
    children: IVMAOOItemobj[];
  }