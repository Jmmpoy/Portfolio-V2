import Container from "@/components/container";

export default function Footer() {
  const items = [
    { title: "Email", link: "mailto:jmmpoy@@info.com" },
    {
      title: "Twitter",
      link: "https://twitter.com/jmmpoy",
    },
    { title: "Instagram", link: "https://www.instagram.com/mrblanpain/" },
  ];
  return (
    <footer className="mb-4">
      <Container>
        <div className="border-t  py-4">
          <div className="flex space-x-2 mb-1 md:mb-0">
            {items.map((item, index) => {
              return (
                <>
                  <a
                    href={item.link}
                    className="hover:text-gray-500 focus:text-gray-500 uppercase text-[12px] font-founders ">
                    {item.title}
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
