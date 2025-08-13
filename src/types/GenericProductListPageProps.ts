import { ProductCardProps } from '@/types/product';

export interface GenericProductListPageProps {
  fetchData: () => Promise<ProductCardProps[]>;
  pageTitle: string;
  basePath: string;
  errorMessage: string;
}
