import React, { useReducer } from 'react';
import { FeatureFlagContext } from './FeatureFlagContext';
import { FeatureFlags } from '../store/types';
import { featureFlagsReducer } from '../store/featureFlagReducer';

interface FeatureFlagProviderProps<T extends FeatureFlags> {
  initialFlags: T;
  children: React.ReactNode;
}

export function FeatureFlagProvider<T extends FeatureFlags>({
  initialFlags,
  children,
}: FeatureFlagProviderProps<T>) {
  const [state, dispatch] = useReducer(featureFlagsReducer, initialFlags);

  return (
    <FeatureFlagContext.Provider value={{ state, dispatch }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
