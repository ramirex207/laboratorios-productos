import {BrowserRouter, Route, Routes  } from 'react-router-dom';
import Sidebar from '@components/dashboard/Sidebar'
import Aside from '@components/Aside';

export default function DashboardLayout({ children }) {
  return (
    <section className="lg:flex">
    <aside className=" lg:mt-20 lg:fixed ">
      <Aside />
    </aside>

    <main className="lg:w-full lg:mt-20 p-4 lg:pl-80" >{children}</main>
  </section>
  );
}
