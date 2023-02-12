import { forwardRef } from 'react';


const Input = forwardRef((props, ref) => {
	return <input {...props} ref={ref} />;
});

export default Input