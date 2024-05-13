import { Create as RaCreate } from 'react-admin';
import { Form, transform } from './Form'

export const Create = (props) => {
  return <RaCreate 
    transform={transform}
    {...props}
    >
      <Form />
  </RaCreate>
}