import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity() // Turn this Class into a table in the database
// Define the Class of Product
export class Product{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    stockKeepingUnit: string; // this is the market's inner code for each product
    
    @Column()
    name: string;

    @Column() 
    description: string;

    @Column() 
    category: string;

    @Column('decimal')
    price: number; // not sure if we need this, also the price can be changed all the time
    
    @Column()
    imageUrl: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}
