import { Header } from "@/components/Header";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="text-slate-800 bg-slate-100 dark:bg-slate-800 dark:text-slate-100 min-h-screen">
        <div className="max-w-4xl m-auto p-4">{children}</div>
      </main>
    </>
  );
};
