import { Create as RaCreate } from 'react-admin';
import { CompanyEditForm, transform } from './Form'

export const Create = (props) => {
  return <RaCreate 
    transform={transform}
    {...props}
    >
      <CompanyEditForm />
  </RaCreate>
}