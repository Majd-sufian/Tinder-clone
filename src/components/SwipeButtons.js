import React from "react";
import "../style/SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <span class="dot replay">
        <ReplayIcon />
      </span>
      <span class="dot close">
        <CloseIcon />
      </span>
      <span class="dot star">
        <StarRateIcon />
      </span>
      <span class="dot favorite">
        <FavoriteIcon />
      </span>
      <span class="dot flash">
        <FlashOnIcon />
      </span>
    </div>
  );
};

export default SwipeButtons;
