"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var User_1;
let User = User_1 = class User {
    constructor(username, email) {
        this._email = "";
        this.username = "";
        this.addressLine = "";
        this.addressLine2 = "";
        this.country = "";
        this.username = username;
        this._email = email;
    }
    //    @enumerable(false)
    get userType() {
        return User_1.userType;
    }
    get email() {
        return this._email;
    }
    set email(newEmail) {
        this._email = newEmail;
    }
    address() {
        return `${this.addressLine}\n${this.addressLine2}\n${this.country}`;
    }
};
User.userType = "Generic";
__decorate([
    required
], User.prototype, "_email", void 0);
__decorate([
    required
], User.prototype, "username", void 0);
__decorate([
    deprecated
], User.prototype, "address", null);
User = User_1 = __decorate([
    frozen
], User);
const p = new User("exampleUser", "example@example.com");
p.addressLine = "1, Ner Avenue";
p.addressLine2 = "Bahcelievler, Istanbul";
// Function for decorators
function frozen(target) {
    Object.freeze(target);
    Object.freeze(target.prototype);
}
console.log(Object.isFrozen(User)); // true
//User.addNewProp = "Trying to add new prop value"; // [ERR]: Cannot add property addNewProp, object is not extensible.
console.log(Object.isFrozen(new User("example", "example@example.com"))); // false
function required(target, key) {
    let currentValue = target[key];
    Object.defineProperty(target, key, {
        set: (newValue) => {
            if (!newValue) {
                throw new Error(`${key} is required.`);
            }
            currentValue = newValue;
        },
        get: () => currentValue,
    });
}
//const k = new User("","example@example.com");
//const u = new User("example","");
function enumerable(isEnumerable) {
    return (target, key, descriptor) => {
        descriptor.enumerable = isEnumerable;
        console.log(`The numerable property of this member is set to: ${descriptor.enumerable}`);
    };
}
function deprecated(target, key, descriptor) {
    const originalDef = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Warning: ${key}() is deprecated. Use other methods instead`);
        return originalDef.apply(this, args);
    };
    return descriptor;
}
