interface ChecklistProps {
  name: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
}

function Checklist({ name, isChecked, onChange, onDelete }: ChecklistProps) {
  return (
    <div className="flex items-center gap-2">
      <label
        className="flex-1 flex gap-4 items-center text-xl border rounded-xl p-4 cursor-pointer hover:-translate-y-0.5 transition-transform"
        style={
          isChecked
            ? { background: '#111114', borderColor: '#E87A6A33' }
            : { background: '#111114', borderColor: '#2C2C34' }
        }
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="peer hidden"
        />
        <span
          className="h-10 w-10 rounded-md border-2 flex items-center justify-center transition shrink-0"
          style={
            isChecked
              ? { background: '#E87A6A', borderColor: '#E87A6A' }
              : { borderColor: '#2C2C34' }
          }
        >
          {isChecked && (
            <span
              className="h-2 w-2 rounded-sm"
              style={{ background: '#1A0800' }}
            />
          )}
        </span>

        <span
          className="text-sm"
          style={
            isChecked
              ? { color: '#6E6E80', textDecoration: 'line-through' }
              : { color: '#F0EEF8' }
          }
        >
          {name}
        </span>
      </label>

      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
          className="text-xl font-bold px-2 transition-colors"
          style={{ color: '#E05555' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B6B')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#E05555')}
          aria-label="Delete item"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default Checklist
