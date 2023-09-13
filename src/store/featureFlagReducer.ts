import { FeatureFlagsBase, FeatureFlagAction } from './types';
import { FeatureFlagActions } from './actionTypes';

export function featureFlagsReducer(
  state: FeatureFlagsBase,
  action: FeatureFlagAction
): FeatureFlagsBase {
  switch (action.type) {
    case FeatureFlagActions.SET_FLAG:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
}
