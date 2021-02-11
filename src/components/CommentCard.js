import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { Thumbnail } from 'native-base';

import StarRating from '../elements/StarRating';
import Text from '../elements/Text';

import {
  responsiveWidth,
  marginHorizontal,
  spaceVertical,
  fontSize,
} from '../styles/variables';
import {
  commentAvaImg
} from '../styles/image-variables';

export default class CommentCard extends Component {
  constructor(props) {
    super(props);
  }

  onStarRatingPress(value) {
    this.setState({value});
  }

  render() {
    const {
      commentInfo
    } = this.props;

    return (
      <View style={styles.list}>
        <View style={styles.avatar}>
          <Thumbnail 
            source={commentInfo.image}
            style={{
              width: commentAvaImg.width,
              height: commentAvaImg.height,
              ...Platform.select({
                android: {
                  borderRadius: commentAvaImg.width 
                }
              })
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.headerCont}>
            <View style={{flex: 1, paddingRight: marginHorizontal.small/2}}>
              <Text black normal mediumBold style={styles.header}>
                {commentInfo.name}
              </Text>
            </View>
            <StarRating
              maxStars={5}
              rating={0}
              disabled={false}
              starSize={fontSize.starIc}
              onStarChange={(value) => this.onStarRatingPress(value)}
            />
          </View>
          <Text gray normal regular>
            {commentInfo.review}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    paddingVertical: spaceVertical.semiSmall,
    marginLeft: marginHorizontal.semiSmall,
    paddingRight: marginHorizontal.semiSmall,
    borderBottomWidth: 1,
    borderColor: 'rgb(232,232,232)',
  },
  avatar: {
    width: commentAvaImg.width,
    height: commentAvaImg.height,
    borderRadius: commentAvaImg.width,
    overflow: 'hidden',
    marginRight: marginHorizontal.small,
  },
  headerCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: marginHorizontal.small/2
  }
});


CommentCard.propTypes = {
  commentInfo: PropTypes.object
};
