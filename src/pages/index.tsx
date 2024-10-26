import Footer from "./components/Footer";
import ProfileHeader from "./components/ProfileHeader";
import WorksComponent from "./components/WorksComponent";

export default function Component() {
  return (
    <>
      <section className=" w-full">
        <ProfileHeader />
      </section>
      <div className="border-t-2 p-4">
        <WorksComponent />
        <Footer />
      </div>
    </>
  );
}
