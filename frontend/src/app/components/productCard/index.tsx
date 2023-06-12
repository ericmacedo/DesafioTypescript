import Product from "../../types/product";
import { Card, Image } from 'antd';
import styles from './index.module.css';

export interface ProductCardProps {
	data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
	return (
		<Card className={styles.card} bodyStyle={{
			padding: '15px',
			display: 'flex',
			flexDirection: 'column',
		}}>
			<Image src={data.image} className={styles.product_image} />
			<div>
				<span className={styles.product_name}>
					{data.name}
				</span>
				<br/>
				<span className={styles.product_brand}>
					{data.brand}
				</span>
				<br/>
				<span className={styles.product_price}>
					{`R\$ ${data.price}`}
				</span>
			</div>
		</Card>
	);
};
