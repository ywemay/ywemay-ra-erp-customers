import { 
  CreateButton,
  useRecordContext,
} from "react-admin";
import { Icon } from "ywemay-ra-erp-proposals";

export function CreateProposalButton(params) {

  const { id: customer_id } = useRecordContext();

  const state = { 
    record: { 
      customer_id,
    }, 
    redirect: `customers/${customer_id}/show/2`,
  }

  return <CreateButton
    resource="proposals"
    icon={<Icon />}
    label="actions.new.proposal"
    state={state}
    {...params}
  />
}