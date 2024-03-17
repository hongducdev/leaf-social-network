import Weather from "@/components/Weather/Weather";

const HomePage = () => {
  return (
    <section className="p-2 flex gap-x-5">
      <section className="w-[20vw]">
        <Weather />
      </section>
      <section className="w-[55vw] border border-ctp-text">news</section>
      <section className="w-[25vw] border border-ctp-text">suggestions</section>
    </section>
  );
};

export default HomePage;
