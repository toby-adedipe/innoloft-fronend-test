export interface DetailsType {
  id?: number, 
  name?: string
}
export interface GetDataPayload {
  id: string,
}
export interface UpdateDataPayload {
  id: string,
  description: string,
  categories: DetailsType[],
  businessModels: DetailsType[],
  trl: string,
  video: string
}

export interface ProductSlice {
  loading: boolean,
  productData: ProductType,
  error: boolean,
}

export interface ProductType {
  id?: number;
  name?: string;
  description: string;
  picture?: string;
  type?: {
    id: number;
    name: string;
  };
  categories: {
    id: number;
    name: string;
  }[];
  implementationEffortText?: null | string;
  investmentEffort?: string;
  trl?: {
    id: number;
    name: string;
  };
  video?: string;
  user?: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: number;
    profilePicture: string;
    position: string;
  };
  company: {
    name?: string;
    logo?: string;
    address: {
      country?: {
        name: string;
      };
      city?: {
        name: string;
      };
      street?: string;
      house?: string;
      zipCode?: string;
      longitude: string;
      latitude: string;
    };
  };
  businessModels: {
    id: number;
    name: string;
  }[];
}