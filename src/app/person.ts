import { required, alpha, alphaNumeric, digit, minLength, maxLength } from '@rxweb/reactive-form-validators';

export class Person {

    @alpha()
    @minLength({value: 2})
    @required()
    name: string;

    @alpha()
    @minLength({value: 2})
    @required()
    vorname: string;

    @maxLength({value: 2})
    @digit()
    alter: number;

    constructor(name: string, vorname: string, alter: number) {
        this.name = name;
        this.vorname = vorname;
        this.alter = alter;
    }
}