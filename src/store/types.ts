import { CONFIGURED_BY_FUNCTION } from "./constants";

export type ConfiguredFlagSignature = {
  _configured: typeof CONFIGURED_BY_FUNCTION;
};

export type FeatureFlagsBase = {
  [key: string]: boolean;
};

export type ConfiguredFeatureFlags = FeatureFlagsBase & ConfiguredFlagSignature;

export enum FeatureFlagActions {
  SET_FLAG = 'SET_FLAG',
}

export interface SetFlagAction {
  type: FeatureFlagActions.SET_FLAG;
  payload: {
    key: string;
    value: boolean;
  };
}

export type FeatureFlagAction = SetFlagAction;

export interface FeatureFlagContextValue<T extends FeatureFlagsBase> {
  state: T;
  dispatch: React.Dispatch<FeatureFlagAction>;
}
