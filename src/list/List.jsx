// import { searchFilters as filters, } from 'ywemay-ra-erp'
import { SearchInput } from 'react-admin'
import { Grid } from "./Grid";
import { useMediaSize } from 'ywemay-ra-erp'
import { UnifiedList } from "@/unified";
// import { Aside } from './Aside'
import { SimpleList } from "./SimpleList";
import { resource } from "..";


const filters = [
  <SearchInput source="q" alwaysOn />,
];

export function List({ grid, simple, ...props}) {
  const { isSmall } = useMediaSize();

  return  <UnifiedList
    // aside={isSmall ? null : <Aside />} 
    exporter={false}
    schema="salesviews"
    resource={resource}
    filters={filters}
    {...props}
    >
      { isSmall ? <SimpleList {...simple} /> : <Grid {...grid} /> }
  </UnifiedList>
}
