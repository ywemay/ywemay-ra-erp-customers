import { Edit as RAEdit, useRecordContext } from 'react-admin';
import { Form, transform } from './Form'

const Title = () => {
  const { company_name } = useRecordContext() || { company_name: ' '};
  return company_name;
}

export const Edit = () => {
  return <>
    <RAEdit 
      className="w-full"
      title={<Title />}
      redirect={false}
      resource="customers"
      transform={transform}
      >
      <Form />
    </RAEdit>
  </>
}

