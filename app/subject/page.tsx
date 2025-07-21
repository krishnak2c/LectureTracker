import { Subjects } from "@/components/Subjects";

const Home = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 mt-6 md:mt-10 w-full">
      <div className="relative isolate overflow-hidden mt-12 bg-primary-foreground border px-4 md:px-8 py-12 text-center rounded-3xl w-full">
        <h1 className="text-4xl md:text-7xl font-bold text-cente">Subjects</h1>
      </div>
      <Subjects />
    </div>
  );
};

export default Home;
