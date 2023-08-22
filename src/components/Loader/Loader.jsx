import { Blocks } from 'react-loader-spinner'

export const LoaderSpinner = () => {
    return (
        <Blocks 
        visible={true}
        height="55"
        width="55"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        />
    );
};