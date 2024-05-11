import {
  SimpleList as RASimpleList,
} from 'react-admin';
import {
  Card,
} from 'ywemay-ra-erp'

import ProductsIcon from '@mui/icons-material/Widgets'
import OrdersIcon from '@mui/icons-material/AssignmentTurnedIn';

export const SmallListCard = (r) => {
  const { company_name, alias } = r;
  return <Card className="flex flex-row justify-between w-full">
    <div className="w-full m-0">
      <h3>{company_name}</h3>
      {alias && <div>{alias}</div>}
      <div>
        <ProductsIcon fontSize="small" /> {r.proposals_count} &nbsp;
        <OrdersIcon fontSize="small" /> {r.orders_count}
      </div>
    </div>
  </Card>
}

export const SimpleList = (props) => {
  return <RASimpleList 
    linkType="show"
    primaryText={SmallListCard}
    {...props}
    />
}