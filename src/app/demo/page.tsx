import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DemoPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      {" "}
      {/* Adjust min-height as needed */}
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            CashClinic AI Assistant
          </CardTitle>
          <CardDescription>
            Ask our AI assistant about CashClinic features, pricing, or anything
            else! The chat widget should appear in the bottom right corner.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <p className="text-muted-foreground text-center">
            Interact with the chat widget to start the demonstration.
          </p>
          {/* You could add more elements here like sample questions or buttons */}
        </CardContent>
      </Card>
    </section>
  );
}
