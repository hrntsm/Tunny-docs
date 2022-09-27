import { asset, Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "../islands/Counter.tsx";
import LemonDrop from "../islands/LemonDrop.tsx";
import Footer from "../components/Footer.tsx";
import VERSIONS from "../versions.json" assert { type: "json" };
import * as FeatureIcons from "../components/FeatureIcons.tsx";
import CopyArea from "../islands/CopyArea.tsx";
import * as Icons from "../components/Icons.tsx";
import Projects from "../components/Projects.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const accept = req.headers.get("accept");
    if (accept && !accept.includes("text/html")) {
      const path = `https://deno.land/x/fresh@${VERSIONS[0]}/init.ts`;
      return new Response(`Redirecting to ${path}`, {
        headers: { "Location": path },
        status: 307,
      });
    }
    return ctx.render();
  },
};

const TITLE = "Tunny - The next-gen Grasshopper optimization tool.";
const DESCRIPTION =
  "Tunny includes previously unseen features such as constrained multi-objective optimization, Quasi-MonteCarlo sampling and dashboards for results analysis etc.";

export default function MainPage(props: PageProps) {
  const ogImageUrl = new URL(asset("/home-og.png"), props.url).href;
  const origin = `${props.url.protocol}//${props.url.host}`;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <div class="flex flex-col min-h-screen">
        <HelloBar />
        <Hero />
        <div class="flex-1">
          <Intro />
          <GettingStarted />
          {/* <Example /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

function HelloBar() {
  return (
    <a
      class="bg-blue-400 text-black border(b blue-500) p-3 text-center group"
      href="https://github.com/hrntsm/Tunny/releases/tag/v0.5.0"
    >
      <b>Tunny v0.5</b> has been released with support for <b>constraint</b>,
      {" "}
      <b>Hypervolume visualize</b>, <b>clustering</b>, and more!{"  "}
      <span class="group-hover:underline">→</span>
    </a>
  );
}

function Hero() {
  return (
    <>
      <div class="flex justify-end items-center bg-blue-300">
        <a
          href="/docs"
          class="border(1 black) inline-flex items-center h-10 px-4 m-4 text-black bg-transparent rounded hover:bg-white"
        >
          Documentation
        </a>
      </div>
      {/* <section class="w-full flex justify-center items-center flex-col bg-blue-300">
        <LemonDrop />
      </section> */}
    </>
  );
}

function Features() {
  const item = "flex md:flex-col items-center gap-5";
  const desc = "flex-1 md:text-center";

  return (
    <div class="grid md:grid-cols-2 gap-6 md:gap-14">
      <div class={item}>
        <FeatureIcons.Globe />
        <div class={desc}>
          Multi-objective optimization <b>with constraint</b>.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.Island />
        <div class={desc}>
          The only one that supports <b>Bayesian optimization</b>.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.NoBuild />
        <div class={desc}>
          <b>Powerful</b> result analysis function.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.Gabage />
        <div class={desc}>
          Do not throw away previous results. <b>Can Restart optimization</b>
        </div>
      </div>

    </div>
  );
}

function Intro() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            The <span class="text-blue-500">next-gen</span> Grasshopper optimization tool.
          </h2>

          <p class="mt-4 text-gray-600">
            Reveals design space and solution space at high speed
          </p>
        </div>

        <picture class="block mt-4 md:mt-0">
          <img
            src="/TunnyIcon.svg"
            class="w-80 mx-auto"
            width={100}
            height={100}
            alt="Tunny Icon"
          />
        </picture>
      </div>

      <Features />

      <p class="text-gray-600">
        Tunny includes previously unseen features such as constrained multi-objective optimization,
        Quasi-MonteCarlo sampling and dashboards for results analysis etc.
      </p>
    </section>
  );
}

