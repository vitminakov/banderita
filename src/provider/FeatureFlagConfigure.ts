import { FeatureFlags } from '../store/types';

interface FeatureFlagConfiguration {
  defaultFlags?: FeatureFlags;
}

export function configureFeatureFlag<T extends FeatureFlags>(
  config?: FeatureFlagConfiguration
): T {
  const defaultFlags: FeatureFlags = config?.defaultFlags || {};
  return defaultFlags as T;
}
