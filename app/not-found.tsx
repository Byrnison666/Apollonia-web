import { Home, Search } from "lucide-react";
import { Container } from "@/components/site/section";
import { ButtonLink } from "@/components/site/buttons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-gradient-to-b from-emerald-soft/50 to-cream pt-32 pb-20">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <span className="font-heading text-7xl font-semibold text-emerald sm:text-8xl">
            404
          </span>
          <h1 className="text-2xl text-ink sm:text-3xl">Страница не найдена</h1>
          <p className="text-base leading-relaxed text-ink-soft">
            Возможно, страница была перемещена или больше не существует. Вернитесь
            на главную или посмотрите наши услуги.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/" size="md">
              <Home className="size-5" strokeWidth={1.75} />
              На главную
            </ButtonLink>
            <ButtonLink href="/uslugi" variant="outline" size="md">
              <Search className="size-5" strokeWidth={1.75} />
              Все услуги
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
