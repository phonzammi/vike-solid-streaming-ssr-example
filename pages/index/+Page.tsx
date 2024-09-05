import { Config } from "vike-solid/Config";
import { Counter } from "../../components/Counter.jsx";
import { Movies } from "./Movies.jsx";

export default function Page() {
  return (
    <>
      <Config
        Head={(
          <>
            <meta name="keywords" content="your, tags" />
            <meta name="description" content="150 words" />
            <meta name="subject" content="your website's subject" />
            <meta name="copyright" content="company name" />
            <meta name="language" content="ES" />
            <meta name="robots" content="index,follow" />
            <meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />
            <meta name="abstract" content="" />
            <meta name="topic" content="" />
            <meta name="summary" content="" />
            <meta name="Classification" content="Business" />
            <meta name="author" content="name, email@hotmail.com" />
            <meta name="designer" content="" />
            <meta name="reply-to" content="email@hotmail.com" />
            <meta name="owner" content="" />
          </>
        )}
      />
      <h1>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <Movies />
    </>
  );
}