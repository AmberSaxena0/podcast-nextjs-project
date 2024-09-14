"use client";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import GenerateThumbnail from "@/components/GenerateThumbnail";
import GeneratePodcast from "@/components/GeneratePodcast";
import { Loader } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";

const formSchema = z.object({
  podcastTitle: z.string().min(2),
  podcastDescription: z.string().min(2),
});

const CreatePodcast = () => {
  const voiceCategory = ["alloy", "shimmer", "nova", "echo", "fable", "onyx"];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [audioUrl, setAudioUrl] = useState("");
  const [audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [audioDuration, setAudioDuration] = useState(0);

  const [imagePrompt, setImagePrompt] = useState("");
  const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [imageURl, setImageURl] = useState("");

  const [voiceType, setVoiceType] = useState<string | null>(null);
  const [voicePrompt, setVoicePrompt] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="mt-10 flex flex-col">
      <h1 className="text-20 font-bold text-white-1">CreatePodcast </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col mt-12"
        >
          <FormField
            control={form.control}
            name="podcastTitle"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2.5 ">
                <FormLabel className="text-16 font-bold text-white-1">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    className="input-class focus-visible:ring-orange-1"
                    placeholder="VocalVibes"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-white-1" />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2.5">
            <Label className="text-white-1 text-16 font-bold">
              Select AI Audio
            </Label>
            <Select onValueChange={(val) => setVoiceType(val)}>
              <SelectTrigger
                className={cn(
                  "text-16 w-full border-none bg-black-1 text-gray-1"
                )}
              >
                <SelectValue
                  placeholder="Select AI Voice"
                  className="placeholder:text-gray-1"
                />
              </SelectTrigger>
              <SelectContent className="text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1">
                {voiceCategory.map((item) => {
                  return (
                    <SelectItem
                      className="capitalize focus:ring-orange-1"
                      key={item}
                      value={item}
                    >
                      {item}
                    </SelectItem>
                  );
                })}
              </SelectContent>
              {voiceType && (
                <audio src={`/${voiceType}.mp3`} autoPlay className="hidden" />
              )}
            </Select>
          </div>
          <FormField
            control={form.control}
            name="podcastDescription"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2.5 ">
                <FormLabel className="text-16 font-bold text-white-1 mt-10">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="input-class focus-visible:ring-orange-1"
                    placeholder="Write a short podcast description"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-white-1" />
              </FormItem>
            )}
          />
          <div className=" flex flex-col gap-[30px] border-b border-black-5 pb-10" />
          <div className="flex flex-col pt-10">
            <GeneratePodcast
              setAudioStorageId={setAudioStorageId}
              setAudio={setAudioUrl}
              voiceType={voiceType}
              audio={audioUrl}
              voicePrompt={voicePrompt}
              setVoicePrompt={setVoicePrompt}
              setAudioDuration={setAudioDuration}
            />
            <GenerateThumbnail />
            <div className="mt-10 w-full ">
              <Button
                type="submit"
                title="Submit"
                className="text-16 w-full py-6 font-extrabold text-white-1 bg-orange-1 transition-all duration-100 hover:bg-black-1"
              >
                {!isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>Submit & Publish Podcast</>
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreatePodcast;
