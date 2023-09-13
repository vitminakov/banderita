import { useContext } from 'react';
import { FeatureFlagContext } from './FeatureFlagContext';
import { FeatureFlagsBase, FeatureFlagContextValue } from '../store/types';
import { FeatureFlagActions } from '../store/actionTypes';
import {
  FeatureFlagError,
  FeatureFlagErrorCodes,
} from '../shared/FeatureFlagError';

export function useFeatureFlags<T extends FeatureFlagsBase>(): [
  T,
  (key: keyof T, value: boolean) => void
] {
  const context = useContext(
    FeatureFlagContext
  ) as unknown as FeatureFlagContextValue<T>;
  if (!context) {
    throw new FeatureFlagError(
      'useFeatureFlags must be used within a FeatureFlagProvider. Ensure that the context provider is set up correctly.',
      FeatureFlagErrorCodes.NO_CONTEXT_PROVIDER
    );
  }

  const setFlag = (key: keyof T, value: boolean) => {
    context.dispatch({
      type: FeatureFlagActions.SET_FLAG,
      payload: { key: key as string, value },
    });
  };

  return [context.state, setFlag];
}

export function useFeatureFlag<T extends FeatureFlagsBase>(key: keyof T): boolean {
  const [flags] = useFeatureFlags<T>();
  return flags[key];
}
