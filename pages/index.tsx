/** @jsxImportSource theme-ui */
import Head from 'next/head'
import { Flex } from 'theme-ui'
import Button from './components/button'

export default function Home() {
  return (
      <Flex sx={{
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Button>This is me!</Button>
        <Button onClick={() => location.href = '/storybook'}>Let's see storybook</Button>
      </Flex>
  )
}
