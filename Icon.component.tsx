import * as React from 'react';

// IMPORT IF REACT NATIVE
// import {
//   FontAwesomeIcon,
//   FontAwesomeIconStyle,
// } from '@fortawesome/react-native-fontawesome';

// IMPORT IF REACT
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {library, IconProp} from '@fortawesome/fontawesome-svg-core';
import {fad} from '@fortawesome/pro-duotone-svg-icons';
import {fal} from '@fortawesome/pro-light-svg-icons';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

import {IconSizes} from 'app/theme';

library.add(fal, fab, fad, fas, far);

export type IconProps = {
  name: IconName;
  style?: FontAwesomeIconStyle;
  color?: string;
  size: 's' | 'm' | 'l';

  // IF REACT
  // onClick?: () => void;

  // IF REACT NATIVE
  // onPress?: () => void;
};

export type IconName =
  | 'home'
  | 'circle'
  | 'cross'
  | 'search';

const Icon: React.FC<IconProps> = (props): JSX.Element => {
  const {name, color, size, style} = props;

  const iconName = mapNamePropToFaNames(name);
  const iconSize = mapSizeToIconSize(size);

  return (
    <FontAwesomeIcon
      icon={iconName}
      color={color}
      size={iconSize}
      style={style}
    />
  );
};

function mapSizeToIconSize(size: IconProps['size']): number {
  switch (size) {
    case 's':
      return IconSizes.S;
    case 'm':
      return IconSizes.M;
    case 'l':
      return IconSizes.L;
    default:
      return IconSizes.S;
  }
}

function mapNamePropToFaNames(iconName: IconName): IconProp {
  switch (iconName) {
    case 'home':
      return ['fal', 'home'];
  
    case 'cross':
      return ['fal', 'times'];

    case 'search':
      return ['fal', 'search'];

    case 'circle':
      return ['fal', 'circle'];

    default:
      return ['fal', 'question-circle'];
  }
}

export default Icon;
