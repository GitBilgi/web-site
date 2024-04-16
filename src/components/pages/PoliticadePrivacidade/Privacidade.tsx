import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Subtitle } from '@/components/core/Typography/Subtitle'
import { Container } from './Privacidade.Style'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export function PrivacidadePage() {
  return (
    <>
      <Header />

      <Container>
        <div className="container">
          <div className="container-text">
            <div className="heading">
              <Heading size="lg">POLÍTICA DE PRIVACIDADE</Heading>
            </div>
            <div className="content-compromisso">
              <div className="subtitle">
                <Subtitle size="lg"> O compromisso da Bilgi</Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  A Bilgi é uma empresa que atua na área de sistemas e
                  consultoria.
                </Paragraph>
                <Paragraph size="md">
                  A Bilgi está empenhada em proteger a privacidade dos seus
                  Clientes e dos Utilizadores do seu website e, neste contexto,
                  elaborou a presente Política de Privacidade com a finalidade
                  de demonstrar o seu compromisso e respeito para com as regras
                  de privacidade e de proteção de dados pessoais.
                </Paragraph>
                <Paragraph size="md">
                  Esta Política de Privacidade aplica-se exclusivamente à
                  recolha e tratamento de dados pessoais efetuados pela Bilgi.
                </Paragraph>
                <Paragraph size="md">
                  A Bilgi aconselha a leitura integral deste documento.
                </Paragraph>
              </div>
            </div>

            <div className="content-tratamento">
              <div className="subtitle">
                <Subtitle size="lg">
                  Responsável pelo tratamento de dados e o encarregado da
                  proteção de dados
                </Subtitle>
              </div>
              <div className="subtitle">
                <Subtitle size="sm">
                  • Responsável pelo tratamento de dados pessoais
                </Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  A entidade responsável pelo tratamento de dados pessoais é a
                  Bilgi, podendo ser contactada através da morada Rua jacutinga,
                  741, sala 10 - bairro: jardim bela vista, rio claro-SP ou em
                  alternativa pelo contato@bilgi.com.br (Email).
                </Paragraph>
              </div>
              <div className="subtitle">
                <Subtitle size="sm">
                  • Responsável pelo tratamento de dados pessoais
                </Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  A Bilgi tem, também, um Encarregado da Proteção de Dados
                  (DPO), que desempenha um papel relevante no tratamento de
                  dados pessoais, garantindo, entre outros aspectos, (i) a
                  conformidade dos tratamentos de dados com a legislação em
                  vigor, (ii) procedendo à verificação do cumprimento desta
                  Política de Privacidade de Dados e definindo regras claras de
                  tratamento de dados pessoais, (iii) assegurando que todos os
                  que lhe confiam o tratamento dos seus dados pessoais, tenha,
                  conhecimento de forma como a Bilgi trata os mesmos e quais os
                  direitos que lhes assistem nesta matéria.
                </Paragraph>
              </div>
            </div>

            <div className="content-dados">
              <div className="subtitle">
                <Subtitle size="lg">
                  Dados pessoais, titulares de dados pessoais, tipos de dados
                  pessoais e como recolhemos os seus dados pessoais
                </Subtitle>
              </div>
              <div className="subtitle">
                <Subtitle size="sm">•Dados Pessoais</Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  Entende-se por dados pessoais qualquer informação relativa a
                  uma pessoa singular identificada ou identificável (“titular
                  dos dados”); é considerada identificável uma pessoa singular
                  que possa ser identificada, direta ou indiretamente, em
                  especial por referência a um identificador, como por exemplo,
                  um nome, um número de identificação, dados de localização,
                  identificadores por via electrónica ou a um ou mais elementos
                  específicos de identidade física, fisiológica, genética,
                  mental, econômica, cultural, ou social dessa pessoa singular.
                </Paragraph>
              </div>
              <div className="subtitle">
                <Subtitle size="sm">•Titulares de Dados Pessoais</Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  O Cliente ou o Utilizador, pessoa singular, a quem os dados
                  dizem respeito e que usufrui dos serviços ou produtos da
                  Bilgi.
                </Paragraph>
                <Paragraph size="md">
                  O Cliente será a pessoa que celebra o contrato com a Bilgi e o
                  Utilizador a pessoa que se inscreve no nosso website.
                </Paragraph>
              </div>

              <div className="subtitle">
                <Subtitle size="sm">• Tipos de Dados Pessoais</Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  A Bilgi no âmbito da sua atividade procede à recolha e ao
                  tratamento de dados pessoais, como o nome, o número de
                  identificação fiscal, o contacto telefónico, o email, a
                  quantidade de clientes e o sistema utilizado.
                </Paragraph>
              </div>
              <div className="subtitle">
                <Subtitle size="sm">
                  • Como recolhemos os seus dados pessoais?
                </Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  A Bilgi recolhe os dados pessoais nas seguintes
                  circunstâncias:
                </Paragraph>
                <Paragraph size="md">
                  ○ Na elaboração da proposta de venda, na celebração e execução
                  dos contratos de prestação de serviços;
                </Paragraph>
                <Paragraph size="md">
                  ○ Através do nosso website ou de landing pages com outros
                  endereços da Bilgi;
                </Paragraph>
                <Paragraph size="md">
                  ○ Quando subscreve o envio das nossas newsletters, dando-nos o
                  seu consentimento;
                </Paragraph>
                <Paragraph size="md">
                  ○ Quando participa em eventos organizados pela Bilgi, ou por
                  outras empresas em representação da Bilgi, e mediante
                  consentimento.
                </Paragraph>
                <Paragraph size="md">
                  Alguns dados pessoais são indispensáveis à execução do
                  contrato e, em caso de falta ou insuficiência dos mesmos, a
                  Bilgi não poderá disponibilizar o serviço em causa.
                </Paragraph>
                <Paragraph size="md">
                  Os dados pessoais recolhidos podem ser tratados
                  informaticamente e de forma automatizada ou não automatizada,
                  garantindo em todos os casos o estrito cumprimento da
                  legislação de proteção de dados pessoais em vigor, sendo
                  armazenados em bases de dados específicas, criadas para o
                  efeito e, em situação alguma, os dados recolhidos serão
                  utilizados para outra finalidade que não seja aquela para a
                  qual foram recolhidos ou dado o consentimento por parte do
                  titular dos dados
                </Paragraph>
              </div>

              <div className="subtitle">
                <Subtitle size="lg">
                  Fundamentos e Finalidades do tratamento de Dados Pessoais
                </Subtitle>
              </div>
              <div className="subtitle">
                <Subtitle size="sm">• Consentimento</Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  Efeitos de Marketing e Vendas, como por exemplo: campanhas de
                  marketing, eventos, promoções, informação sobre novos ou
                  atuais serviços e/ou produtos, inquéritos de satisfação.
                </Paragraph>
              </div>
              <div className="subtitle">
                <Subtitle size="sm">
                  • Diligências pré-contratuais e/ou execução de contrato de
                  prestação de serviços
                </Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  Prestação dos serviços contratados e Gestão de Clientes.
                </Paragraph>
              </div>
              <div className="subtitle">
                <Subtitle size="sm">• Cumprimento de obrigação legal</Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  Quando o tratamento for necessário ao cumprimento de
                  obrigações legais, como por exemplo, a resposta a entidades
                  judiciais, de regulação e de supervisão, entre outros.
                </Paragraph>
              </div>
              <div className="subtitle">
                <Subtitle size="sm">• Interesse legítimo</Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  Quando o tratamento de dados pessoais corresponde a um
                  interesse legítimo, como por exemplo o tratamento de dados
                  para melhoria de qualidade de serviço, a detecção de fraude
                  etc.
                </Paragraph>
              </div>
              <div className="subtitle">
                <Subtitle size="lg">
                  Prazos de tratamento e conservação de dados pessoais
                </Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  A Bilgi conservará os seus dados pessoais conforme as
                  finalidades para que os mesmos são tratados.
                </Paragraph>
                <Paragraph size="md">
                  Assim, e sempre que não exista uma exigência legal específica,
                  os dados serão armazenados e conservados apenas pelo período
                  mínimo necessário para as finalidades que motivaram a sua
                  recolha ou o seu posterior tratamento, nos termos definidos na
                  lei.
                </Paragraph>
              </div>
              <div className="subtitle">
                <Subtitle size="lg">
                  Direitos dos titulares de dados pessoais
                </Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  É garantido, aos Clientes e aos Utilizadores, enquanto
                  titulares dos dados pessoais, em qualquer momento, o direito
                  de acesso, retificação, atualização, limitação e apagamento
                  dos dados pessoais (salvo caso os mesmos sejam indispensáveis
                  à prestação do serviço pela Bilgi ou para o cumprimento de
                  obrigações legais), o direito de oposição à utilização dos
                  mesmos para fins comerciais pela Bilgi e à retirada do
                  consentimento, sem que tal comprometa a licitude do tratamento
                  efetuado ao abrigo deste consentimento, bem como o direito à
                  portabilidade dos dados.
                </Paragraph>
                <Paragraph size="md">
                  A Bilgi pode promover ações de divulgação junto dos seus
                  Clientes /Utilizadores, de novos produtos ou serviços através
                  de telefone, e-mail, SMS, MMS ou qualquer outro serviço de
                  comunicações electrónicas, caso o titular dos dados pessoais
                  assim o tenha consentido. Caso não pretenda recepcionar estas
                  comunicações pode, a qualquer momento, retirar o seu
                  consentimento à utilização dos seus dados para fins de
                  marketing.
                </Paragraph>
                <Paragraph size="md">
                  O titular de dados pessoais pode exercer os seus direitos
                  junto do Responsável pelo tratamento, através dos contatos
                  disponibilizados para o efeito no presente documento.
                </Paragraph>
                <Paragraph size="md">
                  Sem prejuízo de poder apresentar reclamações diretamente à
                  Bilgi, através dos contatos disponibilizados para o efeito,
                  poderá apresentar reclamação junto da autoridade de controlo,
                  Comissão Nacional de Proteção e Dados (CNPD).
                </Paragraph>
              </div>
              <div className="subtitle">
                <Subtitle size="lg">
                  Responsabilidade sobre Serviços e Websites de Terceiros
                </Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  O website ou aplicação da Bilgi poderá encontrar links de
                  acesso a websites de terceiros. A Bilgi não se responsabiliza
                  pela recolha e tratamento de dados pessoais efetuados nesses
                  websites de terceiros.
                </Paragraph>
                <Paragraph size="md">
                  A recolha ou tratamento dos dados pessoais solicitados por
                  esses terceiros é da sua exclusiva responsabilidade, não
                  podendo a Bilgi ser responsabilizada, em qualquer
                  circunstância, pelo conteúdo desses websites ou pela má
                  utilização dos dados recolhidos ou tratados por intermédio dos
                  mesmos.
                </Paragraph>
                <Paragraph size="md">
                  Assim, a disponibilização de links para websites de terceiros
                  não implica qualquer assunção de responsabilidade
                  relativamente a tais websites, não lhes sendo, por
                  conseguinte, aplicável a presente Política de Privacidade.
                </Paragraph>
                <Paragraph size="md">
                  A Bilgi alerta para a necessidade de os Clientes e
                  Utilizadores, antes de visitarem websites de terceiros
                  procederem à leitura das Políticas de Privacidade definidas
                  por esses terceiros.
                </Paragraph>
              </div>

              <div className="subtitle">
                <Subtitle size="lg">“Cookies”</Subtitle>
              </div>
              <div className="paragraph">
                <Paragraph size="md">
                  Cookies são pequenos ficheiros que são armazenados no seu
                  computador através do browser, tendo apenas informação
                  relacionada com as suas preferências, não incluindo, como tal,
                  os seus dados pessoais.
                </Paragraph>
              </div>
              <div className="medidas">
                <div className="subtitle">
                  <Subtitle size="lg">
                    Medidas adaptadas pela Bilgi para assegurar a segurança dos
                    seus dados pessoais
                  </Subtitle>
                </div>
                <div className="paragraph">
                  <Paragraph size="md">
                    A Bilgi tem implementado medidas técnicas, organizativas e
                    de segurança adequadas, necessárias e suficientes para
                    proteger os seus dados pessoais contra a destruição, o
                    extravio, a alteração e o acesso não autorizados ou qualquer
                    outra forma de tratamento acidental ou ilícito.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
