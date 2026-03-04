import type { Toolkit } from "./types";

export const retirementTsp: Toolkit = {
  slug: "retirement-tsp",
  title: "TSP & Retirement",
  subtitle:
    "A practical guide to contributions, Roth vs Traditional, and how to turn raises into wealth.",
  sections: [
    {
      type: "checklist",
      title: "Simple Starter Strategy",
      items: [
        "Pick a contribution rate you can sustain (then raise it after you stabilize).",
        "Increase after promotions/raises before lifestyle grows.",
        "Use the budget sheet to lock TSP in as a planned line item.",
        "Confirm beneficiaries (quick win, easy to forget).",
      ],
    },
    {
      type: "checklist",
      title: "Roth vs Traditional (Plain English)",
      items: [
        "Roth: pay taxes now, withdrawals later are generally tax-free.",
        "Traditional: lower taxes now, pay taxes later on withdrawals.",
        "If you’re unsure: choose one and stay consistent—rate matters most early.",
        "Use promotions as your trigger to increase contributions automatically.",
      ],
    },
    {
      type: "actions",
      title: "OfficerOS Actions",
      actions: [
        { label: "Budget Planner", href: "/toolkits/budget-planner", note: "Make TSP a line item" },
        { label: "Promotion Pay Planner", href: "/toolkits/promotion-planner", note: "Auto-allocate raises" },
      ],
    },
    {
      type: "actions",
      title: "Official Links",
      actions: [
        { label: "TSP (Official)", href: "https://www.tsp.gov/" },
        { label: "DoD Blended Retirement System", href: "https://militarypay.defense.gov/Benefits/Blended-Retirement-System/" },
      ],
    },
    {
      type: "text",
      title: "Coming Next",
      text: "Interactive projections: “If I increase TSP by 1% each promotion, where do I land?”",
    },
  ],
};