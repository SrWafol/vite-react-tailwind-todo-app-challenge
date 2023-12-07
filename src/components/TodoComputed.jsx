const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
    return (
        <section className="flex justify-between bg-white px-4 py-4 rounded-b-md dark:bg-gray-800 transition-all duration-1000">
          <span className="text-gray-400">{computedItemsLeft} item left</span>
          <button className="text-gray-400" onClick={clearCompleted}>Clear Completed</button>
        </section>
    );
 }
 export default TodoComputed;