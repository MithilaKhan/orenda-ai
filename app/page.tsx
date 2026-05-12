"use client";

import { useState } from "react";
import { ChatLayout } from "../components/layout/ChatLayout";
import { ChatWindow, Message } from "../components/chat/ChatWindow";
import { ChatInputBox } from "../components/chat/ChatInputBox";
import { ChatHistory } from "../components/layout/ChatSidebar";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  
  // App state
  const [history, setHistory] = useState<ChatHistory[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  
  // Messages for the active chat
  const [chats, setChats] = useState<Record<string, Message[]>>({});

  const currentMessages = activeChatId ? chats[activeChatId] || [] : [];

  const handleNewChat = () => {
    setActiveChatId(null);
    setPrompt("");
  };

  const handleSelectChat = (id: string) => {
    setActiveChatId(id);
  };

  const handleDeleteChat = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app this would delete from DB. Here we just update state.
    setHistory(prev => prev.filter(c => c.id !== id));
    
    if (activeChatId === id) {
      setActiveChatId(null);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
  };

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;

    let chatId = activeChatId;
    const isNewChat = !chatId;
    
    if (isNewChat) {
      chatId = Date.now().toString();
      setActiveChatId(chatId);
      
      const newHistoryItem: ChatHistory = {
        id: chatId,
        title: prompt.slice(0, 30) + (prompt.length > 30 ? "..." : ""),
        date: "Just now"
      };
      
      setHistory(prev => [newHistoryItem, ...prev]);
    }

    const currentPrompt = prompt;
    setPrompt("");
    
    // Add User Message
    const userMessage: Message = { id: Date.now().toString() + "-user", role: "user", content: currentPrompt };
    
    setChats(prev => ({
      ...prev,
      [chatId as string]: [...(prev[chatId as string] || []), userMessage]
    }));

    setLoading(true); 

    

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: currentPrompt }),
      });

      const data = await res.json();
      
      // Add AI Message
      const aiMessage: Message = { id: Date.now().toString() + "-ai", role: "ai", content: data.result };
      
      setChats(prev => ({
        ...prev,
        [chatId as string]: [...(prev[chatId as string] || []), aiMessage]
      }));
    } catch (error) {
      console.error("Failed to generate content", error);
      const errorMessage: Message = { 
        id: Date.now().toString() + "-error", 
        role: "ai", 
        content: "I'm sorry, I encountered an error while trying to generate a response. Please try again." 
      };
      
      setChats(prev => ({
        ...prev,
        [chatId as string]: [...(prev[chatId as string] || []), errorMessage]
      }));
    } finally {
      setLoading(false);
    }
  };

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