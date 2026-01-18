// enum: a list which can only be selected 
// Define the enum types 
export enum UserRole{
    USER = 'user',
    ADMIN = 'admin',
}

// Define the Class of user
export class User{
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    role: UserRole; // it is from the enum definition above

    createAt: Date;
    updateAt: Date;
}