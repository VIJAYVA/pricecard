import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import Message from "./Message";

function App() {
  const data = [
    {
      plan: "FREE",
      price: 0,
      features: [
        {
          title: "10 users included",
        },
        {
          title: "2 GB of storage",
        },
        {
          title: "Email support",
        },
        {
          title: "Help center access",
        },
      ],
      button: "Sign up for free",
    },
    {
      plan: "PRO",
      price: 20,
      features: [
        {
          title: "20 users included",
        },
        {
          title: "10 GB of storage",
        },
        {
          title: "Priority email support",
        },
        {
          title: "Help center access",
        },
      ],
      button: "Contact Us",
    },
    {
      plan: "PLUS",
      price: 40,
      features: [
        {
          title: "30 users included",
        },
        {
          title: "15 GB of storage",
        },
        {
          title: "Phone and email support",
        },
        {
          title: "Help center access",
        },
      ],
      button: "Contact Us",
    },
  ];
  return (
    <div class="container">
      <div class="card-deck mb-3 text-center">
        {data.map((va) => {
          return <Card dataCard={va}></Card>;
        })}
        {/* example */}
        {/* <Card dataCard={data[0]}></Card>
        <Card dataCard={data[1]}></Card>
        <Card dataCard={data[2]}></Card> */}
        {/* /* //example */}
        {/* <Card plan="FREE" price="0"></Card>
        <Card plan="PAID" price="19"></Card>
        <Card plan="PRO" price="49"></Card> */}
      </div>
      {/* //example */}
      {/* <Message va="sun"></Message>
      <Message va="moon"></Message>
      <Message va="earth"></Message>
      <Message va="water"></Message>
      <Message va="fire"></Message> */}
    </div>
  );
}

export default App;
