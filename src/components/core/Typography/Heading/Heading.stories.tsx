import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Title',
    size: 'xs'
  }
} as Meta

export const Default: StoryObj = {}
