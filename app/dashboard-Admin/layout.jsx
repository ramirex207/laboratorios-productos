import Aside from "@components/Aside";

export default function DashboardLayout({ children }) {
  return (
    <section className="lg:flex">
      <aside className="lg:w-1/4 z-0 lg:mt-20 lg:h-full ">
        <Aside />
      </aside>

      <main className="lg:w-3/4 lg:mt-20 p-4 lg:pl-10" >{children}</main>
    </section>
  );
}
