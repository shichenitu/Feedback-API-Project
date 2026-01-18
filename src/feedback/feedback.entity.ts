// Define the enum types 
export enum FeedbackStatus{
    OPEN = 'open',
    CLOSED = 'closed',
    ARCHIVED = 'archived',
}

// Define the Class of feedback
export class feedback{
    id: string;
    authorId: string;
    title: string;
    body: string;
    rating?: number; // "?" means “optional”
    status: FeedbackStatus;
    metadata?: Record<string, any>; // "?" means “optional”
    // Record<string, any> is a JSON object
    createAt: Date;
    updateAt: Date;
}