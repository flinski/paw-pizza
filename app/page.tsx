import { Container, Title, TopBar } from '@/components/shared'

export default function Page() {
  return (
    <>
      <Container className="mt-10 mb-2">
        <Title text="Все товары" size="h3" className="font-extrabold" />
      </Container>
      <TopBar />
    </>
  )
}
