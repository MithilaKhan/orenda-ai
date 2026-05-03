import { Sparkles } from "lucide-react";

interface AIMessageBubbleProps {
  content: string;
}

export function AIMessageBubble({ content }: AIMessageBubbleProps) {
  return (
    <div className="flex justify-start w-full mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex gap-4 max-w-[85%]">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#185A5B] flex items-center justify-center shrink-0 shadow-md">
          <Sparkles className="w-4 h-4 text-accent" />
        </div>
        <div className="bg-message-ai text-primary px-6 py-5 rounded-2xl rounded-tl-sm shadow-sm border border-border-color">
          <div className="prose prose-sm md:prose-base prose-green max-w-none">
            {content ? (
              <p className="whitespace-pre-wrap leading-relaxed m-0">{content}</p>
            ) : (
              <div className="flex gap-1 items-center h-6">
                <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
