import {
  useRecordContext,
} from 'react-admin'
import {
  DetailLayout,
  IDField,
  IncotermField,
  IncotermPortField,
  ProposalsCountField,
  OrdersCountField,
} from 'ywemay-ra-erp';

export function MainDetails(params) {
  const record = useRecordContext();
  return <div className="flex flex-col sm:flex-row sm:w-full gap-3">
    <DetailLayout className='w-full sm:w-1/2'>
      <IDField />
      <IncotermField />
      <IncotermPortField />
    </DetailLayout>
    <DetailLayout className='w-full sm:w-1/2'>
      <ProposalsCountField />
      <OrdersCountField />
    </DetailLayout>
  </div>
}
