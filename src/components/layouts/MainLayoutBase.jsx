export const MainLayoutBase = ({ children }) => {
  return (
    <div className={"flex flex-col h-full"}>

      <main className={"w-full mx-auto flex-1 my-6 max-w-screen-xl px-2.5"}>{children}</main>
      <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Component%201.png" className='fotter-dnipro' alt="alt-fotter" />
    </div>
  );
};