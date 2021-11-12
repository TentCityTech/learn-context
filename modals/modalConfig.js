import { modalNames } from './modalConstants';
import FoundersDays from '../components/FoundersDays';

export const modalConfig = {
  [modalNames.FOUNDERS_DAY]: (props) => <FoundersDays {...props} />
}