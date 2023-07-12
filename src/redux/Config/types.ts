export interface ConfigSlice {
  loading: boolean,
  error: boolean,
  config: {
    id?: number,
    logo?: string,
    mainColor?: string,
    hasUserSection?: boolean
  }
}

