import { count } from 'console';
import { memo, useMemo, useState } from 'react';
import Button from '../common/button';
import FlexBox from '../common/flex-box';
import { Heading } from '../common/heading';
import Input from '../common/input';

function factorial(n: number): number {
	let i = 0;
	while (i < 20000000) i++;
	if (n < 0) {
		return -1;
	}
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

const UseMemo = () => {
	const [counter, setCounter] = useState(1);
	const [name, setName] = useState('');

	const result = useMemo(() => {
		return factorial(counter);
	}, [counter]);

	return (
		<div>
			<Heading
				text="Use Memo"
				description="In this section, Use Memo Hook will be applied to optimize the Heavy Functions"
			/>
			<FlexBox>
				<Button
					text="Decrement"
					onClick={() => setCounter(counter - 1)}
				/>
				<Button
					text="Increment"
					onClick={() => setCounter(counter + 1)}
				/>
			</FlexBox>
			<p>
				Fractroial of {counter} is {result}
			</p>
			<div className="mt-4">
				<Input
					type="text"
					placholder="Enter Name"
					value={name}
					onChange={(e: any) => setName(e.target.value)}
					isFit
				/>
				<DisplayName name={name} />
			</div>
		</div>
	);
};

const DisplayName = memo(({ name }: any) => {
	console.log('Rendered');
	return <p>{`My name is ${name}`}</p>;
});
export default UseMemo;
