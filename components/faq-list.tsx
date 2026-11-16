import { Plus } from "lucide-react";

export function FaqList({ questions }: { questions: { question: string; answer: string }[] }) {
  return (
    <div className="faq-list">
      {questions.map(({ question, answer }) => (
        <details key={question} suppressHydrationWarning>
          <summary>{question}<Plus aria-hidden size={20} /></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
