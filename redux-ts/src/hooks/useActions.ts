import { useDispatch } from 'react-redux';
import { bindActionsCreators } from 'redux';
import { actionsCreatoris } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionsCreators(actionCreators, dispatch);
  // { searchRepositories: dispatch(searchRepositories)}
};
