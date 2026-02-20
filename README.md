# Smart Checklist App

A dynamic checklist application to help you remember essential items for different occasions - office, parties, dates, and more.

## Features

- **Multiple Categories**: Switch between Office, Party, and Date checklists
- **Interactive Checkboxes**: Mark items as packed
- **Completion Celebration**: Confetti animation when all items are checked
- **Modern UI**: Built with Tailwind CSS for a clean, responsive design
- **Fast Performance**: Powered by Next.js 16 with React 19
- **Local Storage**: Saves item isChecked status after refresh

## Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Library**: React 19
- **Animation**: canvas-confetti

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <https://github.com/nohgu21/Did-you-take-it-App>
cd <project-folder>
```

2. Install dependencies
```bash
pnpm install
```

3. Run the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── Checklist.tsx
│   │   └── Header.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── hooks/
|   └── useLocalStorage.ts
└── types/
    └── checklistData.ts
```

## Roadmap

### Planned Features

- [ ] Custom categories
- [ ] Add/delete custom items
- [ ] Weather-based suggestions
- [ ] Time-based reminders
- [ ] Stats dashboard
- [ ] User authentication
- [ ] Database integration

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT

## Acknowledgments

- Confetti animation powered by [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
