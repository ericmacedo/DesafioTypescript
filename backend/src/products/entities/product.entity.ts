import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
	@PrimaryGeneratedColumn()
    id: number

	@Column({ type: 'varchar', length: 300, nullable: false })
	name: string;

  	@Column({ type: 'varchar', length: 300, nullable: false })
	price: string;
	
	@Column({ type: 'varchar', length: 300, nullable: false })
	brand: string;
	
	@Column({ type: 'varchar', length: 300, nullable: false })
	image: string;

	@Column({ type: 'date', nullable: false, default: 'now()'})
	createdAt: Date;
}
