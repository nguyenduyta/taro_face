import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core'
// @material-ui/icons
// core components
import Header from "./Header/Header.jsx";
import HeaderLinks from "./Header/HeaderLinks.jsx";
import Parallax from "./Parallax/Parallax.jsx";
import Footer from "./Footer/Footer.jsx";
// sections for this page

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Layout extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Taro's Face"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <Grid container>
              <Grid item>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Taro's Face</h1>
                  <h3 className={classes.subtitle}>
                    Learn in active way
                  </h3>
                </div>
              </Grid>
            </Grid>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Layout);
