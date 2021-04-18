import React from "react";
import "assets/css/Header.css";

//import from icons
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StoreOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//import from core
import { Avatar, IconButton } from "@material-ui/core";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
					alt="fb-img"
				/>
				<div className="header__input">
					<SearchIcon />
					<input placeholder="Search Facebook" type="text" />
				</div>
			</div>
			<div className="header__center">
				<div className="header__option header__option--active">
					<HomeIcon fontSize="large" />
				</div>
				<div className="header__option">
					<FlagIcon fontSize="large" />
				</div>
				<div className="header__option">
					<SubscriptionOutlinedIcon fontSize="large" />
				</div>
				<div className="header__option">
					<StorefrontOutlinedIcon fontSize="large" />
				</div>
				<div className="header__option">
					<SupervisedUserCircleIcon fontSize="large" />
				</div>
			</div>
			<div className="header__right">
				<div className="header__info">
					<Avatar />
					<h4>Prince Reyes</h4>
				</div>

				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
