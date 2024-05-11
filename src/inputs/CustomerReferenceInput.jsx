import { 
  ReferenceInput,
  AutocompleteInput,
 } from "react-admin";

const filterToQuery = searchText => ({ 'company_name@ilike': `%${searchText}%` });

export function CustomerReferenceInput({ autocomplete, ...props }) {

  return <ReferenceInput
    source="customer_id"
    reference="customers"
    {...props}
    >
    <AutocompleteInput
      filterToQuery={filterToQuery}
      optionText={r => `${r.id} - ${r.company_name}`}
      label="customers.customer"
      {...autocomplete}
      />
  </ReferenceInput>
}