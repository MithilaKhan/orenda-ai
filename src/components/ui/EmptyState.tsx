import { SiOverleaf } from "react-icons/si";

interface EmptyStateProps {
  onSuggestionClick: (suggestion: string) => void;
}

export function EmptyState({ onSuggestionClick }: EmptyStateProps) {
  const suggestions = [
    "Design a sustainable eco-village layout",
    "Explain biomimicry in modern architecture",
    "Write a blog post about regenerative agriculture",
    "How can AI help with ocean conservation?"
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto px-4 mt-12 md:mt-24 mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-16 h-16 bg-linear-to-br from-primary to-[#185A5B] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[rgba(15,61,62,0.2)]">
        <SiOverleaf className="w-8 h-8 text-accent" />
      </div>

      <h2 className="text-3xl font-semibold text-primary mb-2 text-center">
        Welcome to Orenda AI
      </h2>
      <p className="text-primary/80 text-center mb-10 max-w-xl">
        Explore the intersection of natural intelligence and artificial intelligence. What shall we create today?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {suggestions.map((suggestion, i) => (
          <button
            key={i}
            onClick={() => onSuggestionClick(suggestion)}
            className="text-left p-4 rounded-2xl border border-border-color bg-white/50 hover:bg-white/80 hover:shadow-md hover:border-[rgba(113,175,14,0.5)] transition-all duration-300 text-sm text-primary/80 group"
          >
            <span className="block text-primary font-semibold mb-1 group-hover:text-[#71AF0E] transition-colors">Generate idea &rarr;</span>
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
