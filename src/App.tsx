import { useState } from 'react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold tracking-tight">
        Mauro Tutorial 1
      </h1>
      <p className="text-muted-foreground">
        Built with Vite + React + shadcn/ui
      </p>
      <div className="flex gap-4">
        <Button
          variant="default"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </Button>
        <Button variant="outline" render={<a href="https://ui.shadcn.com" target="_blank" rel="noreferrer" />}>
            shadcn/ui Docs
        </Button>
      </div>
    </div>
  )
}

export default App
