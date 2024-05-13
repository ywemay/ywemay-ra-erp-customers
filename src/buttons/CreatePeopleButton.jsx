import { 
  CreateButton,
  useRecordContext,
} from "react-admin";
// import { Icon, resource } from 'ywemay-ra-erp-people';
import Icon from '@mui/icons-material/People'

export function CreatePeopleButton(params) {

  const record = useRecordContext();

  const state = { 
    record: { 
      customer_id: record.id,
    } 
  }

  return <CreateButton
    resource='people'
    icon={<Icon />}
    label="actions.new.person"
    state={state}
    {...params}
  />
}
