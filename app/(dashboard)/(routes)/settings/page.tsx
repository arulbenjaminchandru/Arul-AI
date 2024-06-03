"use client";

import React, { useState } from "react";
import Heading from "@/components/myComps/Heading";
import { Settings } from "lucide-react";
import PromptArea from "@/components/myComps/PromptArea";
import ChatCompletionRequestMessage  from "openai";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Empty from "@/components/myComps/Empty";
import Image from "next/image";

const SettingsPage = () => {
  const [messages, setMessages] = useState(
    [] as ChatCompletionRequestMessage[]
  );
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });


  return (
    <main className="not-mobile h-full">
      <Heading
        title="Settings (Under Construction 👨‍💻)"
        describtion="In the future more features can be added here."
        icon={Settings}
        iconColor="text-stone-300"
        bgColor="bg-stone-500/20"
      />
      <Empty
        label="This feature will be enabled soon."
        isSettings={true}
      />
      {/* <PromptArea
        type="code"
        placeholder="Example: Create a CSS animation that upon hover, it will scale the specified HTML element by a little."
        handleSubmit={onSubmit}
        isLoading={isLoading}
        form={form}
        AIresponses={messages}
      /> */}
    </main>
  );
};

export default SettingsPage;
