import React from "react";
import { Divider, Paper, SvgIcon, Typography } from "../../components/";
import logoConfig from "../../components/AppHeader/data";

function Home(props) {
  return (
    <div className="main-container">
      <Paper className="paragraph">
        <Typography variant="h4">
          Welcome to{" "}
          <SvgIcon className="logo">
            <path d={logoConfig}></path>
          </SvgIcon>{" "}
          Design
        </Typography>
        <Divider className="divider" />
        <Typography variant="h6">
          This website is dedicated to introduce Material-UI and React-vis. On
          the side you can see different examples of different components and
          sample code that you can use in your own React projects.
        </Typography>
        <br />
        <Typography variant="h6">
          React (also known as React.js or ReactJS) is a JavaScript library for
          building user interfaces. It is maintained by Facebook and a community
          of individual developers and companies
        </Typography>
        <br />
        <Typography variant="h6">
          Material Design is a design language that Google developed in 2014.
          Expanding on the "card" motifs that debuted in Google Now, Material
          Design uses more grid-based layouts, responsive animations and
          transitions, padding, and depth effects such as lighting and shadows.
        </Typography>
        <br />
        <Typography variant="h6">
          React-vis components are designed to work just like other React
          components. It provides different charts and series components that
          allow users to build graphs and charts appealingly.
        </Typography>
        <br />
        <Typography variant="h6">
          Check out the websties on the top right corner
        </Typography>
      </Paper>
      <Paper className="paragraph">
        <Typography variant="h4">Installation</Typography>
        <Divider className="divider" />
        <Typography variant="h6">Install Material-UI</Typography>
        <div className="code">
          <code>
            npm install @material-ui/core or yarn add @material-ui/core
          </code>
        </div>
        <div className="code">
          <code>
            npm install @material-ui/icons or yarn add @material-ui/icons
          </code>
        </div>
        <br />
        <Typography variant="h6">Install React-vis</Typography>
        <div className="code">
          <code>npm install react-vis or yarn add react-vis</code>
        </div>
      </Paper>
    </div>
  );
}

export default Home;
