import { useState, useEffect } from 'react'

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  const [value, setValue] = useState<T>(initialValue)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const item = localStorage.getItem(key)
      if (item !== null) {
        setValue(JSON.parse(item))
      }
    } catch (err) {
      console.error(err)
    } finally {
      setHydrated(true)
    }
  }, [key])

  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error(err)
    }
  }, [key, value, hydrated])

  return [value, setValue] as const
}