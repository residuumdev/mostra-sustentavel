import ComponentFooter from "../components/footer/footer";

const PageGerador = () => {
  return (
    <>
      <div className="relative h-full w-full overflow-y-auto bg-gray-50">
        <div className="px-4 pt-4">
          {/* seção 1 */}
          <section className="bg-[#002266] dark:text-white">
            <h2>Seção aqui</h2>
          </section>

          <div className="my-4 grid grid-cols-1 xl:gap-4 2xl:grid-cols-2">
            {/* seção 2 */}
            <section className="bg-[#002266] dark:text-white">
              <h2>Seção aqui</h2>
            </section>
          </div>

          <div className="my-4 grid grid-cols-1 xl:gap-4 2xl:grid-cols-2">
            {/* seção 3 */}
            <section className="bg-[#002266] dark:text-white">
              <h2>Seção aqui</h2>
            </section>
            {/* seção 4 */}
            <section className="bg-[#002266] dark:text-white">
              <h2>Seção aqui</h2>
            </section>
          </div>
        </div>

        {/* <app-footer /> */}
        <ComponentFooter />
      </div>
    </>
  );
};

export default PageGerador;
