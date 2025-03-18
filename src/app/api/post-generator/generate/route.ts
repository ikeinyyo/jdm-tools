const gpt = async (system: string, prompt: string) => {
  const response = await fetch(
    `${process.env.AZURE_OPENAPI_ENDPOINT}/openai/deployments/${process.env.AZURE_OPENAPI_GPT_DEPLOYMENT}/chat/completions?api-version=2024-02-15-preview`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.AZURE_OPENAPI_KEY || "",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: system,
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.5,
        top_p: 0.95,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 4000,
        stop: null,
      }),
    }
  );
  if (!response.ok) throw await response.json();
  return (await response.json()).choices[0].message.content;
};

export async function POST(request: Request) {
  const { system, prompt } = await request.json();
  try {
    const post = await gpt(system, prompt);
    return new Response(JSON.stringify({ post }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
