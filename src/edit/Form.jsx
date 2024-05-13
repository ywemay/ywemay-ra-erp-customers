import { 
  SimpleForm, 
  required,
} from 'react-admin';
import Icon from '../icon'
import { 
  CompanyNameInput,
  CurrencySelectInput,
  IncotermSelectInput,
  IncotermPortInput,
  NotesInput,
} from "ywemay-ra-erp-inputs";

export const transform = (data) => {
  const { company_name, active, incoterm, port, notes } = data;
  return { company_name, active, incoterm, port, notes };
}

export function Form({management, ...props}) {

  return (
    <SimpleForm {...props}>
      <div className='md:flex md:flex-row gap-3 w-full justify-items-stretch'>
        <Icon sx={{width: 60, height: 60, paddingTop: 1 }} color="primary" />
        <CompanyNameInput />
      </div>

      <div className='md:flex md:flex-row gap-3 w-full justify-items-stretch'>
        <CurrencySelectInput 
          defaultValue="USD"
          validate={[required()]}
          />
        <IncotermSelectInput
          className="w-full"
          defaultValue="FOB"
          validate={[required()]}
          />
        <IncotermPortInput
          className="w-full"
          defaultValue="Shanghai"
          />

      </div>
      {management && <div>
        </div>}
      <div className="w-full">
        <NotesInput />
      </div>
    </SimpleForm>
  );
}
