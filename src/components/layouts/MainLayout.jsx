

export const MainLayout = ({ children }) => {
  return (
    <div className={"flex flex-col h-full"}>
      <header className="w-full max-w-screen-xl mx-auto flex justify-center items-center">
      <img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Group%2013.png' className='img-header' alt='alt1' />
      </header>
      <main className={"w-full mx-auto flex-1 my-6 max-w-screen-xl px-2.5"}>{children}</main>
      <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Component%201.png" className='fotter-dnipro' alt="alt-fotter" />
    </div>
  );
};