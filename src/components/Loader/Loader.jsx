import { Blocks } from 'react-loader-spinner';

export const LoaderSpinner = () => {
  return (
    <Blocks
      visible={true}
      height="50"
      width="50"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  );
};
