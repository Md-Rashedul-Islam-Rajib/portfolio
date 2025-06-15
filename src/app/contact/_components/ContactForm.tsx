// components/ContactForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendMessage } from "../_actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});

export type TMessage = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TMessage>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();
  

  const onSubmit = async (data: TMessage) => {
    console.log({data})
    try {
      const res = await sendMessage(data);

      if (res?.success) {
        toast.success("Message sent successfully");
        router.push(`/`);
      } else {
        toast.error(res?.message);
      }
    } catch (err){
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto flex-col justify-center p-6 shadow-xl rounded-2xl space-y-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-center">📩 Contact Me</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <Input placeholder="Your Name" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input type="email" placeholder="Your Email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Textarea
            placeholder="Your Message"
            rows={20}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

      </form>
    </motion.div>
  );
}
