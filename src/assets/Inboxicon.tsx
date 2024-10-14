import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const InboxIcon = () => (
  <Svg
    width={32}
    height={24}
    fill="none"
  >
    <Path
      stroke="#000"
      d="M1.097 22v-8.557a1 1 0 0 1 .052-.32L5.006 1.682A1 1 0 0 1 5.953 1h20.288a1 1 0 0 1 .948.68l3.856 11.444a1 1 0 0 1 .052.319V22a1 1 0 0 1-1 1h-28a1 1 0 0 1-1-1Z"
    />
    <Path
      stroke="#000"
      d="M1.097 14h9.28a1 1 0 0 1 .948.684l.544 1.632a1 1 0 0 0 .949.684h6.558a1 1 0 0 0 .949-.684l.544-1.632a1 1 0 0 1 .949-.684h9.279"
    />
  </Svg>
);
export default InboxIcon;
