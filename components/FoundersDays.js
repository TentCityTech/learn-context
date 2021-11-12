import { useContext } from 'react';
import { modalNames } from '../modals/modalConstants';
import { ModalContext } from './ModalContext';

const FoundersDays = (props) => {
  const { setModals } = useContext(ModalContext);
  const { name, lastName, ibc } = props;

  return (
    <button onClick={setModals({active: true, })}></button>
<h1>hello from Founders Days</h1>;

{users.map((user) => {
  <button {setModals({active: true, current: user, name: modalNames.FOUNDERS_DAY})}
})}


  )
};

export default FoundersDays;
