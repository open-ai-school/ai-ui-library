import type { Meta, StoryObj } from "@storybook/react";
import { Navigation, type NavItem } from "./Navigation";
import { Button } from "./Button";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Navigation>;

const sampleItems: NavItem[] = [
  { label: "Programs", href: "/programs", active: true },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Playground", href: "/playground" },
  { label: "About", href: "/about" },
];

export const Default: Story = {
  args: {
    brand: <span className="text-lg font-bold text-[var(--color-text)]">🌱 AI Educademy</span>,
    items: sampleItems,
    actions: (
      <Button size="sm" variant="outline">
        Sign In
      </Button>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    brand: <span className="text-lg font-bold text-[var(--color-text)]">🌱 AI Educademy</span>,
    items: [
      { label: "Programs", href: "/programs", active: true, icon: <span>📚</span> },
      { label: "Dashboard", href: "/dashboard", icon: <span>📊</span> },
      { label: "Playground", href: "/playground", icon: <span>🎮</span> },
      { label: "About", href: "/about", icon: <span>ℹ️</span> },
    ],
    actions: <Button size="sm">Get Started</Button>,
  },
};

export const Minimal: Story = {
  args: {
    brand: <span className="text-lg font-bold text-[var(--color-text)]">🌱</span>,
    items: [
      { label: "Home", href: "/" },
      { label: "Docs", href: "/docs", active: true },
    ],
  },
};

export const NonSticky: Story = {
  args: {
    brand: <span className="text-lg font-bold text-[var(--color-text)]">🌱 AI Educademy</span>,
    items: sampleItems,
    sticky: false,
  },
};
