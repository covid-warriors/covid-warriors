import React, { memo } from 'react';
import '../style.css';
import intro1 from '../../../assets/img/introTwo.png';

const IntroTwo = () => (
	<div className="card intro-card-2">
		<div className="card-body">
			<img className="card-img-top" src={intro1} alt="Intro One" />
			<h5 className="card-title">Inside Category</h5>
			<p className="card-text">On top you can find Item lists with details.</p>
			<p className="card-text no-margin">Bottom you can find add new item button.</p>
			<div className="btn-group float-rigth" role="group" aria-label="Basic example">				
				<a href="/introOne" className="btn btn-default">Back</a>
				<a href="/dashboard" className="btn btn-info">Proceed to your dashboard</a>
			</div>
		</div>
	</div>
);

export default memo(IntroTwo);
