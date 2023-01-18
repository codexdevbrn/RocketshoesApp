import { Image } from './styles';
import backgroundImg from '../../assets/background.png';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <Image source={backgroundImg}
      defaultSource={backgroundImg}
    >
      {children}
    </Image>
  );
}
