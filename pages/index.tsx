import { ThemeProvider } from 'styled-components'
import Layout from '../src/components/templates/Layout'
import { Theme } from './../src/themes'
export default function Home()
{
  return (
    <ThemeProvider theme={Theme}>
       <Layout>
      </Layout>
    </ThemeProvider>
  )
}
