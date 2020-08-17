import React from "react";
import "../style/Header.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

function Header() {
  return (
    <div className="header">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid>
          <PersonIcon />
        </Grid>
        <Grid>
          <img
            className="header__logo"
            src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
            alt=""
          />
        </Grid>
        <Grid>
          <QuestionAnswerIcon />
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
