import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import BoltIcon from '@mui/icons-material/Bolt';
import ProspectIcon from '@mui/icons-material/Diversity3';

export const Aside = () => (
  <div className="p-3">
    <SavedQueriesList />
    <FilterLiveSearch />
    <FilterList label="Active" icon={<BoltIcon />}>
      <FilterListItem label="Yes" value={{ active: true }} />
      <FilterListItem label="No" value={{ active: false }} />
    </FilterList>
    <FilterList label="Propspect" icon={<ProspectIcon />}>
      <FilterListItem label="Yes" value={{ is_prospect: true }} />
      <FilterListItem label="No" value={{ is_prospect: false }} />
    </FilterList>
  </div>
);