import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "./Toast";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Toast",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};
export default meta;

type Story = StoryObj;

function ToastButtons() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary" size="sm" onClick={() => toast("Lesson completed!", "success")}>
        Success
      </Button>
      <Button variant="outline" size="sm" onClick={() => toast("Something went wrong.", "error")}>
        Error
      </Button>
      <Button variant="secondary" size="sm" onClick={() => toast("Check your connection.", "warning")}>
        Warning
      </Button>
      <Button variant="ghost" size="sm" onClick={() => toast("New content available.", "info")}>
        Info
      </Button>
    </div>
  );
}

export const AllVariants: Story = {
  render: () => <ToastButtons />,
};

function CustomDurationDemo() {
  const { toast } = useToast();
  return (
    <div className="flex gap-3">
      <Button size="sm" onClick={() => toast("Quick toast (2s)", "info", 2000)}>
        2 seconds
      </Button>
      <Button size="sm" variant="secondary" onClick={() => toast("Slow toast (8s)", "info", 8000)}>
        8 seconds
      </Button>
    </div>
  );
}

export const CustomDuration: Story = {
  render: () => <CustomDurationDemo />,
};

function StackingDemo() {
  const { toast } = useToast();
  let count = 0;
  return (
    <Button
      size="sm"
      onClick={() => {
        count++;
        const variants = ["success", "error", "warning", "info"] as const;
        toast(`Toast #${count}`, variants[count % 4]);
      }}
    >
      Click Rapidly
    </Button>
  );
}

export const Stacking: Story = {
  render: () => <StackingDemo />,
};
