import { createContext, useContext } from 'react';

export type FeatureFlags = {
  [key: string]: boolean;
};

interface FeatureFlagContextValue<T extends FeatureFlags> {
  flags: T;
  setFlag: (flagKey: keyof T, value: boolean) => void;
}

const FeatureFlagContext = createContext<FeatureFlagContextValue<FeatureFlags> | undefined>(undefined);

export const useFeatureFlags = <T extends FeatureFlags>() => {
  const context = useContext(FeatureFlagContext) as FeatureFlagContextValue<T>;
  if (!context) {
    throw new Error('useFeatureFlags must be used within a FeatureFlagProvider');
  }
  return context;
}

export function useFeatureFlag<T extends FeatureFlags>(key: keyof T): [boolean, (value: boolean) => void] {
  const { flags, setFlag } = useFeatureFlags<T>();
  return [flags[key], (value: boolean) => setFlag(key, value)];
}

export default FeatureFlagContext;
