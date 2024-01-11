@frozen
class User {
    private static userType: string = "Generic";
    
    @required
    private _email: string = "";

    @required
    public username: string = "";

    public addressLine: string = "";
    public addressLine2: string = "";
    public country: string = "";

    constructor(username: string, email: string){
        this.username = username;
        this._email = email;
    }

//    @enumerable(false)
    get userType(){
        return User.userType;
    }

    get email(){
        return this._email;
    }

    set email(newEmail:string){
        this._email = newEmail;
    }
    
    @deprecated
    address ():any{
        return `${this.addressLine}\n${this.addressLine2}\n${this.country}`;
    }
}

const p = new User("exampleUser", "example@example.com");
p.addressLine = "1, Ner Avenue";
p.addressLine2 = "Bahcelievler, Istanbul";

// Function for decorators

function frozen(target: Function){
    Object.freeze(target);
    Object.freeze(target.prototype);
}

console.log(Object.isFrozen(User)); // true
//User.addNewProp = "Trying to add new prop value"; // [ERR]: Cannot add property addNewProp, object is not extensible.
console.log(Object.isFrozen(new User("example", "example@example.com"))); // false

function required(target: any, key:string){
    let currentValue = target[key];

    Object.defineProperty(target, key, {
        set: (newValue: string) => {
            if(!newValue){
                throw new Error(`${key} is required.`);
            }
            currentValue = newValue;
        },
        get: () => currentValue,
    });
}

//const k = new User("","example@example.com");
//const u = new User("example","");

function enumerable(isEnumerable: boolean){
    return (target:any, key: string, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = isEnumerable;
        console.log(`The numerable property of this member is set to: ${descriptor.enumerable}`);
    };
}

function deprecated(target: any, key: string, descriptor: PropertyDescriptor){
    const originalDef = descriptor.value;

    descriptor.value = function(...args: any[]){
        console.log(`Warning: ${key}() is deprecated. Use other methods instead`);
        return originalDef.apply(this, args);
    }
    return descriptor;
}