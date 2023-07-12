export interface TrlType {
  id: number, 
  name: string
}

export interface TrlSlice {
  trlLoading: boolean,
  trlList: TrlType[],
  trlError: boolean,
}

