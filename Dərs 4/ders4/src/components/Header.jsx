import {memo} from 'react';
function Header({ text }) {
	console.log('header component render edildi')
	return (
		<header>{text} Komponenti</header>
	)
}

export default memo(Header)