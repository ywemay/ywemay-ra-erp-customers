import { 
  CreateButton,
  useRecordContext,
} from "react-admin";
import { Icon as PlaceProjectIcon } from '@/views/projects';

export function CreateProjectButton(params) {

  const record = useRecordContext();

  const state = { record: { 
      customer_id: record.id,
      date: new Date(),
      // status: 'draft',
      // incoterm: record.incoterm,
      // port: record.port
    } 
  }

  return <CreateButton
    resource="projects"
    icon={<PlaceProjectIcon />}
    label="actions.new.project"
    state={state}
  />
}