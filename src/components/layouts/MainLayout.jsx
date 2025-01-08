export const MainLayout = ({ children }) => {
  return (
    <div className={"flex flex-col h-full"}>
      <header className="w-full max-w-screen-xl mx-auto flex justify-center items-center">

      </header>
      <main className={"w-full mx-auto flex-1 my-6 max-w-screen-xl px-2.5"}>{children}</main>

    </div>
  );
};