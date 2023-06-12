'use client'
import { useState, useCallback, useEffect } from 'react';
import styles from './page.module.css'
import { Layout, Typography, List } from 'antd';
import Product from './types/product';
import HTTP from './services/HTTP';
import ProductCard from './components/productCard';
import ActionButton from './components/actionButton';

const { Header, Content } = Layout;

export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);
  const [initLoading, setInitLoading] = useState(true);

  const fetchProducts = useCallback(() => {
    HTTP.get('/products')
      .then((response: any) => {
        setInitLoading(false);
        const sortedProducts = response.data.sort((a: Product, b: Product) => {
          return a.createdAt > b.createdAt ? -1 : 1;
        });
        setProducts(sortedProducts);
      });
  }, []);

  useEffect(() => fetchProducts(), []);

  return (
    <main className={styles.main}>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Typography>
            <Typography.Title level={3} className={styles.logo}>
              Products
            </Typography.Title>
          </Typography>
        </Header>

        <Content className={styles.content}>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 5,
              lg: 6,
              xl: 8,
              xxl: 12,
            }}
            dataSource={products}
            renderItem={(item: Product) => (
              <List.Item>
                <ProductCard data={item} />
              </List.Item>
            )}
          >
          </List>
        </Content>
      </Layout>
      <ActionButton />
    </main>
  )
};
