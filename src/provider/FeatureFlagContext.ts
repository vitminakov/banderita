import { createContext } from 'react';
import { FeatureFlagsBase, FeatureFlagContextValue } from '../store/types';

export const FeatureFlagContext = createContext<
  FeatureFlagContextValue<FeatureFlagsBase> | undefined
>(undefined);
