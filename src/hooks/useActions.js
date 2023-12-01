import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { rootActions } from '../store/rootActions';

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions;
