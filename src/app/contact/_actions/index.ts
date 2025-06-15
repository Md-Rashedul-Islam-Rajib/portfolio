import { TMessage } from "../_components/ContactForm";

export const sendMessage = async (data: TMessage) => {
  console.log("Sending message", data);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });


    const result = await res.json();
    return result;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to send message:", err.message);
    } else {
      console.error("Unknown error:", err);
    }
  }
};
