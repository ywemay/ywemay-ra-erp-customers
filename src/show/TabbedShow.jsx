import { 
  TabbedShowLayout,
  useShowContext,
} from "react-admin";
import TabMain from './tabs/Main'
import TabPeople from './tabs/People'
// import { TabProducts } from './tabs/Products'
// import { TabOrders } from './tabs/Orders'
// import { TabProjects } from './tabs/Projects'

const Tab = TabbedShowLayout.Tab;

export default function TabbedShow() {
  const { isLoading, error } = useShowContext();
  if (isLoading)  return <div>Loading...</div>
  if (error)  return <div>Error...</div>

  return <TabbedShowLayout>
    <Tab label='ra.action.show'>
      <TabMain />
    </Tab>
    {/* <Tab path="projects" label="projects.projects">
      <TabProjects />
    </Tab>
    <Tab path="orders" label="customers.orders">
      <TabOrders />
    </Tab> */}
    {/* <Tab path="products" label="customers.products">
      <TabProducts />
    </Tab> */}
    <Tab path="contacts" label='contacts.contacts'>
      <TabPeople />
    </Tab>
  </TabbedShowLayout>
}