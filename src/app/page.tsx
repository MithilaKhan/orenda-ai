"use client";

import { ChatLayout } from "../components/layout/ChatLayout";
import { ChatWindow } from "../components/chat/ChatWindow";
import { ChatInputBox } from "../components/ui/ChatInputBox";
import { useChat } from "../hooks/useChat";

export default function Home() {
  const {
    prompt,
    setPrompt,
    loading,
    history,
    activeChatId,
    currentMessages,
    handleNewChat,
    handleSelectChat,
    handleDeleteChat,
    handleSuggestionClick,
    handleGenerate,
  } = useChat();

  return (
    <ChatLayout
      history={history}
      activeChatId={activeChatId}
      onNewChat={handleNewChat}
      onSelectChat={handleSelectChat}
      onDeleteChat={handleDeleteChat}
    >
      <div className="flex-1 flex flex-col h-full relative z-10">
        <ChatWindow
          messages={currentMessages}
          loading={loading}
          onSuggestionClick={handleSuggestionClick}
        />
        
        <div className="shrink-0">
          <ChatInputBox
            prompt={prompt}
            setPrompt={setPrompt}
            onGenerate={handleGenerate}
            loading={loading}
          />
        </div>
      </div>
    </ChatLayout>
  );
}
