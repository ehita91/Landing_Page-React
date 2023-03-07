import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Jumbotron } from "@/components/Jumbotron";
import { Navbar } from "@/components/Navbar";

const descriptionAlligator = "Nowhere in the United States offers the opportunity to see alligators in their natural habitat quite like Everglades National Park. Alligators are everywhere inside the park, and catching a glimpse isn’t a question of if but when. The dry season (December through April) is prime for alligator viewing, but your chances are good any time of year."
const descriptionDuck = "Muscovy ducks have been introduced into urban and suburban areas in Florida where they often occur in high densities. These birds were illegally released primarily by private individuals for ornamental purposes or as pets. Muscovy ducks can be extremely prolific and local populations can increase."
const descriptionIguana = "Iguanas are large lizards that can range from 1.2 to 2.0 m (4 to 6.5 ft) in length, including their tails. They possess a dewlap and a row of elongated scales running from the midline of their necks down to their tails."
const descriptionSnake = "snake, (suborder Serpentes), also called serpent, any of more than 3,400 species of reptiles distinguished by their limbless condition and greatly elongated body and tail. Classified with lizards in the order Squamata snakes represent a lizard that, over the course of evolution, has undergone structural reduction, simplification, and loss as well as specialization."

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Jumbotron description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sequi eum reprehenderit omnis expedita quaerat minima non dolores corporis numquam. Maiores aliquid consequatur voluptate odit tempore nostrum non voluptatum incidunt!"} title={"A Warm Welcome"} buttonLabel={"Call to Action!"} buttonUrl={"www.google.com"}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Card title="Iguana" description={descriptionIguana} image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_an_Iguana.jpg/800px-Portrait_of_an_Iguana.jpg" buttonUrl="https://en.wikipedia.org/wiki/Iguana" buttonLabel="Go it!"/>
          </div>
          <div className="col-3">
          <Card title="Aligator" description={descriptionAlligator} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwhq5FkI8KFszcH21ZmvJBYyxgG_ULV4u-bSYU9yroguzd4JnN08gwG6Kmd3gE-63-r8&usqp=CAU" buttonUrl="https://www.britannica.com/summary/alligator" buttonLabel="Go it!"/>
          </div>
          <div className="col-3">
          <Card title="Duck" description={descriptionDuck} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGW99LTWHnzbjMo8bnp3qaEXZOU1eeHnuLMA&usqp=CAU" buttonUrl="https://www.britannica.com/summary/duck" buttonLabel="Go it!"/>
          </div>
          <div className="col-3">
          <Card title="Snake" description={descriptionSnake} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVRRksBANLOHOzGZA_vUe4hBb5h2enMDm-Q&usqp=CAU" buttonUrl="https://www.britannica.com/summary/snake" buttonLabel="Go it!"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
