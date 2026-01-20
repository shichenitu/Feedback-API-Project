// enum: a list which can be selected
// Define the enum types 
export enum UserRole{
    USER = 'user',
    ADMIN = 'admin',
}

// Define the Class of User
export class User{
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    role: UserRole; // it is from the enum definition above
    phoneNumber: string; // should it be optional?
    createAt: Date;
    updateAt: Date;
}