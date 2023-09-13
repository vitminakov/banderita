import React, { useReducer } from 'react';
import { FeatureFlagContext } from './FeatureFlagContext';
import { featureFlagsReducer } from '../store/featureFlagReducer';
import { ConfiguredFeatureFlags } from '../store/types';

interface FeatureFlagProviderProps<T extends ConfiguredFeatureFlags> {
  initialFlags: T;
  children: React.ReactNode;
}

export function FeatureFlagProvider<T extends ConfiguredFeatureFlags>({
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