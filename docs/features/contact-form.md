# Feature: Contact Form (SSR Stub)

## Overview

Server-side POST handler for the contact form. Currently a stub that logs submissions — the notification destination (email service, database, etc.) is TBD.

## Route

`POST /contact`

## Implementation

The contact page has both GET (static pre-rendered form) and POST (SSR handler):

```typescript
// In pages/contact.astro (or a separate API route)
export const prerender = false;

// POST handler
if (Astro.request.method === 'POST') {
  const formData = await Astro.request.formData();

  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const subject = formData.get('subject')?.toString();
  const message = formData.get('message')?.toString();

  // Validate
  const errors = [];
  if (!name || name.length < 2) errors.push('Name is required');
  if (!email || !email.includes('@')) errors.push('Valid email is required');
  if (!subject || subject.length < 2) errors.push('Subject is required');
  if (!message || message.length < 10) errors.push('Message must be at least 10 characters');

  if (errors.length === 0) {
    // STUB: Log to console for now
    // TODO: Replace with actual notification (email, webhook, database, etc.)
    console.log('Contact form submission:', { name, email, subject, message });

    // Redirect to success state or show success message
  }
}
```

## Form Fields

| Field | HTML Type | Required | Validation |
| ----- | --------- | -------- | ---------- |
| name | `<input type="text">` | Yes | Min 2 characters |
| email | `<input type="email">` | Yes | Valid email format |
| subject | `<input type="text">` | Yes | Min 2 characters |
| message | `<textarea>` | Yes | Min 10 characters |

## Security

- Server-side validation (don't trust client-side only)
- Consider rate limiting (future improvement)
- Consider honeypot field for basic spam prevention
- CSRF protection via Astro's built-in mechanisms

## UX Flow

1. Visitor fills in form and clicks "Send Message"
2. Form POSTs to `/contact`
3. Server validates fields
4. **Success:** Show confirmation message ("Thanks for getting in touch!")
5. **Error:** Re-render form with error messages and preserved field values

## Future Notification Options

When ready to implement the actual notification:

- **Email:** Use a transactional email service (Resend, Postmark, etc.)
- **Webhook:** POST to a Discord/Slack webhook
- **Database:** Store in SQLite or similar on the VPS
- **File:** Append to a log file on disk

## Files Involved

- `src/pages/contact.astro` — form rendering and POST handler
