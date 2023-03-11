import React, { memo, useState, useCallback } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import Button from '../common/button';
import { Heading } from '../common/heading';
import { ListData } from '../mock/static-data';

type TodoProps = {
	todos: string[];
	deleteItem: Function;
};

const UseCallBack = () => {
	const [count, setCount] = useState(0);
	const [todo, setTodo] = useState<string[]>(ListData);

	const deleteItem = useCallback(
		(item: string) => {
			setTodo(
				todo.filter((t) => {
					return t !== item;
				}),
			);
		},
		[todo],
	);

	return (
		<div>
			<Heading
				text="Use callback"
				description="In this section, Use Callback hook will be applied to optimize the Heavy Functions."
			/>
			<Button
				text="Increase Count"
				onClick={() => setCount(count + 1)}
			/>
			<p>Count is {count}</p>
			<div className="mt-4 border-t border-gray-600 pt-3">
				<TodoList
					todos={todo}
					deleteItem={deleteItem}
				/>
			</div>
		</div>
	);
};

const TodoList: React.FC<TodoProps> = memo(({ todos, deleteItem }) => {
	console.log('Rendered');
	return (
		<>
			<h2 className="text-xl font-bold">Todos</h2>
			<ul className="mt-3 space-y-6">
				{todos.map((todo, index) => (
					<li
						className="flex mb-7"
						key={index}
					>
						⚪️ {todo}
						<span
							className="bg-gray-700 px-3 py-1 rounded-md ml-2 hover:bg-red-500 cursor-pointer transition-all duration-200 ease-in-out"
							onClick={() => deleteItem(todo)}
						>
							<BsFillTrashFill />
						</span>
					</li>
				))}
			</ul>
		</>
	);
});

export default UseCallBack;
