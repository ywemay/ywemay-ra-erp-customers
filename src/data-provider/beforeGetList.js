import { prepSearch } from 'ywemay-ra-erp'

export async function beforeGetList(params) {
  prepSearch(params, 'company_name'.split(','));
  return params;
}