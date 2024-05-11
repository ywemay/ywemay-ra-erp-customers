import { 
  CreateButton,
  useRecordContext,
} from "react-admin";
import { Icon, resource } from 'ywemay-ra-erp-people';
export function CreatePeopleButton(params) {

  const record = useRecordContext();

  const state = { 
    record: { 
      customer_id: record.id,
    } 
  }

  return <CreateButton
    resource={resource}
    icon={<Icon />}
    label="actions.new.person"
    state={state}
    {...params}
  />
}
