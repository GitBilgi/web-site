import { Meta, StoryObj } from '@storybook/react'
import { InputField } from '.'

export default {
  title: 'InputField',
  component: InputField,
  args: {
    label: 'Nome'
  }
} as Meta

export const Default: StoryObj = {}
