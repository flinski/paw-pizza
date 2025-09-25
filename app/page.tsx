import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared'

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
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                products={[
                  {
                    id: 1,
                    name: 'Терияки',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Терияки',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Терияки',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Терияки',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Терияки',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Терияки',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Римские Пиццы"
                products={[
                  {
                    id: 7,
                    name: 'Римская Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198c34c7163724e8d457fcf25b47e0a.avif',
                    price: 269,
                    items: [{ price: 269 }],
                  },
                  {
                    id: 8,
                    name: 'Римская Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198c34c7163724e8d457fcf25b47e0a.avif',
                    price: 269,
                    items: [{ price: 269 }],
                  },
                  {
                    id: 9,
                    name: 'Римская Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198c34c7163724e8d457fcf25b47e0a.avif',
                    price: 269,
                    items: [{ price: 269 }],
                  },
                  {
                    id: 10,
                    name: 'Римская Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198c34c7163724e8d457fcf25b47e0a.avif',
                    price: 269,
                    items: [{ price: 269 }],
                  },
                  {
                    id: 11,
                    name: 'Римская Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198c34c7163724e8d457fcf25b47e0a.avif',
                    price: 269,
                    items: [{ price: 269 }],
                  },
                  {
                    id: 12,
                    name: 'Римская Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198c34c7163724e8d457fcf25b47e0a.avif',
                    price: 269,
                    items: [{ price: 269 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
