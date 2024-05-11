import icon from './icon'
import { List as list } from "./list";
import create from './edit/Create'
import {Edit as edit } from "./edit/Edit";
import { Show as show } from './show';

const name = 'customers';
export const resource = name;

export const customers = {
  name,
  list,
  options: { label: 'customers.customers' },
  edit,
  show,
  create,
  icon,
  recordRepresentation: (record) => `${record.company_name}`
}