import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '10px 0px',
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 100,
      green: 20,
      blue: 20,
      alpha: 50
    }
  }

  handleChangeRed = (event, value) => {
    this.setState({ red : value });
  }

  handleChangeGreen = (event, value) => {
    this.setState({ green : value });
  }

  handleChangeBlue = (event, value) => {
    this.setState({ blue : value });
  }

  handleChangeAlpha = (event, value) => {
    this.setState({ alpha : value });
  }

  render() {
    const { red, green, blue, alpha } = this.state;
    const { classes } = this.props;
    const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha / 100})`;
    const borderRGBA = `rgba(${red}, ${green}, ${blue}, ${alpha / 200})`
    const divStyle = {
      background: rgba
    };
    const borderStyle = {
      borderColor: borderRGBA
    };
    return (
      <div className="background" style={divStyle}>
        <div className="container" style={borderStyle}>
          <div className="color-pad" style={divStyle}></div>
          <p>{rgba}</p>
          <div className="classes.root">
            <Slider 
              value={red} 
              classes={{ container: classes.slider }} 
              min={0}
              max={255}
              step={1}
              onChange={this.handleChangeRed} 
            />
            <p>{`red: ${red}`}</p>
            <Slider 
              value={green} 
              onChange={this.handleChangeGreen} 
              classes={{ container: classes.slider }} 
              min={0}
              max={255}
              step={1}
            />
            <p>{`green: ${green}`}</p>
            <Slider 
              value={blue} 
              onChange={this.handleChangeBlue} 
              classes={{ container: classes.slider }} 
              min={0}
              max={255}
              step={1}
            />
            <p>{`blue: ${blue}`}</p>
            <Slider 
              value={alpha} 
              onChange={this.handleChangeAlpha} 
              classes={{ container: classes.slider }} 
              min={0}
              max={100}
              step={1}
            />
            <p>{`alpha: ${alpha}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);