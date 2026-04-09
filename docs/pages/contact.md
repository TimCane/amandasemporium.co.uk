# Page: Contact

## Route

`/contact`

## Rendering

- **GET**: Static (pre-rendered)
- **POST**: SSR (server-side handler for form submission)

## Purpose

Provide a way for visitors to get in touch. Email address displayed plus a contact form. No social media links.

## User Stories

- As a visitor, I want to send a message to Amanda without leaving the website.
- As an event organiser, I want to contact Amanda about booking her stall.
- As a visitor who prefers their own email client, I want to see the email address directly.
- As a visitor, I want to find answers to common questions without needing to send a message.
- As a visitor, I want to know about the next event so I can visit in person instead.

## Sections (top to bottom)

### 1. Page Header

- Heading: "Get in Touch"
- Brief intro line (copy TBD)

### 2. Email Address

- Displayed prominently as a clickable `mailto:` link
- Copy TBD: the actual email address

### 3. Contact Form

Fields:

| Field | Type | Required | Validation |
| ----- | ---- | -------- | ---------- |
| Name | text | Yes | Min 2 characters |
| Email | email | Yes | Valid email format |
| Subject | text | Yes | Min 2 characters |
| Message | textarea | Yes | Min 10 characters |

- Submit button: "Send Message"
- On success: show a confirmation message ("Thanks for getting in touch! We'll get back to you soon.")
- On error: show an error message, preserve form data

### 4. POST Handler (stub)

The form POSTs to the same `/contact` route. The SSR handler:

1. Validates form data server-side
2. Logs the submission (destination TBD — could be file, database, email service, etc.)
3. Returns success/error response
4. **For now**: stub implementation that logs to console and returns success

```typescript
// Stub implementation
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  // Validate fields
  // Log to console (TBD: replace with real notification)
  console.log('Contact form submission:', Object.fromEntries(formData));
  // Return redirect or success response
};
```

### 5. FAQ Section

- Common questions and answers
- Stored as a simple array in the page frontmatter or as a small content collection
- Questions (copy TBD):
  - "Where can I find you?"
  - "Can I commission a custom product?"
  - "How does bear rescue work?"
  - "Do you post items?"
  - "How much do things cost?"
- Expandable/accordion format or simple list (theme decides)

### 6. Next Event Callout

- "Prefer to see us in person? Find us at [next event name] on [date]!"
- Pulls the next upcoming event from the events collection
- Links to `/events`
- If no upcoming events, this section is hidden entirely

## Content Collections Used

- `events` — next upcoming event for the callout section

## Components Used

- Page header / banner
- Form fields (could be generic UI components)

## Layout

Uses `page.layout.astro`

## Copy Needed

- [ ] Intro text
- [ ] Email address
- [ ] Success confirmation message
- [ ] Error message
- [ ] FAQ questions and answers

## SEO

- Title: "Contact | Amanda's Emporium"
- Description: "Get in touch with Amanda's Emporium"
- No JSON-LD needed
