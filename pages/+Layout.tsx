import "../layouts/style.css";
import logoUrl from "../assets/logo.svg";
import type { JSX } from "solid-js";

export function Layout(props: { children?: JSX.Element }) {
  return (
    <div
      style={{
        display: "flex",
        "max-width": "900px",
        margin: "auto",
      }}
    >
      <Sidebar>
        <Logo />
      </Sidebar>
      <Content>{props.children}</Content>
    </div>
  );
}

function Sidebar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      style={{
        padding: "20px",
        "flex-shrink": 0,
        display: "flex",
        "flex-direction": "column",
        "line-height": "1.8em",
        "border-right": "2px solid #eee",
      }}
    >
      {props.children}
    </div>
  );
}

function Content(props: { children: JSX.Element }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: "20px",
          "padding-bottom": "50px",
          "min-height": "100vh",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        "margin-top": "20px",
        "margin-bottom": "10px",
      }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} />
      </a>
    </div>
  );
}
