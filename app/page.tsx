import { Container, Filters, Title, TopBar } from '@/components/shared'

export default function Page() {
  return (
    <>
      <Container className="mt-10 mb-2">
        <Title text="Все товары" size="h3" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pt-10 pb-14">
        <div className="flex gap-20">
          {/* Фильтры */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Товары */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Товары</div>
          </div>
        </div>
      </Container>
    </>
  )
}
