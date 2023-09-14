import Aside from "@components/Aside";

export default function DashboardLayout({ children }) {
  return (
    <section className="lg:flex fixed z-0 -mt-6 lg:mt-0">
      <aside className="lg:w-1/4">
        <Aside />
      </aside>
      <main className="lg:w-3/4 lg:pl-10 lg:mt-20">{children}</main>
    </section>
  );
}
