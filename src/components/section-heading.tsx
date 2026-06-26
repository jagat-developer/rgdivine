import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  summary?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, summary, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-5 eyebrow">{eyebrow}</p> : null}
      <h2 className="font-display fluid-h2 font-semibold text-ink">{title}</h2>
      {summary ? (
        <p className="mt-5 text-base font-light leading-8 text-ink-soft sm:text-lg">{summary}</p>
      ) : null}
    </div>
  );
}
