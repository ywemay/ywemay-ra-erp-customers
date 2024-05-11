import {
  ArrayField,
  useListContext,
  useRecordContext,
} from 'react-admin'

import { Typography } from '@mui/material';
import { CardAddresses } from "@/views/addresses";
import { ContactTypeIcon } from "@/views/contacts";
import { CardIcon } from "./icon";

const ContactsFileds = () => {
    const { data } = useListContext();
    return (
        <ul>
            {data.map(c => (
                <li key={c.id}><ContactTypeIcon {...c} /> {c.val}</li>
            ))}
        </ul>
    );
};

export function CompanyCardContacts() {
  return <div className="flex flex-row gap-1 px-2">
    <ArrayField source="contacts" sort={{ field: 'contact_type', order: 'ASC' }}>
      <ContactsFileds />
    </ArrayField>
  </div>
}

export function CompanyCardName() {
  const record = useRecordContext();
  return <Typography variant="h5" className="flex flex-row gap-2 text-lg">
    {record && record.company_name} 
  </Typography>
}

export function CompanyCard (props) {
  return <div className="flex flex-row w-full" {...props}>
    <CardIcon />
    <div className="p-1 m-1">
      <CompanyCardName />
      <CompanyCardContacts />
      <CardAddresses source="addresses" />
    </div>
  </div>
}