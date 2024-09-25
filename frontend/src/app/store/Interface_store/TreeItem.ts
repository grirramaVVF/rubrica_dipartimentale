import { TreeChildItem } from "./TreeChildItem"

export interface TreeItem {
    titolo: string,
    nome: string,
    cognome: string,
    colore: boolean,
    posizione: number
    node: TreeChildItem[]
}
