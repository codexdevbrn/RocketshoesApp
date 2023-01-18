import logoImg from '../../assets/logo.png';
import { Image, Container, LogoButton } from './styles';

export function Header() {
  return (
    <Container>
      <LogoButton>
        <Image source={logoImg} />
        </LogoButton>
    </Container>
  );
}