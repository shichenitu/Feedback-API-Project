// Define the Class of Product
export class product{
    id: string;
    stockKeepingUnit: string; // this is the market's inner code for each product
    name: string;
    description: string;
    category: string;
    price: number; // not sure if we need this, also the price can be changed all the time
    imageUrl: string;
    createAt: Date;
    updateAt: Date;
}
