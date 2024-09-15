import { v } from "convex/values";
import { action } from "./_generated/server";
import OpenAi from "openai";
import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";

const openai = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });

export const generateAudioAction = action({
  args: { input: v.string(), voice: v.union(v.string(), v.null()) },

  handler: async (_, { voice, input }) => {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice as SpeechCreateParams["voice"],
      input: input,
    });
    const buffer = await mp3.arrayBuffer();

    return buffer;
  },
});
