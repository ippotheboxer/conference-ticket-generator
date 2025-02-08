import React from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import Form from "./components/Form";

function App() {
  return (
    <main className="flex flex-col items-center xl:bg-[url(assets/images/background-desktop.png)] md:bg-[url(assets/images/background-tablet.png)] bg-[url(assets/images/background-mobile.png)] bg-cover min-h-screen min-w-full">
      <Header />
      <section className="flex items-center flex-col text-center pt-4 xl:pt-6">
        <Message 
          title="Your Journey to Coding Conf 2025 Starts Here!"
          paragraph="Secure your spot at next year's biggest coding conference." 
        />
        <Form />
      </section>
    </main>
  );
}

export default App;
