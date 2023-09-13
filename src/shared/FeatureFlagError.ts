export enum FeatureFlagErrorCodes {
  NO_CONTEXT_PROVIDER = 'NO_CONTEXT_PROVIDER',
  FLAG_NOT_FOUND = 'FLAG_NOT_FOUND',
}

export class FeatureFlagError extends Error {
  code: FeatureFlagErrorCodes;

  constructor(message: string, code: FeatureFlagErrorCodes) {
    super(message);
    this.name = 'FeatureFlagError';
    this.code = code;

    Object.setPrototypeOf(this, FeatureFlagError.prototype);
  }
}
