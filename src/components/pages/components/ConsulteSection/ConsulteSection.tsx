import { Heading } from '@/components/core/Typography/Heading'
import { ContainerConsulting } from './ConsulteSection.Style'
import { Button } from '@/components/core/Buttons/Button'

export function ConsultingSection() {
  return (
    <ContainerConsulting>
      <div className="container">
        <div className="content">
          <div className="heading">
            <Heading size="md" className="font">
              Transforme dados em decisões poderosas e leve sua empresa ao
              próximo nível. Consulte-nos agora.
            </Heading>
          </div>
          <div className="buttons">
            <Button button_size="xxl" styles="primary">
              Agendar Chamada
            </Button>
            <Button button_size="xxl" styles="secondary">
              Conheça os Planos
            </Button>
          </div>
        </div>
      </div>
    </ContainerConsulting>
  )
}
