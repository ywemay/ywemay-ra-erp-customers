import { CompanyCard } from '../../CompanyCard'
import { useParams } from "react-router";
import { List as Orders } from "@/views/orders";

import { CreateOrderButton } from '../../buttons'

export function OrderEmpty() {
  return <div>
    <CreateOrderButton />
  </div>
}

export function TabOrders() {
  const { id: customer_id } = useParams()

  const grid = {
    rowClick: "show",
    hideCustomer: true,
  }

  return <div>
    <CompanyCard />
    <Orders 
      disableSyncWithLocation
      empty={<OrderEmpty />}
      hasCreate={false}
      filter={{customer_id}}
      filters={undefined}
      exporter={false}
      grid={grid}
      />
  </div>
}

