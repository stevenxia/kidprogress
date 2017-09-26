
enum Gender {male, female}

export class Kid {
    
    familtyName: string;
    givenName: string;
    age: number = 0;
    gender: Gender =Gender.male;
    
    private _school: string = null;

    constructor(fname, gname){
        this.familtyName = fname;
        this.givenName = gname;
    }

    get school() : string{
        if(this._school === null){
            return "School is not set."
        }
        else{
            return this._school;
        }
    }

    toString() : string {
        return this.givenName + this.givenName + "\n" + this.age + " years old\n" + this.school;
    }
}