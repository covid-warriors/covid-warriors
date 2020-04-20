import React, { memo } from 'react';
import '../style.css';
import intro1 from '../../../assets/img/introOnes.png';

const IntroOne = () => (
	<div className="card">
		<div className="card-body">
			<img className="card-img-top" src={intro1} alt="Intro One" />
			<h5 className="card-title">Dashborad</h5>
			<p className="card-text">On top you can find Item's current status.</p>
			<p className="card-text no-margin">Bottom you can find Category lists.</p>
			<div className="btn-group float-rigth" role="group" aria-label="Basic example">
				<a href="/dashboard" className="btn btn-default">Skip</a>
				<a href="/introTwo" className="btn btn-info">Next</a>
			</div>
		</div>
	</div>
);

export default memo(IntroOne);
