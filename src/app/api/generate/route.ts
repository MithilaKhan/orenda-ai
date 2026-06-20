import OpenAI from "openai";

const client = new OpenAI({
  // apiKey: process.env.GEMINI_API_KEY!,
  // baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/", 
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return Response.json({ error: "Prompt is required" }, { status: 400 });
    }

    const response = await client.chat.completions.create({
      // model: "gemini-1.5-flash",  
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful nature-inspired content writing assistant named Orenda AI. You specialize in biomimicry, ecology, sustainability, and regenerative design.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });


    return Response.json({
      result: response.choices[0].message.content,
    });

  } catch (error) {
    console.error("Error generating content:", error);
    return Response.json(
      { error: (error as Error)?.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
