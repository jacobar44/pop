export class User {
    constructor(
        public userName: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public profileImage:string|null,
        public dob: Date,
        public phoneNumber:string

    ){ }
}
