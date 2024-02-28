import * as S from './Icon.styles'

export interface Props {
  size: 'sm' | 'md' | 'lg'
  mode?: 'primary' | 'gray' | 'error'
  IconRender: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
  disabled?: boolean
  className?: string
}

export function Icon({ size, mode, IconRender, disabled, className }: Props) {
  return (
    <S.Container
      size={size}
      mode={mode}
      disabled={disabled}
      className={className}
    >
      <IconRender className="icon" />
    </S.Container>
  )
}

Icon.defaultProps = {
  disabled: undefined,
  className: undefined,
  mode: undefined
}
