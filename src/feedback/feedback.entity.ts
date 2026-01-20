import { UUID } from "crypto";

// Define the enum types 
export enum FeedbackStatus{
    OPEN = 'open',
    CLOSED = 'closed',
    ARCHIVED = 'archived',
}

// Define the Class of Feedback
export class feedback{
    id: string;
    authorId: string;
    productId: string; // Newly added
    comment: string;

    valueRating: number; // should rating be optional or mandatory? Let's say mandatory for now
    practicalityRating: number;
    safetyRating: number;
    easeOfUseRating: number;
    accuracyRating: number;
    aestheticsRating: number;
    durabilityRating: number;
    sustainabilityRating: number;

    status: FeedbackStatus; // not sure if we should keep this, maybe yes
    
    createAt: Date;
    updateAt: Date;
}