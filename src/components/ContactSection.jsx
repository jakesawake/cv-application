export default function ContactSection() {
  return (
    <div className="flex flex-col [grid-area:contact]">
      <p>24 Cascaden Street</p>
      <p>Toronto, ON, M1V 5L7</p>
      <a className="font-bold no-underline" href="tel:+4168808403">
        (416) 880 8403
      </a>
      <a
        className="font-bold no-underline"
        href="mailto:jakechristiancanlas1@gmail.com"
      >
        jakechristiancanlas1@gmail.com
      </a>
      <a
        className="font-bold no-underline"
        href="https://www.linkedin.com/in/jake-canlas-bb15431a2"
        target="_blank"
        rel="noreferrer"
      >
        www.linkedin.com/in/jake-canlas-bb15431a2
      </a>
    </div>
  );
}
