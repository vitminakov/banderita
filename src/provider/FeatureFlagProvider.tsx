import React, { useState, ReactNode } from 'react';
import FeatureFlagContext, { FeatureFlags } from './FeatureFlagContext';

interface FeatureFlagProviderProps<T extends FeatureFlags> {
  initialFlags: T;
  children: ReactNode;
}

export function FeatureFlagProvider<T extends FeatureFlags>({
  initialFlags,
  children,
}: FeatureFlagProviderProps<T>) {
  const [flags, setFlags] = useState<T>(initialFlags);

  const setFlag = (flagKey: keyof T, value: boolean) => {
    setFlags((prevFlags) => ({
      ...prevFlags,
      [flagKey]: value,
    }));
  };

  return (
    <FeatureFlagContext.Provider value={{ flags, setFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
