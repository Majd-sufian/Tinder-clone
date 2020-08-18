import React from "react";
import "../style/Header.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className="header">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        {backButton ? (
          <Grid className="header__icon">
            <ArrowBackIcon
              onClick={() => history.replace(backButton)}
              fontSize="large"
            />
          </Grid>
        ) : (
          <Grid className="header__icon">
            <PersonIcon fontSize="large" />
          </Grid>
        )}
        <Grid>
          <Link to="/">
            <img
              className="header__logo header__icon"
              src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
              alt=""
            />
          </Link>
        </Grid>
        <Grid className="header__icon">
          <Link to="/chat">
            <QuestionAnswerIcon fontSize="large" className="messeges" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
