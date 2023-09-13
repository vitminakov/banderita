import { CONFIGURED_BY_FUNCTION } from '../store/constants';
import { FeatureFlagsBase, ConfiguredFlagSignature } from '../store/types';

interface FeatureFlagConfiguration {
  defaultFlags?: FeatureFlagsBase;
}

export function configureFeatureFlag<T extends FeatureFlagsBase>(
  config?: FeatureFlagConfiguration
): T & ConfiguredFlagSignature {
  const defaultFlags: FeatureFlagsBase = config?.defaultFlags || {};
  return {
    ...defaultFlags,
    _configured: CONFIGURED_BY_FUNCTION
  } as T & ConfiguredFlagSignature;
}