export type FeatureFlags = {
  [key: string]: boolean;
};

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

export interface FeatureFlagContextValue<T extends FeatureFlags> {
  state: T;
  dispatch: React.Dispatch<FeatureFlagAction>;
}
