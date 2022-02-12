import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import withStyles from '@material-ui/core/styles/withStyles';
import ReactTooltip from 'react-tooltip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { MoreHorizIcon } from '../icon';
import ClickToCopyAddress from '../click-to-copy-address';
import './styles.css';

class ListItemCard extends Component {
  handleNullBalanceObject = (balObj, account) => {
    if (!balObj) {
      return {
        balanceFormatted: '0.0',
        token: account.token,
      };
    }
    return balObj;
  };

  render() {
    const {
      classes,
      address,
      listItem,
      primaryText,
      onCopyAddress,
      moreMenu,
      handleListItemAvatarClick,
      handleListItemClick,
      isMoreVertIconVisible,
      isActive,
      isSelected,
      theme,
      colorTheme,
      network,
      customModal,
      showRadio,
      handleFooterClick,
      handleFooterCancel,
      ...otherProps
    } = this.props;
    return (
      <div {...otherProps}>
        <ListItem>
          <ListItemText
            onClick={event => handleListItemClick(event, listItem)}
            primary={
              <span style={{ display: 'flex' }}>
                <span
                  className="account-card-text"
                  data-tip={primaryText}
                  style={{ color: colorTheme.text.primary }}
                >
                  {primaryText}
                </span>
                <ReactTooltip effect="solid" place="bottom" />
              </span>
            }
            className={classes.primaryWidth}
            secondary={
              <ClickToCopyAddress
                className="account-address clickable-icon"
                onCopyAddress={onCopyAddress}
                address={address}
                style={{ color: colorTheme.text.tertiary }}
              />
            }
          />
          {isMoreVertIconVisible && (
            <MoreHorizIcon
              color={colorTheme.text.secondary}
              onClick={handleFooterClick}
              className="more-list-icon"
            />
          )}
          {showRadio && (
            <ListItemAvatar onClick={event => handleListItemAvatarClick(event, listItem)}>
              {isSelected ? (
                <CheckCircleIcon
                  className="accout-card-icon"
                  style={{ color: colorTheme.icon.primary }}
                />
              ) : (
                <RadioButtonUncheckedIcon
                  className="accout-card-icon"
                  style={{ color: colorTheme.icon.secondary }}
                />
              )}
            </ListItemAvatar>
          )}
        </ListItem>
      </div>
    );
  }
}

const styles = () => ({
  primaryWidth: {
    width: '290px !important',
    padding: '0 10px !important',
  },
});

export default withStyles(styles)(ListItemCard);
