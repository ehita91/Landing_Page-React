import { Card } from "@/components/Card";
import { Jumbotron } from "@/components/Jumbotron";
import { Navbar } from "@/components/Navbar";

let a = "gfwegwrgwrgwrgwrg";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Jumbotron description={a}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Card title="HOLA" description="wuoigbnrwuighwruighrwuighworugi" image="http://speedwelladventures.com/blog/wp-content/uploads/2014/06/iguana-1398623534kn4g8.jpg" buttonUrl="www.google.com" buttonLabel="Go it!"/>
          </div>
          <div className="col-3">
          <Card title="HOLA" description="wuoigbnrwuighwruighrwuighworugi" image="http://speedwelladventures.com/blog/wp-content/uploads/2014/06/iguana-1398623534kn4g8.jpg" buttonUrl="www.google.com" buttonLabel="Go it!"/>
          </div>
          <div className="col-3">
          <Card title="HOLA" description="wuoigbnrwuighwruighrwuighworugi" image="http://speedwelladventures.com/blog/wp-content/uploads/2014/06/iguana-1398623534kn4g8.jpg" buttonUrl="www.google.com" buttonLabel="Go it!"/>
          </div>
          <div className="col-3">
          <Card title="HOLA" description="wuoigbnrwuighwruighrwuighworugi" image="http://speedwelladventures.com/blog/wp-content/uploads/2014/06/iguana-1398623534kn4g8.jpg" buttonUrl="www.google.com" buttonLabel="Go it!"/>
          </div>
        </div>
      </div>
    </>
  );
}
