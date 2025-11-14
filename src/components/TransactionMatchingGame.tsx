import { useState, useEffect } from "react";

interface Transaction {
  id: string;
  date: string;
  vendor: string;
  amount: number;
  type: string;
}

interface GLEntry {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
}

interface Level {
  month: string;
  transactions: Transaction[];
  glEntries: GLEntry[];
  matches: { transactionId: string; glId: string }[];
}

const LEVELS: Level[] = [
  {
    month: "JANUARY",
    transactions: [
      { id: "t1", date: "01/15", vendor: "AWS Services", amount: 2450, type: "ACH DEBIT" },
      { id: "t2", date: "01/20", vendor: "Stripe Inc", amount: 15800, type: "DEPOSIT" },
      { id: "t3", date: "01/25", vendor: "Office Depot", amount: 340, type: "CARD" },
    ],
    glEntries: [
      { id: "g1", date: "01/15", description: "Cloud Infrastructure", amount: 2450, category: "Infrastructure" },
      { id: "g2", date: "01/20", description: "Customer Payments", amount: 15800, category: "Revenue" },
      { id: "g3", date: "01/25", description: "Office Supplies", amount: 340, category: "Operations" },
    ],
    matches: [
      { transactionId: "t1", glId: "g1" },
      { transactionId: "t2", glId: "g2" },
      { transactionId: "t3", glId: "g3" },
    ],
  },
  {
    month: "FEBRUARY",
    transactions: [
      { id: "t1", date: "02/05", vendor: "GUIDELINE 401K", amount: 8900, type: "ACH DEBIT" },
      { id: "t2", date: "02/10", vendor: "LinkedIn Corp", amount: 950, type: "CARD" },
      { id: "t3", date: "02/15", vendor: "Client Payment", amount: 25000, type: "WIRE" },
      { id: "t4", date: "02/20", vendor: "WSGR Law", amount: 12500, type: "CHECK #1847" },
    ],
    glEntries: [
      { id: "g1", date: "02/05", description: "401k Contributions", amount: 8900, category: "Payroll" },
      { id: "g2", date: "02/10", description: "Recruiting Platform", amount: 950, category: "HR" },
      { id: "g3", date: "02/15", description: "Professional Services Revenue", amount: 25000, category: "Revenue" },
      { id: "g4", date: "02/20", description: "Legal Services", amount: 12500, category: "Professional Services" },
    ],
    matches: [
      { transactionId: "t1", glId: "g1" },
      { transactionId: "t2", glId: "g2" },
      { transactionId: "t3", glId: "g3" },
      { transactionId: "t4", glId: "g4" },
    ],
  },
  {
    month: "MARCH",
    transactions: [
      { id: "t1", date: "03/01", vendor: "Mercury Bank Fee", amount: 45, type: "SERVICE FEE" },
      { id: "t2", date: "03/05", vendor: "GitHub Enterprise", amount: 890, type: "RECURRING" },
      { id: "t3", date: "03/10", vendor: "Hiscox Insurance", amount: 2100, type: "RECURRING" },
      { id: "t4", date: "03/15", vendor: "AWS Services", amount: 3200, type: "ACH DEBIT" },
      { id: "t5", date: "03/20", vendor: "Client - Acme Corp", amount: 45000, type: "WIRE" },
    ],
    glEntries: [
      { id: "g1", date: "03/01", description: "Banking Fees", amount: 45, category: "Operations" },
      { id: "g2", date: "03/05", description: "Development Tools", amount: 890, category: "SaaS" },
      { id: "g3", date: "03/10", description: "Business Insurance Premium", amount: 2100, category: "Insurance" },
      { id: "g4", date: "03/15", description: "Cloud Hosting - Production", amount: 3200, category: "Infrastructure" },
      { id: "g5", date: "03/20", description: "Consulting Services Revenue", amount: 45000, category: "Revenue" },
    ],
    matches: [
      { transactionId: "t1", glId: "g1" },
      { transactionId: "t2", glId: "g2" },
      { transactionId: "t3", glId: "g3" },
      { transactionId: "t4", glId: "g4" },
      { transactionId: "t5", glId: "g5" },
    ],
  },
];

