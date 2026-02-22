import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Salla Webhook:", body);

  if (body.event === "app.store.authorize") {
    const accessToken = body.data.access_token;
    const storeId = body.merchant.id;

    // هنا المفروض تخزنينهم في قاعدة البيانات
    console.log("Store Connected:", storeId);
    console.log("Token:", accessToken);
  }

  return NextResponse.json({ success: true });
}
