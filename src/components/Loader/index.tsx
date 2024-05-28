interface ILoaderProps {
    loading: boolean;
}

const Loader = (props: ILoaderProps) => {
    const { loading } = props;

    return loading ? (
        <div className="py-[2px] px-10 w-full mx-auto my-0 rounded-xl bg-opacity-20 bg-gray5 flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white " />
        </div>
    ) : null;
};

export default Loader;
