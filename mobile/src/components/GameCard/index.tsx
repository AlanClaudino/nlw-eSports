import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  },
  bannerUrl: string;
}

interface props extends TouchableOpacityProps {
  data: GameCardProps,
}

export function GameCard({data, ... rest} : props) {
  return (
    <TouchableOpacity style={styles.container} {... rest}>
      <ImageBackground 
        style={styles.cover}
        source={{uri: data.bannerUrl}}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>
          
          <Text style={styles.ads}>
            {data._count.ads} Anuncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}