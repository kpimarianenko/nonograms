import { StyleProp, ViewStyle } from 'react-native';

import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faCircleQuestion,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';

import theme from '@theme';

import { MessageType } from '../types';

const getContainerColorByMessageType = (type: MessageType) => {
  switch (type) {
    case MessageType.Danger:
      return theme.toasts.danger;
    case MessageType.Warning:
      return theme.toasts.warning;
    case MessageType.Success:
      return theme.toasts.success;
    case MessageType.Info:
      return theme.toasts.info;
    default:
      return theme.primary;
  }
};

export const getContainerStyleByMessageType = (type: MessageType): StyleProp<ViewStyle> => ({
  backgroundColor: getContainerColorByMessageType(type)
});

export const getIconByMessageType = (type: MessageType) => {
  switch (type) {
    case MessageType.Danger:
      return faCircleExclamation;
    case MessageType.Warning:
      return faTriangleExclamation;
    case MessageType.Success:
      return faCircleCheck;
    case MessageType.Info:
      return faCircleInfo;
    default:
      return faCircleQuestion;
  }
};
