import * as S from './styles'
import Link from 'next/link'
const EnvioEmail = () => (
  <S.Caixa>
    <S.Recupera>
      <h1>
        A recuperação de senha foi <br /> enviada a seu email
      </h1>
      <p>
        <Link href="\" passHref>
          <S.NavLink>Voltar ao login</S.NavLink>
        </Link>
      </p>
    </S.Recupera>
  </S.Caixa>
)

export default EnvioEmail
