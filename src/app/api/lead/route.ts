import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

/**
 * TODO(crm): this is a placeholder lead store, not a real backend. Replace
 * with the actual CRM / Onbbits integration before launch (BUILD-SPEC v3
 * §5.12, §7). Leads are kept in memory only and are lost on server restart;
 * nothing here sends a WhatsApp message.
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

  console.log("[lead]", leads.get(leadId));

  return NextResponse.json({ leadId });
}
