import React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../core/colors';

type ModifiedIconProps = Omit<IconProps, 'name'>;

export const FavoriteOutlineIcon = (props: ModifiedIconProps) => {
  return (
    <MaterialIcons
      name={'favorite-outline'}
      size={props.size ?? 24}
      color={props.color ?? colors.coralRed}
      {...props}
    />
  );
};

export const FavoriteIcon = (props: ModifiedIconProps) => {
  return (
    <MaterialIcons
      name={'favorite'}
      size={props.size ?? 24}
      color={props.color ?? colors.coralRed}
      {...props}
    />
  );
};

export const BackIcon = (props: ModifiedIconProps) => {
  return (
    <MaterialIcons
      name={'arrow-back'}
      size={props.size ?? 24}
      color={props.color ?? colors.black}
      {...props}
    />
  );
};

export const FilterIcon = (props: ModifiedIconProps) => {
  return (
    <MaterialIcons
      name={'filter-alt'}
      size={props.size ?? 24}
      color={props.color ?? colors.black}
      {...props}
    />
  );
};

export const GridIcon = (props: ModifiedIconProps) => {
  return (
    <MaterialIcons
      name={'grid-view'}
      size={props.size ?? 24}
      color={props.color ?? colors.black}
      {...props}
    />
  );
};

export const HomeIcon = (props: ModifiedIconProps) => {
  return (
    <MaterialIcons
      name={'home'}
      size={props.size ?? 24}
      color={props.color ?? colors.black}
      {...props}
    />
  );
};

export const BookmarkIcon = (props: ModifiedIconProps) => {
  return (
    <MaterialIcons
      name={'bookmark'}
      size={props.size ?? 24}
      color={props.color ?? colors.black}
      {...props}
    />
  );
};

export const InfoIcon = (props: ModifiedIconProps) => {
  return (
    <MaterialIcons
      name={'info-outline'}
      size={props.size ?? 24}
      color={props.color ?? colors.black}
      {...props}
    />
  );
};
