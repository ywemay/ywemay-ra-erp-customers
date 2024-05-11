import {
  useRecordContext,
  Show as RaShow
} from 'react-admin'
import TabbedShow from './TabbedShow'
import { ActionBar } from './ActionBar'
import { resource } from "..";

function ShowTitle() {
  const record = useRecordContext();
  return <span>{record && record.name}</span>
}

export function Show(props) {
  return <RaShow
    title={<ShowTitle />}
    actions={<ActionBar />}
    resource={resource}
    queryOptions={{ meta: { 
      columns: "*,addresses(*),contacts(*)".split(',') 
    } }}
    {...props}
    >
      <TabbedShow />
  </RaShow>
}