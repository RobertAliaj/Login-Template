export class User {
    firstName!: string;
    lastName!: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '',
            this.lastName = obj ? obj.lastName : ''
    }

    public toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
        }
    }
}
