// "use client";

// import React from "react";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { Button } from "@/components/ui/button";
// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Form, useForm } from "react-hook-form";

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// });

// const CreatePodcast = () => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// };

// export default CreatePodcast;

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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const CreatePodcast = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
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
          <div className=" flex flex-col gap-[30px] border-b border-black-5 pb-10"></div>
        </form>
      </Form>
    </section>
  );
};

export default CreatePodcast;
