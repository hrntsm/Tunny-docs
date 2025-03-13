const LINKS = [
  {
    title: "Source",
    href: "https://github.com/hrntsm/Tunny",
  },
  {
    title: "License",
    href: "https://github.com/hrntsm/Tunny/blob/main/LICENSE",
  },
  {
    title: "Code of Conduct",
    href: "https://github.com/hrntsm/Tunny/blob/main/CODE_OF_CONDUCT.md",
  },
  {
    title: "Changelog",
    href: "https://github.com/hrntsm/Tunny/blob/main/CHANGELOG.md",
  },
];

export default function Footer() {
  return (
    <footer class="border(t-2 gray-200) bg-gray-100 h-32 flex flex-col gap-4 justify-center">
      <div class="mx-auto max-w-screen-lg flex items-center justify-center gap-8">
        {LINKS.map((link) => (
          <a href={link.href} class="text-gray-600 hover:underline">
            {link.title}
          </a>
        ))}
      </div>
      <div class="text(gray-600 center)">
        <span>© {new Date().getFullYear()} hrntsm</span>
      </div>
      <a
        href="https://fresh.deno.dev/"
        style="align-items: center; display: flex; justify-content: center;"
      >
        <img
          src="/fresh-badge.svg"
          alt="Made with Fresh"
          width={150}
          height={40}
        />
      </a>
    </footer>
  );
}
