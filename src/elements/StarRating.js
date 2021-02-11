import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';
import { Icon } from 'native-base';

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    const roundedRating = (Math.round(this.props.rating * 2) / 2);
    this.state = {
      maxStars: this.props.maxStars,
      rating: roundedRating
    }
  }

  pressStarButton (rating) {
    if (!this.props.disabled) {
      if (rating != this.state.rating) {
        if (this.props.onStarChange) {
          this.props.onStarChange(rating);
        }
        this.setState({
          rating: rating,
        });
      }
    }
  }

  render() {
    const starsLeft = this.state.rating;
    const starButtons = [];
    for (let i = 0; i < this.state.maxStars; i++) {
      const starIcon = (i + 1) <= starsLeft
        ?  <Icon name="ios-star" style={[styles.starIcon, {fontSize: this.props.starSize}]} />
        : <Icon name="ios-star-outline" style={[styles.starIcon, {fontSize: this.props.starSize}]} />;
      starButtons.push(
        <TouchableOpacity
          activeOpacity={0.20}
          key={i + 1}
          onPress={this.pressStarButton.bind(this, (i + 1))}
        >
          {starIcon}
        </TouchableOpacity>
      );
    }
    return (
      <View style={[styles.starRatingContainer, this.props.starRatingContainerStyles]}>
        {starButtons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starIcon: {
    paddingLeft: 2,
  }
});

StarRating.propTypes = {
  disabled: PropTypes.bool,
  maxStars: PropTypes.number,
  rating: PropTypes.number,
  onStarChange: PropTypes.any,
  style: ViewPropTypes.style,
  starSize: PropTypes.number,
};

StarRating.defaultProps = {
  disabled: true,
  maxStars: 5,
  rating: 0,
};
