import { Checkbox } from '@/components/ui'

export type FilterCheckboxProps = {
  text: string
  value: string
  endAdornment?: React.ReactNode
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export function FilterCheckbox({
  text,
  value,
  endAdornment,
  checked,
  onCheckedChange,
}: FilterCheckboxProps) {
  return (
    <div className="flex items-center">
      <Checkbox
        id={`checkbox-${value}`}
        value={value}
        className="size-5 cursor-pointer rounded-sm"
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <label htmlFor={`checkbox-${value}`} className="flex-1 cursor-pointer pl-2">
        {text}
      </label>
      {endAdornment}
    </div>
  )
}
