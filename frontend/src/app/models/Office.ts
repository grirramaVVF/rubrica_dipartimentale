// import { AOffice } from "./AOffice";
import { IOffice } from "./IOffice";

export class Office { //extends IOffice {
  protected offices: Array<IOffice> = [];

  public hasChildren(office: IOffice): boolean {
    if (office.children.length > 0) {
      return true;
    }
    return false;
  }

  public setOffices(offices: Array<IOffice>) {
    this.offices = [...offices];
  }

  public getOffices(): Array<IOffice> {
    return this.offices;
  }

  public printNameOfficeTemp(office: IOffice, level: number = 0) {
    let temp = level++ + ' ' + office.nomeUfficio;

    if (this.hasChildren(office)) {
      temp += `\nelenco sottouffici:`;

      office.children.forEach(child => {
        //if (this.hasChildren(child)) {
        temp += '\n ' + this.printNameOfficeTemp(child, level);
        //}
      });
    }

    return temp;
  }

  public findOffice(idOffice: string = ''): IOffice | null {
    let temp: IOffice | null = null;

    for (let office of this.offices) {
      temp = this.findChild(office, idOffice);
      if (temp != null) {
        return temp;
      }
    }

    return temp;
  }

  private findChild(office: IOffice, idOffice: string = ''): IOffice | null {
    let temp: IOffice | null = null;

    if (office.codiceUfficio == idOffice) {
      console.log('è uguale', office.codiceUfficio, idOffice);
      return office;
    }

    if (this.hasChildren(office)) {
      office.children.forEach(ele => {
        temp = this.findChild(ele, idOffice);
      })
    }

    return temp;
  }
}
