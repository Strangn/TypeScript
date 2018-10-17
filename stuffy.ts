export class stuffy {
    private _name: string;
    private type: string;
    private color: string;
 
    constructor(n: string, t: string, c: string) {
        this._name = n;
        this.type = t;
        this.color = c;
    }
 
    get name(): string {
        return this._name;
    }
    about(): string {
        return `name: ${this._name}, type: ${this.type}, color: ${this.color}`;
    }
 }
 
 let george: stuffy = new stuffy("George", "Bear", "Brown");
 
 console.log(george.about());
 
 console.log(george.name);