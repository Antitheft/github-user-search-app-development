import React from "react";
import Moment from "react-moment";
import "./ProfileCard.css";

const ProfileCard = ({ user }) => {
	return (
		<div className="profile-card">
			<div className="profile-header">
				<img className="avatar" src={user.avatar_url} alt="" />
				<div className="profile-user">
					{/* <h2>{user.name}</h2> */}
					<h2>The Octocat</h2>
					<p>{user.login}</p>
					<span>Joined </span>
					<Moment format="DD MMM YYYY">{user.created_at}</Moment>
				</div>
			</div>
			<div className="profile-bio">This profile has no bio.</div>
			<div className="profile-stats">
				<div className="stat">
					<h3>Repos</h3>
					<p>{user.public_repos}</p>
				</div>
				<div className="stat">
					<h3>Followers</h3>
					<p>{user.followers}</p>
				</div>
				<div className="stat">
					<h3>Following</h3>
					<p>{user.following}</p>
				</div>
			</div>
			<div className="profile-footer"></div>
		</div>
	);
};

export default ProfileCard;