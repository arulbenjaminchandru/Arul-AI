"use client";

import React, { useState } from "react";
import Heading from "@/components/myComps/Heading";
import { Code } from "lucide-react";
import PromptArea from "@/components/myComps/PromptArea";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

// Define the ChatCompletionRequestMessage type locally
interface ChatCompletionRequestMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const CodePage = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(
      "🧪 The form's values that are going to be submitted to ChatGPT"
    );
    console.log(values);
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      console.log("⛔ [API_CONVERSATION_ERROR]: ", error);
      toast.error("Something went wrong");
    } finally {
      router.refresh();
    }
  };

  // Transform messages to an array of strings
  const transformedMessages = messages.map(message => message.content);

  return (
    <main className="not-mobile h-full">
      <Heading
        title="Code Generation"
        describtion="Generate code through text. Powered by ChatGPT-3.5 Turbo"
        icon={Code}
        iconColor="text-green-500"
        bgColor="bg-green-500/20"
      />
      <PromptArea
        type="code"
        placeholder="Example: Create a CSS animation that upon hover, it will scale the specified HTML element by a little."
        handleSubmit={onSubmit}
        isLoading={isLoading}
        form={form}
        AIresponses={transformedMessages} // Pass transformed messages
      />
    </main>
  );
};

export default CodePage;
