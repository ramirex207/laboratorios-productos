import Aside from "@components/Aside";
import { getServerSession } from "next-auth";

export default async function DashboardLayout({ children,req }) {
  const {user} = await getServerSession({req});
  
  return (
    <section className="lg:flex">
      <aside className=" lg:mt-20 lg:fixed ">
        <Aside user={user}/>
      </aside>

      <main className="lg:w-full lg:mt-20 p-4 lg:pl-80" >{children}</main>
    </section>
  );
}
