import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'

// Match data for Milan (AC Milan) and Inter Milan
const matches = [
  {
    id: 1,
    date: new Date(2026, 3, 15), // April 15, 2026
    team1: 'AC Milan',
    team2: 'Juventus',
    competition: 'Serie A',
    status: 'upcoming'
  },
  {
    id: 2,
    date: new Date(2026, 3, 19), // April 19, 2026
    team1: 'Inter Milan',
    team2: 'Roma',
    competition: 'Serie A',
    status: 'upcoming'
  },
  {
    id: 3,
    date: new Date(2026, 3, 22), // April 22, 2026
    team1: 'AC Milan',
    team2: 'Napoli',
    competition: 'Serie A',
    status: 'upcoming'
  },
  {
    id: 4,
    date: new Date(2026, 3, 25), // April 25, 2026
    team1: 'Inter Milan',
    team2: 'Lazio',
    competition: 'Serie A',
    status: 'upcoming'
  },
  {
    id: 5,
    date: new Date(2026, 4, 3), // May 3, 2026
    team1: 'AC Milan',
    team2: 'Inter Milan',
    competition: 'Serie A - Derby',
    status: 'upcoming'
  },
]

export function MatchesCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const getMatchesForDate = (date: Date | undefined) => {
    if (!date) return []
    return matches.filter(
      match => 
        match.date.getDate() === date.getDate() &&
        match.date.getMonth() === date.getMonth() &&
        match.date.getFullYear() === date.getFullYear()
    )
  }

  const getDateStyle = (date: Date) => {
    const hasMatch = matches.some(
      match =>
        match.date.getDate() === date.getDate() &&
        match.date.getMonth() === date.getMonth() &&
        match.date.getFullYear() === date.getFullYear()
    )
    return hasMatch ? 'bg-blue-100' : ''
  }

  const selectedMatches = getMatchesForDate(selectedDate)

  return (
    <div className="flex flex-col gap-8 p-6">
      <h2 className="text-2xl font-bold">🔴 Milan & Inter Matches</h2>
      
      <div className="flex gap-8">
        <div className="border rounded-lg p-4 bg-card">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            month={selectedDate}
            fromDate={new Date(2026, 3, 1)}
            toDate={new Date(2026, 5, 30)}
          />
        </div>

        <div className="flex-1">
          <div className="bg-card border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">
              {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a date'}
            </h3>

            {selectedMatches.length > 0 ? (
              <div className="space-y-3">
                {selectedMatches.map(match => (
                  <div
                    key={match.id}
                    className="border border-blue-200 rounded-lg p-3 bg-blue-50"
                  >
                    <p className="text-sm font-medium text-blue-600 mb-1">
                      {match.competition}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{match.team1}</span>
                      <span className="mx-2 text-muted-foreground">vs</span>
                      <span className="font-semibold">{match.team2}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No matches scheduled for this date</p>
            )}

            <div className="mt-6 border-t pt-4">
              <h4 className="font-semibold mb-3">All Upcoming Matches</h4>
              <div className="space-y-2">
                {matches.map(match => (
                  <div
                    key={match.id}
                    className="text-sm p-2 rounded hover:bg-accent cursor-pointer"
                    onClick={() => setSelectedDate(match.date)}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">
                        {match.team1} vs {match.team2}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {format(match.date, 'MMM d')}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {match.competition}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
