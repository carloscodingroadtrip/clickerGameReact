import React from 'react';

const Header = props => (
	<header className="App-header sticky-top">
		<div className="container">
			<div className="row App-title">
				<div className="col-sm">
					<h4>
						<strong>
							<a className="title-link" href="/">
								Memory Game
							</a>
						</strong>
					</h4>
				</div>
				<div className="col-sm">
					<h4 style={{ color: props.color }}>{props.children}</h4>
				</div>
				<div className="col-sm">
					<h4>
						Score: {props.score} | Top Score: {props.topScore}
					</h4>
				</div>
			</div>
		</div>
	</header>
);

Header.defaultProps = {
	color: 'white',
};

export default Header;
