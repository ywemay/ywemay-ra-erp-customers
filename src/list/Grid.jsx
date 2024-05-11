import {
  Datagrid,
  useListContext,
} from 'react-admin';
import {
  IDField,
  CompanyNameField,
  IncotermField,
  IncotermPortField,
  ProposalsCountField,
  OrdersCountField,
} from 'ywemay-ra-erp';

export const Grid = (props) => {

  const { isLoading } = useListContext();
  if (isLoading) return <></>

  const isRowSelectable = (r) => {
    if (r.orders_count > 0) return false;
    return true;
  }

  return <Datagrid 
    rowClick='show'
    isRowSelectable={isRowSelectable}
    {...props}
    >
    <IDField />
    <CompanyNameField />
    <IncotermField />
    <IncotermPortField />
    <ProposalsCountField />
    <OrdersCountField />
  </Datagrid>
}