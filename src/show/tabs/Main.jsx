import { CompanyCard } from '../../CompanyCard'
import {
  TextField,
} from 'react-admin'
// import SalesRepresentatives from '../SalesRepresentatives'
import { 
  MainDetails, 
  ExtendedDetails, 
  LinksButtonsGroup } from '@/views/customers/show/components'

import { Divider } from "@mui/material";


export default function TabMain() {

  return <div>
    <div className="flex flex-col md:flex-row w-full gap-3">
      <CompanyCard className="flex flex-row w-full md:w-1/2" />
      <MainDetails />
    </div>
    <LinksButtonsGroup />
    <div>
      <Divider className="m-3" />
      <TextField source="notes" />
    </div>
    <ExtendedDetails />
  </div>
}