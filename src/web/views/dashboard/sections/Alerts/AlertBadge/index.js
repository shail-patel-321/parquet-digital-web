/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ActionButtons from './AlertActionButtons';

import {
  alertBadgeOuterContainer,
  alertBadgeHoverContainer,
  deleteConfirmation,
  alertBadgeLeftContainer,
  alertBadgeRightContainer,
  alertBadgeSmallButtons,
  alertBadgeArrow,
  alertBadgeArrowOpen,
  alertBadgeCountWrapper,
  alertBadgeDownloadNumbers,
  isDeletedStyle,
  doDelete,
  undoDelete,
} from './styles.module.css';

const propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      actionType: PropTypes.string.isRequired,
      background: PropTypes.string,
      icon: PropTypes.node,
      text: PropTypes.node.isRequired,
      link: PropTypes.string,
    }),
  ),
  backgroundColor: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  message: PropTypes.node.isRequired,
  customKey: PropTypes.string.isRequired,
  hideHover: PropTypes.bool,
  type: PropTypes.string.isRequired,
  onDeletion: PropTypes.func,
  openDialogBox: PropTypes.func,
  count: PropTypes.number,
  isOpen: PropTypes.bool,
  isDeleted: PropTypes.bool,
  docDk: PropTypes.number,
};

const defaultProps = {
  docDk: null,
  hideHover: false,
  onDeletion: () => null,
  count: null,
  isOpen: false,
  isDeleted: false,
  openDialogBox: () => null,
  actions: [],
};

function AlertBadge(alert) {
  const {
    actions,
    backgroundColor,
    icon,
    message,
    customKey,
    hideHover,
    handleDeletion,
    openDialogBox,
    setOverlay,
    count,
    isOpen,
    isDeleted,
    docDk,
    type, 
    docNum
  } = alert;
  // in case we got something from the backend that we don't know how to handle yet
  if (!message) {
    return null;
  }

  function handleLinks(alertAction) {
    const { link } = alertAction;
    if (link) {
      window.open(link, '_blank', 'noopener');
    } else {
      window.alert('Em breve! :)');
    }
  }

  async function handleActionLinks(alertAction, key) {
    const { link, actionType } = alertAction;
    if (link) {
      if (actionType === 'openComplaint') {
        openDialogBox(link, key, type);
      }
    } else {
      window.alert('Em breve! :)');
    }
  }

  function handleActionPress(alertAction, key) {
    const { actionType } = alertAction;
    switch (actionType) {
      case 'delete':
        setOverlay('onDel', '');
        return handleDeletion(key);
      case 'download':
        return handleLinks(alertAction);
        case 'overlay':
          return setOverlay(type, String(docDk), docNum);
      case 'overlay_iimp':
        return setOverlay('OVERLAY_IIMP', String(docDk));
      case 'link':
        return handleLinks(alertAction);
      case 'openComplaint':
        return handleActionLinks(alertAction, key);
      default:
        return window.alert('Em breve! :)');
    }
  }

  const showHover = !hideHover && actions[1];

  return (
    <div className={ alertBadgeOuterContainer }>
      {showHover && !isDeleted && (
        <div className={ alertBadgeHoverContainer }>
          {actions.map((alertAction) => (
            <ActionButtons
              key={`${customKey}-${alertAction.actionType}-${alertAction.text}`}
              clickCallback={() => handleActionPress(alertAction, customKey)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...alertAction}
            />
          ))}
        </div>
      )}
      {!hideHover && isDeleted && (
        <div className={`${ deleteConfirmation } ${isDeleted ? `${ isDeletedStyle }` : ''}`}>
          <button type="button" className={ doDelete } onClick={() => handleDeletion(customKey)}>
            x
          </button>
          <button
            type="button"
            className={ undoDelete }
            onClick={() => handleDeletion(customKey, true)}
          >
            Desfazer
          </button>
        </div>
      )}
      <div className={ alertBadgeLeftContainer } style={{ backgroundColor }}>
        {icon}
      </div>
      <div className={ alertBadgeRightContainer }>
        <span>{message}</span>
        <div className={ alertBadgeSmallButtons }>
          {!showHover && actions[0] && (
            <>
              <div
                onClick={() => {
                  handleActionPress(actions[0]);
                }}
                className={ alertBadgeDownloadNumbers }
                style={{ backgroundColor: '#2DE288' }}
                type="button"
              >
                {actions[0].text}
              </div>
              <div className={ alertBadgeCountWrapper } style={{ backgroundColor }}>
                <span className={`${ alertBadgeArrow } ${isOpen && `${ alertBadgeArrowOpen }`}`} />
                {count}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

AlertBadge.propTypes = propTypes;
AlertBadge.defaultProps = defaultProps;
export default AlertBadge;
