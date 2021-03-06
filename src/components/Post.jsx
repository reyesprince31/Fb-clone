import React from "react";
import { Avatar } from "@material-ui/core";
import "assets/css/Post.css";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineneIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { ExpandMoreOutlined } from "@material-ui/icons";

function Post({ profilePic, image, username, Timestamp, message }) {
	return (
		<div className="post">
			<div className="post__top">
				<Avatar src={profilePic} className="post__avatar" />
				<div className="post__topInfo">
					<h3>{username}</h3>
					<p>{new Date(Timestamp?.toDate()).toDateString()}</p>
				</div>
			</div>
			<div className="post__bottom">
				<p>{message}</p>
			</div>

			<div className="post__image">
				<img src={image} alt=""></img>
			</div>

			<div className="post__options">
				<div className="post__option">
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className="post__option">
					<ChatBubbleOutlineneIcon />
					<p>Comment</p>
				</div>
				<div className="post__option">
					<NearMeIcon />
					<p>Share</p>
				</div>
				<div className="post__option">
					<AccountCircleIcon />
					<ExpandMoreOutlined />
				</div>
			</div>
		</div>
	);
}

export default Post;
