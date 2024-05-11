import {
  useRecordContext,
} from 'react-admin'
import { List as People } from "@/views/people";
import { List as Projects } from "@/views/projects";
// import { List as Orders } from "@/views/orders";
// import { List as Proposals } from "@/views/proposals"
import { NoData, Section, RowSection } from "ywemay-ra-erp";

export function ExtendedDetails() {
  const { id: customer_id } = useRecordContext() || {};

  const common = {
    aside: false,
    title: ' ',
    grid: {hideCustomer: true, bulkActionButtons: false, hide: { customer: true }},
    filter: {customer_id},
    perPage: 6,
    filters: false,
    actions: false,
    hasCreate: false,
    exporter: false,
    pagination: false,
    empty: <NoData />
  }

  return <>
    <RowSection>
      <Section label='people.people'>
        <People 
          resource="people"
          {...common}
          />
      </Section>
      <Section label='projects.project'>
        <Projects {...common} />
      </Section>
    </RowSection>
    {/* <RowSection>
      <Section label='sales.orders'>
        <Orders {...common} />
      </Section>
    </RowSection>
    <RowSection>
      <Section label='proposals.proposals'>
        <Proposals
          {...common}
          resource="proposals"
          />
      </Section>
    </RowSection> */}
  </>
}