import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.DEEPSEEK_API_KEY;

if (!apiKey) {
  throw new Error("A chave DEEPSEEK_API_KEY não foi encontrada. Verifique o arquivo .env");
}

console.log("Chave carregada com sucesso:", apiKey);

// Função principal
export async function generateCode(prompt: string) {
  console.log("Executando generateCode com o prompt:", prompt);

  // Exemplo de chamada à API DeepSeek
  const response = await fetch("https://api.deepseek.com/v1/endpoint", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await response.json();

  console.log("> Resposta da API:", data);

  return data;
}
