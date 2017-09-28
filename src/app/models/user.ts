export class User {

    constructor(
        public id: string,
        public name: string,
        public surname: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string,
        public confirmPassword: string,
        public dateOfBirth: string,
    ) {}

}
