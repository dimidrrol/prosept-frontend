import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { rootActions } from '../store/rootActions';
//const rootActions = { ...actions_1, ...actions_2 }, where actions are from different slices

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions;
