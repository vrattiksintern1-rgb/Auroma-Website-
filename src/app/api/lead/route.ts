import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

/**
 * TODO(crm): this is a placeholder lead store, not a real backend. Replace
 * with the actual CRM / Onbbits integration before launch — see content
 * spec section 06 ("UTM parameters preserved through the form into the CRM
 * record") and section 05 (WhatsApp handoff). Leads are kept in memory only
 * and are lost on server restart; nothing here sends a WhatsApp message.
 */
const leads = new Map<string, Record<string, unknown>>();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const leadId = randomUUID();

  leads.set(leadId, {
    ...body,
    leadId,
    createdAt: new Date().toISOString(),
  });

  console.log("[lead:step1]", leads.get(leadId));

  return NextResponse.json({ leadId });
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { leadId, ...qualification } = body;

  const existing = leads.get(leadId);
  if (!existing) {
    return NextResponse.json({ error: "Unknown leadId" }, { status: 404 });
  }

  const updated = { ...existing, ...qualification, qualifiedAt: new Date().toISOString() };
  leads.set(leadId, updated);

  console.log("[lead:step2]", updated);

  return NextResponse.json({ ok: true });
}
