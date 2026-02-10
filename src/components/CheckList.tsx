

interface ChecklistProps {
    name: string;
    isChecked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checklist({ name, isChecked, onChange }: ChecklistProps) {
  return (
    <>
      <label
        className={`flex gap-4 items-center text-xl border rounded-xl p-4 cursor-pointer hover:translate-y-[-2px] hover:shadow-md ${
          isChecked
            ? "bg-zinc-900 border-yellow-900"
            : "bg-zinc-800 border-zinc-700"
        }`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className={`peer hidden`}
        />
        <span
          className={`
            h-10 w-10 rounded-md border-2
            flex items-center justify-center
            transition
            peer-checked:bg-yellow-300 
            peer-checked:border-yellow-200
            border-zinc-500
          `}
        >
      <span className="h-2 w-2 bg-black rounded-sm opacity-0 peer-checked:opacity-100" />
  </span>

        <span
          className={`
            text-sm
            ${isChecked ? "text-neutral-400" : "text-neutral-100"}
          `}
        >
          {name}
        </span>
      </label>
    </>
  );
}

export default Checklist;
