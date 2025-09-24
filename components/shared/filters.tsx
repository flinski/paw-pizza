import { CheckboxFiltersGroup, FilterCheckbox, Title } from '@/components/shared'
import { Input, RangeSlider } from '@/components/ui'

type FiltersProps = {
  className?: string
}

export function Filters({ className }: FiltersProps) {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="h5" className="mb-5 font-bold" />

      {/* Чекбоксы */}
      <div className="flex flex-col gap-3">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      {/* Ингредиенты */}
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={5}
        defaultItems={[
          { text: 'Сырный соус', value: '3' },
          { text: 'Моццарелла', value: '4' },
          { text: 'Чеснок', value: '5' },
          { text: 'Солёные огурчики', value: '6' },
          { text: 'Красный лук', value: '7' },
          { text: 'Томаты', value: '8' },
        ]}
        items={[
          { text: 'Сырный соус', value: '3' },
          { text: 'Моццарелла', value: '4' },
          { text: 'Чеснок', value: '5' },
          { text: 'Солёные огурчики', value: '6' },
          { text: 'Красный лук', value: '7' },
          { text: 'Томаты', value: '8' },
          { text: 'Сырный соус', value: '3' },
          { text: 'Моццарелла', value: '4' },
          { text: 'Чеснок', value: '5' },
          { text: 'Солёные огурчики', value: '6' },
          { text: 'Красный лук', value: '7' },
          { text: 'Томаты', value: '8' },
        ]}
      />
    </div>
  )
}
