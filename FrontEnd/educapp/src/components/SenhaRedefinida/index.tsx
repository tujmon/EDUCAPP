import * as S from './styles'
import Link from 'next/link'
const SenhaRedefinida = () => (
  <S.Caixa>
    <S.Recupera>
      <h1>Sua Senha foi Redefinida</h1>
      <p>
        <Link href="/" passHref>
          <S.NavLink href="">Voltar ao login</S.NavLink>
        </Link>
      </p>
    </S.Recupera>
  </S.Caixa>
)
export default SenhaRedefinida