export const TransactionMatchingGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isActive, setIsActive] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null);
  const [selectedGL, setSelectedGL] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [showSuccess, setShowSuccess] = useState(false);

  const level = LEVELS[currentLevel];
  const totalMatches = level.matches.length;
  const currentMatches = matchedPairs.size / 2;
  const progress = (currentMatches / totalMatches) * 100;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  useEffect(() => {
    if (currentMatches === totalMatches && matchedPairs.size > 0) {
      setShowSuccess(true);
      setIsActive(false);
      setTimeout(() => {
        if (currentLevel < LEVELS.length - 1) {
          setCurrentLevel(currentLevel + 1);
          setMatchedPairs(new Set());
          setSelectedTransaction(null);
          setSelectedGL(null);
          setShowSuccess(false);
          setTimeLeft(120);
          setIsActive(true); // Re-enable game for next level
        }
      }, 2000);
    }
  }, [matchedPairs, currentLevel, currentMatches, totalMatches]);

  const handleTransactionClick = (id: string) => {
    if (matchedPairs.has(id) || !isActive) return;
    setSelectedTransaction(id);
    if (selectedGL) {
      checkMatch(id, selectedGL);
    }
  };

  const handleGLClick = (id: string) => {
    if (matchedPairs.has(id) || !isActive) return;
    setSelectedGL(id);
    if (selectedTransaction) {
      checkMatch(selectedTransaction, id);
    }
  };

  const checkMatch = (transId: string, glId: string) => {
    const match = level.matches.find(
      (m) => m.transactionId === transId && m.glId === glId
    );

    if (match) {
      setMatchedPairs(new Set([...matchedPairs, transId, glId]));
      setScore(score + 1000);
      setSelectedTransaction(null);
      setSelectedGL(null);
    } else {
      setTimeout(() => {
        setSelectedTransaction(null);
        setSelectedGL(null);
      }, 500);
    }
  };

  const startGame = () => {
    setIsActive(true);
    setTimeLeft(120);
    setScore(0);
    setMatchedPairs(new Set());
    setCurrentLevel(0);
  };

  const resetLevel = () => {
    setMatchedPairs(new Set());
    setSelectedTransaction(null);
    setSelectedGL(null);
    setTimeLeft(120);
  };

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block mb-3">
            <div className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300 font-semibold uppercase tracking-wider">
              Train Your AI Recognition
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Bank Reconciliation Challenge
          </h2>
          <p className="text-base text-white/70 mb-2">
            This is what our AI does thousands of times per day—instantly and accurately
          </p>
          <p className="text-sm text-white/50 mb-1">
            Level {currentLevel + 1}: {level.transactions.length} transactions
          </p>
          <p className="text-xs text-white/40 font-mono">
            {isActive ? "CLICK MATCHING ITEMS" : "CLICK START TO BEGIN"}
          </p>
        </div>

        {/* Game Stats */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 mb-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-8 font-mono text-sm">
              <div>
                <span className="text-white/60">MONTH: </span>
                <span className="font-bold text-white">{level.month}</span>
              </div>
              <div>
                <span className="text-white/60">SCORE: </span>
                <span className="font-bold text-white">{score.toString().padStart(6, "0")}</span>
              </div>
              <div>
                <span className="text-white/60">TIME: </span>
                <span className="font-bold text-white">
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                </span>
              </div>
            </div>
            <button
              onClick={resetLevel}
              className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-bold rounded hover:bg-white/20 transition-colors"
            >
              RESET
            </button>
          </div>
          <div className="mt-4 bg-black/40 p-1 rounded">
            <div className="flex justify-between text-xs mb-1 text-green-400 font-mono">
              <span>MATCHES: {currentMatches}/{totalMatches}</span>
              <span>{Math.round(progress)}% COMPLETE</span>
            </div>
            <div className="bg-gray-800 h-3 rounded-sm overflow-hidden">
              <div
                className="bg-green-500 h-3 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Game Board */}
        {!isActive && matchedPairs.size === 0 ? (
          <div className="text-center py-12">
            <button
              onClick={startGame}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow text-lg"
            >
              Start Challenge
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {/* Bank Transactions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-green-700/80 text-white p-3 border-b border-white/10">
                <h3 className="font-bold text-sm flex items-center font-mono">
                  🏦 BANK TRANSACTIONS
                </h3>
              </div>
              <div className="p-2 space-y-1 max-h-96 overflow-y-auto">
                {level.transactions.map((transaction) => {
                  const isMatched = matchedPairs.has(transaction.id);
                  const isSelected = selectedTransaction === transaction.id;
                  return (
                    <button
                      key={transaction.id}
                      onClick={() => handleTransactionClick(transaction.id)}
                      disabled={isMatched || !isActive}
                      className={`w-full text-left p-2 border rounded transition-all font-mono text-xs relative ${
                        isMatched
                          ? "bg-green-500/20 border-green-500/50 opacity-50"
                          : isSelected
                          ? "bg-blue-500/20 border-blue-500 ring-2 ring-blue-500/50"
                          : "bg-white/5 border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                          <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping" />
                            <div className="relative bg-blue-500 rounded-full w-4 h-4 shadow-lg" />
                          </div>
                        </div>
                      )}
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <span className="inline-block w-12 text-white/60">{transaction.date}</span>
                          <span className="text-white">{transaction.vendor}</span>
                          <div className="text-white/40 text-[10px]">{transaction.type}</div>
                        </div>
                        <div className="text-right ml-2">
                          <span className="font-bold text-white">
                            ${transaction.amount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* GL Entries */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-blue-800/80 text-white p-3 border-b border-white/10">
                <h3 className="font-bold text-sm flex items-center font-mono">
                  📊 GENERAL LEDGER
                </h3>
              </div>
              <div className="p-2 space-y-1 max-h-96 overflow-y-auto">
                {level.glEntries.map((entry) => {
                  const isMatched = matchedPairs.has(entry.id);
                  const isSelected = selectedGL === entry.id;
                  return (
                    <button
                      key={entry.id}
                      onClick={() => handleGLClick(entry.id)}
                      disabled={isMatched || !isActive}
                      className={`w-full text-left p-2 border rounded transition-all font-mono text-xs ${
                        isMatched
                          ? "bg-green-500/20 border-green-500/50 opacity-50"
                          : isSelected
                          ? "bg-blue-500/20 border-blue-500 ring-2 ring-blue-500/50"
                          : "bg-white/5 border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <span className="inline-block w-12 text-white/60">{entry.date}</span>
                          <span className="text-white">{entry.description}</span>
                          <div className="text-white/40 text-[10px]">{entry.category}</div>
                        </div>
                        <div className="text-right ml-2">
                          <span className="font-bold text-white">
                            ${entry.amount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {showSuccess && (
          <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
            <p className="text-green-400 font-semibold">
              ✓ Level {currentLevel + 1} Complete! {currentLevel < LEVELS.length - 1 ? "Moving to next level..." : "Challenge completed!"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
