import {
  EditButton,
  useShowContext,
  TopToolbar,
} from 'react-admin'
import { 
  CreateOrderButton,
  CreateProjectButton,
  CreateProposalButton,
  CreatePeopleButton,
} from "../buttons";

export function AdditionalButtons() {
  return <div className="additional-buttons">
    <CreateProjectButton />
    <CreateOrderButton />
    <CreateProposalButton />
    <CreatePeopleButton />
  </div>
}

export function ActionBar() {
  const { isLoading, record } = useShowContext();
  console.log(record)
  if (isLoading ) {
    return <TopToolbar>Loading...</TopToolbar>;
  }

  return <TopToolbar>
    { record.orders_count === 0 &&
    <EditButton resource="customers" /> }
    <AdditionalButtons />
  </TopToolbar>
}