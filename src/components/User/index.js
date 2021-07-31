import React from 'react';

const User = ({ id, last_name, name }) => {
	return (
		<div>
			<h2>{`${id} - ${name} ${last_name}`}</h2>
		</div>
	);
};

export default User;
