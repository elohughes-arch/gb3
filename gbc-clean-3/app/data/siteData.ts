export const siteData = {
    brand: "GB Contracting",
    ownerFirstName: "Mungo",
    phone: "+44 7464 062317",
    phoneDisplay: "+44 7464 062317",
    phoneTel: "+447464062317",
    email: "hello@gbcontracting.co.uk",
    area: "Taunton and surrounding areas",
    location: "Taunton, Somerset",

    tagline:
          "Tree surgery, land clearance, log splitting and outdoor contracting across Taunton and surrounding areas.",

    hero: {
          eyebrow: "Taunton & surrounding areas",
          h1: "Tree Surgery, Land Clearance & Outdoor Contracting in Taunton",
          sub: "GB Contracting helps homeowners, landowners and businesses clear, manage and maintain outdoor spaces safely, efficiently and with zero fuss.",
          primaryCta: { label: "Book a Free Quote", href: "/booking" },
          secondaryCta: { label: "Call +44 7464 062317", href: "tel:+447464062317" },
          image: { src: "/log-splitting.jpg", alt: "GB Contracting splitting logs on site" },
    },

    // Verified trust signals only.
    trust: {
          headline: "Local, insured, safety-first contracting.",
          items: [
            { kind: "count", value: 50, suffix: "+", label: "Jobs completed" },
            { kind: "count", value: 5, suffix: "★", label: "Star-rated service" },
            { kind: "text", value: "Fully", label: "Insured for tree & land work" },
            { kind: "text", value: "Local", label: "Based in Taunton" },
                ],
    },

    services: [
      {
              slug: "tree-surgery",
              title: "Tree Surgery",
              short: "Safe, practical tree work for homes, gardens, estates and commercial sites.",
              detail:
                        "Felling, reductions, crown lifts, deadwooding and removals — carried out methodically and cleared down to a tidy finish.",
              image: "/log-splitting.jpg",
      },
      {
              slug: "land-clearance",
              title: "Land Clearance",
              short: "Efficient clearance for overgrown plots, woodland, gardens and outdoor spaces.",
              detail:
                        "From paddocks and field margins to woodland strips and neglected gardens — site cleared and left ready for its next use.",
              image: "/cleared.jpg",
      },
      {
              slug: "log-splitting",
              title: "Log Splitting",
              short: "Timber processing and log splitting for clean, usable firewood and site organisation.",
              detail:
                        "Split, sized and stacked to spec — as a standalone service or as part of wider woodland and timber work.",
              image: "/log-stack.jpg",
      },
      {
              slug: "hedge-clearance",
              title: "Hedge Clearance",
              short: "Seasonal hedge cutting, reshaping and clearance for gardens, farms and estates.",
              detail:
                        "Practical, precise hedge work across all sizes and species. Cuttings cleared, site left tidy.",
              image: "/cleared.jpg",
      },
      {
              slug: "outdoor-contracting",
              title: "Outdoor Contracting",
              short: "General outdoor and ground work for landowners and rural properties.",
              detail:
                        "From site tidy-ups and timber processing to ongoing maintenance — straightforward outdoor contracting, done properly.",
              image: "/log-stack.jpg",
      },
        ],

    gallery: [
      { src: "/log-splitting.jpg", alt: "Splitting timber on site near Taunton", tag: "Log Splitting" },
      { src: "/log-stack.jpg", alt: "Stacked split logs in a Somerset stone barn", tag: "Timber Processing" },
      { src: "/cleared.jpg", alt: "Cleared woodland strip ready for use", tag: "Land Clearance" },
        ],

    whyChoose: {
          heading: "Straightforward Contracting, Done Properly",
          sub: "What you actually get when you book GB Contracting.",
          points: [
            { title: "Safety-first approach", body: "Every job is planned and worked methodically. No shortcuts, no avoidable risk." },
            { title: "Clear communication", body: "Direct contact with Mungo from quote through to completion." },
            { title: "Practical, efficient site work", body: "In, done, and out — with minimal disruption to your land or property." },
            { title: "Clean and tidy finish", body: "Site is left safer, cleaner and easier to use than we found it." },
            { title: "Local to Taunton", body: "Working across Taunton and surrounding areas — short notice often available." },
            { title: "Direct, honest quoting", body: "Free site visits. Clear scope. No vague pricing or upselling." },
                ],
    },

    testimonial: {
          quote:
                  "Mungo took down some trees for me a few months ago. I was very impressed by his knowledge, skills and emphasis on safety first. He’s also an incredibly polite and straightforward supplier. He did the job quickly, efficiently and with zero fuss. I will use him again and I recommend him highly without hesitation.",
          author: "Nick Hughes",
          role: "Client, Somerset",
    },

    ctaBlock: {
          heading: "Need trees removed, logs split or land cleared?",
          sub: "Send a few details and GB Contracting will get back to you to discuss the job, arrange a visit, or provide a quote.",
          primaryCta: { label: "Book a Free Quote", href: "/booking" },
          secondaryCta: { label: "Call Mungo", href: "tel:+447464062317" },
    },

    nav: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Work", href: "/#work" },
      { label: "About", href: "/about" },
      { label: "Book", href: "/booking" },
      { label: "Contact", href: "/contact" },
        ],
};

export type SiteData = typeof siteData;
