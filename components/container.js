export default function Container({ children, extraClasses }) {
  return (
    <section className={`${extraClasses} px-6  mx-auto w-full  md:px-8`}>
      {children}
    </section>
  );
}
