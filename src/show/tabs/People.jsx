import { CompanyCard } from '../../CompanyCard'
import { useShowContext } from "react-admin";
import { List as People } from "ywemay-ra-erp-people";

export default function TabPeople() {
  const { record, isLoading } = useShowContext();
  if (isLoading) return <></> 
  const { id: customer_id } = record;
  
  return <div>
    <CompanyCard />
    <People 
      filter={{customer_id}}
      resource="people"
      hasCreate={false}
      // filters={undefined}
      exporter={false}
      />
  </div>
}

