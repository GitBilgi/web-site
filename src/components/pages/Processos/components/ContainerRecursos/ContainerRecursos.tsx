import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'

import * as S from './ContainerRecursos.Style'

/*images*/

import { Icon } from '@/components/core/Icon'
import {
  ChevronDoubleUpIcon,
  ClipboardDocumentCheckIcon,
  DocumentPlusIcon,
  MapIcon
} from '@heroicons/react/24/solid'

export function RecursosContent() {
  return (
    <S.ContainerRecursos>
      <div className="container">
        <div className="recursos">
          <Heading size="xs" className="heading">
            Recursos
          </Heading>
          <Heading size="lg" className="size">
            Garantimos resultados constantes
          </Heading>
          <Paragraph size="md" className="paragraph">
            Organize e administre as tarefas importantes da sua empresa com
            fluxogramas simples, procedimentos claros e dados relevantes.
          </Paragraph>
        </div>
        <div className="container-cards">
          <div className="cards">
            <Icon IconRender={MapIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Mapeamento de Processos</Heading>
              <Paragraph size="md">
                Desenhamos um mapa especial mostrando como todas as peças do seu
                trabalho se encaixam. Isso ajuda a entender o que está
                acontecendo.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={ChevronDoubleUpIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Identificação de Pontos de Melhoria</Heading>
              <Paragraph size="md">
                Olhamos atentamente para seus processos e encontramos maneiras
                de torná-los ainda melhores, como ajustar as peças de um
                quebra-cabeça para que se encaixem perfeitamente.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={DocumentPlusIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Análise do Fluxo Operacional</Heading>
              <Paragraph size="md">
                Estudamos como as coisas estão fluindo e sugerimos maneiras de
                tornar tudo mais organizado.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={ClipboardDocumentCheckIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">
                Processos Operacionais e Instruções de Trabalho
              </Heading>
              <Paragraph size="md">
                Criamos procedimentos e instruções simples para garantir que
                todos estejam na mesma página, como seguir um manual fácil de
                entender.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </S.ContainerRecursos>
  )
}
