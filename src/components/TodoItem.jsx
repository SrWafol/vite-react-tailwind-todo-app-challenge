import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            {/* <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
                <IconCheck/>
            </button> */}
            <button
                className={`${completed ? "flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    : "inline-block h-5 w-5 flex-none rounded-full border-2"}`}>
                {
                    completed && <IconCheck />
                }
            </button>
            <p className="grow text-gray-600"> {title} </p>
            <button className="flex-none">
                <IconCross />
            </button>
        </article >
    );
};

export default TodoItem;
