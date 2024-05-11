import { 
  useRedirect,
} from "react-admin";
import { Icon as ProductsIcon } from '@/views/products';
import { 
  IconButton 
} from '@mui/material'

export function ProductsButton(props) {
  const { id } = props;
  const redirect = useRedirect();

  const showProducts = (e) => {
    e.preventDefault();
    redirect(`/proposals?filter={\"customer_id\":\"${id}\"}`);
  }

  return <IconButton
    color="primary"
    title="See all products by this suppplier"
    onClick={showProducts}
    {...props}
    ><ProductsIcon /></IconButton>
}