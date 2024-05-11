import { 
  CreateButton,
  useRecordContext,
} from "react-admin";
import PlaceOrderIcon from '@mui/icons-material/NoteAltOutlined';

function get_rate(c) {
  if (c === 'USD') return 0.1394;
  if (c === 'EUR') return 0.1291;
  return 1;
}

export function CreateOrderButton(params) {

  const record = useRecordContext();

  const state = { record: { 
      customer_id: record.id,
      order_date: new Date(),
      exchange_rate: get_rate(record.currency),
      exchange_currency: record.currency,
      incoterm: record.incoterm,
      port: record.port
    } 
  }

  return <CreateButton
    resource="orders"
    icon={<PlaceOrderIcon />}
    label="actions.new.order"
    state={state}
  />
}