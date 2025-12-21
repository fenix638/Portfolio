export default function Loader({ text = "Loading..." }) {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div
                className="h-10 w-10 animate-spin rounded-full
                border-4 border-purple-500 border-t-transparent"
            />
            <p className="mt-4 text-sm text-gray-400">{text}</p>
        </div>
    );
}
