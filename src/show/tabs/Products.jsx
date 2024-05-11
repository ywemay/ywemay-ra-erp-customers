import {
  useRecordContext,
} from 'react-admin';
import { List } from "@/views/proposals"
import { CompanyCard } from '../../CompanyCard'

export function TabProducts (props) {
  const record = useRecordContext();
  return <div>
    <CompanyCard />
    <List 
      resource="proposals"
      grid={{hideCustomer: true}}
      hasCreate={false}
      filter={{ customer_id: record.id }}
    />
  </div>
}