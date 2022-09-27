import { JSX } from "preact";

export function RoundedButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      style={{
        touchAction: "manipulation",
      }}
      {...props}
      class="p-3 border border-transparent rounded-full text-white bg-blue(500 hover:600) focus:(outline-none ring(2 offset-2 blue-500)) disabled:(bg-blue-200 cursor-default)}"
    />
  );
}
