import {
  useRecordContext,
} from 'react-admin'

import { TotalsList as ProjectsTotalsList } from '@/views/projects'
import { TableHead } from "@mui/material";

export function CustomerProjectsTotals(props) {
  const record = useRecordContext();

  const Header = () => {
    return <TableHead>
      {/* <TableRow><TableCell colSpan={2}>Projects</TableCell></TableRow> */}
    </TableHead>
  }
  return <div className="sm:w-full md:w-1/2">
    
    <h3>Projects:</h3>
    <ProjectsShow />
    <ProjectsTotalsList
    className="w-full"
    title=""
    actions={null}
    exporter={false}
    disableSyncWithLocation
    grid={{bulkActionButtons: false, 
      header: <Header /> 
    }}
    filter={{customer_id: record.id}} 
    />
    </div>
}