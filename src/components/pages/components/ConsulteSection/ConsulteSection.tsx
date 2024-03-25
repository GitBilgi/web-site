import { Heading } from '@/components/core/Typography/Heading'
import { ContainerConsulting } from './ConsulteSection.Style'
import { Button } from '@/components/core/Buttons/Button'
import { useRouter } from 'next/navigation'

export function ConsultingSection() {
  const router = useRouter()

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
            <Button
              button_size="xxl"
              styles="primary"
              className="button"
              onClick={() => router.push('/form')}
            >
              Agendar Chamada
            </Button>
          </div>
        </div>
      </div>
    </ContainerConsulting>
  )
}
