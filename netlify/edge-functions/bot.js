export default async (request) => {
  const BOT_TOKEN = "8838584952:AAEoA1W7BiNRkP0uDVPMNpBsczpZ30El6hI";
  const NETLIFY_URL = "https://lustrous-centaur-96d912.netlify.app";
 // මතක ඇතුව ඔයාගෙ සැබෑ Netlify Link එක හැදුනම මෙතනට දාන්න ඕනෙ

  try {
    const body = await request.json();
    
    if (body.message) {
      const chatId = body.message.chat.id;
      const userLink = `${NETLIFY_URL}/index.html?chat_id=${chatId}`;
      const replyMessage = `ඔබේ ආරක්ෂිත පද්ධති ලිපිනය සූදානම්:\n\n${userLink}`;

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: replyMessage
        })
      });
    }
  } catch (err) {
    console.error("Error:", err);
  }

  return new Response("OK", { status: 200 });
};
