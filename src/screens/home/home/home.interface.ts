export interface homeInterface { }

export interface homeControllerProps {
  showLoader: boolean;
  pages: number;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  userDetailsApiCall: (() => void)
  data: Array<{
    results?: Array<object> | undefined;
  }> | undefined
}
