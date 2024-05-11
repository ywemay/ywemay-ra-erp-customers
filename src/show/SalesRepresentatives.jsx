import {
  ArrayField,
  SingleFieldList,
  ReferenceField
} from "react-admin";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function SalesRepresentatives() {
  return <div className="flex flex-row gap-1">
    <SupportAgentIcon fontSize="small" />
    <ArrayField source="customer_person">
      <SingleFieldList linkType={false} className="gap-3">
        <ReferenceField reference="users" source="user_id" />
      </SingleFieldList>
    </ArrayField>
  </div>
}