import { createContext } from 'react';
import { FeatureFlags, FeatureFlagContextValue } from '../store/types';

export const FeatureFlagContext = createContext<
  FeatureFlagContextValue<FeatureFlags> | undefined
>(undefined);
