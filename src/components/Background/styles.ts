import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Image = styled(ImageBackground)`
flex: 1;
  background-color: ${THEME.COLORS.BACKGROUND_800};
`;
