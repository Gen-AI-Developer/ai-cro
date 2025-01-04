"use client";

import { useState } from "react";
import { Send, Plane, Hand, Sparkles, BotIcon as Robot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const suggestions = [
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Wanderlust Destinations 2024",
      subtitle: "Must-Visit Places",
    },
    {
      icon: <Hand className="h-6 w-6" />,
      title: "SayHalo AI: What Sets Us Apart",
      subtitle: "Key Differentiators",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Design Trends on TikTok 2024",
      subtitle: "Trending Now",
    },
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // You can add additional logic here to handle the file, such as uploading it
      console.log("Selected file:", file.name);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <div className="max-w-4xl mx-auto p-4 pt-8">
          {/* Welcome Message */}
          <div className="text-center mb-12 mt-20">
            <div className="inline-block p-3 rounded-full bg-gray-100 mb-6">
              <Robot className="h-8 w-8 text-gray-700" />
            </div>
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              Artificial Intelligent CRO
            </h1>
            <h2 className="text-2xl font-medium text-gray-700 mb-3">
              Can I help you with anything?
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Ready to assist you with anything you need, from answering
              questions to providing recommendations. Let's get started!
            </p>
          </div>

          {/* Suggestion Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {suggestions.map((suggestion, index) => (
              <Card
                key={index}
                className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col gap-2">
                  <div className="p-2 bg-gray-100 rounded-lg w-fit">
                    {suggestion.icon}
                  </div>
                  <h3 className="font-medium text-gray-900">
                    {suggestion.title}
                  </h3>
                  <p className="text-sm text-gray-500">{suggestion.subtitle}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Chat Input */}
          <div className="mt-8">
            <div className="flex gap-2 items-center bg-white p-2 rounded-lg shadow-lg">
              <label htmlFor="file-upload" className="cursor-pointer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0"
                  type="button"
                >
                  <span className="sr-only">Upload file</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </Button>
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileSelect}
                accept=".doc,.docx,.pdf,image/*"
              />
              <Input
                className="flex-1"
                placeholder="Ask SayHalo anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Send <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
