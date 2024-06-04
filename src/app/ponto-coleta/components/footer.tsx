"use client";

import { Footer } from "flowbite-react";

function ComponentFooter() {
  return (
    <Footer>
      <div className="w-full  text-center">
        <Footer.Copyright
          by="Residuum™. Todos os direitos reservados."
          year={2024}
          className="bg-ponto p-8 text-white"
        />
      </div>
    </Footer>
  );
}

export default ComponentFooter;