function GettingStarted() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 id="getting-started" class="text(3xl gray-600) font-bold">
        <a href="#getting-started" class="hover:underline">
          Getting Started
        </a>
      </h2>
      <p class="text-gray-600">
        First, Tunny runs on Windows only.
      </p>

      <ol class="text-gray-600" type="1">
        <li>1. Download Tunny from{" "}
          <a
            href="https://www.food4rhino.com/en/app/tunny"
            class="text-blue-600 hover:underline"
          >
            food4rhino
          </a>
          {" "} or {" "}
          <a
            href="https://github.com/hrntsm/tunny/releases"
            class="text-blue-600 hover:underline"
          >
            release page.
          </a>
        </li>
        <li>
          2. Right-click the file {">"} Properties {">"} make sure there is no "blocked" text
        </li>
        <li>
          3. In Grasshopper, choose File {">"} Special Folders {">"} Components folder. Move Tunny folder you downloaded there.
        </li>
        <li>
          4. Restart Rhino and Grasshopper
        </li>
        <li>
          5. In Grasshopper, Place the Tunny component and double-click the icon to start downloading the necessary libraries.
        </li>
        <li>
          6. Enjoy!
        </li>
      </ol>

      <p class="text-gray-600">
        Please see{" "}
        <a
          href="/docs"
          class="text-blue-600 hover:underline"
        >
          the documentation page
        </a>
        {" "} for more details!
      </p>
    </section>
  );
}

// function GettingStarted(props: { origin: string }) {
//   return (
//     <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
//       <h2 id="getting-started" class="text(3xl gray-600) font-bold">
//         <a href="#getting-started" class="hover:underline">
//           Getting Started
//         </a>
//       </h2>
//       <div class="text-gray-600 flex gap-1 mb-4 bg-gray-100 p-2 rounded">
//         <div class="text-gray-400">
//           <Icons.Info />
//         </div>
//         <p>
//           <a href="https://deno.land" class="text-blue-600 hover:underline">
//             Deno CLI
//           </a>{" "}
//           version 1.23.0 or higher is required.{" "}
//           <a
//             href="https://deno.land/manual/getting_started/installation"
//             class="text-blue-600 hover:underline"
//           >
//             Install
//           </a>{" "}
//           or{" "}
//           <a
//             href="https://deno.land/manual/getting_started/installation#updating"
//             class="text-blue-600 hover:underline"
//           >
//             update
//           </a>.
//         </p>
//       </div>
//       <p class="text-gray-600">
//         To bootstrap a new project:
//       </p>

//       <CopyArea>
//         {`deno run -A -r ${props.origin} my-project`}
//       </CopyArea>

//       <p class="text-gray-600">
//         Enter the newly created project directory and run the following command
//         to start the development server:
//       </p>

//       <CopyArea>{`deno task start`}</CopyArea>

//       <p class="text-gray-600">
//         You can now open{" "}
//         <a
//           href="http://localhost:8000"
//           class="text-blue-600 hover:underline"
//         >
//           http://localhost:8000
//         </a>{" "}
//         in your browser to view the page.
//       </p>
//       <p class="text-gray-600">
//         A more in-depth{" "}
//         <a
//           href="/docs/getting-started"
//           class="text-blue-600 hover:underline"
//         >
//           <i>Getting Started</i>
//         </a>{" "}
//         guide is available in{" "}
//         <a href="/docs" class="text-blue-600 hover:underline">the docs</a>.
//       </p>
//     </section>
//   );
// }

// const timeFmt = new Intl.DateTimeFormat("en-US", {
//   timeStyle: "long",
//   hour12: false,
// });

// function Example() {
//   return (
//     <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
//       <h2 id="example" class="text(3xl gray-600) font-bold">
//         <a href="#example" class="hover:underline">
//           Example
//         </a>
//       </h2>
//       <p class="text-gray-600">
//         This text is being server side rendered on the fly. It was rendered at
//         {" "}
//         {timeFmt.format(new Date())}.
//       </p>
//       <p class="text-gray-600">
//         The counter below was rendered on the server with a starting value of 3,
//         and was then hydrated on the client to provide interactivity. Try out
//         the buttons!
//       </p>
//       <Counter start={3} />
//       <p class="text-gray-600">
//         Only the JS required to render that counter is sent to the client.
//       </p>
//     </section>
//   );
// }
