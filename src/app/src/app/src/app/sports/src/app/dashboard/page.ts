import Link from 'next/link'

const mockBets = [
  { id: 1, sport: 'Football', event: 'Team A vs Team B', amount: 100, odds: '+150', status: 'Open' },
  { id: 2, sport: 'Basketball', event: 'Team C vs Team D', amount: 50, odds: '-200', status: 'Matched' },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Account Overview</h2>
          <p className="text-lg mb-2">Current Balance: $500.00</p>
          <h3 className="text-xl font-semibold mb-2">Active Bets</h3>
          <ul className="space-y-2">
            {mockBets.map((bet) => (
              <li key={bet.id} className="bg-white p-4 rounded-lg shadow">
                <p><strong>{bet.event}</strong> - {bet.sport}</p>
                <p>Amount: ${bet.amount.toFixed(2)} | Odds: {bet.odds}</p>
                <p>Status: {bet.status}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <Link
            href="/propose-bet"
            className="block w-full bg-green-500 text-white text-center py-2 rounded mb-4 hover:bg-green-600"
          >
            Propose a New Bet
          </Link>
          <Link
            href="/deposit"
            className="block w-full bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
          >
            Deposit Funds
          </Link>
        </div>
      </div>
    </div>
  )
}
