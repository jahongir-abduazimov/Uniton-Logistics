import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = "8396676867:AAGnB4_NfMVjuhDG3niyITZ6uEj4uVkrxk8";
const TELEGRAM_CHAT_ID = "5050378120";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

interface FormData {
  type: "consultation" | "quote";
  name?: string;
  phone?: string;
  email?: string;
  description?: string;
  message?: string;
  loading?: string;
  unloading?: string;
  nameCompany?: string;
  cargoType?: string;
  dimensions?: string;
  weight?: string;
}

// Escape special HTML characters in user input
function escapeHtml(text: string | undefined): string {
  if (!text) return "Kiritilmagan";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatConsultationMessage(data: FormData): string {
  return `🔵 <b>KONSULTATSIYA SO'ROVI</b>

👤 <b>Ism:</b> ${escapeHtml(data.name)}
📞 <b>Telefon:</b> ${escapeHtml(data.phone)}
📧 <b>Email:</b> ${escapeHtml(data.email)}
💬 <b>Tavsif:</b>
${escapeHtml(data.description)}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString("uz-UZ", {
    timeZone: "Asia/Tashkent",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

function formatQuoteMessage(data: FormData): string {
  return `💰 <b>NARX SO'ROVI (QUOTE)</b>

📦 <b>Yuk tavsifi:</b>
${escapeHtml(data.message)}

📍 <b>Yuklanish joyi:</b> ${escapeHtml(data.loading)}
📍 <b>Tushirish joyi:</b> ${escapeHtml(data.unloading)}

👤 <b>Mijoz nomi/kompaniya:</b> ${escapeHtml(data.nameCompany)}
📞 <b>Telefon:</b> ${escapeHtml(data.phone)}
📧 <b>Email:</b> ${escapeHtml(data.email)}

📋 <b>Yuk turi:</b> ${escapeHtml(data.cargoType)}
📏 <b>O'lchamlari:</b> ${escapeHtml(data.dimensions)}
⚖️ <b>Og'irligi:</b> ${escapeHtml(data.weight)}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString("uz-UZ", {
    timeZone: "Asia/Tashkent",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();

    if (!data.type || (data.type !== "consultation" && data.type !== "quote")) {
      return NextResponse.json(
        { error: 'Invalid form type. Must be "consultation" or "quote"' },
        { status: 400 }
      );
    }

    const message =
      data.type === "consultation"
        ? formatConsultationMessage(data)
        : formatQuoteMessage(data);

    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message to Telegram", details: errorData },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
