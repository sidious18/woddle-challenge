import { StyleSheet } from 'react-native';

interface AppStyles {
  primaryBackgroundColor: string,
  primaryTextColor: string,
}

const appStyles: AppStyles = {
  primaryBackgroundColor: '#FFF',
  primaryTextColor: '#363636',
};

const withStyles = (stylesFunc: (styles: AppStyles) => any) => {
  return StyleSheet.create(stylesFunc(appStyles));
};

export default withStyles;
