import React from 'react';

const PhotoGrid = props => (
	<div className="container">
		<div className="row">
			{props.list.map((item, index) => (
				<div className="my-4 col-3 text-center" key={index}>
					<img
						src={item.image}
						alt={item.id}
						id={item.id}
						onClick={props.onClick}
						className="img-thumbnail"
					/>
				</div>
			))}
		</div>
	</div>
);

export default PhotoGrid;
