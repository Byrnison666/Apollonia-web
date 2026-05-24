import { NextResponse } from "next/server";

// Приём заявок на запись. Сейчас валидирует вход и логирует на сервере.
// TODO: подключить отправку в email/Telegram/CRM клиники.

type Payload = {
  name?: string;
  phone?: string;
  clinic?: string;
  service?: string;
  message?: string;
  consent?: boolean;
};

const digits = (s: string) => s.replace(/\D/g, "");

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const phone = (data.phone ?? "").trim();

  if (name.length < 2 || digits(phone).length < 10 || data.consent !== true) {
    return NextResponse.json(
      { error: "Validation failed" },
      { status: 422 },
    );
  }

  // Здесь должна быть интеграция с почтой/Telegram/CRM.
  console.info("[zapis] new request", {
    name,
    phone,
    clinic: data.clinic,
    service: data.service,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
