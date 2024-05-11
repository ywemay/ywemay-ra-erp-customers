import { CompanyCard } from '../../CompanyCard'
import { useParams } from "react-router";
import { 
  List as Projects,
  //ProjectsPieChart 
} from "@/views/projects";

import { CreateProjectButton } from '../../buttons'
import { useRecordContext } from "react-admin";

export function ProjectEmpty() {
  return <div>
    <CreateProjectButton />
  </div>
}

export function TabProjects() {
  const { id: customer_id } = useParams()
  const { record, isLoading } = useRecordContext()

  const grid = {
    rowClick: "show",
    hideCustomer: true,
  }

  return <div>
    <div className="md:flex md:flex-row">
      <div className="w-full">

      <CompanyCard />
      </div>
      {/* {!isLoading && <div className="w-1/3"><ProjectsPieChart
        resource="projects_totals"
        scale={0.5}
        filter={{ customer_id }}
        /></div> } */}
    </div>
    <Projects 
      disableSyncWithLocation
      empty={<ProjectEmpty />}
      filter={{customer_id}}
      filters={undefined}
      exporter={false}
      actions={false}
      grid={grid}
      aside={false}
      />
  </div>
}

