import { ButtonGroup } from '@mui/material'
import { FilterButton } from "ywemay-ra-erp";
import { useRecordContext } from "react-admin";

export function LinksButtonsGroup(props) {
  const { id: customer_id } = useRecordContext() || {};
  return <ButtonGroup 
    className="p-2"
    variant="outlined" {...props}>
    <FilterButton resource="proposals" label="proposals.proposals" filter={{customer_id}} />
    <FilterButton resource="orders" label="orders.orders" filter={{customer_id}} />
    <FilterButton resource="projects" label="projects.projects" filter={{customer_id}} />
  </ButtonGroup>
}