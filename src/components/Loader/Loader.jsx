import { Blocks } from 'react-loader-spinner';

export const LoaderSpinner = () => {
  return (
    <Blocks
      visible={true}
      height="60"
      width="60"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  );
};
