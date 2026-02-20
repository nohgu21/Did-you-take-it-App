'use client'

import { useState, useEffect } from 'react'
import confetti from "canvas-confetti";
import { type ChecklistItem, officeItems, partyItems, dateItems, gymItems } from '../types/checklistData'
import Checklist from './components/Checklist';
import Header from './components/Header';
import  useLocalStorage from '../hooks/useLocalStorage'

type Category = 'office' | 'party' | 'date' | 'gym'

export default function Page() {
  const [category, setCategory] = useLocalStorage<Category>('checklist-category','office' as Category)
  const [officeChecklist, setOfficeChecklist] = useLocalStorage<ChecklistItem[]>('office-checklist', officeItems)
  const [partyChecklist, setPartyChecklist] = useLocalStorage<ChecklistItem[]>('party-checklist', partyItems)
  const [dateChecklist, setDateChecklist] = useLocalStorage<ChecklistItem[]>('date-checklist', dateItems)
  const [gymChecklist, setGymChecklist] = useLocalStorage<ChecklistItem[]>('gym-checklist', gymItems)
  const [showModal, setShowModal] = useState(false)


  const getCurrentItems = (): ChecklistItem[] => {
    switch (category) {
      case 'office':
        return officeChecklist;
      case 'party':
        return partyChecklist;
      case 'date':
        return dateChecklist;
      case 'gym':
        return gymChecklist;
        default:
          return[];
    }
  }

  const items = getCurrentItems()

  const handleCheckBox = (id: number) => {
    const updatedItems = items.map((item: ChecklistItem) => item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )

      switch (category) {
      case 'office':
        setOfficeChecklist(updatedItems);
        break;
      case 'party':
        setPartyChecklist(updatedItems);
        break;
      case 'date':
        setDateChecklist(updatedItems);
        break;
      case 'gym':
        setGymChecklist(updatedItems);
        break;
    }
  };

  
  

  useEffect(() => {
    const allChecked = items.every((item: ChecklistItem) => item.isChecked) && items.length > 0
    if (allChecked) {
      confetti({
        particleCount: 1000,
        spread: 100,
        origin: { y: 0.5 }
      });
      setShowModal(true)
    }
  }, [items, showModal]);

  const categoryTitles: Record<Category, string> = {
    office: "Heading out to the office? Don't forget your...",
    party: "Heading out to have fun? Don't forget your...",
    date: "Heading out on a date? Don't forget your...",
    gym: "Heading out for a work out? Don't forget your..."
  }

  return (
    <>
      <Header />

      <div className="m-6 flex gap-4">
        <button onClick={() => setCategory('office')}
          className={`px-4 py-2 border rounded-lg ${category === 'office' ? 'cursor-pointer hover:translate-y-[-2px] hover:shadow-md bg-zinc-800 text-neutral-100' : 'bg-zinc-800 text-gray-400'}`}
        >
          Office
        </button>

        <button onClick={() => setCategory('party')}
          className={`px-4 py-2 border rounded-lg ${category === 'party' ? 'cursor-pointer hover:translate-y-[-2px] hover:shadow-md bg-zinc-800 text-neutral-100' : 'bg-zinc-800 text-gray-400'}`}
        >
          Party
        </button>

        <button onClick={() => setCategory('date')}
          className={`px-4 py-2 border rounded-lg ${category === 'date' ? 'cursor-pointer hover:translate-y-[-2px] hover:shadow-md bg-zinc-800 text-neutral-100' : 'bg-zinc-800 text-gray-400'}`}
        >
          Date
        </button>

        <button onClick={() => setCategory('gym')}
          className={`px-4 py-2 border rounded-lg ${category === 'gym' ? 'cursor-pointer hover:translate-y-[-2px] hover:shadow-md bg-zinc-800 text-neutral-100' : 'bg-zinc-800 text-gray-400'}`}
        >
          Gym
        </button>
      </div>




      <div className="m-6 space-y-3 p-6 bg-zinc-900 w-1/2 border rounded-lg">
        <h2 className="text-neutral-100 text-md">
          {categoryTitles[category]}
        </h2>

        {items.map((item) => (
          <Checklist
            key={item.id}
            name={item.name}
            isChecked={item.isChecked}
            onChange={() => handleCheckBox(item.id)}
          />
        ))}


      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-zinc-900 p-6 rounded-xl w-[90%] max-w-sm text-center space-y-3 shadow-xl">
            <h2 className="text-white text-lg font-semibold">You did it! 🎉</h2>
            <p className="text-zinc-300">Have a great day ahead!</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </>
  )
}


