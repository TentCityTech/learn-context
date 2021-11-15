import { OPEN_MODAL } from './modalConstants';
import FoundersDays from '../FoundersDays';

export const modalConfig = {
  [OPEN_MODAL.FOUNDERS_DAY]: (props) => <FoundersDays {...props} />,
};
